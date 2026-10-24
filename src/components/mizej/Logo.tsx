import logo from "@/assets/mizej-logo.png";
import { cn } from "@/lib/utils";

/** The Mizej round logo. `tone` recolors it via CSS mask. */
export function LogoMark({
  className,
  tone = "cream",
}: {
  className?: string;
  tone?: "cream" | "red" | "wine";
}) {
  const bg = tone === "red" ? "bg-primary" : tone === "wine" ? "bg-wine" : "bg-cream";
  return (
    <span
      role="img"
      aria-label="Mizej logo"
      className={cn("logo-mask inline-block aspect-square", bg, className)}
      style={{ maskImage: `url(${logo})`, WebkitMaskImage: `url(${logo})` }}
    />
  );
}

export function ArabicName({ className }: { className?: string }) {
  return (
    <span lang="ar" dir="rtl" className={cn("font-arabic", className)}>
      مزاج
    </span>
  );
}
