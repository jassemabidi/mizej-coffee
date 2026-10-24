import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import storefront from "@/assets/storefront.jpg.asset.json";
import logoWall from "@/assets/logo-wall.jpg.asset.json";
import bench from "@/assets/bench.jpg.asset.json";
import mirror from "@/assets/mirror.jpg.asset.json";
import oliveTable from "@/assets/olive-table.jpg.asset.json";
import oliveRoom from "@/assets/olive-room.jpg.asset.json";
import { ArabicName, LogoMark } from "@/components/mizej/Logo";
import { Marquee } from "@/components/mizej/Marquee";
import { Reveal } from "@/components/mizej/Reveal";
import { SpinBadge } from "@/components/mizej/SpinBadge";
import { REVIEWS, SHOP, formatPrice } from "@/lib/mizej";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mizej Coffee Shop · مزاج · Coffee & Mood in El Mourouj" },
      {
        name: "description",
        content:
          "Mizej (مزاج) — a red & white coffee shop in El Mourouj. Espresso, frappuccinos, mojitos, smoothies and croissants, open every day 07:00–23:00.",
      },
      { property: "og:title", content: "Mizej Coffee Shop · مزاج" },
      {
        property: "og:description",
        content: "Coffee & mood in El Mourouj. Open every day 07:00–23:00.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FAVORITES = [
  { name: "Frappuccino Caramel", price: 11.5, note: "Not overly sweet — a regular's favorite" },
  { name: "Hot Pistachio", price: 12, note: "Velvety, green, unforgettable" },
  { name: "Blue Mojito", price: 11.5, note: "The coolest blue in Mourouj" },
  { name: "Croissant Mizej", price: 4.5, note: "Our house croissant" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative min-h-screen overflow-hidden pt-28 md:pt-32">
        <div className="pointer-events-none absolute -left-32 top-40 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 md:grid-cols-[1.1fr_1fr]">
          <div className="relative">
            <p className="animate-rise text-sm font-bold uppercase tracking-[0.35em] text-primary">
              Coffee shop · El Mourouj
            </p>
            <h1 className="relative mt-2">
              <ArabicName className="block w-fit animate-rise pb-6 text-[7.5rem] leading-[1.25] text-primary [animation-delay:120ms] md:pb-10 md:text-[12rem]" />
              <span className="mt-2 block animate-rise font-display text-5xl font-semibold italic tracking-tight text-wine [animation-delay:260ms] md:text-7xl">
                Mizej <span className="text-outline not-italic text-primary">mood.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-md animate-rise text-lg text-muted-foreground [animation-delay:400ms]">
              <span lang="ar">مزاج</span> means <em>mood</em>. Ours is red, white, and always
              freshly brewed — from a 3.8 DT espresso to a black mojito under the glow of our
              wall lights.
            </p>
            <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:520ms]">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-red transition-transform hover:-translate-y-0.5"
              >
                See the menu
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 rounded-full border-2 border-wine px-6 py-3 font-semibold text-wine transition-colors hover:bg-wine hover:text-primary-foreground"
              >
                Find us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="animate-blob overflow-hidden mirror-shape shadow-red ring-8 ring-card">
              <img
                src={storefront.url}
                alt="Mizej storefront with the Arabic sign مزاج"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <SpinBadge className="absolute -bottom-8 -left-6 md:-left-14" />
            <div className="absolute -right-2 top-10 animate-float rounded-2xl bg-card px-4 py-3 shadow-soft md:-right-8">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm font-bold text-wine">5.0 on Google</p>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        words={["Espresso", "Frappuccino", "Blue Mojito", "Hot Pistachio", "Smoothies", "Croissant Mizej", "Ice Latte"]}
      />

      {/* STORY */}
      <section className="relative overflow-hidden bg-gradient-red py-24 text-primary-foreground md:py-32">
        <ArabicName className="pointer-events-none absolute -right-10 -top-10 select-none text-[22rem] leading-none text-primary-foreground/5 md:text-[30rem]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full shadow-red animate-halo">
              <img
                src={logoWall.url}
                alt="The Mizej logo carved into a red plaster wall"
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary-foreground/70">
              Our story
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              A cup for <em>every</em> mood.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/85">
              Crimson walls, soft cream plaster, back-lit round discs and olive trees growing
              through the tables. Mizej is a place to slow down with a laptop, catch up with
              friends, or grab your morning espresso on Av. Martyrs.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-8">
              <Stat value="40+" label="drinks & bites" />
              <Stat value="16h" label="open daily" />
              <Stat value="5.0★" label="Google rating" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="grain py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-semibold text-wine md:text-6xl">
              Inside the <span className="italic text-primary">mood</span>
            </h2>
            <p className="max-w-sm text-muted-foreground">
              Red velvet benches, wavy glowing mirrors and a long table under the olive trees.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <GalleryImg src={bench.url} alt="Red velvet benches with glowing logo discs" className="md:row-span-2" delay={0} />
            <GalleryImg src={oliveTable.url} alt="Long white table with olive trees" className="md:mt-16" delay={100} />
            <GalleryImg src={mirror.url} alt="Wavy illuminated mirror and red cup wall" className="md:row-span-2" delay={200} />
            <GalleryImg src={oliveRoom.url} alt="People working on laptops at Mizej" className="md:mt-16" delay={300} />
          </div>
        </div>
      </section>

      {/* FAVORITES */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <LogoMark tone="red" className="mx-auto size-14 animate-spin-slow" />
            <h2 className="mt-6 font-display text-4xl font-semibold text-wine md:text-6xl">
              House favorites
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FAVORITES.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground">
                  <LogoMark
                    tone="red"
                    className="absolute -right-6 -top-6 size-28 opacity-10 transition-transform duration-700 group-hover:rotate-90 group-hover:opacity-20"
                  />
                  <span className="font-display text-5xl font-semibold italic text-primary group-hover:text-primary-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="mt-8 text-xl font-bold">{f.name}</h3>
                  <p className="mt-2 text-sm opacity-75">{f.note}</p>
                  <p className="mt-6 font-display text-2xl font-semibold">{formatPrice(f.price)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-wine px-7 py-4 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Full menu & prices
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </section>

      <Marquee
        tone="cream"
        reverse
        words={["Open 07:00 – 23:00", "Av. Martyrs", "El Mourouj", "Free Wi-Fi", "Every day"]}
      />

      {/* REVIEWS */}
      <section className="grain py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold text-wine md:text-6xl">
              What the regulars say
            </h2>
            <p className="mt-3 flex items-center gap-2 text-muted-foreground">
              <Star className="size-4 fill-primary text-primary" /> {SHOP.rating.toFixed(1)} from{" "}
              {SHOP.reviewCount} Google reviews
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 120}>
                <figure className="h-full rounded-3xl border-2 border-primary/20 bg-card p-7 transition-colors hover:border-primary">
                  <span className="font-display text-7xl leading-none text-primary">“</span>
                  <blockquote className="-mt-6 text-lg text-wine">{r.text}</blockquote>
                  <figcaption className="mt-6 text-sm font-bold uppercase tracking-widest text-primary">
                    {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="px-4 pb-16 md:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
          <LogoMark className="absolute -bottom-20 -right-20 size-80 animate-spin-slow opacity-15" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-4xl font-semibold md:text-6xl">
              Come in for your <em>mood</em>.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              {SHOP.address} · Open every day 07:00 – 23:00
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Get directions <ArrowUpRight className="size-4" />
              </a>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground px-6 py-3 font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Hours & Wi-Fi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold md:text-4xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/70">{label}</p>
    </div>
  );
}

function GalleryImg({
  src,
  alt,
  className,
  delay,
}: {
  src: string;
  alt: string;
  className?: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="group overflow-hidden rounded-[2rem] shadow-soft">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="aspect-[3/5] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
    </Reveal>
  );
}
