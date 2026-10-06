"use client";
import { useEffect, useState } from "react";

const roles = [
  "Senior Frontend Engineer",
  "React & Next.js Developer",
  "AI Agent Builder",
  "React Native Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Animated floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { w: 4, l: 10, t: 20, dur: 12, delay: 0 },
          { w: 6, l: 25, t: 60, dur: 9, delay: 1 },
          { w: 3, l: 40, t: 15, dur: 14, delay: 2 },
          { w: 5, l: 55, t: 75, dur: 10, delay: 0.5 },
          { w: 4, l: 70, t: 35, dur: 11, delay: 3 },
          { w: 7, l: 85, t: 55, dur: 8, delay: 1.5 },
          { w: 3, l: 15, t: 80, dur: 13, delay: 2.5 },
          { w: 5, l: 60, t: 45, dur: 9, delay: 4 },
          { w: 4, l: 90, t: 20, dur: 15, delay: 0.8 },
          { w: 6, l: 35, t: 90, dur: 10, delay: 3.5 },
          { w: 3, l: 78, t: 10, dur: 12, delay: 1.2 },
          { w: 5, l: 48, t: 65, dur: 11, delay: 2.8 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500/20"
            style={{
              width: `${dot.w}px`,
              height: `${dot.w}px`,
              left: `${dot.l}%`,
              top: `${dot.t}%`,
              animation: `float ${dot.dur}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="animate-fade-in-up">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
            <span className="text-white font-bold text-2xl">MA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 tracking-tight">
            Madhuveeraprasath<br />
            <span className="text-slate-300">Anguraj</span>
          </h1>

          <div className="flex items-center gap-2 h-10 mb-6">
            <span className="text-xl sm:text-2xl font-medium text-orange-400">{displayed}</span>
            <span className="w-0.5 h-6 bg-orange-400 animate-blink" />
          </div>

          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10">
            5+ years building high-performance web & mobile apps across SaaS, EdTech & B2B.
            I turn complex problems into fast, scalable products — and build AI tools that accelerate engineering teams.
          </p>


          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              View Experience
            </a>
            <a
              href="https://linkedin.com/in/madhuveeraprasath"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/madhuveeraprasath-a"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/40 text-slate-300 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
