"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle, Mail } from "lucide-react";

export default function Hero() {
  const passRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // 3D tilt interaction for the Access Pass card
  useEffect(() => {
    const stage = stageRef.current;
    const pass = passRef.current;
    if (!stage || !pass) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = pass.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      pass.style.setProperty("--ry", `${x * 24}deg`);
      pass.style.setProperty("--rx", `${-y * 24}deg`);
    };

    const handlePointerLeave = () => {
      pass.style.setProperty("--ry", "0deg");
      pass.style.setProperty("--rx", "0deg");
    };

    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  const headingWords = [
    { text: "Abdullah", isSpecial: false },
    { text: "Jamil", isSpecial: false },
    { text: "builds", isSpecial: false },
    { text: "with", isSpecial: false },
    { text: "AI", isSpecial: true },
    { text: "agents", isSpecial: true },
  ];

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
        
        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--card-bg)] text-xs text-[var(--mute)] w-fit mb-6 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="font-medium text-[var(--ivory)]">Open to Work</span>
            <span className="text-[var(--gold)]">✦</span>
            <span>Internships &amp; Full-Time</span>
            <span className="hidden sm:inline text-[var(--mute)]">· Karachi, PK</span>
          </div>

          {/* Animated Rise Heading */}
          <h1
            className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.02] tracking-tight mb-6 text-[var(--ivory)]"
            aria-label="Abdullah Jamil builds with AI agents"
          >
            {headingWords.map((word, idx) => (
              <span
                key={idx}
                className="inline-block overflow-hidden mr-[0.25em] align-top"
              >
                <span
                  className="rise-word"
                  style={{ animationDelay: `${idx * 60 + 150}ms` }}
                >
                  {word.isSpecial ? (
                    <em className="gold-sheen not-italic">{word.text}</em>
                  ) : (
                    word.text
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-base sm:text-lg text-[var(--gold)] font-medium mb-3">
            Full stack developer shipping real-time projects with AI agents.
          </p>

          {/* Lead description */}
          <p className="text-base sm:text-[16.5px] leading-relaxed text-[#d9c8cf] dark:text-[#d9c8cf] light:text-[#523d49] max-w-xl mb-8">
            Software developer from Karachi. I build real-time projects with AI agents
            and follow professional standards so the work holds up. Ready to ship value
            from day one.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-full bg-[var(--gold)] text-[#16060e] font-bold text-sm hover:bg-[#fff3d4] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[var(--gold)]/20 flex items-center gap-2"
            >
              <span>See my work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="mailto:muhammadabdullah53a@gmail.com"
              className="px-6 py-3.5 rounded-full border border-[var(--line)] hover:border-[var(--gold)] text-[var(--ivory)] hover:text-[var(--gold)] font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[var(--gold)]" />
              <span>Email me</span>
            </a>

            <a
              href="https://wa.me/923412992721"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-full border border-[var(--line)] hover:border-emerald-500/60 text-[var(--ivory)] hover:text-emerald-400 font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Social Proof Links */}
          <div className="flex items-center gap-6 text-xs text-[var(--mute)] pt-4 border-t border-[var(--line)]/60">
            <a
              href="https://github.com/abdullah-jamil355"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--gold)] transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--gold)]" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-jamil-593066222"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--gold)] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--gold)]" />
            </a>
            <span className="text-[var(--line)]">|</span>
            <span className="italic text-[11.5px]">Available for remote work worldwide</span>
          </div>

        </div>

        {/* Right Column: 3D Interactive Access Pass */}
        <div ref={stageRef} className="lg:col-span-5 pass-wrapper flex flex-col items-center justify-center">
          <div ref={passRef} className="pass-card w-full">
            
            {/* Pass Header */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--gold)] uppercase font-mono">
                ACCESS PASS
              </span>
              <div className="flex items-center gap-2 text-xs text-[var(--gold)]/80">
                <span className="font-mono text-[10px] tracking-widest">2026</span>
                <span>✳</span>
              </div>
            </div>

            {/* Pass Center Content */}
            <div className="z-10 py-6">
              <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-[var(--gold2)] mb-2">
                FULL STACK DEVELOPER
              </div>
              <h2 className="font-serif italic font-medium text-3xl sm:text-4xl leading-tight text-[#fff6e6] tracking-tight mb-2">
                Muhammad<br />Abdullah Jamil
              </h2>
              <div className="text-[12px] text-[#e0cfd8] flex items-center gap-2">
                <span>Karachi, Pakistan</span>
                <span className="text-[var(--gold)]">·</span>
                <span>BS Software Eng.</span>
              </div>
            </div>

            {/* Pass Footer / Telemetry Bar */}
            <div className="z-10 border-t border-[var(--line)] pt-4 flex items-end justify-between">
              <div>
                <div className="barcode-lines mb-2" />
                <div className="text-[11.5px] font-medium text-[#f0e3db]">
                  Agentic AI <span className="text-[var(--gold)]">·</span> Full stack
                </div>
                <div className="text-[10px] text-[var(--mute)] font-mono">
                  REF: CRD-2026-ORB
                </div>
              </div>

              {/* Monogram Ring 'A' */}
              <div className="pass-ring" title="Abdullah Jamil">
                A
              </div>
            </div>

          </div>

          {/* Under Pass Caption */}
          <div className="flex items-center justify-between w-full max-w-[370px] mt-4 px-3 text-[10px] font-mono tracking-widest text-[var(--mute)]">
            <span>INDEPENDENT THINKING</span>
            <span className="text-[var(--gold)]">● VERIFIED DEVELOPER</span>
          </div>
        </div>

      </div>
    </section>
  );
}
