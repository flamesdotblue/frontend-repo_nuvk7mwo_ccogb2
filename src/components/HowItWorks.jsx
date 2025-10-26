import React from 'react';
import { Rocket, Zap, Star } from 'lucide-react';

const steps = [
  {
    icon: Rocket,
    title: 'Pick a folder',
    desc: 'Start with a folder you use daily — projects, clients, or that messy Downloads.'
  },
  {
    icon: Zap,
    title: 'Design your desk',
    desc: 'Arrange files, add widgets, and save layouts. It’s your canvas, not a list.'
  },
  {
    icon: Star,
    title: 'Work at light speed',
    desc: 'Jump into flow with quick actions, keyboard shortcuts, and everything in reach.'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">Set up once. Stay organized forever.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/90 text-black">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-white/50">Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
