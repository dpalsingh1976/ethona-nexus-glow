        {/* Visual block */}
        <div className="relative">
          {/* Ground glow as SVG: soft bloom + crisp front rim */}
          <svg
            className="absolute -bottom-8 left-1/2 z-0 -translate-x-1/2"
            width="920"
            height="260"
            viewBox="0 0 920 260"
            aria-hidden="true"
          >
            <defs>
              {/* soft cyan bloom */}
              <radialGradient id="glow" cx="50%" cy="55%" r="60%">
                <stop offset="0%" stopColor="rgba(56,189,248,0.45)" />
                <stop offset="60%" stopColor="rgba(56,189,248,0.18)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0)" />
              </radialGradient>

              <filter id="blur40">
                <feGaussianBlur stdDeviation="40" />
              </filter>
              <filter id="blur14">
                <feGaussianBlur stdDeviation="14" />
              </filter>

              {/* show only the *front* half of the ellipse for the rim */}
              <clipPath id="bottomHalf">
                <!-- keep lower 48% -->
                <rect x="0" y="120" width="920" height="140" />
              </clipPath>
            </defs>

            {/* soft base glow */}
            <ellipse
              cx="460"
              cy="122"
              rx="380"
              ry="96"
              fill="url(#glow)"
              filter="url(#blur40)"
            />

            {/* bright cyan rim (front half only) */}
            <g clipPath="url(#bottomHalf)">
              <ellipse
                cx="460"
                cy="122"
                rx="380"
                ry="96"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="10"
                opacity="0.8"
                filter="url(#blur14)"
              />
            </g>
          </svg>
            

          {/* Laptop image (must be a transparent PNG with halo) */}
          <img
            src="/laptop-hero.png"
            alt="AI laptop interface"
            className="relative z-10 w-full max-w-[900px] bg-transparent drop-shadow-[0_25px_60px_rgba(0,180,255,0.25)]"
          />

          {/* Floating chips */}
          <div className="pointer-events-none absolute -left-3 top-[16%] z-20 animate-float rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur">
            Chatbots
          </div>
          <div
            className="pointer-events-none absolute right-2 top-[3%] z-20 animate-float rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur"
            style={{ animationDelay: "1.1s" }}
          >
            Automation
          </div>
          <div
            className="pointer-events-none absolute -right-2 bottom-[6%] z-20 animate-float rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur"
            style={{ animationDelay: "0.6s" }}
          >
            Analytics
          </div>
        </div>
