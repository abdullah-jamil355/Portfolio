"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#16060e]/85 dark:bg-[#16060e]/85 light:bg-[#faf5ee]/90 backdrop-blur-md border-b border-[var(--line)] py-3 shadow-lg"
          : "bg-transparent py-5 border-b border-[var(--line)]/50"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="font-serif italic font-bold text-xl md:text-2xl text-[var(--gold)] tracking-tight hover:opacity-90 transition-opacity flex items-center gap-1.5"
          aria-label="Abdullah Jamil - Back to top"
        >
          <span>Abdullah Jamil</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[var(--mute)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[var(--gold)] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Quick CTA */}
          <a
            href="mailto:muhammadabdullah53a@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-[var(--line)] hover:border-[var(--gold)] text-[var(--ivory)] hover:text-[var(--gold)] transition-all duration-300"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--gold)]" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title="Toggle appearance theme"
            className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all duration-300"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--gold)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#16060e] dark:bg-[#16060e] light:bg-[#faf5ee] border-b border-[var(--line)] px-6 py-6 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-[var(--mute)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[var(--gold)] py-1.5 border-b border-[var(--line)]/30 flex justify-between items-center"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--gold)]">✦</span>
              </a>
            ))}
            <a
              href="mailto:muhammadabdullah53a@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-[var(--gold)] text-[#16060e] font-semibold text-sm"
            >
              Email Abdullah
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
