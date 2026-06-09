import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoSkills from "./components/BentoSkills";
import PortfolioShowcase from "./components/PortfolioShowcase";
import ContactSection from "./components/ContactSection";
import Dock from "./components/Dock";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-y-auto text-zinc-100 flex flex-col justify-between">
      {/* Absolute positioning overall accent glows container */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/0 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[600px] bg-gradient-to-t from-cyan-500/5 via-blue-500/0 to-transparent pointer-events-none" />

      {/* Modern Top navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single-Screen/Multi-Section Scrollable Grid Container */}
      <main className="flex-grow flex flex-col">
        <Hero />
        <BentoSkills />
        <PortfolioShowcase />
        <ContactSection />
      </main>

      {/* Cupertino Style Social Dock at Bottom Center */}
      <Dock onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive CV Modal Portal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
