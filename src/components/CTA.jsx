import React from 'react';
import { Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,146,60,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur">
          <h2 className="text-2xl font-semibold sm:text-3xl">Ready to build your Deskboard?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Start with one folder and feel the difference. You can always add more as you go.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-300"
            >
              Download for Desktop
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
            >
              Watch a 2‑minute demo
            </a>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-white/60">
            <Shield className="h-4 w-4" /> No tracking • Local-first • Your files stay on your device
          </p>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Deskboard</p>
          <nav className="flex items-center gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Changelog</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </nav>
        </footer>
      </div>
    </section>
  );
};

export default CTA;
