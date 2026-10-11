import React, { useState } from 'react';
import { Language, InquiryFormData } from '../types';
import { content } from '../translations';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Building,
  ShieldCheck,
  Heart,
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  initialFormData?: Partial<InquiryFormData>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  initialFormData,
}) => {
  const t = content[currentLang];

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: initialFormData?.fullName || '',
    company: initialFormData?.company || '',
    email: initialFormData?.email || '',
    phone: initialFormData?.phone || '',
    category: initialFormData?.category || t.contact.form.categoryOptions[0],
    quantity: initialFormData?.quantity || t.contact.form.quantityOptions[1],
    notes: initialFormData?.notes || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Update formData when initialFormData changes (e.g. from QuoteCalculator or Product)
  React.useEffect(() => {
    if (initialFormData) {
      setFormData((prev) => ({
        ...prev,
        ...initialFormData,
      }));
    }
  }, [initialFormData]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Vui lòng nhập tên công ty / tổ chức';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại hoặc Zalo';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      // Reset form
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        category: t.contact.form.categoryOptions[0],
        quantity: t.contact.form.quantityOptions[1],
        notes: '',
      });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F1F5F9] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#85581A] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.contact.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/40">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.fullName}
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder={t.contact.form.fullNamePlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-200 focus:border-amber-500 bg-slate-50/50'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder={t.contact.form.companyPlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.company
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-200 focus:border-amber-500 bg-slate-50/50'
                    }`}
                  />
                  {errors.company && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.company}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={t.contact.form.phonePlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-200 focus:border-amber-500 bg-slate-50/50'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.contact.form.emailPlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-200 focus:border-amber-500 bg-slate-50/50'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.category}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    {t.contact.form.categoryOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.quantity}
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    {t.contact.form.quantityOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.contact.form.notes}
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder={t.contact.form.notesPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.contact.form.privacyNotice}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t.contact.form.submitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.form.submitBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Corporate Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#070D1E] text-white p-8 border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block font-mono">
                  {t.contact.infoTitle}
                </span>
                <h3 className="text-xl font-black text-white mt-1 leading-snug">
                  {t.contact.companyFullName}
                </h3>
                <h4 className="text-xs font-semibold text-slate-400 tracking-wider font-mono">
                  {t.contact.companyEnName}
                </h4>
              </div>

              <div className="space-y-5 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.addressTitle}</div>
                    <div className="text-slate-300 mt-0.5">{t.contact.addressValue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.hotlineTitle}</div>
                    <div className="text-amber-400 font-bold mt-0.5">
                      {t.contact.hotlineValue}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.emailTitle}</div>
                    <div className="text-slate-300 mt-0.5">{t.contact.emailValue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.workingTimeTitle}</div>
                    <div className="text-slate-300 mt-0.5">{t.contact.workingTimeValue}</div>
                  </div>
                </div>
              </div>

              {/* Express Response Guarantee */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                <span className="font-bold block mb-1">⚡ Cam Kết Phản Hồi Trong 30 Phút:</span>
                Nhận maket thiết kế mẫu 2D/3D và báo giá chi tiết ngay trong ngày làm việc.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-600" />
              <span>{t.contact.faqTitle}</span>
            </h3>
          </div>

          <div className="space-y-3">
            {t.contact.faqs.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedFaqIndex(isExpanded ? null : index)
                    }
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-5 border border-slate-200">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9 text-amber-600" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-950">
                {t.contact.successModal.title}
              </h3>
              <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
                {t.contact.successModal.gratitudeMessage}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 text-left">
              <span className="font-bold text-slate-900 block mb-1">
                Các bước tiếp theo:
              </span>
              {t.contact.successModal.nextSteps}
            </div>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer"
            >
              {t.contact.successModal.closeBtn}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
