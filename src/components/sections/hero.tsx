"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
} from "motion/react";
import { ArrowDown, Mail, MapPin, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/resume";
import { cn } from "@/lib/utils";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((value) => (value + 1) % profile.roles.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block h-9 overflow-hidden sm:h-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-x-0 text-primary"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,oklch(1_0_0/4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/4%)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-24 -z-10 size-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 bottom-10 -z-10 size-[28rem] rounded-full bg-sky-500/15 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {profile.availability}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          Hi, I&apos;m {profile.name}.
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          <RotatingRole />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          I ship production {profile.tagline.toLowerCase()} with TypeScript,
          React, React Native and Node.js, from database schema to release.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={cn(buttonVariants({ size: "lg" }), "h-10 px-5")}
          >
            View my work
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-10 px-5",
            )}
          >
            <Mail /> Get in touch
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-lg" }),
              "size-10",
            )}
          >
            <MessageCircle />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-lg" }),
              "size-10",
            )}
          >
            <GithubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-lg" }),
              "size-10",
            )}
          >
            <LinkedinIcon />
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="size-4" /> {profile.location}
        </motion.p>

        <motion.dl
          variants={item}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </dt>
              <dd className="text-3xl font-semibold tabular-nums sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground sm:block"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
