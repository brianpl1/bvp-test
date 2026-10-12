import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  CheckCircle2,
  Quote,
  Factory,
  Scissors,
  Shield,
  Layers,
  Feather,
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
    <section id="about" className="py-20 sm:py-28 bg-white text-[#2A1708] relative border-b border-[#EAE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Zero-Pill Discipline) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
            <span>{t.about.sectionBadge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9b6b2a]">BVP Corporate Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-controller text-[#653814] tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed font-normal text-balance">
            {t.about.subtitle}
          </p>
        </div>

        {/* Main Content Layout: Story, Logo Elements & Factory Capacity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Letter / Lời Ngỏ & Logo Symbolism (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Leadership Letter Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#EAE3D5] shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D5] flex items-center justify-center text-[#865421] mb-6 shadow-xs">
                <Quote className="w-6 h-6" />
              </div>

              <div className="space-y-4 text-[#2A1708] text-sm sm:text-base leading-relaxed">
                <p className="font-bold text-[#653814] text-base sm:text-lg">
                  {t.about.intro1}
                </p>
                <p className="text-[#6F5642] font-normal leading-relaxed">{t.about.intro2}</p>
              </div>

              {/* Core Product Categories Highlighted */}
              <div className="mt-8 pt-6 border-t border-[#EAE3D5]">
                <h4 className="font-controller text-xs font-bold text-[#653814] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#bb8b2c]" />
                  <span>{t.about.categoriesTitle}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.about.categoriesList.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#EAE3D5] text-xs sm:text-sm font-medium text-[#2A1708]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#dec357] shrink-0 mt-0.5" />
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Pledge Block */}
              <div className="mt-8 pt-6 border-t border-[#EAE3D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="italic text-[#653814] text-xs sm:text-sm font-serif">
                    {t.about.pledgeQuote}
                  </div>
                  <div className="font-controller text-xs font-bold text-[#865421] tracking-wider pt-1">
                    {t.about.leaderTitle}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#dec357]/60 text-[#865421] text-xs font-bold shadow-xs">
                  <Shield className="w-4 h-4 text-[#bb8b2c]" />
                  <span>Cam kết chuẩn mẫu 100%</span>
                </div>
              </div>
            </div>

            {/* Official Logo Symbolism Card (From Brand Guideline Page A.02) */}
            <div className="bg-white rounded-3xl p-8 border border-[#dec357]/60 shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#dec357]/60 flex items-center justify-center text-[#865421]">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-controller text-base font-bold text-[#653814]">
                    {t.about.logoStoryTitle}
                  </h3>
                  <p className="text-[11px] text-[#865421] font-medium">
                    {t.about.logoStorySubtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#6F5642] leading-relaxed">
                <p>
                  <strong className="text-[#653814] font-bold">Biểu tượng cánh chim (Emblem): </strong>
                  {t.about.logoStoryEmblem}
                </p>
                <p>
                  <strong className="text-[#653814] font-bold">Phần chữ & Khẩu hiệu (Typography): </strong>
                  {t.about.logoStorySlogan}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Factory & Operational Capability Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#653814] text-[#FAF8F5] p-8 border border-[#865421] shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#dec357]/10 blur-3xl rounded-full" />

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-controller text-[11px] text-[#f7e476] uppercase tracking-widest block">
                    Năng lực sản xuất
                  </span>
                  <h3 className="font-controller text-xl text-white mt-1">
                    Dây Chuyền Khép Kín BVP
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#4A260B] border border-[#dec357]/40 flex items-center justify-center text-[#dec357]">
                  <Factory className="w-6 h-6" />
                </div>
              </div>

              {/* Capability Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#4A260B] border border-[#865421]/60">
                  <div className="text-lg font-controller text-[#f7e476] tabular-nums">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-[#E8DFD0] font-medium mt-0.5">
                    {t.about.stats.experience}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#4A260B] border border-[#865421]/60">
                  <div className="text-lg font-controller text-[#f7e476] tabular-nums">
                    {t.about.stats.speed}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#E8DFD0] font-medium mt-0.5">
                    {t.about.stats.speedSub}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#4A260B] border border-[#865421]/60">
                  <div className="text-lg font-controller text-[#f7e476] tabular-nums">
                    {t.about.stats.satisfaction}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#E8DFD0] font-medium mt-0.5">
                    Hài lòng
                  </div>
                </div>
              </div>

              {/* Key Technical Features */}
              <div className="space-y-3 text-xs sm:text-sm text-[#F5F1EA]">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#dec357] text-[#653814] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Bàn cắt tự động và máy may điện tử công nghiệp thế hệ mới</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#dec357] text-[#653814] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Xưởng in lụa, in Pet kỹ thuật số và dàn máy thêu vi tính 20 đầu</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#dec357] text-[#653814] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Nguyên liệu vải, bông gòn, phụ liệu có chứng nhận an toàn Oeko-Tex</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#dec357] text-[#653814] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span>Đội ngũ thợ may lành nghề trên 10 năm kinh nghiệm hàng xuất khẩu</span>
                </div>
              </div>

              {/* Sample Request Button */}
              <button
                type="button"
                onClick={onOpenSampleModal}
                className="bvp-btn-gold w-full py-3.5 px-4 rounded-xl font-controller text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
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
