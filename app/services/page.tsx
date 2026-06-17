import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CalPopupButton from "@/components/CalPopupButton";
import { servicesPage, servicesPageCategories } from "@/content/services";

export const metadata: Metadata = {
  title: servicesPage.metadata.title,
  description: servicesPage.metadata.description,
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Unbound Studios",
    url: "https://unboundapps.com/services",
    description: servicesPage.metadata.description,
    provider: { "@type": "Organization", name: "Unbound Studios" },
    serviceType: [
      "AI Systems & Automation",
      "App Development",
      "Strategy & Positioning",
      "Growth & Distribution",
    ],
    areaServed: "US",
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 px-14 max-lg:px-8 max-md:px-5">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <ScrollReveal>
            <p className="font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase mb-6">
              {servicesPage.label}
            </p>
            <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-ink mb-8 leading-[1.08]">
              {servicesPage.heading}
            </h1>
            <p className="text-text-secondary leading-[1.7] mb-16 max-w-[520px]">
              {servicesPage.intro}
            </p>
          </ScrollReveal>

          {/* Service categories */}
          <div className="flex flex-col gap-4 mb-16">
            {servicesPageCategories.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <details
                  open={i === 0}
                  className="group rounded-2xl bg-white border border-border open:border-green hover:border-green transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-start justify-between gap-6 p-8 cursor-pointer list-none">
                    <div>
                      <h3 className="font-sans text-[1.15rem] font-bold text-ink mb-1.5">
                        {svc.title}
                      </h3>
                      <p className="text-[0.92rem] text-text-secondary leading-[1.6]">
                        {svc.desc}
                      </p>
                    </div>
                    <svg
                      className="shrink-0 mt-1 text-text-tertiary transition-transform duration-300 group-open:rotate-180"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-8 pb-8 -mt-1">
                    <ul className="space-y-1.5 mb-4">
                      {svc.offerings.map((item) => (
                        <li
                          key={item}
                          className="text-[0.85rem] text-text-secondary leading-[1.5] flex gap-2.5 items-start"
                        >
                          <span className="w-1 h-1 rounded-full bg-green mt-[0.45rem] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <CalPopupButton className="font-mono text-[0.6rem] font-medium text-green hover:text-green-dim transition-colors duration-200 inline-block">
                      Book a call &rarr;
                    </CalPopupButton>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={3}>
            <div className="text-center">
              <h2 className="font-sans text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold tracking-[-0.035em] text-ink mb-6">
                {servicesPage.cta.heading}
              </h2>
              <CalPopupButton className="inline-flex items-center gap-2 bg-green text-white font-mono text-[0.7rem] font-medium tracking-[0.02em] px-7 py-3.5 rounded-pill hover:bg-green-dim transition-colors duration-200">
                Book a discovery call
              </CalPopupButton>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
