"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 -z-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-3xl"
        />
        <div className="relative">
          <p className="font-mono text-sm text-primary">06. Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Looking for a full-stack engineer for a web, mobile or AI-powered
            product? My inbox is open.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={cn(buttonVariants({ size: "lg" }), "h-10 px-5")}
            >
              <Mail /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 px-5",
              )}
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 px-5",
              )}
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
