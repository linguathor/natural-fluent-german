import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "neutral" | "dark" | "accent";
}

export default function SectionShell({
  children,
  className,
  id,
  bg = "white",
}: SectionShellProps) {
  const bgClass = {
    white: "bg-white",
    neutral: "bg-stone-50",
    dark: "bg-stone-900 text-white",
    accent: "bg-emerald-50/60",
  }[bg];

  return (
    <section id={id} className={cn(bgClass, "py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}
