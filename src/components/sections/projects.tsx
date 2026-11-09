"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Globe, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="04. Projects"
        title="Selected work"
        subtitle="Production apps and AI-powered products I've built or contributed to."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -6 }}
            className={cn(
              i === projects.length - 1 && i % 2 === 0 && "md:col-span-2",
            )}
          >
            <Card className="group h-full transition-shadow hover:ring-primary/50 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/40">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.kind}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on ${link.label}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {link.kind === "ios" ? (
                          <Smartphone className="size-3.5" />
                        ) : (
                          <Globe className="size-3.5" />
                        )}
                        {link.label}
                        <ArrowUpRight className="size-3" />
                      </a>
                    ))}
                  </div>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
