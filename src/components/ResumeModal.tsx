import { motion, AnimatePresence } from "motion/react";
import { 
  X, Briefcase, GraduationCap, Award, Cpu, Download, Sparkles, CheckCircle2, Server, Globe 
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Simulated visual resume mock PDF downloader
  const handleDownload = () => {
    // Generate a funny browser alerts or simple automated downloading prompt simulated nicely
    const element = document.createElement("a");
    const file = new Blob([
      `======================================================
MANSOOR AHMED - SENIOR FULL-STACK SOFTWARE ENGINEER
======================================================
Contact: mansoor.aban24@gmail.com
Status: Senior Computer Programmer
Focus: Next.js, React, TypeScript, Tailwind, Node.js, Distributed Systems

EXPERTISE & SYSTEM CORE:
- Senior Computer Programmer / Architect
  Focus: Custom SaaS Architecture, Distributed Pipelines, Enterprise Web Performance

VERIFIED CORE CAPABILITIES:
- Frontend: React, TypeScript, Next.js, Vite, Tailwind CSS, Advanced State Management
- Backend & DB: Node.js, Express, REST APIs, JSON integration, Database Scalability
- Workflow Systems: Git, WebSockets, Performance audits, CI/CD pipelines

STITCHED WITH PRISTINE LIGHTHOUSE METRICS targets:
100% Performance | 100% SEO | 100% Best Practices

Portfolio URL: https://mansoorahmed.dev
======================================================`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Mansoor_Ahmed_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          {/* Backdrop screen filter lock overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020108]/90 backdrop-blur-md"
          />

          {/* Core Window Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-3xl h-[85vh] bg-[#090815] border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-2xl z-20 text-zinc-300"
          >
            {/* Header toolbar */}
            <div className="px-6 py-4 bg-[#05040d] border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <h3 className="font-display font-black text-white text-lg tracking-tight">
                  Interactive Curricula Vitae
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 text-[#030712] font-mono text-xs font-bold leading-none flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  GENERATE PDF
                </button>
                <button
                  onClick={onClose}
                  className="p-1 rounded bg-white/5 text-zinc-400 hover:text-white"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Scrollable Curriculum Vitae Layout split */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              
              {/* Header profile banner */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
                <div>
                  <h4 className="font-display font-black text-2xl text-white">Mansoor Ahmed</h4>
                  <p className="text-cyan-400 font-mono text-xs mt-1">Senior Computer Programmer & SaaS Architect</p>
                </div>
                <div className="text-[10px] font-mono text-zinc-400 text-left sm:text-right">
                  <p>EMAIL: mansoor.aban24@gmail.com</p>
                  <p>WEBSITE: https://mansoorahmed.dev</p>
                </div>
              </div>

              {/* Core Experience/Milestones module */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <h5 className="font-display font-bold text-white text-base">Key Technical Accomplishments</h5>
                </div>
                
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-[#090815]" />
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1.5">
                      <h6 className="font-bold text-white text-sm">Full-Stack SaaS Integrations</h6>
                      <span className="font-mono text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded">2024 - 2026</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Designed and built modular client-server web apps using Next.js (App Router), Node, and Vite. Integrated secure REST proxy APIs, cached state models with Zustand/Redux, and implemented custom token middleware for strict session access.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-[#090815]" />
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1.5">
                      <h6 className="font-bold text-white text-sm">Web Performance Audits & Optimization</h6>
                      <span className="font-mono text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded">2025 - Active</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Optimized web assets for maximum Lighthouse Web Vitals target output. Handled code-splitting routes, image compression wrappers, lazy-loading states, and CSS/JS code stripping inside Vite configs, achieving persistent 100% SEO and best practices benchmarks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic & Professional Foundations Module */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <h5 className="font-display font-bold text-white text-base">Professional Foundations & Expertise</h5>
                </div>
                
                <div className="space-y-4">
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#090815]" />
                    <div className="flex justify-between items-center mb-1">
                      <h6 className="font-bold text-white text-sm">Computer Programming & Engineering</h6>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase bg-white/5 px-2 py-0.5 rounded">Credentials</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Backed by rigorous computer science foundations and persistent architectural expertise. Specializes in: Advanced Algorithms, High-Scalability Database Relationships, Object-Oriented/Functional paradigms, and secure fault-tolerant distributed communication networks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Proficiencies Badge Summary */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <h5 className="font-display font-bold text-white text-base">Verified Tech Matrix</h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  
                  {/* Frontend */}
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                    <span className="text-cyan-400 uppercase tracking-widest text-[10px] font-bold block mb-2 flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" />
                      Client layer
                    </span>
                    <ul className="space-y-1.5 text-zinc-400">
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" /> React 18 / 19</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" /> Next.js (App Router)</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" /> TypeScript</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" /> Tailwind v4</li>
                    </ul>
                  </div>

                  {/* Backend */}
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                    <span className="text-indigo-400 uppercase tracking-widest text-[10px] font-bold block mb-2 flex items-center gap-1">
                      <Server className="w-3.5 h-3.5" />
                      Server layer
                    </span>
                    <ul className="space-y-1.5 text-zinc-400">
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0" /> Node.js Environment</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0" /> Express server routing</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0" /> REST / API endpoints</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0" /> JSON structures</li>
                    </ul>
                  </div>

                  {/* Other */}
                  <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                    <span className="text-purple-400 uppercase tracking-widest text-[10px] font-bold block mb-2 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Core standards
                    </span>
                    <ul className="space-y-1.5 text-zinc-400">
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" /> Git Source Control</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" /> Websocket Emulation</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" /> Performance Optimization</li>
                      <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" /> Modular structures</li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
