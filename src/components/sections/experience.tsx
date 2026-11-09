"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/resume";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="03. Experience"
        title="Where I've worked"
        subtitle="Four years across product teams in the US and Pakistan."
      />
      <ol ref={ref} className="relative ml-3 space-y-12 border-l border-border pl-8">
        <motion.span
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute -left-px top-0 h-full w-px origin-top bg-primary"
        />
        {experience.map((job) => (
          <motion.li
            key={`${job.company}-${job.period}`}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <span className="absolute -left-[2.55rem] top-1.5 flex size-4 items-center justify-center rounded-full border border-primary bg-background">
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            <p className="font-mono text-xs text-muted-foreground">
              {job.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              {job.role} <span className="text-primary">@ {job.company}</span>
            </h3>
            <p className="text-sm text-muted-foreground">{job.location}</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
