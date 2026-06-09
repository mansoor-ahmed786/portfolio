import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, ShieldCheck, Mail, Sparkles, Terminal, ArrowUpRight, 
  MapPin, Clock, ArrowRight, Github, Linkedin, BriefcaseIcon, CheckCircle2 
} from "lucide-react";
import { ContactMessage } from "../types";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "saas", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sandboxMessages, setSandboxMessages] = useState<ContactMessage[]>([]);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message over encrypted websocket
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };

      setSandboxMessages((prev) => [newMessage, ...prev]);
      setIsSubmitting(false);
      setSentSuccessfully(true);
      setFormData({ name: "", email: "", projectType: "saas", message: "" });

      // Reset success message after some delay
      setTimeout(() => setSentSuccessfully(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-grid-white">
      
      {/* Background neon elements */}
      <div className="absolute top-[30%] right-[-100px] w-80 h-80 rounded-full bg-purple-500/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-72 h-72 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-xs font-mono font-bold uppercase text-purple-400 rounded-full mb-4">
            <Mail className="w-3.5 h-3.5" />
            Communications Node
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Initiate a Project Brief
          </h2>
          <p className="text-zinc-400 max-w-xl text-base leading-relaxed">
            Ready to build? Specify your parameters using the live validated brief terminal. Review encrypted logs on submission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Columns: Interactive form panel (8 columns on lg desktop) */}
          <div className="lg:col-span-7 bg-[#05040d]/40 rounded-3xl border border-white/10 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-purple-500/30" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">// SECURE BRIEF TRANSMITTER</span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1 bg-[#030712] px-2.5 py-1 rounded border border-cyan-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  SSL ACTIVE (256-bit)
                </span>
              </div>

              {/* Verified prompt */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="relative">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 font-bold">
                    Client Name
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 p-[1px] ${
                    focusedField === 'name' ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/10' : 'bg-white/10'
                  }`}>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name or firm"
                      className="w-full bg-[#030712] rounded-[11px] px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 font-bold">
                    Email Axis
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 p-[1px] ${
                    focusedField === 'email' ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/10' : 'bg-white/10'
                  }`}>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="entername@business.com"
                      className="w-full bg-[#030712] rounded-[11px] px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Project Brief Category Select dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 font-bold">
                      Brief Target / Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3 text-xs text-zinc-300 focus:outline-none focus:border-cyan-500/40"
                    >
                      <option value="saas">Full-Stack SaaS Hub</option>
                      <option value="nextjs">Premium Next.js App</option>
                      <option value="api">Backend REST / GraphQL API</option>
                      <option value="other">Consultation & Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 font-bold">
                      Timeline Constraints
                    </label>
                    <div className="px-4 py-3 bg-[#030712] border border-white/10 rounded-xl text-xs text-zinc-400 font-mono">
                      Flexible / Agile Loops
                    </div>
                  </div>
                </div>

                {/* Message text area */}
                <div className="relative">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 font-bold">
                    Project Parameters Brief / Description
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 p-[1px] ${
                    focusedField === 'message' ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/10' : 'bg-white/10'
                  }`}>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what we are building, desired features, integration requirements..."
                      className="w-full bg-[#030712] rounded-[11px] px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submission CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-[#030712] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 transition-all font-semibold active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/15"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
                      ENCRYPTING PACKETS...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 fill-current" />
                      TRANSMIT ENCRYPTED BRIEF SECURELY
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Success Alert Banner inside form */}
            <AnimatePresence>
              {sentSuccessfully && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs flex items-center gap-3 font-mono leading-relaxed"
                >
                  <ShieldCheck className="w-6 h-6 shrink-0 text-cyan-400" />
                  <div>
                    <span className="font-bold uppercase tracking-wide text-white block mb-0.5">TRANSMISSION ENCRYPTED & LOGGED</span>
                    Project packet successfully broadcasted on client sandbox socket pool! Check the active inbox stream to the right.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Columns: Simulated Communications Console, occupy 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct contact coordinates card */}
            <div className="bg-[#05040d]/40 rounded-3xl border border-white/10 p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest block mb-4 font-bold">// TRANSMISSION NODES</span>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-mono">DIRECT SMTP PARAMS</div>
                      <a href="mailto:mansoor.aban24@gmail.com" className="text-zinc-200 text-xs hover:text-cyan-400 font-bold transition-colors">
                        mansoor.aban24@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-blue-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-mono">GEOGRAPHICAL AXIS</div>
                      <span className="text-zinc-200 text-xs font-bold font-mono">
                        Global / Remote
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-purple-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-mono">CLIENT LATENCY SYSTEM</div>
                      <span className="text-zinc-200 text-xs font-bold font-mono">
                        GMT UTC-0 (Available 24/7)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic visual sandbox inbox matching client actions */}
            <div className="flex-1 bg-black/40 rounded-3xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">// SECURE EVENT STREAM</span>
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
                
                <div className="space-y-3 font-mono text-[10px] overflow-y-auto max-h-[160px] text-zinc-500">
                  {sandboxMessages.length === 0 ? (
                    <>
                      <p className="flex items-start gap-1">
                        <span className="text-zinc-600">[04:49:50]</span>
                        <span>WEBSOCKET LISTENER ON ROUTER PORT 3000...</span>
                      </p>
                      <p className="flex items-start gap-1">
                        <span className="text-indigo-400">[READY]</span>
                        <span>AWAITING SPONSOR DATA INBOX ACTIONS</span>
                      </p>
                    </>
                  ) : (
                    sandboxMessages.map((msg) => (
                      <div key={msg.id} className="p-3 bg-neutral-950/60 border border-white/5 rounded-xl text-zinc-300">
                        <div className="flex justify-between text-[9px] text-cyan-400 mb-1.5">
                          <span>PARSEDbrief: sender={msg.name}</span>
                          <span>{msg.timestamp}</span>
                        </div>
                        <p className="line-clamp-2 italic leading-relaxed text-zinc-400">// "{msg.message}"</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="p-3 bg-zinc-950/80 rounded-xl border border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono leading-none">
                <span>INBOX CAPTURES</span>
                <span className="text-emerald-400 font-bold">{sandboxMessages.length} packet(s) logged</span>
              </div>
            </div>

          </div>

        </div>

        {/* Floating social link blocks or minimalist references */}
        <hr className="border-white/5 my-16" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 font-mono text-xs">
          <span>© 2026 Mansoor Ahmed. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
