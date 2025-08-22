import { useEffect, useRef } from "react";
import { sections } from "./constants";

export function useScrollRefs() {
  const refs = useRef(
    Object.fromEntries(sections.map(s => [s.id, { current: null as HTMLElement | null }]))
  );
  
  const scrollTo = (id: string) => {
    const ref = refs.current[id];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return { refs: refs.current, scrollTo };
}

export function useKey(key: string, handler: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ignore typing inside inputs
      const tag = document.activeElement?.tagName?.toLowerCase();
      const isTyping = tag === "input" || tag === "textarea" || document.activeElement?.getAttribute("contenteditable") === "true";
      if (isTyping) return;
      
      // Only handle ⌘K or Ctrl+K
      if (key === "k" && e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        console.log("Cmd/Ctrl+K pressed, opening palette");
        e.preventDefault();
        e.stopPropagation();
        handler();
        return false;
      }
    };
    
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [key, handler]);
}
