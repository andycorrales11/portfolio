import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-6">
      {/* Phosphor dot grid background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,65,0.08)_1px,_transparent_1px)] [background-size:80px_80px]"></div>

      <div className="z-10 flex flex-col items-center gap-6 border border-[#00ff41]/30 px-10 py-10 max-w-lg w-full">
        <p className="font-mono text-xs text-[#00ff41]/40 self-start">andycorrales.dev — v2.0.0</p>

        <h1 className="text-center font-[family-name:var(--font-pixel)] text-2xl md:text-3xl leading-relaxed text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
          ANDRES<br />CORRALES
        </h1>

        <p className="text-center font-mono text-xs md:text-sm text-[#00ff41]/60 tracking-widest">
          hardware design &amp; verification
        </p>

        <div className="w-full border-t border-[#00ff41]/20"></div>

        <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="border border-[#00ff41] px-5 py-2 font-mono text-sm text-[#00ff41] transition hover:bg-[#00ff41] hover:text-[#050505] hover:shadow-[0_0_15px_0_rgba(0,255,65,0.5)]"
          >
            [ projects ]
          </Link>
          <Link
            href="/log"
            className="border border-[#00ff41] px-5 py-2 font-mono text-sm text-[#00ff41] transition hover:bg-[#00ff41] hover:text-[#050505] hover:shadow-[0_0_15px_0_rgba(0,255,65,0.5)]"
          >
            [ log ]
          </Link>
          <Link
            href="/about"
            className="border border-[#00ff41] px-5 py-2 font-mono text-sm text-[#00ff41] transition hover:bg-[#00ff41] hover:text-[#050505] hover:shadow-[0_0_15px_0_rgba(0,255,65,0.5)]"
          >
            [ about ]
          </Link>
        </div>

        <p className="font-mono text-xs text-[#00ff41]/30 self-end">
          <span className="animate-pulse">_</span>
        </p>
      </div>

      {/* CRT scan-line overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 scanlines mix-blend-overlay"></div>
    </main>
  );
}
