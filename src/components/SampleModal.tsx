import React, { useState } from 'react';
import { Language } from '../types';
import { content } from '../translations';
import {
  X,
  Scissors,
  CheckCircle2,
  Package,
  Send,
  Sparkles,
} from 'lucide-react';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const SampleModal: React.FC<SampleModalProps> = ({
  isOpen,
  onClose,
  currentLang,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                Đăng Ký Nhận Bộ Mẫu Thực Tế
              </h3>
              <p className="text-xs text-slate-500">
                BVP gửi mẫu vải và mẫu may đối chứng tận nơi miễn phí
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Đăng Ký Nhận Mẫu Thành Công!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                BVP sẽ liên hệ xác nhận và gửi bộ mẫu vật lý theo địa chỉ của quý công ty qua chuyển phát nhanh trong vòng 24 - 48 giờ.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Họ và tên người nhận *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Tên công ty *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Ví dụ: Công ty Cổ phần ABC"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Số điện thoại người nhận *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ví dụ: 0909 123 456"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Địa chỉ nhận mẫu vật lý *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Tòa nhà, số nhà, đường, quận/huyện, tỉnh/thành..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Gói mẫu quý khách quan tâm
                </label>
                <select
                  value={sampleType}
                  onChange={(e) => setSampleType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 focus:outline-none bg-white"
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
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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
