import { projects } from "@/content/projects";
import ScrollReveal from "./ScrollReveal";

export default function WorkGrid() {
  return (
    <section className="px-14 pt-32 pb-24 bg-warm-gray max-lg:px-8 max-md:px-5" id="products">
      {/* Section intro */}
      <ScrollReveal>
        <div className="flex justify-between items-end mb-14">
          <h2 className="font-sans text-[2.75rem] font-extrabold tracking-[-0.035em] text-ink leading-[1.05]">
            What we&apos;re<br />building
          </h2>
          <div className="font-mono text-[0.65rem] text-text-tertiary text-right leading-[1.7]">
            2 products<br />Building now
          </div>
        </div>
      </ScrollReveal>

      {/* Two equal cards */}
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={(i + 1) as 0 | 1 | 2 | 3}>
            <div className="rounded-2xl overflow-hidden hover:scale-[0.985] transition-transform duration-400">
              <div className="p-8 flex flex-col justify-end min-h-[258px] bg-white border border-border">
                <span className="font-mono text-[0.55rem] font-medium px-3 py-1 rounded-pill inline-block w-fit mb-3 bg-[rgba(0,0,0,0.04)] text-text-tertiary">
                  {project.statusLabel}
                </span>
                <h3 className="font-sans text-[1.5rem] font-bold text-ink mb-1">
                  {project.name}
                </h3>
                <p className="text-[0.9rem] leading-[1.55] text-text-secondary max-w-[280px]">
                  {project.tagline}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
