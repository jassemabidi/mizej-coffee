import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Coffee, Croissant, Flame, Snowflake } from "lucide-react";
import { ArabicName, LogoMark } from "@/components/mizej/Logo";
import { Reveal } from "@/components/mizej/Reveal";
import { MENU, formatPrice, type Swatch, type Temp } from "@/lib/mizej";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Prices · Mizej Coffee Shop مزاج" },
      {
        name: "description",
        content:
          "The full Mizej menu with prices in DT: hot coffee, ice coffee, frappuccino, mojito, smoothies, juices, iced tea and croissants.",
      },
      { property: "og:title", content: "Mizej Menu & Prices" },
      {
        property: "og:description",
        content: "Espresso from 3.8 DT, frappuccinos, mojitos, smoothies and more at Mizej.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const FILTERS: { id: "all" | Temp; label: string; icon: typeof Coffee }[] = [
  { id: "all", label: "Everything", icon: Coffee },
  { id: "hot", label: "Hot", icon: Flame },
  { id: "cold", label: "Cold", icon: Snowflake },
  { id: "food", label: "Bites", icon: Croissant },
];

const SWATCH: Record<Swatch, string> = {
  red: "bg-swatch-red",
  blue: "bg-swatch-blue",
  black: "bg-swatch-black",
  yellow: "bg-swatch-yellow",
  clear: "bg-swatch-clear",
};

function MenuPage() {
  const [filter, setFilter] = useState<"all" | Temp>("all");
  const categories = MENU.filter((c) => filter === "all" || c.temp === filter);

  return (
    <>
      <section className="grain relative overflow-hidden bg-gradient-red pb-20 pt-36 text-primary-foreground md:pb-28 md:pt-44">
        <LogoMark className="absolute -right-24 top-16 size-[26rem] animate-spin-slow opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="animate-rise text-sm font-bold uppercase tracking-[0.35em] text-primary-foreground/70">
            Prices in Tunisian dinar
          </p>
          <h1 className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
            <span className="animate-rise font-display text-7xl font-semibold italic [animation-delay:120ms] md:text-9xl">
              The Menu
            </span>
            <span
              lang="ar"
              dir="rtl"
              className="animate-rise font-arabic text-7xl text-primary-foreground/80 [animation-delay:240ms] md:text-8xl"
            >
              القائمة
            </span>
          </h1>
        </div>
      </section>

      {/* Sticky controls */}
      <div className="sticky top-20 z-40 border-b bg-background/90 backdrop-blur-md md:top-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-all",
                  filter === f.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-wine hover:border-primary",
                )}
              >
                <f.icon className="size-4" /> {f.label}
              </button>
            ))}
          </div>
          <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-1 text-sm font-semibold text-muted-foreground [scrollbar-width:none]">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 transition-colors hover:text-primary"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="grain py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-20 px-6 md:grid-cols-2">
          {categories.map((cat, ci) => (
            <Reveal key={cat.id} delay={(ci % 2) * 120}>
              <div id={cat.id} className="scroll-mt-48">
                <div className="flex items-end justify-between gap-4 border-b-4 border-primary pb-3">
                  <div>
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                      {cat.temp === "hot" ? (
                        <Flame className="size-3.5" />
                      ) : cat.temp === "cold" ? (
                        <Snowflake className="size-3.5" />
                      ) : (
                        <Croissant className="size-3.5" />
                      )}
                      {cat.items.length} {cat.temp === "food" ? "bites" : "drinks"}
                    </p>
                    <h2 className="mt-1 font-display text-4xl font-semibold text-wine md:text-5xl">
                      {cat.title}
                    </h2>
                  </div>
                  <span lang="ar" dir="rtl" className="font-arabic text-3xl text-primary md:text-4xl">
                    {cat.arabic}
                  </span>
                </div>
                <ul className="mt-4">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="group flex items-baseline gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {item.swatch && (
                        <span
                          className={cn(
                            "size-3 shrink-0 translate-y-[-1px] rounded-full ring-2 ring-card",
                            SWATCH[item.swatch],
                          )}
                          aria-hidden
                        />
                      )}
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="flex-1 translate-y-[-4px] border-b-2 border-dotted border-primary/30 group-hover:border-primary-foreground/50" />
                      <span className="font-display text-xl font-semibold text-primary group-hover:text-primary-foreground">
                        {formatPrice(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-6xl px-6">
          <div className="flex flex-col items-center gap-3 rounded-[2rem] bg-cream px-6 py-10 text-center">
            <ArabicName className="text-6xl text-primary" />
            <p className="max-w-md text-muted-foreground">
              Prices may change. Ask your barista about today's specials and extras.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
