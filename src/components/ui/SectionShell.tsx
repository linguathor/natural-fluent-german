import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "neutral" | "dark";
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
  }[bg];

  return (
    <section id={id} className={cn(bgClass, "py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}
