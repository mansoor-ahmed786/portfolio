import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, Github, Code2, Play, Cpu, Sparkles, X, 
  Send, RefreshCw, Terminal, CheckCircle2, AlertTriangle, BarChart3, ArrowRight
} from "lucide-react";
import { Project } from "../types";

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  // Specific premium projects list
  const projects: Project[] = [
    {
      id: "pulsesaas",
      title: "PulseSaaS - AI-Driven Operations Hub",
      description: "A comprehensive operations hub that visualizes live cloud nodes and uses Gemini AI to orchestrate serverless API middleware loads.",
      category: "Full-Stack SaaS",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Gemini API"],
      liveUrl: "#",
      sourceUrl: "https://github.com",
      performanceScore: 100,
      seoScore: 98,
      accessibilityScore: 97,
      bestPracticesScore: 100,
      features: ["Server Actions", "Edge Middleware", "Auth.js", "Zustand State Engine"],
      mockAppType: "saas"
    },
    {
      id: "novaterminal",
      title: "NovaTerminal - Cloud Web Shell",
      description: "An interactive in-browser shell container mimicking Linux kernels to compile typescript, examine JSON logs, and test server endpoints.",
      category: "Productivity Tool",
      tags: ["React", "Express", "Xterm.js", "Vite", "WebSockets"],
      liveUrl: "#",
      sourceUrl: "https://github.com",
      performanceScore: 98,
      seoScore: 100,
      accessibilityScore: 96,
      bestPracticesScore: 100,
      features: ["Custom Stream Pipes", "Process Isolations", "Pty Terminals", "Gzip Packers"],
      mockAppType: "terminal"
    },
    {
      id: "orbitchat",
      title: "OrbitChat - Secure Encrypted Chat",
      description: "A super-fast instant-messaging protocol using end-to-end symmetric keys, customizable client spaces, and funny bot microservices.",
      category: "Social Platform",
      tags: ["React", "Typescript", "WebRTC", "Framer Motion", "Tailwind"],
      liveUrl: "#",
      sourceUrl: "https://github.com",
      performanceScore: 99,
      seoScore: 96,
      accessibilityScore: 100,
      bestPracticesScore: 98,
      features: ["Symmetric Cryptography", "Media Streams", "Lazy Loading Room States", "Sound feedback loops"],
      mockAppType: "chat"
    },
    {
      id: "nexusmetrics",
      title: "NexusMetrics - Optimization Monitor",
      description: "A real-time telemetry analyzer parsing API workloads, checking server response latency, and suggesting edge route cache strategies.",
      category: "Developer Tool",
      tags: ["Next.js", "D3.js", "Tailwind", "CSS Grid", "PostgreSQL"],
      liveUrl: "#",
      sourceUrl: "https://github.com",
      performanceScore: 100,
      seoScore: 100,
      accessibilityScore: 98,
      bestPracticesScore: 100,
      features: ["Static site generation", "Incremental Static Regeneration", "Tailwind Variables", "Dynamic SVG renderers"],
      mockAppType: "analytics"
    }
  ];

  // Live simulation states
  const [activeTab, setActiveTab] = useState<string>("overview");
  
  // Terminal simulation states
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "NOVA CORE ENVIRONMENT READY v2.1.0",
    "Welcome, Mansoor. Type 'help' to review shell commands.",
    "guest@novashell:~$ "
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const command = terminalInput.trim().toLowerCase();
    let reply = `Command not recognized: '${command}'. Type 'help' for valid options.`;

    if (command === "help") {
      reply = "Available commands:\n  help        - Review interactive commands.\n  skills      - Query Mansoor's verified core stack.\n  projects    - List his commercial-grade projects.\n  clear       - Wipe the shell workspace.\n  system      - Diagnostics logs of server container stats.";
    } else if (command === "skills") {
      reply = "Mansoor's Tech Matrix:\n  - FRONTEND : Next.js, React, TypeScript, Tailwind CSS, Vite\n  - BACKEND  : Node.js, Express, REST APIs, JSON integration\n  - SYSTEMS  : Git, Server Actions, Middleware Architecture";
    } else if (command === "projects") {
      reply = "Commercial-grade creations:\n  1. PulseSaaS      - Complete AI telemetry orchestrator\n  2. NovaTerminal    - Modern terminal developer prompt\n  3. OrbitChat      - High speed cryptography messenger\n  4. NexusMetrics   - Lighthouse and web vital scorecard tracker";
    } else if (command === "system") {
      reply = "DIAGNOSTICS:\n  - Container  : Cloud Run Instance\n  - Language   : TypeScript / Node ESM\n  - Optimization: 100% Core Web Vitals target reached\n  - Latency    : 14ms ping verified\n  - Security   : Strict CSP and SSL modules loaded";
    } else if (command === "clear") {
      setTerminalLogs(["guest@novashell:~$ "]);
      setTerminalInput("");
      return;
    }

    setTerminalLogs((prev) => [
      ...prev.slice(0, -1),
      `guest@novashell:~$ ${terminalInput}`,
      reply,
      "guest@novashell:~$ "
    ]);
    setTerminalInput("");
  };

  // Chat simulation states
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot', text: string, time: string }>>([
    { sender: 'bot', text: "Hello! I'm Mansoor's AI Representative. What kind of software widget are we building today?", time: "12:00 PM" }
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setChatInput("");
    setIsBotTyping(true);

    setTimeout(() => {
      let botReply = "That sounds awesome! Mansoor has substantial experience building scalable full-stack projects in React, Next.js, and Node.js. He would be happy to discuss collaborating on this!";
      
      const lower = userMsg.toLowerCase();
      if (lower.includes("hire") || lower.includes("job") || lower.includes("contract")) {
        botReply = "Excellent! Mansoor is fully available for senior programming contracts and full-time senior engineering positions. He has mastered complex app architecture, API scaling, and high-performance states. Check out his contact panel below or send him an email!";
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("budget")) {
        botReply = "He treats all projects on a custom basis depending on performance demands and API scaling complexities. Let's arrange a direct call in the contact area!";
      } else if (lower.includes("next.js") || lower.includes("react")) {
        botReply = "Mansoor relies strongly on clean modular functional components, App Router, React Server Actions, and high-performance Tailwind tokens. Excellent choice.";
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setIsBotTyping(false);
    }, 1500);
  };

  // SaaS simulated stats
  const [saasAlert, setSaasAlert] = useState(false);
  const [saasNodes, setSaasNodes] = useState([
    { name: "AP-East Edge", status: "online", load: 24 },
    { name: "US-West Host", status: "online", load: 45 },
    { name: "EU-Central Node", status: "critical", load: 89 }
  ]);

  const toggleSaasNode = (index: number) => {
    setSaasNodes((prev) => {
      const updated = [...prev];
      updated[index].status = updated[index].status === "online" ? "offline" : "online";
      updated[index].load = updated[index].status === "online" ? Math.floor(Math.random() * 40 + 10) : 0;
      return updated;
    });
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#030712]/40 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold uppercase text-blue-400 rounded-full mb-4">
              <Code2 className="w-3.5 h-3.5" />
              Interactive Work Showcase
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Premium Software Projects
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              These details aren't just mockup screenshots. Select "Live Interactive Preview" to boot real simulations of state engines, sockets, and shells inside our sandboxed app iframe!
            </p>
          </div>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest bg-white/5 border border-white/5 p-3 rounded-2xl">
            // Click visual sandbox triggers
          </span>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-3xl bg-neutral-950/40 border border-white/10 hover:border-cyan-500/30 overflow-hidden backdrop-blur-md flex flex-col justify-between"
            >
              {/* Card top gradient line styling */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500/0 via-blue-500/30 to-purple-500/0 group-hover:via-cyan-400 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500" />
              
              <div className="p-6 sm:p-8">
                {/* Category & Stats link */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 border border-white/5">
                    {project.category}
                  </span>
                  
                  {/* Performance indicator dot */}
                  <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                      Lighthouse Performance: {project.performanceScore}%
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-[10px] font-mono text-zinc-300 border border-white/5 group-hover:border-cyan-500/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CARD SLIDE-UP SPECIFICATIONS PANEL ON HOVER */}
              <div className="relative overflow-hidden border-t border-white/5 bg-black/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Sliding specifications indicator */}
                <div className="flex flex-col gap-1 items-start text-left">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Specs Checklist:</span>
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs text-zinc-400">
                    {project.features.map((feature) => (
                      <span key={feature} className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span className="font-mono text-[10px]">{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons with nice layouts */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="relative flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Live Preview
                  </button>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* REVOLUTIONARY LIVE SANDBOX POPUP PANEL/MODAL FOR ACTIVE PROJECT */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Dark Overlay Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-[#020108]/90 backdrop-blur-md"
              />

              {/* Sandbox Card Window Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                className="relative w-full max-w-4xl h-[85vh] md:h-[75vh] bg-[#090815] border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-2xl z-10"
              >
                {/* Simulated Web Browser Border/Toolbar */}
                <div className="px-6 py-4 bg-[#05040d] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Fake mac OS visual elements */}
                    <button 
                      onClick={() => setActiveProject(null)}
                      className="w-3.5 h-3.5 rounded-full bg-rose-500/90 flex items-center justify-center text-[8px] text-rose-950 font-bold hover:text-white"
                      title="Close"
                    >
                      ×
                    </button>
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/90" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/90" />
                    
                    {/* Simulated visual domain/URL address bar */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-xl text-[10px] font-mono text-zinc-400 w-80 ml-4 overflow-hidden truncate">
                      <span className="text-zinc-600">https://</span>
                      <span>{activeProject.id}.mansoorahmed.dev/sandbox</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded bg-[#030712] border border-cyan-500/20">
                      INTERACTIVE SANDBOX EMULATION
                    </span>
                    <button
                      onClick={() => setActiveProject(null)}
                      className="p-1 rounded bg-white/5 text-zinc-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Middle workspace: Splits specs audit and visual play sandbox */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
                  
                  {/* Left Specs List, occupying 4 columns on desktop */}
                  <div className="md:col-span-4 bg-[#05040d]/50 p-6 border-r border-white/10 overflow-y-auto flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-2 font-bold">
                        SYSTEM SPECS REPORT
                      </span>
                      <h4 className="font-display font-black text-xl text-white mb-4 leading-snug">
                        {activeProject.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                        {activeProject.description}
                      </p>

                      <hr className="border-white/5 mb-6" />

                      {/* Tech Specifications and web vitals metrics */}
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-bold">
                        Lighthouse Audit Scores:
                      </span>
                      <div className="space-y-3 mb-6 font-mono text-xs">
                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>Optimization / Speed</span>
                            <span className="text-emerald-400 font-bold">{activeProject.performanceScore}%</span>
                          </div>
                          <div className="bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${activeProject.performanceScore}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>Best Server Practices</span>
                            <span className="text-emerald-400 font-bold">{activeProject.bestPracticesScore}%</span>
                          </div>
                          <div className="bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${activeProject.bestPracticesScore}%` }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-zinc-400 mb-1">
                            <span>SEO Optimization</span>
                            <span className="text-emerald-400 font-bold">{activeProject.seoScore}%</span>
                          </div>
                          <div className="bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${activeProject.seoScore}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Source Code redirect action button */}
                    <div className="pt-4 border-t border-white/5">
                      <a
                        href={activeProject.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 rounded-xl border border-white/10 hover:border-cyan-500/20 text-xs text-center font-mono hover:text-white text-zinc-400 transition-all flex items-center justify-center gap-1.5 bg-neutral-950/60"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Explore Repository
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Sandbox Workspace: interactive simulations, occupying 8 columns */}
                  <div className="md:col-span-8 bg-[#030712] overflow-y-auto flex flex-col">
                    
                    {/* WORKSPACE PREVIEW 1: TERMINAL APP TYPE */}
                    {activeProject.mockAppType === "terminal" && (
                      <div className="flex-1 flex flex-col font-mono text-xs p-6 text-zinc-300">
                        <div className="flex-1 bg-[#05040d] border border-white/10 rounded-2xl p-5 overflow-y-auto min-h-[250px] space-y-2">
                          <div className="text-zinc-600 block mb-2">// Active isolated terminal sandbox container. Type commands to run diagnostic logic.</div>
                          {terminalLogs.map((log, index) => (
                            <pre key={index} className="whitespace-pre-wrap leading-relaxed select-text">
                              {log}
                            </pre>
                          ))}
                        </div>
                        <form onSubmit={handleTerminalSubmit} className="mt-4 flex items-center gap-2">
                          <span className="text-emerald-400">guest@novashell:~$</span>
                          <input
                            type="text"
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                            placeholder="Type 'help' and press Enter..."
                            className="flex-1 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl font-mono text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/40"
                            maxLength={40}
                          />
                          <button
                            type="submit"
                            className="p-2 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs"
                          >
                            RUN
                          </button>
                        </form>
                      </div>
                    )}

                    {/* WORKSPACE PREVIEW 2: CHAT PLATFORM TYPE */}
                    {activeProject.mockAppType === "chat" && (
                      <div className="flex-1 flex flex-col p-6 overflow-hidden">
                        {/* Chat History Frame */}
                        <div className="flex-1 bg-[#05040d] border border-white/10 rounded-2xl p-4 overflow-y-auto space-y-3.5 min-h-[250px] flex flex-col">
                          {chatMessages.map((msg, idx) => (
                            <div
                              key={idx}
                              className={`flex flex-col max-w-[80%] ${
                                msg.sender === 'user' ? "self-end items-end" : "self-start items-start"
                              }`}
                            >
                              <div
                                className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                                  msg.sender === 'user'
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-none"
                                    : "bg-white/5 text-zinc-300 border border-white/5 rounded-tl-none"
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className="text-[9px] text-zinc-600 font-mono mt-1">{msg.time}</span>
                            </div>
                          ))}
                          {isBotTyping && (
                            <div className="self-start items-start max-w-[80%]">
                              <div className="p-3 bg-white/5 rounded-2xl text-xs text-zinc-500 italic flex items-center gap-1.5 uppercase font-mono">
                                <RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />
                                Bot preparing spec metrics...
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Interactive chat form */}
                        <form onSubmit={handleChatSubmit} className="mt-4 flex gap-2">
                          <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Ask about my expertise: 'hire', 'react', 'budget'..."
                            className="flex-1 bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500/40"
                            maxLength={80}
                          />
                          <button
                            type="submit"
                            className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </form>
                      </div>
                    )}

                    {/* WORKSPACE PREVIEW 3: SAAS INTERFACE SYSTEM TYPE */}
                    {activeProject.mockAppType === "saas" && (
                      <div className="flex-1 flex flex-col p-6 space-y-4 text-xs">
                        
                        {/* Telemetry diagnostics header */}
                        <div className="p-4 bg-[#05040d] border border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-2.5">
                            <Cpu className="w-4 h-4 text-cyan-400" />
                            <div>
                              <div className="font-bold text-white font-mono uppercase text-[10px]">GEMINI CORE MIDDLEWARE LOAD</div>
                              <div className="text-[10px] text-zinc-500 font-mono">Status: Edge Clusters healthy</div>
                            </div>
                          </div>
                          <button
                            onClick={() => setSaasAlert(!saasAlert)}
                            className={`p-2.5 px-4 rounded-xl font-mono uppercase text-[9px] transition-all font-bold ${
                              saasAlert 
                                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40" 
                                : "bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10"
                            }`}
                          >
                            {saasAlert ? "● TRIGGER CRITICAL WARN" : "Trigger Mock ServerAlert"}
                          </button>
                        </div>

                        {/* Active server cluster simulation nodes */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                          {saasNodes.map((node, index) => (
                            <div key={node.name} className="p-4 bg-neutral-950/80 border border-white/10 rounded-2xl flex flex-col justify-between h-28">
                              <div className="flex justify-between items-start">
                                <span className="font-mono text-[10px] text-zinc-400 font-bold">{node.name}</span>
                                <span className={`w-2 h-2 rounded-full ${node.status === 'online' ? 'bg-emerald-400' : 'bg-rose-500 animate-pulse'}`} />
                              </div>
                              <div className="flex justify-between items-end">
                                <div>
                                  <div className="text-[9px] text-zinc-600 font-mono">ACTIVE CPU</div>
                                  <div className="font-mono text-sm text-white font-black">{node.load}%</div>
                                </div>
                                <button
                                  onClick={() => toggleSaasNode(index)}
                                  className="text-[9px] font-mono text-cyan-400 hover:underline bg-white/5 px-2 py-1 rounded"
                                >
                                  {node.status === 'online' ? 'Kill Node' : 'Start Node'}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Visual graph container placeholder */}
                        <div className="flex-1 bg-[#05040d] border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[160px]">
                          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                            <span>MOCK NETWORK THROUGHPUT</span>
                            <span className="text-cyan-400">Stable @ 12,000 req/sec</span>
                          </div>
                          
                          {/* Live animated SVG curve path mapping the telemetry data */}
                          <div className="h-24 w-full relative flex items-end">
                            <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {/* Filled shape */}
                              <path 
                                d={`M 0 100 L 0 80 Q 50 10, 100 60 T 200 80 T 300 30 T 400 60 L 400 100 Z`}
                                fill="url(#curveGrad)"
                              />
                              {/* Outline strokes */}
                              <path 
                                d={`M 0 80 Q 50 10, 100 60 T 200 80 T 300 30 T 400 60`}
                                fill="none"
                                stroke="#22d3ee"
                                strokeWidth="2.5"
                              />
                            </svg>
                          </div>

                          <div className="flex justify-between items-center font-mono text-[9px] text-zinc-600 uppercase">
                            <span>00:00 UTC</span>
                            <span>08:00 UTC</span>
                            <span>16:00 UTC (Current)</span>
                          </div>
                        </div>

                        {saasAlert && (
                          <div className="p-3 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-xl flex items-center gap-2 font-mono text-[10px]">
                            <AlertTriangle className="w-4 h-4" />
                            <span>NODE EU-CENTRAL REPORTING CRITICAL: Load exceeding threshold limits. Consider horizontal scaling.</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* WORKSPACE PREVIEW 4: OPTIMIZATION MONITOR ANALYTICS */}
                    {activeProject.mockAppType === "analytics" && (
                      <div className="flex-1 flex flex-col p-6 space-y-4">
                        <div className="flex-1 bg-[#05040d] border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[250px]">
                          <div>
                            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mb-3 uppercase tracking-widest font-bold">
                              <span className="flex items-center gap-1">
                                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                                Route Analyzer Simulator
                              </span>
                              <span className="text-zinc-500">Diagnostics: Active</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed mb-4 font-mono">// This tool measures the latency savings made by Next.js Incremental Static Regeneration (ISR).</p>
                          </div>

                          <div className="space-y-4">
                            {[
                              { route: "/api/products (No Cache)", latency: 450, color: "bg-amber-500" },
                              { route: "/api/user-profile (No Cache)", latency: 310, color: "bg-indigo-500" },
                              { route: "/api/blog (Mansoor's Next.js ISR Optimized)", latency: 14, color: "bg-emerald-400" }
                            ].map((bar) => (
                              <div key={bar.route} className="font-mono text-[10px]">
                                <div className="flex justify-between mb-1.5 text-zinc-300">
                                  <span>{bar.route}</span>
                                  <span className="font-bold">{bar.latency}ms latency</span>
                                </div>
                                <div className="bg-white/5 h-2 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full ${bar.color} rounded-full`}
                                    style={{ width: `${(bar.latency / 450) * 100}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="p-3.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-300 text-[10px] font-mono leading-relaxed mt-4">
                            💡 **Optimization Takeaway**: By migrating dynamic routes from traditional server side execution to Next.js ISR and Edge Cache, we reduce latency by over **96%**!
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
