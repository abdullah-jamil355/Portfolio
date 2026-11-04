"use client";

import { useEffect, useState } from "react";

const email = "muhammadabdullah53a@gmail.com";

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [passFlipped, setPassFlipped] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(saved === "light" || saved === "dark" ? saved : preferred);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const moveGlow = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", moveGlow, { passive: true });
    return () => window.removeEventListener("pointermove", moveGlow);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((current) => {
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", next);
    setPassFlipped(false);
    return next;
  });

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home">Abdullah Jamil<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title="Toggle color theme">{theme === "dark" ? "☼" : "☾"}</button>
      </header>

      <main id="home">
        <section className="hero page-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> Open to Work <i>·</i> Karachi, Pakistan</div>
            <h1>Muhammad<br /><em>Abdullah Jamil</em></h1>
            <p className="hero-role">Full Stack Developer <span>·</span> Real-time apps &amp; AI-assisted engineering</p>
            <p className="hero-intro">Full stack developer from Karachi. I’ve worked on real-time projects with AI agents and follow professional standards so the work holds up.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span>↗</span></a><a className="button button-quiet" href={`mailto:${email}`}>Email me</a></div>
            <div className="hero-social"><a href="https://github.com/abdullah-jamil355" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/abdullah-jamil-593066222" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Available for remote work</span></div>
          </div>
          <div className="pass-stage" aria-label="Developer access pass">
            <div
              className={`pass-card${passFlipped ? " is-flipped" : ""}`}
              role="button"
              tabIndex={0}
              aria-pressed={passFlipped}
              aria-label={passFlipped ? "Show the front of Abdullah's access card" : "Flip the access card to read about Abdullah"}
              onClick={() => setPassFlipped((flipped) => !flipped)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setPassFlipped((flipped) => !flipped);
                }
              }}
            >
              <div className="pass-card-inner">
                <div className="pass-face pass-face-front">
                  <div className="pass-top"><span>PORTFOLIO / 2026</span><span className="pass-star">✳</span></div>
                  <div className="pass-center"><span className="pass-kicker">FULL STACK DEVELOPER</span><strong>Muhammad<br /><em>Abdullah</em></strong><span className="pass-location">KARACHI · PAKISTAN</span></div>
                  <div className="pass-bottom"><div><span className="pass-kicker">BUILDING WITH</span><b>AI agents · Real-time systems</b></div><span className="monogram">A</span></div>
                  <div className="pass-orbit orbit-one" /><div className="pass-orbit orbit-two" />
                  <span className="pass-hint">HOVER OR TAP TO FLIP ↻</span>
                </div>
                <div className="pass-face pass-face-back">
                  <div className="pass-back-heading"><span className="pass-kicker">A LITTLE ABOUT ME</span><span className="pass-star">✳</span></div>
                  <ul className="pass-points">
                    <li>Just getting started. Always learning what the next challenge needs.</li>
                    <li>Curious about what’s possible. Accountable for what I build.</li>
                    <li>Want to grow my experience with large-scale production systems, building on my work with real-time apps and observability.</li>
                    <li>In the next five years, I see myself as a confident full-stack engineer who can own products end to end and build reliable real-time systems at production scale. I want to deepen my skills in system design and production engineering by working on real products with a strong team. I’m starting by building solid fundamentals, taking ownership, and learning from every project.</li>
                  </ul>
                  <span className="pass-back-mark">MUHAMMAD ABDULLAH JAMIL <i>·</i> FULL STACK DEVELOPER</span>
                </div>
              </div>
            </div>
            <div className="pass-caption"><span>INDEPENDENT THINKING</span><span>01 — 03</span></div>
          </div>
        </section>

        <section id="experience" className="section page-wrap">
          <Reveal><div className="section-heading"><span className="eyebrow">THE JOURNEY</span><h2>Experience</h2><p>Taking ideas from first sketch to deployed product.</p></div></Reveal>
          <Reveal className="timeline-wrap"><div className="timeline-line" /><article className="experience-card"><div className="timeline-marker" /><div className="experience-meta"><span>CODERATORY · KARACHI</span><span>SEP 2026 — DEC 2026 · 3 MONTHS</span></div><h3>Full Stack Developer Intern</h3><p className="experience-lead">Designed, built and released Orbito, a real-time collaborative whiteboard, owning the work from discovery to release and further iterations.</p><div className="experience-points"><p>Built live collaboration with Yjs, Hocuspocus and WebSockets, plus shapes, templates, sticky notes and XML save/open.</p><p>Implemented login, signup, Google OAuth, email flows and Zod-validated REST APIs.</p><p>Created an admin observability dashboard; worked through mentor code reviews and deployed with Vercel and Render.</p></div><div className="tag-list"><span>Next.js</span><span>TypeScript</span><span>Node.js</span><span>MongoDB</span><span>Yjs</span><span>WebSockets</span></div></article></Reveal>
        </section>

        <section id="work" className="section page-wrap">
          <Reveal><div className="section-heading"><span className="eyebrow">SELECTED WORK</span><h2>Built to work<br /><em>together.</em></h2><p>Real-time collaboration and the systems that keep it observable.</p></div></Reveal>
          <div className="project-grid">
            <Reveal className="project-card project-featured"><a className="project-image" href="https://whiteboard-orbito.vercel.app" target="_blank" rel="noreferrer"><img src="/assets/orbito-canvas.webp" alt="Orbito collaborative whiteboard with a flowchart, sticky notes and drawing tools" /><span className="image-open">View live ↗</span></a><div className="project-content"><div className="project-index">01 / FLAGSHIP PROJECT</div><h3>Orbito<span> — Real-time collaborative whiteboard</span></h3><p>A shared canvas where up to 25 people can draw together live. Built end to end at Coderatory and reviewed by my mentor.</p><ul className="project-highlights"><li>Up to 25 members collaborating at once</li><li>Shapes, templates, sticky notes and XML board files</li><li>Google OAuth and email authentication</li><li>0% observed error rate on the live deployment</li></ul><div className="tag-list"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Yjs</span><span>Hocuspocus</span><span>MongoDB</span></div><div className="project-links"><a href="https://whiteboard-orbito.vercel.app" target="_blank" rel="noreferrer">Open live project ↗</a><a href="https://github.com/abdullah-jamil355/Whiteboard-Orbito" target="_blank" rel="noreferrer">GitHub ↗</a></div><small className="hosting-note">First load may take a moment (free-tier hosting).</small></div></Reveal>
            <Reveal className="project-card"><a className="project-image" href="https://whiteboard-orbito.vercel.app/observability" target="_blank" rel="noreferrer"><img src="/assets/orbito-dashboard.webp" alt="Orbito observability dashboard showing traffic, latency, error rate and active rooms" /><span className="image-open">View dashboard ↗</span></a><div className="project-content"><div className="project-index">02 / OPERATIONS</div><h3>Orbito Observability Dashboard</h3><p>An admin view for real-time traffic, latency, errors, active collaboration, memory and API performance.</p><ul className="project-highlights"><li>Live request traces and endpoint load</li><li>0% observed error rate</li><li>475.9–832.0 ms observed average latency</li></ul><div className="tag-list"><span>Next.js</span><span>TypeScript</span><span>Node.js</span><span>Telemetry</span></div></div></Reveal>
          </div>
        </section>

        <section id="skills" className="section page-wrap skills-section">
          <Reveal><div className="section-heading"><span className="eyebrow">TOOLS OF THE TRADE</span><h2>My toolkit</h2><p>Tools I use, and the areas I keep exploring.</p></div></Reveal>
          <div className="skill-groups">
            {[["Languages", "TypeScript", "JavaScript", "Python", "Java (core)"], ["Frontend", "React", "Next.js", "Tailwind CSS", "Radix UI", "Shadcn UI", "Custom SVG"], ["Backend & data", "Node.js", "Express", "MongoDB", "Mongoose", "Zod", "Nodemailer", "Google OAuth"], ["Real-time", "Yjs · CRDTs", "Hocuspocus", "WebSockets"], ["AI-assisted development", "Claude", "Codex", "Gemini", "Antigravity", "Agentic AI · in progress"], ["Tools & craft", "GitHub", "Vercel", "Render", "LaTeX", "Ownership", "Fast learner"]].map(([group, ...items]) => <Reveal key={group} className="skill-group"><h3>{group}</h3><div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}
          </div>
        </section>

        <section className="section page-wrap education-section">
          <Reveal><div className="education-panel"><div><span className="eyebrow">FOUNDATION</span><h2>Education</h2><p>Bachelor’s in Software Engineering</p><span className="education-school">Sir Syed University of Engineering &amp; Technology</span></div><div className="education-year">2026<span>GRADUATED</span></div></div></Reveal>
        </section>

        <section id="contact" className="contact-section page-wrap">
          <Reveal><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s make<br /><em>it real.</em></h2><p>Open to internships, full-time roles and remote work. I’d be glad to hear what you’re building.</p><a className="button button-primary contact-cta" href={`mailto:${email}`}>Email Abdullah <span>↗</span></a><div className="contact-links"><a className="contact-icon linkedin-icon" href="https://www.linkedin.com/in/abdullah-jamil-593066222" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" /></svg></a><a className="contact-icon github-icon" href="https://github.com/abdullah-jamil355" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.07c-3.1.67-3.75-1.31-3.75-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.07 1.15a10.66 10.66 0 0 1 5.59 0c2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.34.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9z" /></svg></a><a className="contact-icon whatsapp-icon" href="https://wa.me/923412992721" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></a></div><div className="resume-note">Resume update in progress <span>·</span> check back soon</div></Reveal>
        </section>
      </main>
      <footer className="site-footer page-wrap"><a className="brand" href="#home">Abdullah Jamil<span>.</span></a><span>Designed &amp; built with care · Karachi, Pakistan</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
