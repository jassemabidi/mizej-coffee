import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Clock, Copy, Instagram, MapPin, Wifi } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
`${import.meta.env.BASE_URL}images/mizej-olive-room.jpg`
import { ArabicName, LogoMark } from "@/components/mizej/Logo";
import { Reveal } from "@/components/mizej/Reveal";
import { TikTokIcon } from "@/components/mizej/SiteFooter";
import { SHOP } from "@/lib/mizej";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Mizej · Hours, Location & Wi-Fi · El Mourouj" },
      {
        name: "description",
        content:
          "Find Mizej coffee shop on Av. Martyrs, El Mourouj. Open every day 07:00–23:00, free Wi-Fi, Instagram and TikTok.",
      },
      { property: "og:title", content: "Visit Mizej Coffee Shop" },
      {
        property: "og:description",
        content: "Av. Martyrs, El Mourouj · Open every day 07:00–23:00.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SHOP.wifi.password);
      setCopied(true);
      toast.success("Wi-Fi password copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — the password is " + SHOP.wifi.password);
    }
  };

  return (
    <>
      <section className="grain relative overflow-hidden pb-16 pt-36 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="animate-rise text-sm font-bold uppercase tracking-[0.35em] text-primary">
              Come say hi
            </p>
            <h1 className="mt-3 animate-rise font-display text-6xl font-semibold leading-[0.95] text-wine [animation-delay:120ms] md:text-8xl">
              Visit <span className="italic text-primary">us</span>
            </h1>
            <p className="mt-6 flex max-w-md animate-rise items-start gap-3 text-lg text-muted-foreground [animation-delay:240ms]">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              {SHOP.address}
            </p>
            <a
              href={SHOP.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex animate-rise items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-red transition-transform [animation-delay:360ms] hover:-translate-y-0.5"
            >
              Open in Google Maps
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
          <div className="relative">
            <div className="animate-blob overflow-hidden mirror-shape shadow-red">
              <img
                src={`${import.meta.env.BASE_URL}images/mizej-olive-room.jpg`}
                alt="Inside Mizej with olive trees and guests"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-6 right-6 grid size-24 place-items-center rounded-full bg-primary animate-halo">
              <LogoMark className="size-16" />
            </span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-gradient-red p-8 text-primary-foreground">
              <Clock className="size-8" />
              <h2 className="mt-6 font-display text-3xl font-semibold">Opening hours</h2>
              <dl className="mt-6 space-y-4">
                {SHOP.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-primary-foreground/20 pb-3">
                    <dt className="text-primary-foreground/80">{h.days}</dt>
                    <dd className="font-bold">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-primary-foreground/75">Open every single day.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-[2rem] bg-cream p-8 text-wine">
              <Wifi className="size-8 text-primary" />
              <h2 className="mt-6 font-display text-3xl font-semibold">Free Wi-Fi</h2>
              <dl className="mt-6 space-y-4">
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Network</dt>
                  <dd className="font-bold">{SHOP.wifi.network}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Password</dt>
                  <dd className="font-mono font-bold">{SHOP.wifi.password}</dd>
                </div>
              </dl>
              <button
                onClick={copy}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Copied!" : "Copy password"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex h-full flex-col rounded-[2rem] border-2 border-primary p-8 text-wine">
              <ArabicName className="text-6xl text-primary" />
              <h2 className="mt-4 font-display text-3xl font-semibold">Follow the mood</h2>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={SHOP.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-full bg-card px-5 py-3 font-semibold shadow-soft transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="size-5" /> Instagram
                  </span>
                  <span className="text-sm opacity-70">{SHOP.instagramHandle}</span>
                </a>
                <a
                  href={SHOP.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-full bg-card px-5 py-3 font-semibold shadow-soft transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="flex items-center gap-2">
                    <TikTokIcon className="size-5" /> TikTok
                  </span>
                  <span className="text-sm opacity-70">{SHOP.tiktokHandle}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-6 max-w-6xl px-6">
          <div className="overflow-hidden rounded-[2rem] border-4 border-primary shadow-soft">
            <iframe
              title="Mizej coffee shop on the map"
              src={SHOP.mapsEmbed}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
