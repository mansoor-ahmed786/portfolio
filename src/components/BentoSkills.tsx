import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, Sparkles, Star, Zap, Cpu, Award, Code, Compass,
  Database, GitFork, Flame, CheckCircle, Activity, LayoutTemplate
} from "lucide-react";
import { Skill } from "../types";

export default function BentoSkills() {
  // Defined Tech Stack list with brand color glows
  const skills: Skill[] = [
    { name: "Next.js", icon: "LayoutTemplate", category: "frontend", proficiency: 94, color: "#ffffff", description: "App Router, SSR, Server Actions, Incremental Static Regeneration." },
    { name: "React", icon: "Cpu", category: "frontend", proficiency: 98, color: "#61dafb", description: "Virtual DOM, Customs Hooks, Context API, Suspense and Transitions." },
    { name: "TypeScript", icon: "Code", category: "frontend", proficiency: 96, color: "#3178c6", description: "Static analysis, interfaces, generic types, strict compilers." },
    { name: "Tailwind CSS", icon: "Zap", category: "frontend", proficiency: 99, color: "#38bdf8", description: "Utility-first CSS, structural responsive grids, customized @theme design tokens." },
    { name: "Node.js", icon: "Database", category: "backend", proficiency: 90, color: "#43853d", description: "Asynchronous runtime, package systems, environment stream management." },
    { name: "Express", icon: "Terminal", category: "backend", proficiency: 92, color: "#2596be", description: "REST APIs, secure routing, CORS proxies, custom modular middlewares." },
    { name: "Vite", icon: "Flame", category: "frontend", proficiency: 95, color: "#ffc517", description: "Ultra-fast bundling, ESmodule compilation, customized plugin systems." }
  ];

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skills[1]);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  // Simulated heat-map data for commitment
  const [commits, setCommits] = useState<number[]>([]);
  useEffect(() => {
    // Generate simulated commits grid (24 cols * 7 rows = 168 cells)
    const initialCommits = Array.from({ length: 168 }, () => Math.floor(Math.random() * 4));
    setCommits(initialCommits);
  }, []);

  const handleHeatmapClick = (index: number) => {
    setCommits((prev) => {
      const updated = [...prev];
      updated[index] = (updated[index] + 1) % 5; // increment commit level
      return updated;
    });
  };

  // Lighthouse vitals state
  const [vitalsProgress, setVitalsProgress] = useState({ performance: 0, seo: 0, accessibility: 0, practices: 0 });
  useEffect(() => {
    const timer = setTimeout(() => {
      setVitalsProgress({ performance: 100, seo: 100, accessibility: 100, practices: 100 });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="bento" className="relative py-24 px-6 bg-transparent border-t border-white/5">
      
      {/* Absolute positioning background decorations */}
      <div className="absolute top-[20%] left-[-100px] w-72 h-72 rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-100px] w-80 h-80 rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold uppercase text-cyan-400 rounded-full mb-4">
            <LayoutTemplate className="w-3.5 h-3.5 animate-spin-slow" />
            Bento Stack Architecture
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            The Engine Behind My Crafts
          </h2>
          <p className="text-zinc-400 max-w-xl text-base">
            An elegant overview of technologies, professional web audit standards, and real-time activity ledgers composing a high-end web experience.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          
          {/* TILE 1 (Large 6-cols, 2-rows high): Interactive Skills Core Stack */}
          <div className="md:col-span-7 md:row-span-2 rounded-3xl bg-neutral-950/40 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
            
            {/* Ambient dynamic hover glow representing brand colors */}
            <div 
              className="absolute inset-x-0 bottom-0 pointer-events-none h-44 opacity-20 blur-3xl transition-colors duration-500"
              style={{
                background: hoveredSkillId 
                  ? `radial-gradient(circle at bottom, ${skills.find(s => s.name === hoveredSkillId)?.color} 0%, transparent 70%)` 
                  : "radial-gradient(circle at bottom, rgba(99, 102, 241, 0.4) 0%, transparent 70%)"
              }}
            />

            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-display font-bold text-lg text-white">Full-Stack Core Stack</h3>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                  Hover Tiles for glows
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed max-w-xl">
                Hover or click over any framework to query active performance metrics and integration coordinates. Built with reactive states and full typescript structure.
              </p>

              {/* Skills Interactive Tiles Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-6">
                {skills.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <motion.button
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkillId(skill.name)}
                      onMouseLeave={() => setHoveredSkillId(null)}
                      onClick={() => setSelectedSkill(skill)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative aspect-square rounded-2xl border transition-all flex flex-col items-center justify-center p-2.5 cursor-pointer ${
                        isSelected 
                          ? "bg-white/15 border-white/35 shadow-lg shadow-white/5" 
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                      style={{
                        boxShadow: hoveredSkillId === skill.name 
                          ? `0 0 15px ${skill.color}33` 
                          : "none"
                      }}
                    >
                      {/* Native Colored Glow Accent Indicator */}
                      <span 
                        className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      
                      {/* Icon mapper placeholder with graceful text */}
                      <span className="font-display font-bold text-lg" style={{ color: skill.color || '#fff' }}>
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="font-mono text-[9px] text-white/80 mt-1.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                        {skill.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Selected Skill Documentation Spec Sheet */}
            <div className="border-t border-white/5 pt-4">
              <AnimatePresence mode="wait">
                {selectedSkill && (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center"
                  >
                    <div className="sm:col-span-1">
                      <div className="font-display font-bold text-sm text-white" style={{ color: selectedSkill.color }}>
                        {selectedSkill.name}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className="flex-1 bg-white/5 rounded-full h-1 overflow-hidden">
                          <div 
                            className="h-full bg-cyan-400 rounded-full transition-all duration-1000"
                            style={{ width: `${selectedSkill.proficiency}%` }}
                          />
                        </div>
                        <span className="font-mono text-[9px] text-zinc-500">{selectedSkill.proficiency}%</span>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <p className="text-[11px] text-zinc-400 italic font-mono leading-relaxed bg-black/40 border border-white/5 p-2 rounded-xl">
                        // {selectedSkill.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* TILE 2 (Medium 5-cols, 1-row high): Senior Developer coordinates */}
          <div className="md:col-span-5 rounded-3xl bg-neutral-950/40 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full" />
            
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-400" />
                <h3 className="font-display font-bold text-base text-white">Developer Coordinates</h3>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[9px]">
                ENV_VARS
              </span>
            </div>

            <div className="font-mono text-[11px] text-zinc-400 space-y-1.5 my-3">
              <p><span className="text-zinc-600">const</span> developer = <span className="text-cyan-400">"Mansoor Ahmed"</span>;</p>
              <p><span className="text-zinc-600">const</span> status = <span className="text-amber-300">"Senior Computer Programmer"</span>;</p>
              <p><span className="text-zinc-600">const</span> focus = [<span className="text-emerald-400">"SaaS"</span>, <span className="text-purple-400">"WebPerf"</span>, <span className="text-indigo-400">"Algorithms"</span>];</p>
              <p><span className="text-zinc-600">const</span> loves = <span className="text-pink-400">"Full-stack code aesthetics"</span>;</p>
            </div>

            <div className="flex items-center gap-2 border-t border-white/5 pt-3">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-[10px] text-zinc-500">Senior engineer designing high-performance software systems.</span>
            </div>
          </div>

          {/* TILE 3 (Medium 5-cols, 1-row high): Lighthouse Web Audits Gauges */}
          <div className="md:col-span-5 rounded-3xl bg-neutral-950/40 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
            
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                <h3 className="font-display font-bold text-base text-white">Lighthouse Performance Audit</h3>
              </div>
              <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                <CheckCircle className="w-3 h-3" />
                <span>VERIFIED</span>
              </div>
            </div>

            {/* High-end SVG circular audit gauges */}
            <div className="grid grid-cols-4 gap-2 items-center justify-center my-2 text-center">
              {[
                { name: "Perf", score: vitalsProgress.performance, accent: "#10b981" },
                { name: "SEO", score: vitalsProgress.seo, accent: "#10b981" },
                { name: "BestPrac", score: vitalsProgress.practices, accent: "#10b981" },
                { name: "Access", score: vitalsProgress.accessibility, accent: "#10b981" }
              ].map((vital) => (
                <div key={vital.name} className="flex flex-col items-center gap-1.5">
                  <div className="relative w-12 h-12">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle 
                        cx="24" cy="24" r="20" 
                        className="stroke-white/5" 
                        strokeWidth="2.5" 
                        fill="transparent" 
                      />
                      <circle 
                        cx="24" cy="24" r="20" 
                        className="transition-all duration-1000 ease-out" 
                        strokeWidth="3" 
                        stroke={vital.accent} 
                        strokeDasharray={2 * Math.PI * 20}
                        strokeDashoffset={2 * Math.PI * 20 * (1 - vital.score / 100)}
                        strokeLinecap="round" 
                        fill="transparent" 
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white font-bold">
                      {vital.score}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">{vital.name}</span>
                </div>
              ))}
            </div>

            <p className="font-mono text-[9px] text-zinc-500 text-center uppercase tracking-widest leading-none">
              Optimization score target: 100% Core Web Vitals
            </p>
          </div>

          {/* TILE 4 (Wide 12-cols, 1-row high): Interactive Commit Heatmap */}
          <div className="md:col-span-12 rounded-3xl bg-neutral-950/40 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <GitFork className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="font-display font-bold text-base text-white">Full-Stack Commitment Ledger</h3>
                  <p className="text-[10px] text-zinc-400 font-mono">
                    Interactive Simulated Commit Heatmap. Click cells to log commits live inside this sandbox!
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500 bg-white/5 px-2.5 py-1 rounded-xl border border-white/5">
                <span>Color Scale:</span>
                <div className="w-2.5 h-2.5 rounded bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded bg-cyan-950" />
                <div className="w-2.5 h-2.5 rounded bg-cyan-700" />
                <div className="w-2.5 h-2.5 rounded bg-cyan-400" />
                <div className="w-2.5 h-2.5 rounded bg-cyan-300" />
              </div>
            </div>

            {/* Simulated Git Commits Cells Matrix */}
            <div className="flex-1 overflow-x-auto pb-2 flex items-center justify-start sm:justify-center">
              <div className="grid grid-flow-col grid-rows-7 gap-[2px] min-w-[700px] sm:min-w-0">
                {commits.map((level, index) => {
                  let colorClass = "bg-zinc-800/40 hover:bg-zinc-700";
                  if (level === 1) colorClass = "bg-cyan-950/60 hover:bg-cyan-900";
                  if (level === 2) colorClass = "bg-cyan-700/60 hover:bg-cyan-600";
                  if (level === 3) colorClass = "bg-cyan-400/80 hover:bg-cyan-300";
                  if (level === 4) colorClass = "bg-[#22d3ee] shadow-sm shadow-[#22d3ee]/20 hover:bg-cyan-200";

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleHeatmapClick(index)}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      className={`w-3.5 h-3.5 rounded-[2px] transition-colors cursor-crosshair ${colorClass}`}
                      title={`Activity level: ${level} (Click to record commit)`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-zinc-600 font-mono pt-2">
              <span>Nov 2025</span>
              <span>Jan 2026</span>
              <span>Mar 2026</span>
              <span>May 2026 (Live Now)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
