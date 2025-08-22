import {
  Rocket,
  Briefcase,
  Wrench,
  User2,
  Mail,
  LucideIcon,
} from "lucide-react";

export const sections = [
  { id: "home", title: "Home", icon: Rocket },
  { id: "work", title: "Work", icon: Briefcase },
  { id: "services", title: "Services", icon: Wrench },
  { id: "about", title: "About", icon: User2 },
  { id: "contact", title: "Contact", icon: Mail },
];

export const gradients = {
  page: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white",
  grid: "[background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.05)_1px)] [background-size:32px_32px]",
  glow: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(closest-side,rgba(147,51,234,0.15),transparent)]",
  glass: "backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl",
  glassHover: "backdrop-blur-xl bg-white/15 border border-white/30 shadow-2xl",
  accent: "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500",
  accentHover: "bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600",
  card: "bg-gradient-to-br from-white/10 to-white/5 border border-white/20",
  cardHover: "bg-gradient-to-br from-white/15 to-white/10 border border-white/30",
};

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
}
