import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="05. Education" title="Background" />
      <Reveal className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
        <GraduationCap className="mt-1 size-6 text-primary" />
        <div>
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <p className="text-muted-foreground">
            {education.school} · {education.location}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {education.period}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
