import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import { BVPLogo } from './BVPLogo';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Factory,
  Award,
  Layers,
  Clock,
} from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenQuoteModal }) => {
  const t = content[currentLang];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] pt-8 pb-16 sm:py-20 border-b border-[#EAE3D5]"
    >
      {/* Background Ambience: Subtle Warm Gold Sheen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#dec357]/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#865421]/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Headlines & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* Top Unboxed Kicker (Zero-pill discipline) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
              <span>{t.hero.badge}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#9b6b2a]">OEM & ODM Manufacturing</span>
            </div>

            {/* High-Impact Headline (Controller Ext Four Style) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-controller tracking-tight leading-[1.12]">
                <span className="block text-[#653814]">
                  {t.hero.headlineStart}
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bvp-gold-text font-bold mt-2 font-sans tracking-normal">
                  {t.hero.headlineSub}
                </span>
              </h1>
            </div>

            {/* Subheadline with text-wrap: balance */}
            <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal text-balance">
              {t.hero.description}
            </p>

            {/* Key Commitment Checkpoints */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#2A1708] max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#dec357] shrink-0" />
                <span className="font-medium">Trực tiếp xưởng sản xuất, không qua trung gian</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#dec357] shrink-0" />
                <span className="font-medium">May mẫu đối chứng thực tế trước khi may loạt</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#dec357] shrink-0" />
                <span className="font-medium">In thêu vi tính độ nét cao chuẩn mã Pantone</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#dec357] shrink-0" />
                <span className="font-medium">Bàn giao đúng hẹn, giao hàng tận nơi 63 tỉnh thành</span>
              </div>
            </div>

            {/* Dual Action CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="bvp-btn-gold w-full sm:w-auto px-7 py-3.5 rounded-xl font-controller text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{t.hero.ctaQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-[#EAE3D5] hover:border-[#dec357] text-[#653814] hover:text-[#2A1708] font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.hero.ctaProducts}</span>
                <Layers className="w-4 h-4 text-[#bb8b2c]" />
              </a>
            </div>

            {/* Trust Slogan */}
            <div className="pt-1 text-xs text-[#865421] font-semibold italic">
              {t.hero.tagline}
            </div>
          </div>

          {/* Right Column: High-End Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              {/* Soft Golden Ambient Rim */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#dec357]/20 to-[#865421]/15 rounded-3xl blur-xl opacity-75" />

              {/* Showcase Card on Pure White */}
              <div className="relative rounded-2xl bg-white border border-[#EAE3D5] p-6 shadow-xl space-y-5">
                {/* Header of Card */}
                <div className="flex items-center justify-between border-b border-[#F5F1EA] pb-4">
                  <div className="flex items-center gap-3">
                    <BVPLogo size="sm" variant="icon-only" theme="light" />
                    <div>
                      <h4 className="font-controller text-[#653814] text-xs sm:text-sm tracking-wider">
                        BVP MANUFACTURING
                      </h4>
                      <p className="text-[11px] text-[#865421] font-medium">
                        Trading & Manufacturing Co., Ltd
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#865421] tracking-wider uppercase font-controller">
                    Xưởng Trực Tiếp
                  </span>
                </div>

                {/* Imagery Grid of BVP Core Products with Local Generated High-Res Photos */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-[#F5F1EA] bg-[#FAF8F5]">
                    <img
                      src="/src/assets/images/bvp_apparel_production_1791819527723.jpg"
                      alt="May mặc & Đồng phục BVP"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#653814]/85 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">May Mặc & Polo</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-[#F5F1EA] bg-[#FAF8F5]">
                    <img
                      src="/src/assets/images/bvp_backpacks_manufacturing_1791819542614.jpg"
                      alt="Balo & Túi xách BVP"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#653814]/85 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">Balo & Túi Xách</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-[#F5F1EA] bg-[#FAF8F5]">
                    <img
                      src="/src/assets/images/bvp_plush_cushions_mascot_1791819554630.jpg"
                      alt="Thú nhồi bông & Mascot BVP"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#653814]/85 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">Mascot & Mền Gối</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-[#F5F1EA] bg-[#FAF8F5]">
                    <img
                      src="/src/assets/images/bvp_corporate_gift_sets_1791819566143.jpg"
                      alt="Quà tặng doanh nghiệp BVP"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#653814]/85 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">Quà Tặng Custom</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metrics on Bottom of Card */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D5] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#865421]" />
                    <div>
                      <div className="text-[#653814] font-bold">May mẫu thực tế</div>
                      <div className="text-[#6F5642] text-[10px]">Chỉ từ 3 - 5 ngày</div>
                    </div>
                  </div>
                  <div className="h-6 w-[1px] bg-[#EAE3D5]" />
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#865421]" />
                    <div>
                      <div className="text-[#653814] font-bold">KCS 100%</div>
                      <div className="text-[#6F5642] text-[10px]">Đổi trả nếu lỗi</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="hidden sm:flex absolute -left-5 -bottom-5 items-center gap-3 bg-white border border-[#dec357]/60 p-3 rounded-xl shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#dec357]/40 flex items-center justify-center text-[#bb8b2c]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#653814]">Beyond Value Products</div>
                  <div className="text-[10px] text-[#865421] font-semibold">
                    Đồng hành cùng 500+ thương hiệu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Proof Strip */}
        <div className="mt-16 pt-10 border-t border-[#EAE3D5] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D5] flex items-center justify-center text-[#865421] shadow-xs">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-controller text-[#653814] tracking-tight tabular-nums">
                {t.hero.stats.clients}
              </div>
              <div className="text-xs text-[#6F5642]">{t.hero.stats.clientsSub}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D5] flex items-center justify-center text-[#865421] shadow-xs">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-controller text-[#653814] tracking-tight tabular-nums">
                {t.hero.stats.capacity}
              </div>
              <div className="text-xs text-[#6F5642]">{t.hero.stats.capacitySub}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D5] flex items-center justify-center text-[#865421] shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-controller text-[#653814] tracking-tight tabular-nums">
                {t.hero.stats.quality}
              </div>
              <div className="text-xs text-[#6F5642]">{t.hero.stats.qualitySub}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D5] flex items-center justify-center text-[#865421] shadow-xs">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-controller text-[#653814] tracking-tight tabular-nums">
                {t.hero.stats.steps}
              </div>
              <div className="text-xs text-[#6F5642]">{t.hero.stats.stepsSub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
