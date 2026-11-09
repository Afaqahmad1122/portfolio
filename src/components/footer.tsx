"use client";

import { motion } from "motion/react";
import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { navLinks, profile } from "@/data/resume";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "WhatsApp", href: profile.whatsapp, icon: MessageCircle },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: profile.github, icon: GithubIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#top" className="font-mono text-lg font-semibold">
              <span className="text-primary">&lt;</span>
              {profile.name}
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              {profile.title} building {profile.tagline.toLowerCase()} with
              TypeScript, React, React Native and Node.js.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> {profile.location}
            </p>
          </motion.div>

          <motion.nav
            aria-label="Footer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-mono text-sm text-primary">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-sm text-primary">Connect</h3>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </motion.a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
          </motion.div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-border py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <motion.a
            href="#top"
            whileHover="hover"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Back to top
            <motion.span
              variants={{ hover: { y: -3 } }}
              className="flex size-7 items-center justify-center rounded-full border border-border"
            >
              <ArrowUp className="size-3.5" />
            </motion.span>
          </motion.a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center text-[18vw] font-bold leading-none tracking-tighter text-foreground/[0.03] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      >
        {profile.name.toUpperCase()}
      </p>
    </footer>
  );
}
