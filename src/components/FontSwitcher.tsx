import React, { useState } from 'react';
import { FontTheme, Language } from '../types';
import { Type, Check, X } from 'lucide-react';

interface FontSwitcherProps {
  currentFont: FontTheme;
  onFontChange: (font: FontTheme) => void;
  currentLang: Language;
}

export const FONT_OPTIONS: {
  id: FontTheme;
  name: string;
  sub: string;
  sampleHeading: string;
  sampleBody: string;
  description: string;
  tag: string;
}[] = [
  {
    id: 'montserrat',
    name: 'Montserrat',
    sub: 'Extended Geometric (Khuyên Dùng)',
    sampleHeading: 'Montserrat Bold 800',
    sampleBody: 'Plus Jakarta Sans',
    description: 'Chữ in hoa rộng dứt khoát, phong thái uy nghi giống Controller Ext W01 Four nhưng hiển thị dấu tiếng Việt chuẩn 100%.',
    tag: 'Đề xuất số 1',
  },
  {
    id: 'outfit',
    name: 'Outfit',
    sub: 'Modern Luxury Geometric',
    sampleHeading: 'Outfit Geometric 800',
    sampleBody: 'Plus Jakarta Sans',
    description: 'Đường nét tối giản, đương đại và sang trọng, rất phù hợp cho lĩnh vực quà tặng doanh nghiệp & thời trang.',
    tag: 'Sang trọng',
  },
  {
    id: 'be-vietnam-pro',
    name: 'Be Vietnam Pro',
    sub: 'Native Vietnamese Precision',
    sampleHeading: 'Be Vietnam Pro 800',
    sampleBody: 'Be Vietnam Pro 400',
    description: 'Font chữ thiết kế chuyên biệt cho tiếng Việt bởi chuyên gia typography, dấu thanh cân đối tuyệt đối.',
    tag: 'Chuẩn tiếng Việt',
  },
  {
    id: 'plus-jakarta-sans',
    name: 'Plus Jakarta Sans',
    sub: 'Contemporary Balanced',
    sampleHeading: 'Jakarta Sans 800',
    sampleBody: 'Jakarta Sans 400',
    description: 'Phong cách tối giản toàn cầu, đồng nhất toàn bộ tiêu đề và nội dung theo một ngôn ngữ hiện đại.',
    tag: 'Đồng bộ',
  },
];

export const FontSwitcher: React.FC<FontSwitcherProps> = ({
  currentFont,
  onFontChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = FONT_OPTIONS.find((f) => f.id === currentFont) || FONT_OPTIONS[0];

  return (
    <>
      {/* Floating Bottom Quick Bar for Instant Font Preview */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-[#653814] border border-[#dec357] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
          title="Chọn font chữ phù hợp cho website"
        >
          <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#dec357]/60 flex items-center justify-center text-[#bb8b2c] group-hover:bg-[#dec357] group-hover:text-[#653814] transition-colors">
            <Type className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-[10px] uppercase font-bold text-[#865421] tracking-wider leading-none">
              Kiểu Chữ / Font
            </div>
            <div className="text-xs font-bold text-[#653814] leading-tight">
              {selectedOption.name}
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#bb8b2c] px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#dec357]/40">
            Đổi font
          </span>
        </button>
      </div>

      {/* Font Selection Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#653814]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#dec357]/60">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#EAE3D5] flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EAE3D5] flex items-center justify-center text-[#bb8b2c] shadow-xs">
                  <Type className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-controller text-sm text-[#653814]">
                    Chọn Kiểu Chữ Doanh Nghiệp BVP
                  </h3>
                  <p className="text-[11px] text-[#865421]">
                    Nhấp vào font để xem trực tiếp thay đổi tức thì trên website
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#6F5642] hover:text-[#653814] hover:bg-[#EAE3D5] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Font Options List */}
            <div className="p-5 space-y-3 max-h-[70vh] overflow-y-auto">
              {FONT_OPTIONS.map((opt) => {
                const isSelected = opt.id === currentFont;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      onFontChange(opt.id);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#FAF8F5] border-[#dec357] ring-2 ring-[#dec357]/50 shadow-md'
                        : 'bg-white border-[#EAE3D5] hover:border-[#dec357]/80 hover:bg-[#FAF8F5]/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-extrabold text-[#653814]">
                            {opt.name}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF8F5] text-[#865421] border border-[#dec357]/60">
                            {opt.tag}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#865421] font-medium">
                          {opt.sub}
                        </span>
                      </div>
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-[#dec357] text-[#653814] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border border-[#EAE3D5] shrink-0" />
                      )}
                    </div>

                    <p className="text-xs text-[#6F5642] leading-relaxed mb-3">
                      {opt.description}
                    </p>

                    {/* Preview Box */}
                    <div
                      className="p-3 rounded-xl bg-white border border-[#EAE3D5] text-xs"
                      style={{
                        fontFamily:
                          opt.id === 'montserrat'
                            ? "'Montserrat', sans-serif"
                            : opt.id === 'outfit'
                            ? "'Outfit', sans-serif"
                            : opt.id === 'be-vietnam-pro'
                            ? "'Be Vietnam Pro', sans-serif"
                            : "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      <div className="font-extrabold text-sm uppercase tracking-wider text-[#653814]">
                        BVP — GIẢI PHÁP QUÀ TẶNG & MAY MẶC TOÀN DIỆN
                      </div>
                      <div className="text-[11px] text-[#6F5642] mt-1 normal-case tracking-normal">
                        Chất lượng vượt trội · Uy tín hàng đầu · Đồng hành bền vững
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FAF8F5] border-t border-[#EAE3D5] flex items-center justify-between">
              <span className="text-xs text-[#865421] font-medium">
                Đang áp dụng: <strong className="text-[#653814]">{selectedOption.name}</strong>
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bvp-btn-gold px-5 py-2 rounded-xl font-controller text-xs uppercase tracking-wider cursor-pointer"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
