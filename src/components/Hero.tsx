import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import { BVPLogo } from './BVPLogo';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Factory,
  Sparkles,
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
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070D1E] pt-12 pb-20 sm:py-24"
    >
      {/* Background Ambience: Subtle Geometric Glow & Luxury Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Golden glow at top center */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
        {/* Slate navy accent right */}
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C5A059 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Diagonal luxury sheen lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-[#070D1E]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-[13px] font-bold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.hero.badge}</span>
            </div>

            {/* High-Impact Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                <span className="block gold-gradient-text drop-shadow-[0_2px_15px_rgba(197,160,89,0.3)]">
                  {t.hero.headlineStart}
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-slate-100 font-bold mt-2">
                  {t.hero.headlineSub}
                </span>
              </h1>
            </div>

            {/* Subheadline reflecting BVP dedication */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.description}
            </p>

            {/* Key Commitment Checkpoints */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Trực tiếp xưởng sản xuất, không qua trung gian</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>May mẫu đối chứng thực tế trước khi may loạt</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Công nghệ in thêu vi tính độ nét cao chuẩn Pantone</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bàn giao đúng hẹn, giao hàng tận nơi 63 tỉnh thành</span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA: Get a Quote */}
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black text-sm sm:text-base tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>{t.hero.ctaQuote}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: Explore Products */}
              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-500/60 text-slate-200 hover:text-white font-bold text-sm sm:text-base tracking-wide backdrop-blur-md hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.hero.ctaProducts}</span>
                <Layers className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Trust Slogan */}
            <div className="pt-2 text-xs text-amber-400/90 font-semibold tracking-wide italic">
              {t.hero.tagline}
            </div>
          </div>

          {/* Right Column: High-End Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-amber-700/20 rounded-3xl blur-xl opacity-75" />

              {/* Main Visual Showcase Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-amber-500/30 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                {/* Header of the Card: Logo Centerpiece */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <BVPLogo size="sm" variant="icon-only" />
                    <div>
                      <h4 className="font-extrabold text-white text-sm tracking-wider font-serif">
                        BVP MANUFACTURING
                      </h4>
                      <p className="text-[11px] text-amber-400 font-medium">
                        Trading & Manufacturing Co., Ltd
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Nhà Xưởng Trực Tiếp
                  </span>
                </div>

                {/* Imagery Grid of BVP Core Products */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80"
                      alt="May mặc & Đồng phục"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">May Mặc & Polo</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
                      alt="Balo & Túi xách"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">Balo & Túi Xách</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&q=80"
                      alt="Thú nhồi bông & Mền gối"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">Mascot & Mền Gối</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80"
                      alt="Quà tặng doanh nghiệp"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-bold text-white">Quà Tặng Custom</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metrics on Bottom of Card */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-white font-bold">May mẫu thực tế</div>
                      <div className="text-slate-400 text-[10px]">Chỉ từ 3 - 5 ngày</div>
                    </div>
                  </div>
                  <div className="h-6 w-[1px] bg-slate-800" />
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-white font-bold">KCS 100%</div>
                      <div className="text-slate-400 text-[10px]">Đổi trả nếu lỗi</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Left */}
              <div className="hidden sm:flex absolute -left-6 -bottom-6 items-center gap-3 bg-[#0B132B]/95 border border-amber-500/40 p-3 rounded-xl shadow-xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Beyond Value Products</div>
                  <div className="text-[10px] text-amber-400 font-semibold">
                    Đồng hành cùng 500+ thương hiệu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {t.hero.stats.clients}
              </div>
              <div className="text-xs text-slate-400">{t.hero.stats.clientsSub}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {t.hero.stats.capacity}
              </div>
              <div className="text-xs text-slate-400">{t.hero.stats.capacitySub}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {t.hero.stats.quality}
              </div>
              <div className="text-xs text-slate-400">{t.hero.stats.qualitySub}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {t.hero.stats.steps}
              </div>
              <div className="text-xs text-slate-400">{t.hero.stats.stepsSub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
