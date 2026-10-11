import React, { useState, useEffect } from 'react';
import { BVPLogo } from './BVPLogo';
import { Language } from '../types';
import { content } from '../translations';
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  Globe,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.areas, href: '#business-areas' },
    { name: t.nav.vision, href: '#vision-mission' },
    { name: t.nav.process, href: '#order-process' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.clients, href: '#clients' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#060B17] text-slate-400 text-xs border-b border-amber-900/20 py-2 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          {/* Left Info: Contact & Hours */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a
              href="tel:0909388926"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold text-slate-300">0909 388 926</span>
            </a>
            <a
              href="mailto:contact@bvp.vn"
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>contact@bvp.vn</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-500/80" />
              <span>{t.nav.workingHours}</span>
            </div>
          </div>

          {/* Right Info: Interactive Language Switcher */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400 text-[11px]">
              <Globe className="w-3 h-3 text-amber-500" />
              Ngôn ngữ / Language:
            </span>
            <div className="inline-flex rounded-full bg-slate-900/90 p-0.5 border border-amber-500/30">
              <button
                type="button"
                onClick={() => onLanguageChange('vi')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider transition-all duration-200 ${
                  currentLang === 'vi'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Tiếng Việt"
              >
                🇻🇳 VI
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider transition-all duration-200 ${
                  currentLang === 'en'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English"
              >
                🇬🇧 EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070D1E]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-amber-500/20 py-2.5'
            : 'bg-[#070D1E]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center group">
            <BVPLogo size={isScrolled ? 'md' : 'md'} variant="horizontal" theme="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-[13px] font-medium text-slate-300 hover:text-amber-400 rounded-md transition-colors duration-150 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 group-hover:opacity-100 opacity-90 transition-opacity" />
              <span className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-[7px] bg-[#0A1128] text-amber-300 group-hover:bg-[#070D1E] group-hover:text-amber-200 text-xs sm:text-sm font-bold tracking-wide transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                {t.nav.getQuote}
              </span>
            </button>

            {/* Mobile Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[105px] bg-[#070D1E]/98 backdrop-blur-xl border-b border-amber-500/30 shadow-2xl p-6 transition-all duration-300 animate-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 font-medium text-sm border-b border-slate-800/60 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-amber-500/60" />
                </a>
              ))}

              {/* Language Switcher in Drawer */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <span className="text-xs text-slate-400 font-medium">Ngôn ngữ / Language</span>
                <div className="inline-flex rounded-full bg-slate-900 p-1 border border-amber-500/30">
                  <button
                    type="button"
                    onClick={() => onLanguageChange('vi')}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      currentLang === 'vi'
                        ? 'bg-amber-500 text-slate-950 font-extrabold'
                        : 'text-slate-400'
                    }`}
                  >
                    Tiếng Việt
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange('en')}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      currentLang === 'en'
                        ? 'bg-amber-500 text-slate-950 font-extrabold'
                        : 'text-slate-400'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Quick Hotline in Drawer */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:0909388926"
                  className="w-full py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Hotline: 0909 388 926
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-center text-sm shadow-md"
                >
                  {t.nav.getQuote}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
