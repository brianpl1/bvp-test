import React, { useState, useEffect } from 'react';
import { BVPLogo } from './BVPLogo';
import { Language, FontTheme } from '../types';
import { content } from '../translations';
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  Globe,
  ArrowRight,
  Type,
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal: () => void;
  currentFont: FontTheme;
  onFontChange: (font: FontTheme) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenQuoteModal,
  currentFont,
  onFontChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
      {/* Top Utility Bar (Strict Brand Deep Chocolate #653814) */}
      <div className="bg-[#653814] text-[#FAF8F5] text-xs py-2 border-b border-[#865421]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          {/* Direct Contact & Operating Hours */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a
              href="tel:0909388926"
              className="flex items-center gap-1.5 hover:text-[#f7e476] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#dec357]" />
              <span className="font-bold text-white tracking-wide tabular-nums">0909 388 926</span>
            </a>
            <a
              href="mailto:contact@bvp.vn"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#f7e476] transition-colors text-[#F5F1EA]"
            >
              <Mail className="w-3.5 h-3.5 text-[#dec357]" />
              <span>contact@bvp.vn</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-[#E8DFD0]">
              <Clock className="w-3.5 h-3.5 text-[#dec357]" />
              <span>{t.nav.workingHours}</span>
            </div>
          </div>

          {/* Interactive Font Selector & Language Switcher */}
          <div className="flex items-center gap-3">
            {/* Quick Font Selector Dropdown */}
            <div className="flex items-center gap-1.5 text-[11px]">
              <Type className="w-3.5 h-3.5 text-[#dec357]" />
              <span className="hidden sm:inline text-[#E8DFD0]">Font:</span>
              <select
                value={currentFont}
                onChange={(e) => onFontChange(e.target.value as FontTheme)}
                className="bg-[#4A260B] text-white border border-[#865421] rounded px-2 py-0.5 text-[11px] font-bold focus:outline-none focus:border-[#dec357] cursor-pointer"
                title="Thay đổi kiểu chữ toàn trang"
              >
                <option value="montserrat">Montserrat (Đề xuất)</option>
                <option value="outfit">Outfit (Sang trọng)</option>
                <option value="be-vietnam-pro">Be Vietnam Pro (Việt hoá)</option>
                <option value="plus-jakarta-sans">Plus Jakarta Sans</option>
              </select>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-[#865421]">
              <Globe className="w-3.5 h-3.5 text-[#dec357]" />
              <div className="inline-flex rounded-md bg-[#4A260B] p-0.5 border border-[#865421]">
                <button
                  type="button"
                  onClick={() => onLanguageChange('vi')}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wider transition-colors cursor-pointer ${
                    currentLang === 'vi'
                      ? 'bg-[#dec357] text-[#653814]'
                      : 'text-[#E8DFD0] hover:text-white'
                  }`}
                >
                  VI
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wider transition-colors cursor-pointer ${
                    currentLang === 'en'
                      ? 'bg-[#dec357] text-[#653814]'
                      : 'text-[#E8DFD0] hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar (Clean Luxury White Canvas) */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-[#653814]/5 border-b border-[#EAE3D5] py-2.5'
            : 'bg-white border-b border-[#EAE3D5] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Wordmark / Emblem Lockup */}
          <a href="#hero" className="flex items-center shrink-0">
            <BVPLogo size={isScrolled ? 'sm' : 'md'} variant="horizontal" theme="light" />
          </a>

          {/* Zone 2: Desktop Navigation Links (Unboxed, single-line) */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-[13px] font-semibold text-[#2A1708] hover:text-[#653814] transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#bb8b2c] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="bvp-btn-gold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-controller text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#653814]" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-[#FAF8F5] border border-[#EAE3D5] text-[#653814] hover:bg-[#F5F1EA] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[104px] bg-white border-b border-[#EAE3D5] shadow-xl p-5 transition-all duration-200 max-h-[85vh] overflow-y-auto z-50">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-[#2A1708] hover:text-[#653814] hover:bg-[#FAF8F5] font-semibold text-sm transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#dec357]" />
                </a>
              ))}

              {/* Mobile Font Switcher */}
              <div className="pt-4 mt-2 flex items-center justify-between border-t border-[#EAE3D5]">
                <span className="text-xs text-[#865421] font-semibold">Kiểu chữ / Typography</span>
                <select
                  value={currentFont}
                  onChange={(e) => onFontChange(e.target.value as FontTheme)}
                  className="bg-[#FAF8F5] text-[#653814] border border-[#EAE3D5] rounded px-2.5 py-1 text-xs font-bold"
                >
                  <option value="montserrat">Montserrat (Đề xuất)</option>
                  <option value="outfit">Outfit (Sang trọng)</option>
                  <option value="be-vietnam-pro">Be Vietnam Pro</option>
                  <option value="plus-jakarta-sans">Plus Jakarta Sans</option>
                </select>
              </div>

              {/* Language Switcher in Drawer */}
              <div className="pt-3 flex items-center justify-between border-t border-[#EAE3D5]">
                <span className="text-xs text-[#865421] font-semibold">Ngôn ngữ / Language</span>
                <div className="inline-flex rounded-md bg-[#FAF8F5] p-0.5 border border-[#EAE3D5]">
                  <button
                    type="button"
                    onClick={() => onLanguageChange('vi')}
                    className={`px-3 py-1 rounded text-xs font-bold ${
                      currentLang === 'vi'
                        ? 'bg-[#dec357] text-[#653814]'
                        : 'text-[#6F5642]'
                    }`}
                  >
                    Tiếng Việt
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange('en')}
                    className={`px-3 py-1 rounded text-xs font-bold ${
                      currentLang === 'en'
                        ? 'bg-[#dec357] text-[#653814]'
                        : 'text-[#6F5642]'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Drawer Quick Contact */}
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href="tel:0909388926"
                  className="w-full py-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE3D5] text-[#653814] font-bold text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#bb8b2c]" />
                  Hotline: 0909 388 926
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="bvp-btn-gold w-full py-3 rounded-lg font-controller text-center text-xs tracking-wider uppercase"
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
