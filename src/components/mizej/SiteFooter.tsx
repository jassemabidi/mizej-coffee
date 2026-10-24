import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Clock } from "lucide-react";
import { SHOP } from "@/lib/mizej";
import { ArabicName, LogoMark } from "./Logo";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .53.04.78.12V9.68a5.73 5.73 0 0 0-.78-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.68-5.69V9.01a7.35 7.35 0 0 0 4.29 1.37V7.29a4.28 4.28 0 0 1-3.23-1.47Z" />
    </svg>
  );
}

export { TikTokIcon };

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-gradient-red text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-14" />
            <ArabicName className="text-6xl" />
          </div>
          <p className="mt-4 max-w-xs text-primary-foreground/80">
            Your daily mood, poured in red and white. Coffee, frappés and good company in El
            Mourouj.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" /> {SHOP.address}
          </p>
          <p className="flex items-start gap-2">
            <Clock className="mt-0.5 size-4 shrink-0" /> Every day · 07:00 – 23:00
          </p>
          <div className="flex gap-4 pt-2">
            <Link to="/menu" className="underline-offset-4 hover:underline">
              Menu
            </Link>
            <Link to="/visit" className="underline-offset-4 hover:underline">
              Visit us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={SHOP.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            <Instagram className="size-4" /> {SHOP.instagramHandle}
          </a>
          <a
            href={SHOP.tiktok}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            <TikTokIcon className="size-4" /> {SHOP.tiktokHandle}
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Mizej Coffee Shop · مزاج · El Mourouj
      </div>
    </footer>
  );
}
