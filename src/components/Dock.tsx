import { motion } from "motion/react";
import { 
  Home, Grid, Briefcase, Mail, Github, Linkedin, Sparkles, FileText 
} from "lucide-react";

interface DockProps {
  onOpenResume: () => void;
}

export default function Dock({ onOpenResume }: DockProps) {
  const dockItems = [
    { label: "Home", icon: Home, href: "#hero", color: "text-cyan-400" },
    { label: "Bento Stack", icon: Grid, href: "#bento", color: "text-indigo-400" },
    { label: "SaaS Projects", icon: Briefcase, href: "#projects", color: "text-blue-400" },
    { label: "Brief Panel", icon: Mail, href: "#contact", color: "text-purple-400" },
    { label: "Interactive Resume", icon: FileText, onClick: onOpenResume, color: "text-yellow-400" },
    { label: "GitHub Hub", icon: Github, href: "https://github.com", target: "_blank", color: "text-neutral-300" },
    { label: "LinkedIn Connect", icon: Linkedin, href: "https://linkedin.com", target: "_blank", color: "text-sky-400" }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-55 pointer-events-none w-full max-w-lg px-4">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className="mx-auto flex items-center justify-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#05040d]/80 border border-white/10 backdrop-blur-xl shadow-2xl pointer-events-auto"
      >
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          
          if (item.onClick) {
            return (
              <motion.button
                key={idx}
                onClick={item.onClick}
                whileHover={{ y: -8, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/15 hover:border-white/20 transition-colors cursor-pointer group ${item.color}`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                {/* Micro tooltip label */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 border border-white/10 text-[9px] font-mono text-zinc-300 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </motion.button>
            );
          }

          return (
            <motion.a
              key={idx}
              href={item.href}
              target={item.target}
              rel="noreferrer"
              whileHover={{ y: -8, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/15 hover:border-white/20 transition-colors group ${item.color}`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
              {/* Micro tooltip label */}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 border border-white/10 text-[9px] font-mono text-zinc-300 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
