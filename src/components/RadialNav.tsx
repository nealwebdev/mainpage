'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Section } from "@/lib/constants";

const gradients = {
  glass: "backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl",
  glow: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(closest-side,rgba(147,51,234,0.15),transparent)]",
};

interface RadialNavProps {
  items: Section[];
  onSelect: (id: string) => void;
}

export function RadialNav({ items, onSelect }: RadialNavProps) {
  const [open, setOpen] = useState(false);
  const radius = 90; // px - reduced to fit better in homepage section

  const navItems = items.map((item, i) => {
    const angle = (Math.PI * 1.2 * (i / (items.length - 1 || 1))) - Math.PI * 0.1; // spread arc
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { ...item, x, y };
  });

  return (
    <div className="relative z-50">
      <motion.div layout className="relative">
        <AnimatePresence>
          {open && (
            navItems.map(({ id, title, icon: Icon, x, y }) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, x, y, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                onClick={() => { onSelect(id); setOpen(false); }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-xl ${gradients.glass} hover:bg-purple-500/20 text-sm flex items-center gap-2 shadow-lg transition-all duration-200`}
                title={title}
              >
                <Icon size={16} className="text-purple-300" />
                <span className="hidden sm:inline text-white">{title}</span>
              </motion.button>
            ))
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.97 }}
          className={`relative size-14 sm:size-16 rounded-2xl ${gradients.glass} ${gradients.glow} flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-200`}>
          <Menu className="absolute opacity-90 text-purple-300" />
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="absolute inset-0 rounded-2xl"
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
