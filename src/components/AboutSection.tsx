import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import { BVPLogo } from './BVPLogo';
import {
  CheckCircle2,
  Sparkles,
  Quote,
  Factory,
  Scissors,
  Check,
  TrendingUp,
  Shield,
  Layers,
} from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onOpenSampleModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onOpenSampleModal,
}) => {
  const t = content[currentLang];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#85581A] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.about.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.about.subtitle}
          </p>
        </div>

        {/* Main Content Layout: Story & Factory Capacity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Letter / Lời Ngỏ (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              {/* Subtle Watermark Logo in Background */}
              <div className="absolute right-4 bottom-4 opacity-[0.04] pointer-events-none">
                <BVPLogo size="xl" variant="icon-only" />
              </div>

              {/* Decorative Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 mb-6">
                <Quote className="w-6 h-6" />
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-slate-900 text-base sm:text-lg">
                  {t.about.intro1}
                </p>
                <p>{t.about.intro2}</p>
              </div>

              {/* Core Product Categories Highlighted */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-600" />
                  {t.about.categoriesTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.about.categoriesList.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm font-medium text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Pledge & Signature Block */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="italic text-slate-700 text-xs sm:text-sm font-serif">
                    {t.about.pledgeQuote}
                  </div>
                  <div className="text-xs font-bold text-amber-800 tracking-wide uppercase pt-1">
                    {t.about.leaderTitle}
                  </div>
                </div>

                {/* Stamp / Verified Emblem */}
                <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>Cam kết chất lượng 100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factory & Operational Capability Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Factory Card */}
            <div className="rounded-2xl overflow-hidden bg-[#070D1E] text-white p-7 border border-slate-800 shadow-xl space-y-6 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-3xl rounded-full" />

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                    Năng lực sản xuất
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Dây Chuyền Khép Kín BVP
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Factory className="w-6 h-6" />
                </div>
              </div>

              {/* Capability Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-lg font-black text-amber-400">100%</div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                    {t.about.stats.experience}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-lg font-black text-amber-400">
                    {t.about.stats.speed}
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                    {t.about.stats.speedSub}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-lg font-black text-amber-400">
                    {t.about.stats.satisfaction}
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                    Hài lòng
                  </div>
                </div>
              </div>

              {/* Key Technical Features */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Bàn cắt tự động và máy may điện tử công nghiệp thế hệ mới</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Xưởng in lụa, in Pet kỹ thuật số và dàn máy thêu vi tính 20 đầu</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Nguồn nguyên liệu vải, bông gòn, phụ liệu có chứng nhận an toàn</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Đội ngũ thợ may lành nghề trên 10 năm kinh nghiệm hàng xuất khẩu</span>
                </div>
              </div>

              {/* Sample Request Button */}
              <button
                type="button"
                onClick={onOpenSampleModal}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Scissors className="w-4 h-4" />
                <span>Đăng ký nhận bộ mẫu vải & mác dệt miễn phí</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
