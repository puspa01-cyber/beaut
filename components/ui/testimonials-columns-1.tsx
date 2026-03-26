"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "We deployed HELIX H1 across three assembly lines and reduced per-unit labor cost by 34%. The zero-defect rate on sub-component handling has been remarkable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Crawford",
    role: "VP Operations, Halcyon Manufacturing",
  },
  {
    text: "After six months of operation, our HELIX units have logged over 8,000 hours without a single safety incident. The transition from pilot to full deployment was smoother than we expected.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Okafor",
    role: "Director of Automation, Vantec Logistics",
  },
  {
    text: "The 12-hour runtime means HELIX H1 covers a full shift without interruption. We run three-shift operations with two robots rotating on charge — it's seamless.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Marcus Lim",
    role: "Plant Manager, Torque Industries",
  },
  {
    text: "We were skeptical about a general-purpose robot replacing our specialized equipment. The adaptability of H1 exceeded every internal benchmark we set during evaluation.",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    name: "Priya Nair",
    role: "Chief Technology Officer, NorthSpan Automotive",
  },
  {
    text: "Integration took four weeks. The HELIX team calibrated the AI to our warehouse SKU mix and hit 96% pick accuracy in the first month. That number is now at 98.4%.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Tom Brekke",
    role: "Head of Fulfillment, Kestrel Commerce",
  },
  {
    text: "The economics are undeniable. At our volume, each HELIX unit pays back in under 18 months. We've already ordered our second cohort of twelve units.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Elena Voss",
    role: "CFO, Meridian Packaging",
  },
  {
    text: "We run mixed human-robot shifts and the collision avoidance has been flawless across 4,000 joint operating hours. My team trusts working alongside H1.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Daisuke Mori",
    role: "Safety Officer, TechFab Pacific",
  },
  {
    text: "When we scaled from 2 to 12 units, HELIX's technical team was on-site within 48 hours. That level of support is rare in this industry.",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    name: "Amara Diallo",
    role: "Operations Lead, Atlas Distribution",
  },
  {
    text: "We deployed H1 on our quality control inspection line and it catches defects our human inspectors were missing — roughly 3 additional defects per 1,000 units.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Riya Desai",
    role: "QA Director, Solus Electronics",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                  key={i}
                >
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 opacity-60 tracking-tight text-sm">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <div className="relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border text-foreground text-xs font-medium py-1 px-4 rounded-full">
              Customer Stories
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-5 text-center">
            Trusted on the factory floor.
          </h2>
          <p className="text-center mt-4 text-muted-foreground text-base">
            Hear from the operations leaders, plant managers, and engineers
            who deploy HELIX H1 every day.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17} />
        </div>
      </div>
    </div>
  );
};
