"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-tight"
      >
        Portfolio
      </motion.h1>
      <Button>Coming soon</Button>
    </main>
  );
}
