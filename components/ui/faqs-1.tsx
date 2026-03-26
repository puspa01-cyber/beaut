import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-6">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Everything you need to know about HELIX H1 — from pricing and
          deployment to safety and support. Can&apos;t find your answer?
          Reach out to our team.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg"
        defaultValue="item-1"
      >
        {questions.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 px-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-muted-foreground">
        Still have questions?{' '}
        <a href="#" className="text-primary hover:underline">
          Contact our team
        </a>
        {' '}or{' '}
        <a href="#" className="text-primary hover:underline">
          book a live demo.
        </a>
      </p>
    </div>
  );
}

const questions = [
  {
    id: 'item-1',
    title: 'How much does HELIX H1 cost?',
    content:
      'HELIX H1 starts at $24,900 for the introductory industrial tier, which includes the robot, onboarding support, and 12 months of software updates. The Enterprise tier is $34,900 and adds the full Fleet OS, priority support, and a dedicated deployment engineer. Volume pricing is available for orders of 5 or more units. Financing and leasing options start at $1,100/month.',
  },
  {
    id: 'item-2',
    title: 'What can HELIX H1 actually do?',
    content:
      'HELIX H1 is a general-purpose humanoid robot built for real industrial work. It can perform precision assembly and parts handling, warehouse picking and packing, quality control inspection, materials transport, and operations in hazardous environments. With 43 degrees of freedom and 12 independently actuated fingers per hand, it handles tasks requiring both strength (up to 25 kg payload) and dexterity (sub-millimeter tactile precision). New capabilities are added via over-the-air software updates.',
  },
  {
    id: 'item-3',
    title: 'How long does deployment take?',
    content:
      'Most customers are fully operational within 4 to 6 weeks of delivery. Week 1–2 covers physical setup, network integration, and safety certification of your specific environment. Weeks 3–4 involve task calibration — our AI adapts to your exact workflow, SKU mix, or assembly process. Weeks 5–6 are supervised live operation before handoff to your team. Customers with straightforward single-task deployments (e.g., tote movement, parts transfer) have gone live in under two weeks.',
  },
  {
    id: 'item-4',
    title: 'Is HELIX H1 safe to work alongside humans?',
    content:
      'Yes. HELIX H1 is designed for collaborative human-robot environments without safety cages. It uses force-limiting actuators that cap contact forces below injury thresholds, a 360° proximity detection system that slows and stops movement when humans enter defined zones, and an emergency stop that engages in under 50 milliseconds. HELIX H1 is in the process of receiving ISO 10218 and ISO/TS 15066 safety certification (expected Q3 2026). Early deployment partners have logged over 12,000 joint human-robot operating hours with zero safety incidents.',
  },
  {
    id: 'item-5',
    title: 'What industries is HELIX H1 designed for?',
    content:
      'HELIX H1 is deployed across four primary verticals: manufacturing and precision assembly (automotive, electronics, aerospace), logistics and fulfillment (warehouse picking, sorting, packing), critical and hazardous environments (chemical facilities, radiation zones, disaster response), and healthcare operations (materials transport, facility maintenance, pharmacy logistics). If your use case falls outside these, contact us — our applications team evaluates new verticals on a case-by-case basis.',
  },
  {
    id: 'item-6',
    title: 'What does the software subscription include?',
    content:
      'Every HELIX H1 includes 12 months of software updates at no additional cost. After the first year, Fleet OS is $299/month per unit and covers: over-the-air capability updates, cloud-based fleet monitoring and analytics, remote diagnostics and support, task library access (300+ pre-trained task modules), and compliance reporting. The Enterprise tier includes unlimited seats, API access, and a dedicated customer success manager.',
  },
  {
    id: 'item-7',
    title: 'When will HELIX H1 be available?',
    content:
      'Early Access units ship to qualified industrial partners in Q2 2026. The Early Access program is limited to 200 units and prioritizes manufacturing and logistics customers with defined deployment use cases. General availability — with no application required — begins Q4 2026. Reserve your unit now to lock in introductory pricing, which increases by $3,000 at general availability.',
  },
];
