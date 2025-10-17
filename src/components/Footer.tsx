export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} Ethona Digital Lab. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
