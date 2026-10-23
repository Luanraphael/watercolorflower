import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Check, ChevronsDown, Gift, Minus, Plus, ShieldCheck, Star, TriangleAlert } from "lucide-react";

const IMG = "/assets";
const CHECKOUT_URL = "https://pay.hotmart.com/J108169566O?checkoutMode=10";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const MAIN_PRODUCT = "100 Step-by-Step Watercolor Flower Course";

const HERO_BULLETS = ["Lifetime access", "Instant delivery to your email", "30-day money-back guarantee"];

const INCLUDES = [
  "Learn to paint 100 beautiful watercolor flowers from scratch, with clear visual instructions that guide you from your first brushstroke to the finished painting.",
  "Follow a simple, illustrated step-by-step course for roses, peonies, tulips, sunflowers, daisies, hydrangeas, lavender, cherry blossoms and many more.",
  "Discover exactly which colors, brushes and paper to use for each flower, with practical material guides and beginner-friendly color palettes.",
  "Practice essential petals and brushstrokes, including soft washes, color blending, layering, shading and delicate details.",
  "See how each flower takes shape in five visual stages, so you always know what to paint next without guessing or getting overwhelmed.",
  "Learn how to paint without needing to draw first, building floral shapes directly with your brush through simple, approachable techniques.",
  "Create your own floral arrangements and bouquets by combining the flowers, leaves and colors you've learned.",
  "Enjoy an organized painting library you can return to anytime, whether you want to practice a new technique, revisit a favorite flower or paint at your own pace.",
  "Step-by-step watercolor course for 40 Plants, Leaves & Trees",
  "Step-by-step watercolor course for 55 Birds",
  "Step-by-step watercolor course for 25 Fruits & Berries",
];

const TRUST_BADGES = [
  { label: "30-Day Guarantee", icon: null },
  { label: "Instant Access", icon: "icone-acesso.png" },
  { label: "Friendly Support", icon: "icone-suporte.png" },
  { label: "Satisfaction Guaranteed", icon: "icone-satisfacao.png" },
  { label: "100% Secure Checkout", icon: "icone-compra-segura.png" },
];

type ShowcaseItem = { title: string; img: string; w: number; h: number };

// Páginas verticais reais dos tutoriais, mostradas no carrossel "Take a look inside".
const TUTORIAL_PAGES: ShowcaseItem[] = [
  "Pansy",
  "Rose",
  "Peony",
  "Tulip",
  "Sunflower",
  "Hydrangea",
  "Poppy",
  "Daisy",
  "Lavender",
  "Cherry Blossom",
].map((title, i) => ({
  title: `${title} page from the course`,
  img: `tutorial-${String(i + 1).padStart(2, "0")}.png`,
  w: 1055,
  h: 1491,
}));

const REVIEWS: ShowcaseItem[] = [1, 2, 3, 4, 5].map((n) => ({
  title: `Customer review ${n}`,
  img: `review-${String(n).padStart(2, "0")}.png`,
  w: 1122,
  h: 1402,
}));

// The 3-Step Bloom Method: a mesma tulipa evoluindo da primeira pincelada à flor pronta.
const BLOOM_STEPS = [
  {
    title: "First Strokes",
    text: "It all starts with one simple brushstroke that becomes the foundation for your entire flower.",
    img: "bloom-1.webp",
  },
  {
    title: "Build Your Flower",
    text: "In just a few steps, you'll see how to add petals and layers that bring your painting together.",
    img: "bloom-2.webp",
  },
  {
    title: "Bring It to Life",
    text: "Add the final touches that turn your painting into something you'll be proud to show off.",
    img: "bloom-3.webp",
  },
];

const FIRST_BONUS = {
  title: "40 Plants, Leaves & Trees",
  img: "bonus-40-plants.png",
  subtitle: "A step-by-step watercolor course for greenery:",
  text: "Learn to paint leaves, branches, plants, and trees with the same simple step-by-step method. They're the perfect finishing touch for your flowers, and the key to creating full, natural-looking bouquets and arrangements.",
  price: "$27.00",
};

const BONUSES = [
  { title: "55 Birds", img: "bonus-55-birds.png", price: "$27.00" },
  { title: "25 Fruits & Berries", img: "bonus-25-fruits.png", price: "$19.00" },
];

const WHY = [
  "Every flower is broken down into five simple stages, so you always know exactly what comes next.",
  "No drawing skills needed. You build each flower directly with your brush.",
  "Clear color palettes and material guides take the guesswork out of getting started.",
  "Paint at your own pace and come back to any flower whenever you want.",
  "Every finished flower builds your confidence for the next one, so you see real progress fast.",
];

const FOR_WHOM = [
  "Complete beginners who have never picked up a watercolor brush",
  "Anyone who has tried watercolor before and ended up frustrated",
  "People looking for a relaxing creative hobby to unwind",
  "Crafters and journalers who want hand-painted flowers for cards, gifts, and pages",
  "Painters who want an organized floral reference library",
];

const OFFER_ITEMS = [
  MAIN_PRODUCT,
  "Step-by-step watercolor course for 40 Plants, Leaves & Trees",
  "Step-by-step watercolor course for 55 Birds",
  "Step-by-step watercolor course for 25 Fruits & Berries",
  "Material guides and beginner-friendly color palettes",
  "Printable PDF files, ready to use",
  "Lifetime access",
  "Instant delivery to your email",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "How will I get access?",
    a: (
      <>
        As soon as your payment is confirmed, <strong>you&apos;ll receive everything automatically by email</strong>.
        <br />
        There&apos;s nothing else you need to do. Everything is sent <strong>instantly and securely</strong>.
        <br />
        Just make sure you type your email address correctly at checkout.
      </>
    ),
  },
  {
    q: "Is this a physical or digital product?",
    a: (
      <>
        It&apos;s a <strong>100% digital product</strong> in high-quality PDF. You can{" "}
        <strong>print the course or follow along on your tablet, phone, or computer</strong>.
      </>
    ),
  },
  {
    q: "Do I need any experience or drawing skills?",
    a: (
      <>
        Not at all. The course was made for <strong>complete beginners</strong>. Each flower is built directly with
        the brush, step by step, so <strong>you don&apos;t need to know how to draw</strong>.
      </>
    ),
  },
  {
    q: "What supplies do I need?",
    a: (
      <>
        Just the basics: <strong>a watercolor set, a couple of round brushes, and watercolor paper</strong>. Each
        flower in the course shows the exact colors and materials used, so you always know what to grab.
      </>
    ),
  },
  {
    q: "Is there a guarantee?",
    a: (
      <>
        Yes! Your purchase is covered by our <strong>30-day money-back guarantee</strong>.
        <br />
        Take your time to explore everything, and if it&apos;s not what you expected for any reason, you can ask for a
        full refund. No hassle, no questions asked.
      </>
    ),
  },
  {
    q: "What if I have questions?",
    a: (
      <>
        We&apos;re happy to help! Just <strong>reply to the email you receive with your purchase</strong> and our
        support team will get back to you as soon as possible.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Fundo aquarela                                                      */
/* ------------------------------------------------------------------ */

type Wash = "a" | "b" | "c" | "d";
type WashSet = {
  tl?: Wash;
  tr?: Wash;
  bl?: Wash;
  br?: Wash;
  // lavagens no meio das bordas, para seções altas (posição em % da altura)
  sides?: { side: "l" | "r"; at: number; img: "a" | "b" }[];
};

// Cada seção aquarela tem sua própria composição: mesma paleta e textura,
// manchas em posições e combinações diferentes.
const WASHES = {
  hero: { tl: "a", tr: "d", bl: "c", br: "b" },
  inside: {
    tl: "b",
    tr: "c",
    bl: "a",
    br: "d",
    sides: [
      { side: "r", at: 24, img: "a" },
      { side: "l", at: 46, img: "b" },
      { side: "r", at: 68, img: "b" },
      { side: "l", at: 86, img: "a" },
    ],
  },
  why: { tl: "d", tr: "a", bl: "b", br: "c", sides: [{ side: "r", at: 50, img: "a" }] },
  offer: { tl: "c", br: "a" },
  guarantee: { tl: "c", tr: "b", bl: "d", br: "a" },
} satisfies Record<string, WashSet>;

const washUrl = (name: string): CSSProperties => ({ backgroundImage: `url(${IMG}/wc/wash-${name}.webp)` });

function Washes({ set }: { set: WashSet }) {
  return (
    <div aria-hidden className="wc-washes">
      {set.tl && <span className="wc-wash wc-tl" style={washUrl(`corner-${set.tl}`)} />}
      {set.tr && <span className="wc-wash wc-tr" style={washUrl(`corner-${set.tr}`)} />}
      {set.bl && <span className="wc-wash wc-bl" style={washUrl(`corner-${set.bl}`)} />}
      {set.br && <span className="wc-wash wc-br" style={washUrl(`corner-${set.br}`)} />}
      {set.sides?.map((s) => (
        <span
          key={`${s.side}-${s.at}`}
          className={`wc-wash wc-side wc-side-${s.side}`}
          style={{ ...washUrl(`side-${s.img}`), "--wc-y": `${s.at}%` } as CSSProperties}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Peças                                                               */
/* ------------------------------------------------------------------ */

/** Seção aquarela: equivale às seções coloridas da página original. */
function WatercolorSection({
  id,
  washes,
  className = "",
  children,
}: {
  id?: string;
  washes: WashSet;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`wc-paper relative w-full overflow-hidden py-14 text-ink ${className}`}>
      <Washes set={washes} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Seção branca: equivale às seções de fundo branco da página original. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full bg-white py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Grifo em verde esmeralda. */
function Mark({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>;
}

function SoftMark({ children }: { children: ReactNode }) {
  return <span className="text-accent font-bold">{children}</span>;
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span className="pt-0.5 text-base font-medium leading-relaxed text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-16 w-full items-center justify-center rounded-[20px] px-6 py-3 text-center text-base font-black tracking-wide sm:text-lg sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children }: { children: ReactNode }) {
  return (
    <span className="clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] text-white">
      {children}
    </span>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function MainMockup({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={`${IMG}/main-collage.png`}
      alt={MAIN_PRODUCT}
      width={1306}
      height={1204}
      priority={priority}
      className={`mx-auto w-full drop-shadow-[0_12px_20px_rgba(35,75,62,0.18)] ${className}`}
    />
  );
}

/**
 * Vitrine: as imagens passam sozinhas, em loop contínuo, sem cortar nem distorcer.
 * `duration` controla a velocidade (maior = mais lento).
 */
function Showcase({
  items,
  itemClass,
  duration,
  sizes,
  className = "",
}: {
  items: ShowcaseItem[];
  itemClass: string;
  duration: number;
  sizes: string;
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className={`vitrine w-full overflow-hidden py-5 ${className}`}>
      <div className="vitrine-track" style={{ "--vitrine-duration": `${duration}s` } as CSSProperties}>
        {loop.map((p, i) => (
          <div key={`${p.img}-${i}`} className="shrink-0 pr-4" aria-hidden={i >= items.length}>
            <Image
              src={`${IMG}/${p.img}`}
              alt={i < items.length ? p.title : ""}
              width={p.w}
              height={p.h}
              sizes={sizes}
              loading="eager"
              className={`h-auto rounded-[14px] bg-white shadow-[0_10px_26px_rgba(35,75,62,0.16)] ${itemClass}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function WatercolorPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Barra promocional fixa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} clay-topbar flex h-11 w-full items-center justify-center gap-1.5 px-4 text-center text-[15px] font-extrabold tracking-wide text-white`}
        >
          Special price available
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-love-500 underline underline-offset-2">
            TODAY
          </span>
          only!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO */}
        <WatercolorSection washes={WASHES.hero} className="pt-8! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} px-2 text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl`}>
              Learn how to paint <Mark>100 watercolor flowers</Mark> from scratch,{" "}
              <Mark>even if you&apos;ve never painted before</Mark>
            </h1>

            <MainMockup priority className="mt-7" />

            <p className="mt-6 text-lg font-medium leading-relaxed text-muted sm:text-xl">
              Get the <SoftMark>100 Step-by-Step Watercolor Flower Course</SoftMark>, which walks you through every petal,
              color, and brushstroke, from <SoftMark>your very first wash to a finished painting</SoftMark> you&apos;ll
              be proud to frame.
            </p>

            <CheckList items={HERO_BULLETS} className="mt-8 w-full text-left" />

            <CtaButton href="#offer" className="mt-10">
              YES, I WANT TO START PAINTING!
            </CtaButton>

            <SocialProof className="mt-7" />
          </Container>
        </WatercolorSection>

        {/* 2 · Everything you'll receive */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
              Discover <span className="text-accent">Everything</span> You&apos;ll Receive Today
            </h2>

            <div className="mt-8 text-center">
              <p className={`${display} text-2xl font-extrabold leading-tight text-love-500`}>{MAIN_PRODUCT}</p>
              <p className="mt-2 text-lg font-medium text-muted">Learn to paint beautiful flowers from scratch.</p>
            </div>

            {/* O mockup quebra a lista depois do 5º item, para aliviar o bloco de texto */}
            <CheckList items={INCLUDES.slice(0, 5)} className="mt-10" />

            <MainMockup className="my-10" />

            <CheckList items={INCLUDES.slice(5)} />

            <BloomMethod />
          </Container>
        </LightSection>

        {/* 3 · Selos de confiança */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · Vitrine + O que vem + 5 · Data + 6 · Bônus */}
        <WatercolorSection id="inside" washes={WASHES.inside}>
          <Container>
            <SectionTitle>
              Take a look <Mark>inside</Mark>
            </SectionTitle>
          </Container>

          <Showcase
            items={TUTORIAL_PAGES}
            itemClass="w-[240px] sm:w-[300px]"
            sizes="(min-width: 640px) 300px, 240px"
            duration={45}
            className="mt-6"
          />

          <Container className="mt-12">
            <SectionTitle>
              100 Step-by-Step <Mark>Watercolor Flower Course</Mark>
            </SectionTitle>

            {/* Mockup cru, direto sobre o fundo aquarela, sem card por trás */}
            <Image
              src={`${IMG}/main-collage.png`}
              alt={MAIN_PRODUCT}
              width={1306}
              height={1204}
              className="mx-auto mt-8 w-full"
            />
          </Container>

          {/* 5 · Data limite */}
          <Container className="mt-16">
            <div className="clay-theme-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
                ORDER BETWEEN <Mark>OCTOBER 23 AND 25</Mark> AND YOU&apos;LL ALSO GET
              </h2>
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bônus */}
          <Container className="mt-16">
            <SectionTitle>
              <Mark>Exclusive BONUSES</Mark> to make your paintings even more complete
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-muted">
              When you order today, you don&apos;t just get the flower course. You&apos;ll also get{" "}
              <SoftMark>exclusive bonuses</SoftMark> with greenery, birds, and fruits, so you can turn single flowers into
              full, beautiful compositions.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bônus: layout próprio (título → imagem → subtítulo → descrição) */}
              <article className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-ink`}>{FIRST_BONUS.title}</h3>
                <Image src={`${IMG}/${FIRST_BONUS.img}`} alt={FIRST_BONUS.title} width={1306} height={1204} className="w-full" />
                <h4 className={`${display} text-xl font-extrabold text-ink`}>{FIRST_BONUS.subtitle}</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-muted">{FIRST_BONUS.text}</p>
                <BonusPrice price={FIRST_BONUS.price} />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image src={`${IMG}/${b.img}`} alt={b.title} width={1306} height={1204} className="mx-auto w-full" />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-ink`}>{b.title}</h3>
                  <p className="-mt-3 text-base font-medium text-muted">Step-by-step watercolor course</p>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer">I WANT MY COURSE</CtaButton>
            </div>
          </Container>
        </WatercolorSection>

        {/* 7 · Depoimentos */}
        <LightSection>
          <Container>
            <SectionTitle>
              Over <Mark>11,000 people</Mark> have already approved it
            </SectionTitle>
          </Container>

          <Showcase
            items={REVIEWS}
            itemClass="w-[260px] sm:w-[320px]"
            sizes="(min-width: 640px) 320px, 260px"
            duration={35}
            className="mt-6"
          />

        </LightSection>

        {/* 8 · Why + Who it's for */}
        <WatercolorSection washes={WASHES.why}>
          <Container>
            <SectionTitle>
              Why this course will make watercolor <Mark>finally feel easy</Mark>
            </SectionTitle>

            <MainMockup className="mt-10" />

            <div className="clay-theme-card mt-12 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} />
            </div>

            <SectionTitle className="mt-14">Who is this for?</SectionTitle>

            <div className="clay-theme-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} />
            </div>
          </Container>
        </WatercolorSection>

        {/* 9 · Oferta */}
        <LightSection id="offer" className="scroll-mt-20">
          <Container>
            <SectionTitle>HERE&apos;S A SPECIAL OFFER JUST FOR YOU</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="relative mt-14">
              {/* Selo "Best Seller" acima do card */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <span
                  className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] px-5 py-2.5 text-sm font-black tracking-wide text-white`}
                >
                  🌟 Best Seller
                </span>
              </div>

              <div className="wc-paper wc-compact relative overflow-hidden rounded-[48px] border border-[#2f8068]/15 px-5 pb-10 pt-14 shadow-[0_18px_44px_rgba(35,75,62,0.14)] sm:px-10">
                <Washes set={WASHES.offer} />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-ink sm:text-4xl`}>
                    {MAIN_PRODUCT}
                    <br />
                    <Mark>COMPLETE COLLECTION</Mark>
                  </h3>

                  <MainMockup className="mt-8" />

                  <div className="mt-8 w-full text-left">
                    <ul className="flex flex-col gap-3">
                      {OFFER_ITEMS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckOrb size="sm" />
                          <span className="pt-0.5 text-[15px] font-bold leading-snug text-ink">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className={`${display} mt-10 text-xl font-extrabold text-muted line-through decoration-2`}>
                    Regular price $127.00
                  </p>
                  <p className={`${display} mt-1 text-2xl font-black tracking-wide text-ink`}>TODAY ONLY</p>
                  <p className={`${display} mt-1 text-8xl font-black leading-none tracking-tight text-love-500`}>$10</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#2f8068]/15 bg-white px-4 py-2 text-sm font-bold text-ink">
                    <TriangleAlert className="h-4 w-4 text-[#d98a1c]" strokeWidth={2.75} />
                    You can pay in your local currency.
                  </p>
                  <p className="mt-6 text-sm font-bold text-muted">One-time payment</p>

                  <CtaButton href={CHECKOUT_URL} className="mt-6 sm:min-w-[320px]">
                    Get Instant Access
                  </CtaButton>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted">100% secure payment</p>
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 10 · Garantia */}
        <WatercolorSection washes={WASHES.guarantee}>
          <Container>
            <div className="clay-theme-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <span className="clay-orb inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] text-white">
                <ShieldCheck className="h-16 w-16" strokeWidth={2.25} />
              </span>
              <h2 className={`${display} text-3xl font-black tracking-tight text-ink sm:text-4xl`}>30-DAY MONEY-BACK GUARANTEE</h2>
              <p className="text-lg font-medium leading-relaxed text-muted">
                Order with complete peace of mind. After your purchase, you&apos;ll have 30 days to explore the
                whole course, and if it&apos;s not what you expected, just ask for a full refund. No hassle, no questions
                asked.
              </p>
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Get Instant Access
              </CtaButton>
            </div>
          </Container>
        </WatercolorSection>

        {/* 11 · FAQ */}
        <LightSection>
          <Container>
            <div className="text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide text-ink sm:text-3xl`}>
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Get Instant Access
              </CtaButton>
            </div>
          </Container>
        </LightSection>

        {/* 12 · Rodapé */}
        <footer className="bg-white pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Privacy Policy
            </a>
            <span className="text-muted">|</span>
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Terms of Service
            </a>
          </div>
          <p className="mt-4 text-muted">© 2026 All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

/** Prova social do hero: avatares sobrepostos + nota, alunos e países. */
function SocialProof({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((n) => (
          <Image
            key={n}
            src={`${IMG}/avatar-${n}.webp`}
            alt=""
            width={160}
            height={160}
            className="-ml-3 h-12 w-12 rounded-full border-[3px] border-white object-cover shadow-[0_4px_10px_rgba(35,75,62,0.15)] first:ml-0"
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[15px] font-medium text-muted">
        <span className="inline-flex items-center gap-1.5">
          <strong className="font-bold text-ink">4.8</strong>
          <Star className="h-4 w-4 fill-[#f5b301] text-[#f5b301]" strokeWidth={0} aria-label="stars" />
        </span>
        <span>
          <strong className="font-bold text-love-500">11.7k</strong> students
        </span>
        <span>
          <strong className="font-bold text-love-500">+79</strong> countries
        </span>
      </div>
    </div>
  );
}

/** The 3-Step Bloom Method: três cards com a evolução da flor ancorada no rodapé. */
function BloomMethod() {
  return (
    <div className="mt-16">
      <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl`}>
        The 3-Step <Mark>Bloom Method</Mark>
      </h2>
      <p className="mx-auto mt-4 max-w-[520px] text-center text-lg font-medium leading-relaxed text-muted">
        In our course, you&apos;ll see that painting flowers is easier than you think.
      </p>

      {/* No desktop a grade sai da coluna de 680px para os cards respirarem */}
      <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:left-1/2 lg:w-[960px] lg:-translate-x-1/2">

        {BLOOM_STEPS.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-col overflow-hidden rounded-[32px] border border-[#2f8068]/10 bg-[#f3f8f5] px-6 pt-6"
          >
            <div className="flex items-center gap-3">
              <span
                className={`${display} clay-orb inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] text-base font-black text-white`}
              >
                {i + 1}
              </span>
              <h3 className={`${display} text-xl font-extrabold leading-tight text-ink`}>{step.title}</h3>
            </div>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted">{step.text}</p>
            {/* A imagem fica colada no rodapé do card, como na referência */}
            <Image
              src={`${IMG}/${step.img}`}
              alt={`${step.title}: step ${i + 1} of painting a watercolor tulip`}
              width={500}
              height={500}
              className="mx-auto mt-auto w-[78%] max-w-[260px] pt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#2f8068]/15 bg-white text-love-500">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-muted line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-gradient-to-br from-[#3f9a7f] to-[#276b57] px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        FREE
      </span>
    </div>
  );
}
