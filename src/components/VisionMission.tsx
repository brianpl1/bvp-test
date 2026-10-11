import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  Compass,
  Target,
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Check,
} from 'lucide-react';

interface VisionMissionProps {
  currentLang: Language;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ currentLang }) => {
  const t = content[currentLang];

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section
      id="vision-mission"
      className="py-20 sm:py-28 bg-[#F1F5F9] text-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#85581A] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.visionMission.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.visionMission.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.visionMission.subtitle}
          </p>
        </div>

        {/* Vision & Mission Dual Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="rounded-2xl bg-white p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-amber-400/80 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-105 transition-transform">
              <Compass className="w-7 h-7" />
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-black text-slate-950 tracking-wide">
                {t.visionMission.visionTitle}
              </h3>
              <span className="text-xs font-bold uppercase text-amber-700 tracking-widest font-mono">
                {t.visionMission.visionEn}
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              {t.visionMission.visionDesc}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs font-semibold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Định hướng phát triển bền vững 2026 - 2035</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="rounded-2xl bg-[#070D1E] p-8 sm:p-10 border border-slate-800 shadow-xl text-white relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform">
              <Target className="w-7 h-7" />
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-black text-white tracking-wide">
                {t.visionMission.missionTitle}
              </h3>
              <span className="text-xs font-bold uppercase text-amber-400 tracking-widest font-mono">
                {t.visionMission.missionEn}
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              {t.visionMission.missionDesc}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs font-semibold text-amber-400/90">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Cam kết giá trị thực chất cho đối tác và cộng đồng</span>
            </div>
          </div>
        </div>

        {/* 4 Core Values Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              {t.visionMission.valuesTitle}
            </h3>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              {t.visionMission.valuesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.visionMission.valuesList.map((val) => (
              <div
                key={val.id}
                className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-5 group-hover:bg-amber-100/70 transition-colors">
                  {getValueIcon(val.iconName)}
                </div>

                <div className="mb-2">
                  <h4 className="text-lg font-bold text-slate-950 group-hover:text-amber-700 transition-colors">
                    {val.title}
                  </h4>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider font-mono">
                    {val.enTitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
