import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import { CheckCircle } from 'lucide-react';

interface ClientsSectionProps {
  currentLang: Language;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <section id="clients" className="py-20 sm:py-28 bg-[#FAF8F5] text-[#2A1708] relative overflow-hidden border-b border-[#EAE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
            <span>{t.clients.sectionBadge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9b6b2a]">Trusted Strategic Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-controller text-[#653814] tracking-tight">
            {t.clients.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed font-normal text-balance">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Client Partner Badges Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="font-controller text-xs font-bold text-[#865421] uppercase tracking-widest">
              {t.clients.partnerProjectsTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.clients.list.map((client, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-[#EAE3D5] hover:border-[#dec357] p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#653814]/5 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Partner Name & Tag (Clean Typography, No decorative dots) */}
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-lg font-black text-[#653814] group-hover:text-[#865421] transition-colors tracking-tight font-sans">
                      {client.name}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#9b6b2a] tracking-wider">
                      Partner
                    </span>
                  </div>
                  <div className="text-xs text-[#865421] font-medium mb-4">
                    {client.category}
                  </div>

                  {/* Highlight Product BVP Delivered */}
                  <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] text-xs text-[#653814] font-semibold flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#dec357] shrink-0 mt-0.5" />
                    <span>{client.highlightProduct}</span>
                  </div>
                </div>

                {/* Description snippet if available */}
                {client.description && (
                  <p className="mt-4 text-[11px] text-[#6F5642] leading-relaxed">
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
