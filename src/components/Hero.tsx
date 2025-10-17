"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + grid */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_600px_at_70%_40%,rgba(0,153,255,0.28),transparent),radial-gradient(800px_400px_at_25%_30%,rgba(0,255,234,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(15,23,42,0.9),rgba(15,23,42,0.9))] [mask-image:radial-gradient(70%_60%_at_60%_50%,#000_55%,transparent_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.12]" />

      {/* subtle particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 animate-pulse [background:radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0,transparent_55%)]" />

      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-28">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur">
            AI-Powered Solutions
          </span>

          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] text-cyan-400 md:text-7xl">
            Ethona Digital Lab
          </h1>

          <p className="mt-4 text-2xl font-semibold text-white">
            Where Intelligence Creates
          </p>

          <p className="mt-3 max-w-xl text-white/70">
            AI-powered digital marketing and automation that helps brands grow
            smarter—turning strategy into measurable revenue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/demo"
              className="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-600/20 px-5 py-3 font-semibold text-cyan-200 transition md:px-6 hover:border-cyan-400 hover:text-white"
            >
              <span className="absolute inset-0 -z-10 rounded-xl bg-cyan-500/20 blur opacity-0 transition group-hover:opacity-100" />
              Get a Demo
              <svg
                className="size-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#solutions"
              className="inline-flex items-center rounded-xl bg-white/5 px-5 py-3 font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 md:px-6"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="i-lucide-star size-4" /> 500+ Projects
            </div>
            <div className="flex items-center gap-2">
              <span className="i-lucide-badge-check size-4" /> 98% Satisfaction
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          {/* ground glow to “blend” laptop into hero */}
          <div className="absolute -bottom-6 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(50%_45%_at_50%_50%,rgba(0,180,255,0.35),transparent_70%)] blur-2xl" />
          <Image
            src="/laptop-hero.png" // put your hero image here
            alt="AI laptop interface"
            width={900}
            height={620}
            className="relative z-10 w-full max-w-[900px] drop-shadow-[0_25px_60px_rgba(0,180,255,0.25)]"
            priority
          />
          {/* floating icon chips */}
          <div className="pointer-events-none absolute -left-6 top-[16%] z-20 animate-[float_8s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur">
            Chatbots
          </div>
          <div className="pointer-events-none absolute right-2 top-[4%] z-20 animate-[float_7s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur [animation-delay:1.2s]">
            Automation
          </div>
          <div className="pointer-events-none absolute -right-4 bottom-[6%] z-20 animate-[float_9s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur [animation-delay:0.6s]">
            Analytics
          </div>
        </div>
      </div>
    </section>
  );
}
