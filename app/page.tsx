"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Testimonials } from "@/components/ui/testimonials-columns-1";
import { WorldMap } from "@/components/ui/world-map";
import { FaqsSection } from "@/components/ui/faqs-1";
import { Navbar1 } from "@/components/ui/navbar-1";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <Navbar1 />

      {/* 1 — Hero */}
      <section className="w-full px-6 pt-0">
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="flex h-full">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
                Introducing the HELIX H1
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Built for the<br />work ahead.
              </h1>
              <p className="mt-4 text-neutral-400 max-w-md text-base leading-relaxed">
                A general-purpose humanoid robot engineered for real industrial
                work. 43 degrees of freedom. 25 kg payload. 12-hour runtime.
                Shipping Q2 2026.
              </p>
              <div className="mt-7 flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors"
                >
                  Reserve a Unit
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  View specs →
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* 2 — Neural Control System: Dexterity Highlight */}
      <section className="py-24 bg-background">
        <div className="flex flex-col items-center">
          <div className="text-center mb-10 max-w-lg mx-auto px-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Neural Control System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Dexterity at a new scale.
            </h2>
            <p className="mt-3 text-muted-foreground text-base">
              800 TOPS of onboard inference. Every movement computed in real
              time, across 43 independent axes.
            </p>
          </div>
          <div className="border border-border flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />
            <EvervaultCard text="H1" />
            <p className="text-foreground mt-4 text-sm font-medium leading-relaxed">
              12 independently actuated fingers per hand — each with
              sub-millimeter tactile feedback and 120 Hz force sensing.
            </p>
            <p className="text-sm border border-border font-light rounded-full mt-4 text-muted-foreground px-3 py-0.5">
              Advanced Manipulation
            </p>
          </div>
        </div>
      </section>

      {/* 3 — Feature Tabs: Use Cases */}
      <section className="bg-muted/30">
        <Feature108 />
      </section>

      {/* 4 — Logo Cloud: Partners */}
      <section className="py-24 bg-background">
        <div className="relative mx-auto grid max-w-3xl px-6">
          <h2 className="mb-2 text-center text-2xl md:text-3xl font-bold tracking-tight">
            Powered by the world&apos;s leading AI infrastructure.
          </h2>
          <p className="mb-8 text-center text-muted-foreground text-sm">
            HELIX H1&apos;s intelligence stack is built on the same foundations
            as the world&apos;s most advanced AI systems.
          </p>
          <LogoCloud />
        </div>
      </section>

      {/* 5 — Testimonials */}
      <section className="py-24 bg-muted/30">
        <Testimonials />
      </section>

      {/* 6 — World Map: Global Deployments */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Global{" "}
            <span className="text-muted-foreground">
              {"Deployments".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Early-access HELIX H1 units are active across 14 countries — in
            automotive plants, fulfillment centers, and critical infrastructure
            from Detroit to Tokyo.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <WorldMap
            dots={[
              {
                start: { lat: 37.5485, lng: -121.9886 },
                end:   { lat: 35.6762, lng:  139.6503 },
              },
              {
                start: { lat: 42.3314, lng:  -83.0458 },
                end:   { lat: 48.7758, lng:    9.1829 },
              },
              {
                start: { lat: 41.8781, lng:  -87.6298 },
                end:   { lat: 52.3676, lng:    4.9041 },
              },
              {
                start: { lat: 51.5074, lng:   -0.1278 },
                end:   { lat: 25.2048, lng:   55.2708 },
              },
              {
                start: { lat: 35.6762, lng:  139.6503 },
                end:   { lat:  1.3521, lng:  103.8198 },
              },
              {
                start: { lat: 31.2304, lng:  121.4737 },
                end:   { lat: 37.5665, lng:  126.9780 },
              },
            ]}
          />
        </div>
      </section>

      {/* 7 — FAQs */}
      <section className="py-24 bg-muted/30">
        <FaqsSection />
      </section>

    </main>
  );
}
