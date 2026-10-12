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
        return <Shirt className="w-6 h-6 text-[#bb8b2c]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#bb8b2c]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#bb8b2c]" />;
      case 'Gift':
      default:
        return <Gift className="w-6 h-6 text-[#bb8b2c]" />;
    }
  };

  return (
    <section
      id="business-areas"
      className="py-20 sm:py-28 bg-[#FAF8F5] text-[#2A1708] relative overflow-hidden border-b border-[#EAE3D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
            <span>{t.businessAreas.sectionBadge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9b6b2a]">Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-controller text-[#653814] tracking-tight">
            {t.businessAreas.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed font-normal text-balance">
            {t.businessAreas.subtitle}
          </p>
        </div>

        {/* 4 Core Business Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.businessAreas.items.map((area) => (
            <div
              key={area.id}
              className="group rounded-3xl bg-white border border-[#EAE3D5] hover:border-[#dec357] p-7 sm:p-9 transition-all duration-300 hover:shadow-xl hover:shadow-[#653814]/5 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#dec357] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] flex items-center justify-center group-hover:border-[#dec357]/80 transition-colors shadow-xs">
                      {getIcon(area.iconName)}
                    </div>
                    <div>
                      <span className="font-controller text-sm font-bold text-[#bb8b2c] tracking-wider">
                        {area.number}.
                      </span>
                      <h4 className="text-xs font-semibold text-[#865421] uppercase tracking-wider">
                        {area.subtitle}
                      </h4>
                    </div>
                  </div>
                  <span className="text-4xl font-controller font-black text-[#F3EFE6] group-hover:text-[#dec357]/30 transition-colors">
                    {area.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#653814] group-hover:text-[#865421] transition-colors mb-3">
                  {area.title}
                </h3>
                <p className="text-[#6F5642] text-sm leading-relaxed mb-6 font-normal">
                  {area.description}
                </p>

                {/* Imagery Preview */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/8] mb-6 border border-[#F5F1EA] bg-[#FAF8F5]">
                  <img
                    src={area.image}
                    alt={area.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#653814]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {area.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-white/95 text-[#653814] text-[11px] font-bold shadow-xs"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2.5 mb-6">
                  <div className="font-controller text-xs font-bold text-[#865421] uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#bb8b2c]" />
                    <span>Năng lực công nghệ & Tiêu chuẩn:</span>
                  </div>
                  {area.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2A1708]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#dec357] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#F5F1EA] flex items-center justify-between">
                <span className="text-xs text-[#865421] font-medium">
                  Sản xuất OEM / ODM B2B
                </span>
                <button
                  type="button"
                  onClick={() => onSelectCategoryForQuote(area.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#F5F1EA] border border-[#dec357]/60 text-[#653814] text-xs sm:text-sm font-bold tracking-wide transition-all group-hover:translate-x-0.5 cursor-pointer"
                >
                  <span>{t.businessAreas.ctaCard}</span>
                  <ArrowRight className="w-4 h-4 text-[#bb8b2c]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
