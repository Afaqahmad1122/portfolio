import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01. About" title="Who I am" />
      <div className="max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground">
        {profile.summary.map((paragraph, i) => (
          <Reveal key={paragraph} delay={i * 0.1}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
