import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  Shirt,
  Briefcase,
  Smile,
  Gift,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Layers,
} from 'lucide-react';

interface BusinessAreasProps {
  currentLang: Language;
  onSelectCategoryForQuote: (categoryName: string) => void;
}

export const BusinessAreas: React.FC<BusinessAreasProps> = ({
  currentLang,
  onSelectCategoryForQuote,
}) => {
  const t = content[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-amber-400" />;
      case 'Gift':
      default:
        return <Gift className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="business-areas"
      className="py-20 sm:py-28 bg-[#090F24] text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.businessAreas.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.businessAreas.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.businessAreas.subtitle}
          </p>
        </div>

        {/* 4 Core Business Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.businessAreas.items.map((area) => (
            <div
              key={area.id}
              className="group rounded-2xl bg-[#0B132B]/80 border border-slate-800 hover:border-amber-500/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm"
            >
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div>
                {/* Top Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-500/20 transition-all">
                      {getIcon(area.iconName)}
                    </div>
                    <div>
                      <span className="text-amber-400 font-mono font-bold text-sm tracking-wider">
                        {area.number}
                      </span>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {area.subtitle}
                      </h4>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-slate-800 font-mono group-hover:text-amber-500/20 transition-colors">
                    {area.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {area.description}
                </p>

                {/* Imagery Preview */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/8] mb-6 border border-slate-800">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {area.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] text-amber-300 font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Năng lực công nghệ & Tiêu chuẩn:</span>
                  </div>
                  {area.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  Sản xuất theo yêu cầu B2B
                </span>
                <button
                  type="button"
                  onClick={() => onSelectCategoryForQuote(area.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-bold tracking-wide transition-all group-hover:translate-x-1 cursor-pointer"
                >
                  <span>{t.businessAreas.ctaCard}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
