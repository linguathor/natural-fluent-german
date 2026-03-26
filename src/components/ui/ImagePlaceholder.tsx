import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
}

const ratioClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export default function ImagePlaceholder({
  label,
  className,
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl bg-stone-100 border-2 border-dashed border-stone-300 flex items-center justify-center",
        ratioClasses[aspectRatio],
        className
      )}
    >
      <p className="text-stone-400 text-sm font-medium text-center px-4">
        {label}
      </p>
    </div>
  );
}
