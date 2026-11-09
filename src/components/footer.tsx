import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js,
      Tailwind CSS, shadcn/ui and Motion.
    </footer>
  );
}
