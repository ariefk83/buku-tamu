'use client';

import { useState, useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────
//  SUB-COMPONENTS
// ─────────────────────────────────────────────────────

/** Overline badge di atas headline */
const Badge = ({ children }) => (
  <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/10 mb-6">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
    </span>
    <span className="text-[#00D9FF] text-xs font-semibold uppercase tracking-[1.5px]">
      {children}
    </span>
  </div>
);

/** Statistik kepercayaan */
const TrustStat = ({ number, label, sublabel }) => (
  <div className="flex flex-col">
    <span className="text-2xl md:text-3xl font-bold text-[#00D9FF] leading-none">
      {number}
    </span>
    <span className="text-sm font-semibold text-white mt-1.5">{label}</span>
    <span className="text-xs text-[#6B7582] mt-0.5">{sublabel}</span>
  </div>
);

/** Kartu mengambang di sisi visual */
const FloatingCard = ({ children, className = '' }) => (
  <div
    className={`absolute bg-[#1A1F3A]/80 backdrop-blur-md border border-[#00D9FF]/20 rounded-2xl p-4 shadow-2xl ${className}`}
  >
    {children}
  </div>
);

/** Progress bar di dalam visual mockup */
const ProgressBar = ({ label, percent, color, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(percent), 600 + delay);
    return () => clearTimeout(t);
  }, [percent, delay]);

  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-[11px] text-[#B4BFCC]">{label}</span>
        <span className="text-[11px] text-[#6B7582]">{percent}%</span>
      </div>
      <div className="h-1.5 bg-[#0A0E27] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────
//  HERO SECTION
// ─────────────────────────────────────────────────────

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation setelah mount
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Custom keyframes (idealnya dipindah ke globals.css) ── */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes float-mid {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes gradient-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(6px); opacity: 0.4; }
        }
        .animate-float-slow  { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-mid   { animation: float-mid  4s ease-in-out infinite 0.5s; }
        .animate-float-fast  { animation: float-fast 3.5s ease-in-out infinite 1s; }
        .animate-gradient    { background-size: 200% 200%; animation: gradient-shift 5s ease infinite; }
        .animate-scroll      { animation: scroll-bounce 1.6s ease-in-out infinite; }

        .hero-enter { opacity: 0; transform: translateY(24px); }
        .hero-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1),
                      transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .hero-enter-right { opacity: 0; transform: translateX(32px); }
        .hero-enter-right-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1) 0.3s,
                      transform 0.7s cubic-bezier(.4,0,.2,1) 0.3s;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen bg-[#0F1423] overflow-hidden flex flex-col justify-center"
        aria-label="Hero Section"
      >
        {/* ─── LAYER 1: Background Orbs ─── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[15%] left-[10%]  w-[500px] h-[500px] rounded-full bg-[#4052D4]/20 blur-[140px]" />
          <div className="absolute bottom-[10%] right-[5%]  w-[450px] h-[450px] rounded-full bg-[#A855F7]/20 blur-[120px]" />
          <div className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#00D9FF]/10 blur-[90px]" />
        </div>

        {/* ─── LAYER 2: Grid Pattern ─── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,217,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,217,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* ─── LAYER 3: Fade edge top & bottom ─── */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0F1423] to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0F1423] to-transparent pointer-events-none" aria-hidden="true" />

        {/* ─── MAIN CONTENT ─── */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-16 xl:px-20 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ════════════════════════════════
                LEFT: Teks & CTA
            ════════════════════════════════ */}
            <div className={`flex flex-col ${mounted ? 'hero-enter-active' : 'hero-enter'}`}>

              {/* Badge */}
              <Badge>🚀 AI-Powered Development</Badge>

              {/* H1 Headline */}
              <h1 className="text-[2.1rem] sm:text-5xl xl:text-[3.4rem] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-6">
                Wujudkan Ide Aplikasi Anda{' '}
                <span
                  className="animate-gradient bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #00D9FF, #A855F7, #00D9FF)',
                  }}
                >
                  10x Lebih Cepat
                </span>{' '}
                Dengan AI&#8209;Assisted&nbsp;Development
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-[#B4BFCC] leading-relaxed mb-5 max-w-[560px]">
                Validasi ide Anda dengan prototype yang{' '}
                <strong className="text-white font-semibold">fully functional</strong>.
                Hemat waktu, biaya, dan risiko investasi dengan teknologi AI yang mengotomasi{' '}
                <strong className="text-white font-semibold">60%</strong> dari proses development tradisional.
              </p>

              {/* Body Description */}
              <p className="text-[15px] text-[#6B7582] leading-[1.8] mb-10 max-w-[540px]">
                Anda punya ide bagus. Startup lain sudah siap dengan MVP mereka. Dengan layanan
                rapid prototyping kami, Anda bisa launch ke pasar dalam timeframe yang sama—tanpa
                mengorbankan kualitas desain atau user experience.
              </p>

              {/* ── CTA Buttons ── */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">

                {/* Primary */}
                <button
                  type="button"
                  className="
                    group relative inline-flex items-center justify-center gap-2
                    px-10 py-[15px] rounded-xl
                    text-white font-semibold text-base
                    overflow-hidden
                    transition-all duration-200
                    hover:scale-[1.02] active:scale-[0.98]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D9FF]
                  "
                  style={{
                    background: 'linear-gradient(135deg, #4052D4 0%, #A855F7 100%)',
                    boxShadow: '0 4px 24px rgba(64, 82, 212, 0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 4px 32px rgba(64, 82, 212, 0.5), 0 0 20px rgba(0, 217, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(64, 82, 212, 0.35)';
                  }}
                >
                  {/* Shine overlay on hover */}
                  <span
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="relative z-10">Mulai Prototype Gratis</span>
                  <svg
                    className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Secondary */}
                <button
                  type="button"
                  className="
                    group inline-flex items-center justify-center gap-2
                    px-8 py-[13px] rounded-xl
                    font-semibold text-base text-[#00D9FF]
                    border-2 border-[#00D9FF]/70
                    bg-transparent
                    hover:bg-[#00D9FF]/10
                    transition-all duration-200
                    hover:scale-[1.02] active:scale-[0.98]
                    hover:border-[#00D9FF]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D9FF]
                  "
                >
                  <svg
                    className="w-4 h-4"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Chat dengan Tim Kami
                </button>
              </div>

              {/* ── Trust Indicators ── */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-8 border-t border-[#2D3561]/60">
                <TrustStat
                  number="25+"
                  label="Startups Launched MVP"
                  sublabel="Dalam 6 bulan terakhir"
                />
                <div className="hidden sm:block w-px self-stretch bg-[#2D3561]" aria-hidden="true" />
                <TrustStat
                  number="75%"
                  label="Lebih Cepat"
                  sublabel="Dibanding traditional dev"
                />
                <div className="hidden sm:block w-px self-stretch bg-[#2D3561]" aria-hidden="true" />
                <TrustStat
                  number="4.9/5"
                  label="Rating Founders"
                  sublabel="Based on 80+ reviews"
                />
              </div>
            </div>

            {/* ════════════════════════════════
                RIGHT: Visual / Prototype Mockup
                (Tersembunyi di mobile; tampil di desktop)
            ════════════════════════════════ */}
            <div
              className={`hidden lg:block relative h-[580px] xl:h-[640px] ${mounted ? 'hero-enter-right-active' : 'hero-enter-right'}`}
              aria-hidden="true"
            >
              {/* ── Central Glassmorphism Card ── */}
              <div
                className="absolute inset-8 rounded-3xl border border-[#00D9FF]/20 bg-[#1A1F3A]/50 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: '0 0 80px rgba(0,217,255,0.07), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                {/* Inner radial glow */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(64,82,212,0.25) 0%, transparent 70%)',
                  }}
                />

                {/* Center content */}
                <div className="relative z-10 flex flex-col items-center gap-6 p-8 w-full max-w-[260px]">

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #4052D4, #A855F7)' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  {/* Status */}
                  <div className="text-center">
                    <p className="text-white font-bold text-xl leading-snug">Prototype Ready</p>
                    <p
                      className="text-sm font-semibold mt-1 bg-clip-text text-transparent"
                      style={{ backgroundImage: 'linear-gradient(90deg, #00D9FF, #A855F7)' }}
                    >
                      Dalam 7 Hari Kerja
                    </p>
                  </div>

                  {/* Progress Bars */}
                  <div className="w-full space-y-4">
                    <ProgressBar label="Design System"   percent={100} color="#00D9FF" delay={0}   />
                    <ProgressBar label="AI Integration"  percent={88}  color="#A855F7" delay={200} />
                    <ProgressBar label="Deployment"      percent={72}  color="#4052D4" delay={400} />
                  </div>

                  {/* Status dot row */}
                  <div className="flex items-center gap-2 self-start">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                    </span>
                    <span className="text-[11px] text-[#B4BFCC]">AI aktif memproses komponen</span>
                  </div>
                </div>
              </div>

              {/* ── Floating Card 1: Waktu Traditional ── */}
              <FloatingCard className="top-4 -left-8 animate-float-slow min-w-[185px]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6B7582] uppercase tracking-wide mb-0.5">Cara Tradisional</p>
                    <p className="text-sm font-bold text-red-400">8–12 Minggu</p>
                  </div>
                </div>
              </FloatingCard>

              {/* ── Floating Card 2: Kecepatan Kami ── */}
              <FloatingCard className="top-14 -right-8 animate-float-mid min-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6B7582] uppercase tracking-wide mb-0.5">Dengan Kami</p>
                    <p className="text-sm font-bold text-[#00D9FF]">7–10 Hari</p>
                  </div>
                </div>
              </FloatingCard>

              {/* ── Floating Card 3: AI Status ── */}
              <FloatingCard className="bottom-24 -left-6 animate-float-fast min-w-[175px]">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
                  </span>
                  <span className="text-xs text-[#B4BFCC]">AI Processing</span>
                  <span className="text-xs font-bold text-[#00D9FF] ml-auto">Active</span>
                </div>
              </FloatingCard>

              {/* ── Floating Card 4: Cost Efficiency ── */}
              <FloatingCard className="bottom-6 right-0 animate-float-slow min-w-[170px]">
                <p className="text-[10px] text-[#6B7582] uppercase tracking-wide mb-1">Cost Efficiency</p>
                <p
                  className="text-xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #A855F7, #00D9FF)' }}
                >
                  60% Lebih Hemat
                </p>
              </FloatingCard>

              {/* ── Decorative corner dots ── */}
              {[
                'top-0 left-0',
                'top-0 right-0',
                'bottom-0 left-0',
                'bottom-0 right-0',
              ].map((pos) => (
                <div
                  key={pos}
                  className={`absolute ${pos} w-2.5 h-2.5 rounded-full bg-[#00D9FF]/40`}
                  style={{ boxShadow: '0 0 8px rgba(0, 217, 255, 0.6)' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ─── Scroll Indicator ─── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B7582]"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[2px]">Scroll</span>
          <div className="animate-scroll w-px h-8 bg-gradient-to-b from-[#6B7582] to-transparent" />
        </div>
      </section>
    </>
  );
}
