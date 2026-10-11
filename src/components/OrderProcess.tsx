import React, { useState } from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  MessageSquareText,
  CheckCircle2,
  Layers,
  FileSignature,
  Cpu,
  ScanEye,
  Truck,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  PackageCheck,
} from 'lucide-react';

interface OrderProcessProps {
  currentLang: Language;
  onOpenSampleModal: () => void;
}

export const OrderProcess: React.FC<OrderProcessProps> = ({
  currentLang,
  onOpenSampleModal,
}) => {
  const t = content[currentLang];
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string, active: boolean) => {
    const iconClass = `w-5 h-5 ${active ? 'text-slate-950' : 'text-amber-400'}`;
    switch (iconName) {
      case 'MessageSquareText':
        return <MessageSquareText className={iconClass} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'FileSignature':
        return <FileSignature className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'ScanEye':
        return <ScanEye className={iconClass} />;
      case 'Truck':
      default:
        return <Truck className={iconClass} />;
    }
  };

  const activeStep = t.process.steps[activeStepIndex];

  return (
    <section
      id="order-process"
      className="py-20 sm:py-28 bg-[#070D1E] text-white relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.process.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.process.subtitle}
          </p>
        </div>

        {/* Stepper Navigation: 7 Steps Bar */}
        <div className="mb-12">
          {/* Desktop / Tablet Timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {t.process.steps.map((item, index) => {
              const isActive = index === activeStepIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(index)}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-b from-amber-500/20 to-amber-600/10 border-amber-400 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black font-mono ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 font-extrabold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      0{item.step}
                    </span>
                    <span className="text-[11px] text-amber-400/80 font-mono">
                      B.{item.step}
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-xs sm:text-[13px] font-bold line-clamp-2 ${
                        isActive ? 'text-amber-300' : 'text-slate-300'
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Focus Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0B132B] to-[#0A1024] border border-amber-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Detailed Step Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold font-mono tracking-wider">
                  BƯỚC 0{activeStep.step} / 07
                </span>
                <span className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Thời gian: {activeStep.duration}</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                  {activeStep.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold uppercase text-amber-400 font-mono tracking-wider mt-1">
                  {activeStep.subtitle}
                </h4>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {activeStep.description}
              </p>

              {/* Step Outputs / Deliverables */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-amber-400" />
                  <span>Kết quả & Hồ sơ bàn giao tại bước này:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.keyOutputs.map((output, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Step Controller & Visual (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Tiêu chuẩn kiểm soát BVP
                  </span>
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Lưu mẫu đối chứng niêm phong trong 12 tháng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Hợp đồng bảo hành đường may và chất lượng in thêu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Báo cáo tiến độ cập nhật hình ảnh trực tiếp từ xưởng</span>
                  </div>
                </div>
              </div>

              {/* Prev / Next Step Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Bước trước
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === t.process.steps.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      Math.min(t.process.steps.length - 1, prev + 1)
                    )
                  }
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
                >
                  <span>Bước tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Free Physical Sample CTA Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{t.process.ctaSample}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              BVP cung cấp bộ mẫu chất liệu vải, bảng màu pantone và may mẫu đối chứng trước khi ký hợp đồng.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenSampleModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            Yêu cầu may mẫu ngay
          </button>
        </div>
      </div>
    </section>
  );
};
