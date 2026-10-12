import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  Compass,
  Target,
  Award,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';

interface VisionMissionProps {
  currentLang: Language;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ currentLang }) => {
  const t = content[currentLang];

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#bb8b2c]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#bb8b2c]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#bb8b2c]" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-[#bb8b2c]" />;
    }
  };

  return (
    <section
      id="vision-mission"
      className="py-20 sm:py-28 bg-white text-[#2A1708] relative border-b border-[#EAE3D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
            <span>{t.visionMission.sectionBadge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9b6b2a]">Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-controller text-[#653814] tracking-tight">
            {t.visionMission.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed font-normal text-balance">
            {t.visionMission.subtitle}
          </p>
        </div>

        {/* Vision & Mission Dual Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card (Pure White / Warm Ivory with Gold Border) */}
          <div className="rounded-3xl bg-[#FAF8F5] p-8 sm:p-10 border border-[#EAE3D5] hover:border-[#dec357] shadow-xs relative overflow-hidden transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#EAE3D5] flex items-center justify-center text-[#865421] mb-6 shadow-xs">
              <Compass className="w-7 h-7 text-[#bb8b2c]" />
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="font-controller text-2xl text-[#653814] tracking-wide">
                {t.visionMission.visionTitle}
              </h3>
              <span className="font-controller text-xs text-[#865421] tracking-wider">
                {t.visionMission.visionEn}
              </span>
            </div>

            <p className="text-[#6F5642] leading-relaxed text-sm sm:text-base font-normal">
              {t.visionMission.visionDesc}
            </p>

            <div className="mt-6 pt-6 border-t border-[#EAE3D5] flex items-center gap-2 text-xs font-semibold text-[#865421]">
              <span className="text-[#bb8b2c]">★</span>
              <span>Định hướng phát triển bền vững 2026 - 2035</span>
            </div>
          </div>

          {/* Mission Card (Deep Brand Chocolate #653814) */}
          <div className="rounded-3xl bg-[#653814] p-8 sm:p-10 border border-[#865421] shadow-xl text-white relative overflow-hidden transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#4A260B] border border-[#dec357]/40 flex items-center justify-center text-[#f7e476] mb-6">
              <Target className="w-7 h-7" />
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="font-controller text-2xl text-white tracking-wide">
                {t.visionMission.missionTitle}
              </h3>
              <span className="font-controller text-xs text-[#f7e476] tracking-wider">
                {t.visionMission.missionEn}
              </span>
            </div>

            <p className="text-[#F5F1EA] leading-relaxed text-sm sm:text-base font-normal">
              {t.visionMission.missionDesc}
            </p>

            <div className="mt-6 pt-6 border-t border-[#865421]/80 flex items-center gap-2 text-xs font-semibold text-[#f7e476]">
              <span className="text-[#f7e476]">★</span>
              <span>Cam kết giá trị thực chất cho đối tác và cộng đồng</span>
            </div>
          </div>
        </div>

        {/* 4 Core Values Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-controller text-2xl text-[#653814] tracking-tight">
              {t.visionMission.valuesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#865421] mt-1 font-medium">
              {t.visionMission.valuesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.visionMission.valuesList.map((val) => (
              <div
                key={val.id}
                className="rounded-3xl bg-[#FAF8F5] p-6 sm:p-7 border border-[#EAE3D5] hover:border-[#dec357] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE3D5] flex items-center justify-center mb-5 group-hover:border-[#dec357] transition-colors shadow-xs">
                  {getValueIcon(val.iconName)}
                </div>

                <div className="mb-2">
                  <h4 className="font-bold text-[#653814] text-lg group-hover:text-[#865421] transition-colors">
                    {val.title}
                  </h4>
                  <span className="font-controller text-[11px] text-[#865421] tracking-wider">
                    {val.enTitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#6F5642] leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
