import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

export function Marquee({
  words,
  reverse = false,
  className,
  tone = "red",
}: {
  words: string[];
  reverse?: boolean;
  className?: string;
  tone?: "red" | "cream";
}) {
  const row = [...words, ...words];
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-4",
        tone === "red"
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-cream text-wine",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-8 whitespace-nowrap",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl italic md:text-4xl">{w}</span>
            <LogoMark tone={tone === "red" ? "cream" : "red"} className="size-6 md:size-8" />
          </span>
        ))}
      </div>
    </div>
  );
}
