"""Gera texturas de aquarela para os fundos da página Watercolor Flowers.

- paper.webp: tile sem emenda de papel cold-pressed (marfim).
- wash-*.webp: lavagens de pigmento em RGB sobre branco, para usar com
  mix-blend-mode: multiply (o branco some, o pigmento tinge o papel).
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

OUT = Path(sys.argv[1])
OUT.mkdir(parents=True, exist_ok=True)

IVORY = np.array([0xFA, 0xF8, 0xF5]) / 255
EMERALD = np.array([0x2F, 0x80, 0x68]) / 255
EMERALD_SOFT = np.array([0xB8, 0xDD, 0xCF]) / 255
SAGE = np.array([0xDF, 0xE9, 0xDD]) / 255
BLUSH = np.array([0xF4, 0xDC, 0xE3]) / 255
LAVENDER = np.array([0xE8, 0xE0, 0xF2]) / 255
SAGE_DEEP = np.array([0x9C, 0xB8, 0x9A]) / 255


def resize_f(a, w, h):
    return np.asarray(Image.fromarray(a.astype(np.float32), "F").resize((w, h), Image.BICUBIC))


def blur(a, factor):
    """Desfoque suave por redução/ampliação (rápido e sem bandas)."""
    h, w = a.shape
    sw, sh = max(2, int(w / factor)), max(2, int(h / factor))
    return resize_f(resize_f(a, sw, sh), w, h)


def fbm(rng, w, h, base=3, octaves=6, persistence=0.55, wrap=False):
    total = np.zeros((h, w), np.float32)
    amp, norm = 1.0, 0.0
    for o in range(octaves):
        g = base * 2**o
        grid = rng.random((g, g)).astype(np.float32)
        if wrap:
            # tile 3x3 e recorta o centro: ruído sem emenda
            big = np.tile(grid, (3, 3))
            up = resize_f(big, w * 3, h * 3)[h : 2 * h, w : 2 * w]
        else:
            up = resize_f(grid, w, h)
        total += amp * up
        norm += amp
        amp *= persistence
    total /= norm
    return (total - total.min()) / (total.max() - total.min() + 1e-6)


def smoothstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)


# ------------------------------------------------------------------ papel


def make_paper(seed=7, size=640):
    rng = np.random.default_rng(seed)
    # relevo do cold-pressed: bolhas médias + grão fino
    bumps = fbm(rng, size, size, base=24, octaves=4, persistence=0.5, wrap=True)
    grain = fbm(rng, size, size, base=96, octaves=2, persistence=0.6, wrap=True)
    height = 0.7 * bumps + 0.3 * grain
    # luz rasante vinda do topo-esquerda (relevo, não ruído chapado)
    gy, gx = np.gradient(height)
    shade = -(gx + gy) * 6
    shade = (shade - shade.mean()) / (shade.std() + 1e-6)
    lum = 1.0 + 0.012 * shade + 0.006 * (grain - 0.5)
    rgb = np.clip(IVORY[None, None, :] * lum[..., None], 0, 1)
    Image.fromarray((rgb * 255).round().astype(np.uint8)).save(OUT / "paper.webp", quality=88, method=6)


# ------------------------------------------------------------------ lavagens


def wash_layer(rng, w, h, anchor, reach, roughness=0.42, threshold=0.5, warp=0.18):
    """Uma pincelada de aquarela: forma orgânica ancorada num ponto da borda.

    Devolve a densidade de pigmento (0..1) com bordas mais carregadas,
    variação interna e granulação.
    """
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    # deformação do domínio em duas escalas: contorno orgânico, nada de círculo
    big = max(w, h)
    wx = (fbm(rng, w, h, base=2, octaves=3, persistence=0.5) - 0.5) * warp * big
    wy = (fbm(rng, w, h, base=2, octaves=3, persistence=0.5) - 0.5) * warp * big
    wx += (fbm(rng, w, h, base=7, octaves=3, persistence=0.45) - 0.5) * 0.035 * big
    wy += (fbm(rng, w, h, base=7, octaves=3, persistence=0.45) - 0.5) * 0.035 * big
    ax, ay = anchor
    rx, ry = reach
    d = np.sqrt(((xx + wx - ax) / rx) ** 2 + ((yy + wy - ay) / ry) ** 2)
    # contorno: ondulação ampla + um pouco de detalhe fino (papel "puxando" a tinta)
    edge_noise = 0.8 * fbm(rng, w, h, base=4, octaves=3, persistence=0.5) + 0.2 * fbm(
        rng, w, h, base=40, octaves=2, persistence=0.5
    )
    field = (1.0 - d) + roughness * (edge_noise - 0.5)
    t = threshold - 0.5

    # dureza da borda varia ao longo do contorno: trechos secos e definidos,
    # trechos molhados que se dissolvem no papel
    softness = smoothstep(0.35, 0.75, fbm(rng, w, h, base=3, octaves=2))
    width = 0.012 + 0.16 * softness
    mask = smoothstep(t, t + width, field)

    # tinta acumula na borda ao secar: linha fina e mais escura, só nas bordas secas
    hard = smoothstep(t, t + 0.012, field)
    rim = np.clip(hard - blur(hard, 5), 0, 1)
    rim = rim / (rim.max() + 1e-6) * (1 - softness)

    # pigmento mais concentrado na âncora, diluindo para dentro da página
    falloff = np.clip(1.1 - 0.7 * d, 0.35, 1.0)
    # florações de "molhado no molhado": variação ampla de concentração
    flow = fbm(rng, w, h, base=3, octaves=4, persistence=0.55)
    body = mask * falloff * (0.35 + 0.65 * flow)
    density = body + 0.45 * rim
    return np.clip(density, 0, 1)


def glaze(canvas, density, color, strength):
    """Aplica pigmento como um verniz transparente (multiplicativo, como tinta real)."""
    a = np.clip(density * strength, 0, 1)[..., None]
    return canvas * (1 - a * (1 - color[None, None, :]))


def paper_height(w, h):
    """Relevo do mesmo papel: o pigmento assenta nos vales (granulação)."""
    rng = np.random.default_rng(7)
    bumps = fbm(rng, 640, 640, base=24, octaves=4, persistence=0.5, wrap=True)
    reps = (h // 640 + 1, w // 640 + 1)
    return np.tile(bumps, reps)[:h, :w]


def make_wash(name, seed, w, h, layers):
    rng = np.random.default_rng(seed)
    canvas = np.ones((h, w, 3), np.float32)
    granulation = 1.18 - 0.36 * paper_height(w, h)
    for spec in layers:
        d = wash_layer(rng, w, h, **spec["shape"])
        d = d * granulation
        canvas = glaze(canvas, d, spec["color"], min(1.0, spec["strength"] * PIGMENT_BOOST))
    img = Image.fromarray((np.clip(canvas, 0, 1) * 255).round().astype(np.uint8))
    img.save(OUT / f"{name}.webp", quality=84, method=6)
    return img


W = H = 1200
# Calibrado vendo o resultado no celular: suave, mas presente.
PIGMENT_BOOST = 1.75

# Lavagens de canto: todas ancoradas no canto superior-esquerdo; o CSS espelha
# para os outros cantos. Cada uma tem forma e mistura de cores diferentes.
CORNERS = {
    "wash-corner-a": (11, [
        {"shape": dict(anchor=(-60, -40), reach=(820, 640)), "color": EMERALD_SOFT, "strength": 0.55},
        {"shape": dict(anchor=(-30, -80), reach=(560, 470), threshold=0.52), "color": SAGE_DEEP, "strength": 0.22},
        {"shape": dict(anchor=(-90, 120), reach=(380, 520), threshold=0.55), "color": EMERALD, "strength": 0.13},
        {"shape": dict(anchor=(430, -120), reach=(420, 300), threshold=0.55), "color": BLUSH, "strength": 0.6},
    ]),
    "wash-corner-b": (23, [
        {"shape": dict(anchor=(-80, -60), reach=(700, 760)), "color": SAGE, "strength": 0.85},
        {"shape": dict(anchor=(-40, -40), reach=(600, 520), threshold=0.5), "color": EMERALD_SOFT, "strength": 0.5},
        {"shape": dict(anchor=(-100, 380), reach=(330, 420), threshold=0.55), "color": LAVENDER, "strength": 0.75},
        {"shape": dict(anchor=(-60, -60), reach=(300, 260), threshold=0.53), "color": EMERALD, "strength": 0.12},
    ]),
    "wash-corner-c": (37, [
        {"shape": dict(anchor=(-40, -90), reach=(900, 520)), "color": EMERALD_SOFT, "strength": 0.5},
        {"shape": dict(anchor=(200, -100), reach=(620, 360), threshold=0.53), "color": SAGE_DEEP, "strength": 0.2},
        {"shape": dict(anchor=(-120, 200), reach=(360, 460), threshold=0.55), "color": BLUSH, "strength": 0.55},
        {"shape": dict(anchor=(-80, -80), reach=(420, 300), threshold=0.54), "color": EMERALD, "strength": 0.11},
    ]),
    "wash-corner-d": (53, [
        {"shape": dict(anchor=(-70, -70), reach=(620, 840)), "color": EMERALD_SOFT, "strength": 0.48},
        {"shape": dict(anchor=(-40, 120), reach=(440, 640), threshold=0.52), "color": SAGE, "strength": 0.8},
        {"shape": dict(anchor=(380, -110), reach=(360, 280), threshold=0.55), "color": LAVENDER, "strength": 0.7},
        {"shape": dict(anchor=(-60, -40), reach=(260, 380), threshold=0.54), "color": SAGE_DEEP, "strength": 0.2},
    ]),
}

# Lavagens laterais (para seções altas): ancoradas na borda esquerda, no meio.
SIDES = {
    "wash-side-a": (71, [
        {"shape": dict(anchor=(-120, 600), reach=(420, 620)), "color": EMERALD_SOFT, "strength": 0.42},
        {"shape": dict(anchor=(-90, 520), reach=(260, 380), threshold=0.53), "color": SAGE_DEEP, "strength": 0.16},
        {"shape": dict(anchor=(-110, 860), reach=(240, 260), threshold=0.55), "color": BLUSH, "strength": 0.5},
    ]),
    "wash-side-b": (89, [
        {"shape": dict(anchor=(-120, 600), reach=(380, 680)), "color": SAGE, "strength": 0.85},
        {"shape": dict(anchor=(-90, 650), reach=(300, 420), threshold=0.52), "color": EMERALD_SOFT, "strength": 0.4},
        {"shape": dict(anchor=(-110, 330), reach=(230, 250), threshold=0.55), "color": LAVENDER, "strength": 0.6},
    ]),
}

if __name__ == "__main__":
    make_paper()
    for name, (seed, layers) in {**CORNERS, **SIDES}.items():
        make_wash(name, seed, W, H, layers)
        print("ok", name)
