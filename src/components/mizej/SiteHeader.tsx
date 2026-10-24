import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArabicName, LogoMark } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 md:px-5",
          scrolled
            ? "border-border bg-background/85 shadow-soft backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-full bg-primary transition-transform duration-700 group-hover:rotate-[360deg]">
            <LogoMark className="size-8" />
          </span>
          <ArabicName className="text-3xl text-primary" />
        </Link>
        <nav className="flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-2 text-sm font-semibold text-wine transition-colors hover:bg-accent data-[status=active]:bg-primary data-[status=active]:text-primary-foreground md:px-4"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
