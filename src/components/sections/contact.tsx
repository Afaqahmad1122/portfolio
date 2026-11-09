"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Mail } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

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
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "h-10 px-5")}
            >
              <Mail /> {profile.email}
            </a>
            <Button
              variant="outline"
              size="lg"
              className="h-10 px-5"
              onClick={copyEmail}
            >
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy email"}
            </Button>
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
