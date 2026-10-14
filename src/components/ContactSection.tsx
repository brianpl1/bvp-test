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
  HelpCircle,
  ChevronDown,
  ShieldCheck,
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
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
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
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-[#2A1708] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
            <span>{t.contact.sectionBadge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9b6b2a]">Direct Quotation Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-controller text-[#653814] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed font-normal text-balance">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Form & Direct Corporate Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#EAE3D5] shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#653814] uppercase tracking-wider mb-1.5 font-controller">
                    {t.contact.form.fullName}
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder={t.contact.form.fullNamePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2A1708] focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 bg-red-50/40'
                        : 'border-[#EAE3D5] focus:border-[#dec357] bg-white'
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
                  <label className="block text-xs font-bold text-[#653814] uppercase tracking-wider mb-1.5 font-controller">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder={t.contact.form.companyPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2A1708] focus:outline-none transition-colors ${
                      errors.company
                        ? 'border-red-500 bg-red-50/40'
                        : 'border-[#EAE3D5] focus:border-[#dec357] bg-white'
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
                  <label className="block text-xs font-bold text-[#653814] uppercase tracking-wider mb-1.5 font-controller">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={t.contact.form.phonePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2A1708] focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 bg-red-50/40'
                        : 'border-[#EAE3D5] focus:border-[#dec357] bg-white'
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
                  <label className="block text-xs font-bold text-[#653814] uppercase tracking-wider mb-1.5 font-controller">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.contact.form.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2A1708] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 bg-red-50/40'
                        : 'border-[#EAE3D5] focus:border-[#dec357] bg-white'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Category & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#653814] uppercase tracking-wider mb-1.5 font-controller">
                    {t.contact.form.category}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE3D5] bg-white text-sm text-[#2A1708] focus:outline-none focus:border-[#dec357]"
                  >
                    {t.contact.form.categoryOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#653814] uppercase tracking-wider mb-1.5 font-controller">
                    {t.contact.form.quantity}
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#EAE3D5] bg-white text-sm text-[#2A1708] focus:outline-none focus:border-[#dec357]"
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
                <label className="block text-xs font-bold text-[#653814] uppercase tracking-wider mb-1.5 font-controller">
                  {t.contact.form.notes}
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder={t.contact.form.notesPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE3D5] bg-white text-sm text-[#2A1708] focus:outline-none focus:border-[#dec357] resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 text-xs text-[#865421]">
                <ShieldCheck className="w-4 h-4 text-[#dec357] shrink-0" />
                <span>{t.contact.form.privacyNotice}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bvp-btn-gold w-full py-4 rounded-xl font-controller text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
            <div className="rounded-3xl bg-[#653814] text-[#FAF8F5] p-8 border border-[#865421] shadow-xl space-y-6">
              <div>
                <span className="font-controller text-[11px] text-[#f7e476] uppercase tracking-widest block">
                  {t.contact.infoTitle}
                </span>
                <h3 className="font-controller text-xl text-white mt-1 leading-snug">
                  {t.contact.companyFullName}
                </h3>
                <h4 className="font-controller text-xs text-[#E8DFD0] tracking-wider mt-0.5">
                  {t.contact.companyEnName}
                </h4>
              </div>

              <div className="space-y-5 pt-4 border-t border-[#865421] text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A260B] border border-[#dec357]/40 flex items-center justify-center text-[#f7e476] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.addressTitle}</div>
                    <div className="text-[#E8DFD0] mt-0.5">{t.contact.addressValue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A260B] border border-[#dec357]/40 flex items-center justify-center text-[#f7e476] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.hotlineTitle}</div>
                    <div className="text-[#f7e476] font-bold mt-0.5 tracking-wide">
                      {t.contact.hotlineValue}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A260B] border border-[#dec357]/40 flex items-center justify-center text-[#f7e476] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.emailTitle}</div>
                    <div className="text-[#E8DFD0] mt-0.5">{t.contact.emailValue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A260B] border border-[#dec357]/40 flex items-center justify-center text-[#f7e476] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contact.workingTimeTitle}</div>
                    <div className="text-[#E8DFD0] mt-0.5">{t.contact.workingTimeValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="font-controller text-2xl text-[#653814] tracking-tight flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#bb8b2c]" />
              <span>{t.contact.faqTitle}</span>
            </h3>
          </div>

          <div className="space-y-3">
            {t.contact.faqs.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedFaqIndex(isExpanded ? null : index)
                    }
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#653814] text-sm sm:text-base hover:text-[#865421] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#bb8b2c] shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-[#6F5642] text-xs sm:text-sm leading-relaxed border-t border-[#EAE3D5] font-normal">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#653814]/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-5 border border-[#dec357]/60">
            <div className="w-16 h-16 rounded-2xl bg-[#FAF8F5] border border-[#dec357]/60 text-[#bb8b2c] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9 text-[#dec357]" />
            </div>

            <div>
              <h3 className="font-controller text-2xl text-[#653814]">
                {t.contact.successModal.title}
              </h3>
              <p className="mt-3 text-[#2A1708] text-sm sm:text-base leading-relaxed font-semibold">
                {t.contact.successModal.gratitudeMessage}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] text-xs sm:text-sm text-[#6F5642] text-left">
              <span className="font-bold text-[#653814] block mb-1">
                Các bước tiếp theo:
              </span>
              {t.contact.successModal.nextSteps}
            </div>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="bvp-btn-gold w-full py-3.5 rounded-xl font-controller text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
            >
              {t.contact.successModal.closeBtn}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
