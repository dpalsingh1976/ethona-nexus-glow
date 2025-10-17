import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Nav />
      <Hero />
      {/* …rest of your sections */}
    </main>
  );
}
