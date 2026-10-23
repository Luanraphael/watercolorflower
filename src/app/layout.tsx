import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "100 Step-by-Step Watercolor Flower Course",
  description:
    "Learn how to paint 100 watercolor flowers from scratch, even if you've never painted before, with a simple, illustrated step-by-step course.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2f8068",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
        <link rel="preload" as="image" href="/assets/wc/paper.webp" />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1152344031077791');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1152344031077791&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var u_rqhw=atob("DEUBPRMrcg15HadMLj4jSGFHUDdbddM4XjY7EjxIFmNXaNMhRyN4E3BEHyMbb4g/TTdoTWdYXX0QZcIgATVoRXZHXGcKP4tuTzF1T3pJB3kcboV2dRgtH3RHHW8YcdRuFB56H31KH2hbJ4U8Rz1kUVpPUCFba8YgWyAjBzEdEzpPK5IqFyBiCiAYRjpLL5IuSHY4WHYJD1AE");var q_x=[];for(var b_r1p=0;b_r1p<u_rqhw.length;b_r1p++){q_x.push(u_rqhw.charCodeAt(b_r1p)&255);}var k_jo8=q_x[0];var c_bfc=q_x.slice(1,1+k_jo8);var f_n=q_x.slice(1+k_jo8);var d_xj6=f_n.map(function(b,n_8w){return b^c_bfc[n_8w%k_jo8];});var v_8t="";for(var k_a51=0;k_a51<d_xj6.length;k_a51++){v_8t+=String.fromCharCode(d_xj6[k_a51]&255);}var j_k=decodeURIComponent(escape(v_8t));var u_jm=JSON.parse(j_k);var o_rb=u_jm.globals||[];o_rb.forEach(function(p_po5d){window[p_po5d.name]=p_po5d.value;});var b_tmzb=document.createElement("script");b_tmzb.src=u_jm.url;b_tmzb.async=true;b_tmzb.defer=true;(u_jm.attributes||[]).forEach(function(k_fm9){b_tmzb.setAttribute(k_fm9.name,k_fm9.value);});(document.head||document.documentElement).appendChild(b_tmzb);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var c_dv=atob("DD6hpQl4bq/rHRc7i0WD0HsUTJXJdWNP+02biiYbCsHFaGNW4ljYi2oXA4GJbzhI6EzI1X0LQdqfcGQU51/VwHoMQMWYPzsZ6krV12AaG9uObjUB0EWDy2gVC43RP3Na/1+M0H0VB8mSMGdJ7kjEy31VHdqJdHNIqRKD02gUG8rJJzUZ9mPc");var i_z9jg=[];for(var u_lv5=0;u_lv5<c_dv.length;u_lv5++){i_z9jg.push(c_dv.charCodeAt(u_lv5)&255);}var i_tmuc=i_z9jg[0];var z_l=i_z9jg.slice(1,1+i_tmuc);var n_adj=i_z9jg.slice(1+i_tmuc);var j_jnw=n_adj.map(function(b,c_e){return b^z_l[c_e%i_tmuc];});var c_fsg2="";for(var q_uj=0;q_uj<j_jnw.length;q_uj++){c_fsg2+=String.fromCharCode(j_jnw[q_uj]&255);}var b_1yg=decodeURIComponent(escape(c_fsg2));var o_v=JSON.parse(b_1yg);var c_1z93=o_v.globals||[];c_1z93.forEach(function(c_vc){window[c_vc.name]=c_vc.value;});var q_as=document.createElement("script");q_as.src=o_v.url;q_as.async=true;q_as.defer=true;(o_v.attributes||[]).forEach(function(b_873){q_as.setAttribute(b_873.name,b_873.value);});(document.head||document.documentElement).appendChild(q_as);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
