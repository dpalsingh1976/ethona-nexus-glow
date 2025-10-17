import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition
        ${scrolled ? "backdrop-blur bg-slate-900/70 ring-1 ring-white/10" : "bg-transparent"}
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-cyan-300">
          Ethona Digital Lab
        </Link>

        <ul className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          {[
            ["Services", "#services"],
            ["Automations", "#automations"],
            ["Case Studies", "#cases"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="relative transition hover:text-white
                 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-[width]
                 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/demo"
          className="hidden rounded-xl border border-cyan-500/40 bg-cyan-600/20 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400 hover:text-white md:inline-flex"
        >
          Get a Demo
        </a>
      </nav>
    </header>
  );
}
