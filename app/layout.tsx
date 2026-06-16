import type { Metadata } from "next";
import { Figtree, Martian_Mono } from "next/font/google";
import PostHogProviders from "./providers";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unbound Studios. We build our own products.",
  description:
    "A two-person studio building its own products and brands. We also take a few clients. Apps, AI, strategy, and growth. Based in Kansas.",
  metadataBase: new URL("https://unboundapps.com"),
  alternates: { canonical: "https://unboundapps.com" },
  openGraph: {
    title: "Unbound Studios",
    description:
      "A two-person studio building its own products and brands. We also take a few clients. Apps, AI, strategy, and growth. Based in Kansas.",
    siteName: "Unbound Studios",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${martianMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <PostHogProviders>{children}</PostHogProviders>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unbound Studios",
              url: "https://unboundapps.com",
              description:
                "Two-person studio that builds, brands, and ships. Our own products, and yours. Apps, AI, strategy, and growth. Based in Kansas.",
              founders: [
                { "@type": "Person", name: "Casey Ring" },
                { "@type": "Person", name: "Nick Jackson" },
              ],
              email: "hello@unboundapps.com",
              sameAs: [
                "https://www.instagram.com/unboundbros/",
                "https://www.tiktok.com/@unboundbros",
                "https://x.com/unboundbros",
                "https://www.youtube.com/@theunboundbros",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "KS",
                addressCountry: "US",
              },
              knowsAbout: [
                "mobile apps",
                "web applications",
                "AI systems",
                "automations",
                "product strategy",
                "brand positioning",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
