import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

export function SpinBadge({ className }: { className?: string }) {
  return (
    <div className={cn("relative grid size-32 place-items-center md:size-40", className)}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow text-primary">
        <defs>
          <path id="circlePath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="98" className="fill-background" />
        <text className="fill-current font-sans text-[17px] font-extrabold uppercase tracking-[0.32em]">
          <textPath href="#circlePath">Mizej • Coffee • Mood • مزاج •</textPath>
        </text>
      </svg>
      <span className="relative grid size-14 place-items-center rounded-full bg-primary md:size-16">
        <LogoMark className="size-11 md:size-12" />
      </span>
    </div>
  );
}
