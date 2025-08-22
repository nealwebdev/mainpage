'use client'

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";
import { Section } from "@/lib/constants";

const gradients = {
  glass: "backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl",
};

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  items: Section[];
  onSelect: (id: string) => void;
}

export function CommandPalette({ open, setOpen, items, onSelect }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      // Focus the input after the modal is fully rendered
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();

        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Filter items based on query
  const filtered = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.id.toLowerCase().includes(query.toLowerCase())
  );

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
    if (e.key === "Enter" && filtered.length > 0) {
      onSelect(filtered[0].id);
      setOpen(false);
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };



  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className={`mx-auto mt-28 w-[92%] max-w-xl rounded-2xl ${gradients.glass}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-4 pt-3">
              <Command size={16} className="opacity-70 text-purple-300" />
              <input
                ref={inputRef}
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a section… (e.g., 'work', 'about')"
                className="w-full bg-transparent outline-none py-3 text-base text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-300/50 rounded-lg"
                autoComplete="off"
                autoFocus
                spellCheck={false}

              />
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length > 0 ? (
                filtered.map(({ id, title, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => { 
                      onSelect(id); 
                      setOpen(false); 
                    }}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-500/10 text-left transition-colors"
                  >
                    <Icon size={16} className="opacity-80 text-purple-300" />
                    <span>{title}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 text-sm opacity-70 text-center">
                  <div className="mb-2">No matches found for "{query}"</div>
                  <div className="text-xs opacity-60">Try: Home, Work, Services, About, Contact</div>
                </div>
              )}
            </div>
            {query && (
              <div className="px-4 pb-3 text-xs opacity-50 text-center">
                Press Enter to select first result • Esc to close
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
