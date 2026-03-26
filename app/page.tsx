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

      {/* 1 — Hero */}
      <section className="w-full px-6 pt-6">
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="flex h-full">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-3">
                HELIX Robotics — HELIX H1
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Built for the<br />work ahead.
              </h1>
              <p className="mt-4 text-neutral-400 max-w-md text-base leading-relaxed">
                A general-purpose humanoid robot with 43 degrees of freedom,
                25 kg payload, and a 12-hour runtime. Designed for manufacturing,
                logistics, and beyond.
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

      {/* 2 — Evervault Card: Dexterity Highlight */}
      <section className="py-24 flex justify-center bg-background">
        <div className="border border-border flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />
          <EvervaultCard text="H1" />
          <h2 className="text-foreground mt-4 text-sm font-medium">
            43 degrees of freedom. 12 per hand — each finger independently
            actuated with sub-millimeter tactile precision.
          </h2>
          <p className="text-sm border border-border font-light rounded-full mt-4 text-foreground px-2 py-0.5">
            Advanced Manipulation
          </p>
        </div>
      </section>

      {/* 3 — Feature Tabs: Use Cases */}
      <section className="bg-muted/30">
        <Feature108 />
      </section>

      {/* 4 — Logo Cloud: Partners */}
      <section className="py-24 bg-background">
        <div className="relative mx-auto grid max-w-3xl px-6">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold tracking-tight">
            Powered by the world&apos;s leading{" "}
            <span className="text-muted-foreground">AI infrastructure.</span>
          </h2>
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
            HELIX H1 units are active across 14 countries. From automotive
            assembly in Stuttgart to logistics hubs in Tokyo — the future
            of work is already here.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <WorldMap
            dots={[
              {
                start: { lat: 37.5485, lng: -121.9886, label: "Fremont, CA" },
                end:   { lat: 35.6762, lng:  139.6503, label: "Tokyo" },
              },
              {
                start: { lat: 42.3314, lng:  -83.0458, label: "Detroit" },
                end:   { lat: 48.7758, lng:    9.1829, label: "Stuttgart" },
              },
              {
                start: { lat: 41.8781, lng:  -87.6298, label: "Chicago" },
                end:   { lat: 52.3676, lng:    4.9041, label: "Amsterdam" },
              },
              {
                start: { lat: 51.5074, lng:   -0.1278, label: "London" },
                end:   { lat: 25.2048, lng:   55.2708, label: "Dubai" },
              },
              {
                start: { lat: 35.6762, lng:  139.6503, label: "Tokyo" },
                end:   { lat:  1.3521, lng:  103.8198, label: "Singapore" },
              },
              {
                start: { lat: 31.2304, lng:  121.4737, label: "Shanghai" },
                end:   { lat: 37.5665, lng:  126.9780, label: "Seoul" },
              },
            ]}
          />
        </div>
      </section>

      {/* 7 — FAQs */}
      <section className="py-24 bg-muted/30">
        <FaqsSection />
      </section>

      {/* 8 — Navbar */}
      <section className="py-12 bg-background border-t border-border">
        <Navbar1 />
      </section>

    </main>
  );
}
