"use client";

export default function Marquee() {
  const items = [
    "Agentic AI",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Yjs (CRDTs)",
    "WebSockets",
    "MongoDB",
    "Claude",
    "Antigravity",
    "Tailwind CSS",
    "REST APIs",
  ];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-content">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-6 whitespace-nowrap">
            <span>{item}</span>
            <i className="text-[var(--gold)] text-sm not-italic">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
