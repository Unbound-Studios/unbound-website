import ScrollReveal from "./ScrollReveal";
import CalPopupButton from "./CalPopupButton";
import { servicesHeading, services } from "@/content/services";

export default function Services() {
  return (
    <section className="px-14 pt-16 pb-32 bg-warm-gray max-lg:px-8 max-md:px-5">
      <div className="grid grid-cols-[1fr_1.5fr] gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
        {/* Left: sticky heading */}
        <ScrollReveal>
          <div className="sticky top-32 max-lg:static">
            <h2 className="font-sans text-[2.5rem] font-extrabold tracking-[-0.035em] text-ink leading-[1.08] mb-5">
              {servicesHeading.title}{servicesHeading.titleBreak && <br />}{servicesHeading.titlePrefix}<span className="text-blue">{servicesHeading.titleAccent}</span>
            </h2>
            <p className="text-[1.05rem] text-text-secondary leading-[1.7] max-w-[340px]">
              {servicesHeading.body}
            </p>
            <CalPopupButton className="font-mono text-[0.6rem] font-medium text-green hover:text-green-dim transition-colors duration-200 mt-4 inline-block">
              Book a discovery call &rarr;
            </CalPopupButton>
          </div>
        </ScrollReveal>

        {/* Right: service cards */}
        <div className="flex flex-col gap-4">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.num} delay={i as 0 | 1 | 2 | 3}>
              <div className="p-8 rounded-[18px] bg-white border border-border grid grid-cols-[auto_1fr] gap-6 items-start hover:border-green hover:shadow-[0_4px_20px_rgba(59,156,111,0.06)] hover:translate-x-1 transition-all duration-[350ms]">
                <div className="font-mono text-[0.6rem] font-medium text-green bg-green-light w-9 h-9 flex items-center justify-center rounded-[10px]">
                  {svc.num}
                </div>
                <div>
                  <h3 className="font-sans text-[1.15rem] font-bold text-ink mb-1.5">
                    {svc.title}
                  </h3>
                  <p className="text-[0.92rem] text-text-secondary leading-[1.6]">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
