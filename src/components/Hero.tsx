export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1b2e] to-[#050b15]">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-24 md:grid-cols-2 md:py-32 lg:gap-16">
        {/* Left: Copy */}
        <div className="z-10">
          <h1 className="text-6xl font-bold leading-tight text-primary md:text-7xl lg:text-8xl">
            Ethona
            <br />
            Digital Lab
          </h1>

          <p className="mt-6 text-2xl font-medium text-white md:text-3xl">
            Where Intelligence Creates
          </p>

          <p className="mt-4 max-w-md text-base text-white/70 md:text-lg">
            Where strategy meets automation
            <br />
            and ideas become revenue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/demo"
              className="group relative inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-primary/10 px-6 py-3 font-semibold text-primary transition hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(0,153,255,0.3)]"
            >
              Get a Demo
              <svg
                className="size-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#solutions"
              className="inline-flex items-center rounded-xl border-2 border-white/20 bg-transparent px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Right: Laptop Visual */}
        <div className="relative z-10">
          {/* Prominent glowing half-circle arc under laptop */}
          <div className="absolute -bottom-12 left-1/2 h-48 w-[140%] -translate-x-1/2">
            <div className="absolute inset-0 rounded-[50%] bg-gradient-to-t from-primary/40 via-primary/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-2 w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 blur-sm" />
          </div>

          {/* Laptop glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-3xl" />

          <img
            src="/laptop-hero.png"
            alt="AI laptop interface"
            className="relative w-full max-w-[900px] drop-shadow-[0_20px_80px_rgba(0,153,255,0.4)]"
          />
        </div>
      </div>
    </section>
  );
}
