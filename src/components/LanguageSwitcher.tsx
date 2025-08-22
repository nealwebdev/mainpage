'use client';

import { useLanguage } from '@/lib/languageContext';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-xl border border-purple-300/30 bg-purple-500/20 px-3 py-2 text-sm hover:bg-purple-500/30 transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation"
      aria-label={`Switch to ${language === 'en' ? 'Dutch' : 'English'}`}
    >
      <Languages size={16} className="text-purple-300" />
      <span className="hidden sm:inline">
        {language === 'en' ? 'NL' : 'EN'}
      </span>
      <span className="sm:hidden">
        {language === 'en' ? '🇳🇱' : '🇺🇸'}
      </span>
    </button>
  );
}
