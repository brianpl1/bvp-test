import React from 'react';
import { Language } from '../types';
import { content } from '../translations';
import { BVPLogo } from './BVPLogo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUp,
} from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = content[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#653814] text-[#FAF8F5] pt-16 pb-12 border-t border-[#865421] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#865421]/60">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <BVPLogo size="md" variant="horizontal" theme="dark" />
            <div className="font-controller text-xs text-[#f7e476] tracking-wider">
              CÔNG TY TNHH THƯƠNG MẠI & SẢN XUẤT BVP
            </div>
            <p className="text-xs sm:text-sm text-[#E8DFD0] leading-relaxed font-normal max-w-sm">
              {t.footer.aboutCompany}
            </p>

            {/* Certifications Badge */}
            <div className="pt-2 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#4A260B] border border-[#dec357]/40 text-[#f7e476]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-[11px] text-[#E8DFD0] max-w-xs">
                <span className="font-bold text-white block">
                  {t.footer.certifications}
                </span>
                {t.footer.certText}
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-controller text-xs font-bold text-[#f7e476] uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#business-areas" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.areas}
                </a>
              </li>
              <li>
                <a href="#vision-mission" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.vision}
                </a>
              </li>
              <li>
                <a href="#order-process" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.clients}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f7e476] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Manufacturing Lines (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-controller text-xs font-bold text-[#f7e476] uppercase tracking-wider">
              {t.footer.productsGroup}
            </h4>
            <ul className="space-y-2 text-xs text-[#E8DFD0]">
              <li>Áo thun polo & sự kiện</li>
              <li>Đồng phục công sở & nhà máy</li>
              <li>Balo laptop & túi du lịch</li>
              <li>Túi canvas tote eco-friendly</li>
              <li>Thú nhồi bông & mascot độc quyền</li>
              <li>Gối chữ U & mền văn phòng</li>
              <li>Quà tặng doanh nghiệp B2B</li>
            </ul>
          </div>

          {/* Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-controller text-xs font-bold text-[#f7e476] uppercase tracking-wider">
              Liên Hệ Trực Tiếp
            </h4>
            <div className="space-y-2.5 text-xs text-[#E8DFD0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dec357] shrink-0 mt-0.5" />
                <span>Quận Tân Bình / Tân Phú, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dec357] shrink-0" />
                <a href="tel:0909388926" className="hover:text-[#f7e476] font-bold text-white tabular-nums">
                  0909 388 926 - 0938 123 456
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#dec357] shrink-0" />
                <a href="mailto:contact@bvp.vn" className="hover:text-[#f7e476]">
                  contact@bvp.vn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#dec357] shrink-0" />
                <span>Thứ 2 - Thứ 7: 08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Appreciation & Gratitude Banner */}
        <div className="py-6 border-b border-[#865421]/60 text-center">
          <p className="text-xs sm:text-[13px] text-[#f7e476] font-medium italic">
            “BVP chân thành cảm ơn Quý khách hàng & Đối tác đã tin tưởng đồng hành cùng chúng tôi trong giai đoạn khởi đầu và chặng đường phát triển dài hạn!”
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DFD0]">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-4">
            <span className="text-[#dec357] font-semibold">{t.footer.designedFor}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#4A260B] hover:bg-[#FAF8F5] hover:text-[#653814] text-[#f7e476] border border-[#865421] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
