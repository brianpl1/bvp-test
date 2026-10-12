import React, { useState } from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  CheckCircle2,
  Clock,
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

  const activeStep = t.process.steps[activeStepIndex];

  return (
    <section
      id="order-process"
      className="py-20 sm:py-28 bg-[#FAF8F5] text-[#2A1708] relative overflow-hidden border-b border-[#EAE3D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
            <span>{t.process.sectionBadge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9b6b2a]">7-Step Standard Operating Procedure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-controller text-[#653814] tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed font-normal text-balance">
            {t.process.subtitle}
          </p>
        </div>

        {/* Stepper Navigation: 7 Steps Bar */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {t.process.steps.map((item, index) => {
              const isActive = index === activeStepIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(index)}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#dec357] shadow-sm ring-2 ring-[#dec357]/40'
                      : 'bg-white/80 border-[#EAE3D5] hover:border-[#dec357]/60 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-controller tabular-nums ${
                        isActive
                          ? 'bg-[#653814] text-white'
                          : 'bg-[#FAF8F5] text-[#865421] border border-[#EAE3D5]'
                      }`}
                    >
                      0{item.step}
                    </span>
                    <span className="font-controller text-[10px] text-[#bb8b2c]">
                      B.{item.step}
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-xs sm:text-[13px] font-bold line-clamp-2 ${
                        isActive ? 'text-[#653814]' : 'text-[#6F5642]'
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
        <div className="rounded-3xl bg-white border border-[#EAE3D5] p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Detailed Step Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-controller px-3 py-1 rounded-md bg-[#653814] text-white text-xs tracking-wider">
                  BƯỚC 0{activeStep.step} / 07
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#865421] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#dec357]/60 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#bb8b2c]" />
                  <span>Thời gian: {activeStep.duration}</span>
                </span>
              </div>

              <div>
                <h3 className="font-controller text-2xl sm:text-3xl text-[#653814] tracking-wide">
                  {activeStep.title}
                </h3>
                <h4 className="font-controller text-xs sm:text-sm text-[#865421] tracking-wider mt-1">
                  {activeStep.subtitle}
                </h4>
              </div>

              <p className="text-[#6F5642] text-sm sm:text-base leading-relaxed font-normal">
                {activeStep.description}
              </p>

              {/* Step Outputs / Deliverables */}
              <div className="pt-4 border-t border-[#F5F1EA]">
                <div className="font-controller text-xs font-bold text-[#865421] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-[#bb8b2c]" />
                  <span>Kết quả & Hồ sơ bàn giao tại bước này:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.keyOutputs.map((output, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE3D5] text-xs sm:text-sm text-[#2A1708]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#dec357] shrink-0" />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Step Controller */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div className="rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-controller text-xs font-bold text-[#865421] uppercase tracking-wider">
                    Tiêu chuẩn kiểm soát BVP
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#bb8b2c]" />
                </div>
                <div className="space-y-2 text-xs text-[#6F5642]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#dec357]">✔</span>
                    <span>Lưu mẫu đối chứng niêm phong trong 12 tháng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#dec357]">✔</span>
                    <span>Hợp đồng bảo hành đường may và chất lượng in thêu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#dec357]">✔</span>
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
                  className="px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D5] text-xs font-bold text-[#653814] hover:bg-[#F5F1EA] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
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
                  className="bvp-btn-gold px-5 py-2.5 rounded-xl font-controller text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
                >
                  <span>Bước tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Free Physical Sample CTA Banner */}
        <div className="mt-12 rounded-3xl bg-white border border-[#dec357] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-controller text-lg text-[#653814]">
              {t.process.ctaSample}
            </h4>
            <p className="text-xs sm:text-sm text-[#6F5642]">
              BVP cung cấp bộ mẫu chất liệu vải, bảng màu pantone và may mẫu đối chứng trước khi ký hợp đồng.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenSampleModal}
            className="bvp-btn-gold shrink-0 px-6 py-3.5 rounded-xl font-controller text-xs sm:text-sm tracking-wider uppercase shadow-sm cursor-pointer"
          >
            Yêu cầu may mẫu ngay
          </button>
        </div>
      </div>
    </section>
  );
};
