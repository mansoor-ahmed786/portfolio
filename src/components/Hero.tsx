import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, Code2, Globe, Github, Linkedin, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ["Next-js Apps", "Full-Stack SaaS", "Digital Experiences", "High-Performance APIs"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 2000;

  // Typing simulator
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  // Mouse interaction for floating abstract card/shapes
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoother movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform coordinates for parallax effect
  const rotateX = useTransform(smoothMouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-15, 15]);
  const floatX = useTransform(smoothMouseX, [-300, 300], [-20, 20]);
  const floatY = useTransform(smoothMouseY, [-300, 300], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative position from center of container (-width/2 to +width/2)
    const relX = e.clientX - rect.left - width / 2;
    const relY = e.clientY - rect.top - height / 2;

    mouseX.set(relX);
    mouseY.set(relY);

    // Update global CSS variables for customized radial laser glow on index.css
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-grid-white"
    >
      {/* Background Interactive Radial Laser Glow */}
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />

      {/* Floating Ambient Aura Nodes */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[130px] animate-pulse-glow-2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-glow-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Columns: Pitch & Hook */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md mb-8"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span>Available for Senior Contracts & Projects</span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[9px] uppercase font-bold">
              EST 2026
            </span>
          </motion.div>

          {/* Typing Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.1]"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Mansoor Ahmed</span>.
            <br />
            I craft Next-Gen
            <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 min-h-[1.2em]">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "steps(2)" }}
                className="absolute ml-1 inline-block w-[4px] h-[0.9em] bg-cyan-400 bottom-[0.1em]"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-xl font-normal leading-relaxed mb-10"
          >
            A senior computer programmer turning complex algorithms, robust backend architectures, and engineering constraints into beautiful, high-performance, pixel-perfect web software.
          </motion.p>

          {/* Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            {/* Pulsing Glowing Button */}
            <a
              href="#projects"
              className="relative group px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 shadow-2xl shadow-cyan-500/20 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Explore Projects
                <span className="font-mono text-xs opacity-70 group-hover:translate-y-0.5 transition-transform">↓</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-55 transition-opacity duration-300 pointer-events-none" />
            </a>

            {/* Glass button */}
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
            >
              Consult Stack
            </a>
          </motion.div>

          {/* Trust/Metric Footer Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs border-t border-white/5 pt-8 w-full"
          >
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack Mastery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Optimized Web Vitals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Modular Architecture</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Floating 3D-like Geometric Abstract Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            style={{ rotateX, rotateY, x: floatX, y: floatY, transformStyle: "preserve-3d" }}
            className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-3xl bg-neutral-950/40 border border-white/10 p-[1.5px] shadow-2xl backdrop-blur-md cursor-grab active:cursor-grabbing group"
          >
            {/* Visual Glass Canvas Inner Layer */}
            <div className="w-full h-full rounded-[22px] bg-neutral-900/40 overflow-hidden flex flex-col justify-between p-6 relative">
              
              {/* Geometric floating matrix dots */}
              <div className="absolute inset-0 bg-grid-white opacity-20" />

              {/* Glowing Ambient Mesh behind shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-[45px] opacity-40 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

              {/* Card top */}
              <div className="flex justify-between items-start z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-2 py-1 rounded bg-black/60 border border-white/10 font-mono text-[9px] text-cyan-400 tracking-wider">
                  SYSTEM_CORE.EXE
                </div>
              </div>

              {/* Middle Element: Floating 3D abstract vector nodes */}
              <div className="flex-1 flex flex-col justify-center items-center z-10 gap-3">
                <div className="relative">
                  {/* Rotating Abstract Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-400/40 flex items-center justify-center"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border border-purple-500/30 flex items-center justify-center"
                  />
                  {/* Glowing core sphere */}
                  <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-400/35">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-mono text-xs text-white tracking-widest font-bold">MANSOOR_AHMED.SH</p>
                  <p className="font-mono text-[9px] text-zinc-500">COMPILER READY_</p>
                </div>
              </div>

              {/* Bottom stats inside terminal card */}
              <div className="p-3 bg-black/50 border border-white/5 rounded-xl z-10 flex items-center justify-between font-mono text-[9px] text-zinc-400">
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-600 font-bold uppercase text-[8px]">LOC</span>
                  <span className="text-cyan-300 font-mono">14K+ Contribs</span>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-600 font-bold uppercase text-[8px]">latency</span>
                  <span className="text-emerald-300">12ms (avg)</span>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-600 font-bold uppercase text-[8px]">compiler</span>
                  <span className="text-purple-300">v4.1.14</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none">
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Scroll Stack</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
}
