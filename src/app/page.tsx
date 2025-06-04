import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a0033] via-[#000033] to-black px-6">
      {/* Neon grid background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_1px,_transparent_1px)] [background-size:80px_80px]"></div>

      <h1 className="z-10 text-center font-mono text-5xl md:text-7xl font-bold tracking-widest text-cyan-200 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
        ANDRES CORRALES
      </h1>
      <p className="z-10 mt-4 max-w-xl text-center text-lg md:text-xl text-cyan-100 opacity-80">
        Data Fanatic | Responsible Engineer | Idealist
      </p>

      <Link
        href="/projects"
        className="z-10 mt-10 rounded-full border-2 border-cyan-200 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-200 hover:text-gray-900 hover:shadow-[0_0_15px_0_rgba(0,255,255,0.7)]"
      >
        View&nbsp;Projects
      </Link>

      {/* CRT scan‑line overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(255,255,255,0.07)_50%,transparent_50%)] [background-size:2px_4px] mix-blend-overlay"></div>
    </main>
  );
}