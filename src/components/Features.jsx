import React from 'react';
import { Folder, LayoutDashboard, Puzzle, Monitor } from 'lucide-react';

const features = [
  {
    icon: Folder,
    title: 'Turn Folders into Desks',
    desc: 'Open any folder as a canvas. Arrange files, shortcuts, and notes exactly how you want.'
  },
  {
    icon: LayoutDashboard,
    title: 'Drag, Drop, Arrange',
    desc: 'Create boards with groups, zones, and stacks. Keep what matters front and center.'
  },
  {
    icon: Puzzle,
    title: 'Widgets that Work for You',
    desc: 'Drop in clocks, sticky notes, timers, checklists, and more — all alongside your files.'
  },
  {
    icon: Monitor,
    title: 'Beautiful and Fast',
    desc: 'Built for speed with a sleek dark theme. Keyboard-first interactions feel natural.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Build a smarter workspace</h2>
          <p className="mt-3 text-white/70">Keep context without juggling windows. Deskboard organizes your day around what you actually do.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400/80 to-emerald-400/80 text-black shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
