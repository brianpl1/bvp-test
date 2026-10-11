import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  Sparkles,
  CheckCircle,
} from 'lucide-react';

interface ClientsSectionProps {
  currentLang: Language;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <section id="clients" className="py-20 sm:py-28 bg-[#070D1E] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.clients.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.clients.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Client Partner Badges Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              {t.clients.partnerProjectsTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.clients.list.map((client, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Partner Name & Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-black text-white group-hover:text-amber-300 transition-colors tracking-tight">
                      {client.name}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  </div>
                  <div className="text-xs text-slate-400 font-medium mb-4">
                    {client.category}
                  </div>

                  {/* Highlight Product BVP Delivered */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 text-xs text-amber-300 font-semibold flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{client.highlightProduct}</span>
                  </div>
                </div>

                {/* Description snippet if available */}
                {client.description && (
                  <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
                    {client.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
