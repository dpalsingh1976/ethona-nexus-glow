export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(1200px_600px_at_70%_40%,rgba(0,153,255,0.28),transparent),radial-gradient(900px_420px_at_25%_30%,rgba(0,255,234,0.12),transparent)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(2,6,23,1),rgba(2,6,23,0.98))]" />
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-repeat opacity-[0.10]" />
      <div className="pointer-events-none absolute inset-0 -z-10 animate-pulse [background:radial-gradient(circle_at_60%_45%,rgba(255,255,255,0.08)_0,transparent_55%)]" />

      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
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
            AI-powered digital marketing and automation that helps brands grow smarter—turning strategy into measurable revenue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/demo"
              className="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-600/20 px-5 py-3 font-semibold text-cyan-200 transition md:px-6 hover:border-cyan-400 hover:text-white"
            >
              <span className="absolute inset-0 -z-10 rounded-xl bg-cyan-500/20 blur opacity-0 transition group-hover:opacity-100" />
              Get a Demo
              <svg className="size-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#solutions" className="inline-flex items-center rounded-xl bg-white/5 px-5 py-3 font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 md:px-6">
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span aria-hidden className="inline-block size-2 rounded-full bg-cyan-400" /> 500+ Projects
            </div>
            <div className="flex items-center gap-2">
              <span aria-hidden className="inline-block size-2 rounded-full bg-emerald-400" /> 98% Satisfaction
            </div>
          </div>
        </div>

        <div className="relative">
  {/* --- Ground glow base --- */}
  <div
    aria-hidden
    className="absolute -bottom-10 left-1/2 z-0 h-44 w-[140%] -translate-x-1/2"
  >
    {/* soft base glow */}
    <div className="absolute inset-0 rounded-[50%] bg-cyan-400/25 blur-3xl opacity-90 mix-blend-screen" />
    {/* bright rim to create 'half-circle' arc */}
    <div className="absolute inset-0 rounded-[50%] bg-cyan-500/60 blur-2xl mix-blend-screen
                    [mask-image:radial-gradient(60%_100%_at_50%_100%,transparent_38%,black_40%)]" />
  </div>

  {/* --- Laptop image --- */}
  <Image
    src="/laptop-hero.png"
    alt="AI laptop interface"
    width={900}
    height={620}
    priority
    className="relative z-10 w-full max-w-[900px] bg-transparent drop-shadow-[0_25px_60px_rgba(0,180,255,0.25)]"
  />

</div>

      <div id="solutions" className="h-16" />
    </section>
  );
}
