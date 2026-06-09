export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  features: string[];
  mockAppType: 'saas' | 'chat' | 'terminal' | 'analytics';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  proficiency: number; // 0 to 100
  color: string; // Tailwind hex or class-relative color tag for the hover glow
  description: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'sent' | 'received' | 'processing';
}
