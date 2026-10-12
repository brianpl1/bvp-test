import React, { useState } from 'react';
import { Language } from '../types';
import {
  X,
  Scissors,
  CheckCircle2,
  Send,
} from 'lucide-react';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const SampleModal: React.FC<SampleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [sampleType, setSampleType] = useState('Bộ mẫu vải Cotton & Polo + Bảng màu Pantone');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#653814]/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#dec357]/60">
        {/* Header */}
        <div className="p-6 border-b border-[#EAE3D5] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3D5] text-[#865421] flex items-center justify-center shadow-xs">
              <Scissors className="w-5 h-5 text-[#bb8b2c]" />
            </div>
            <div>
              <h3 className="font-controller text-base text-[#653814]">
                Đăng Ký Nhận Bộ Mẫu Thực Tế
              </h3>
              <p className="text-xs text-[#865421]">
                BVP gửi mẫu vải và mẫu may đối chứng tận nơi miễn phí
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#6F5642] hover:text-[#653814] hover:bg-[#EAE3D5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#FAF8F5] border border-[#dec357]/60 text-[#dec357] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-controller text-xl text-[#653814]">
                Đăng Ký Nhận Mẫu Thành Công!
              </h4>
              <p className="text-sm text-[#6F5642] max-w-sm mx-auto leading-relaxed">
                BVP sẽ liên hệ xác nhận và gửi bộ mẫu vật lý theo địa chỉ của quý công ty qua chuyển phát nhanh trong vòng 24 - 48 giờ.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bvp-btn-gold px-6 py-2.5 rounded-xl font-controller text-xs uppercase tracking-wider cursor-pointer"
              >
                Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-[#653814] uppercase mb-1 font-controller">
                  Họ và tên người nhận *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3D5] focus:border-[#dec357] focus:outline-none bg-[#FAF8F5] text-[#2A1708]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#653814] uppercase mb-1 font-controller">
                  Tên công ty *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Ví dụ: Công ty Cổ phần ABC"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3D5] focus:border-[#dec357] focus:outline-none bg-[#FAF8F5] text-[#2A1708]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#653814] uppercase mb-1 font-controller">
                  Số điện thoại người nhận *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ví dụ: 0909 123 456"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3D5] focus:border-[#dec357] focus:outline-none bg-[#FAF8F5] text-[#2A1708]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#653814] uppercase mb-1 font-controller">
                  Địa chỉ nhận mẫu vật lý *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Tòa nhà, số nhà, đường, quận/huyện, tỉnh/thành..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3D5] focus:border-[#dec357] focus:outline-none bg-[#FAF8F5] text-[#2A1708]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#653814] uppercase mb-1 font-controller">
                  Gói mẫu quý khách quan tâm
                </label>
                <select
                  value={sampleType}
                  onChange={(e) => setSampleType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE3D5] focus:border-[#dec357] focus:outline-none bg-[#FAF8F5] text-[#2A1708]"
                >
                  <option value="Bộ mẫu vải Cotton & Polo + Bảng màu Pantone">
                    Bộ mẫu vải Cotton & Polo + Bảng màu Pantone
                  </option>
                  <option value="Mẫu chất liệu vải Dù & Canvas Balo Túi Xách">
                    Mẫu chất liệu vải Dù & Canvas Balo Túi Xách
                  </option>
                  <option value="Mẫu vải nhung 4 chiều & Bông gòn thú bông, gối">
                    Mẫu vải nhung 4 chiều & Bông gòn thú bông, gối
                  </option>
                  <option value="Bộ mẫu tổng hợp tất cả các chất liệu">
                    Bộ mẫu tổng hợp tất cả các chất liệu
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bvp-btn-gold w-full py-3.5 rounded-xl font-controller text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Xác Nhận Nhận Mẫu Miễn Phí</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
