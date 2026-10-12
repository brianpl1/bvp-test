import React, { useState } from 'react';
import { Language, ProductItem } from '../types';
import { content } from '../translations';
import { productsData } from '../data/productsData';
import {
  ArrowRight,
  Eye,
  Shield,
  X,
  Package,
} from 'lucide-react';

interface ProductsShowcaseProps {
  currentLang: Language;
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({
  currentLang,
  onSelectProductForQuote,
}) => {
  const t = content[currentLang];
  const [activeTab, setActiveTab] = useState<'all' | 'apparel' | 'bags' | 'plush' | 'gifts'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeTab === 'all'
      ? productsData
      : productsData.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-20 sm:py-28 bg-white text-[#2A1708] relative border-b border-[#EAE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#865421] tracking-wider uppercase font-controller">
            <span>{t.products.sectionBadge}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9b6b2a]">Product Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-controller text-[#653814] tracking-tight">
            {t.products.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6F5642] leading-relaxed font-normal text-balance">
            {t.products.subtitle}
          </p>
        </div>

        {/* Category Tabs (Clean Segmented Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {(
            [
              { key: 'all', label: t.products.tabs.all },
              { key: 'apparel', label: t.products.tabs.apparel },
              { key: 'bags', label: t.products.tabs.bags },
              { key: 'plush', label: t.products.tabs.plush },
              { key: 'gifts', label: t.products.tabs.gifts },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#653814] text-white shadow-sm'
                  : 'bg-[#FAF8F5] text-[#6F5642] hover:text-[#653814] hover:bg-[#F5F1EA] border border-[#EAE3D5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-[#FAF8F5] border border-[#EAE3D5] hover:border-[#dec357] shadow-xs hover:shadow-xl hover:shadow-[#653814]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#653814] text-white text-[10px] font-controller uppercase tracking-wider shadow-xs">
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/95 text-[#653814] text-[10px] font-bold shadow-xs">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Product Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#653814] group-hover:text-[#865421] transition-colors mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F5642] line-clamp-2 mb-4 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Specifications Meta */}
                  <div className="space-y-1.5 py-3 border-y border-[#EAE3D5] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#865421] font-medium">{t.products.moqLabel}</span>
                      <span className="font-bold text-[#653814] tabular-nums">{product.moq}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#865421] font-medium">{t.products.timeLabel}</span>
                      <span className="font-semibold text-[#2A1708] tabular-nums">{product.productionTime}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2 pt-0.5">
                      <span className="text-[#865421] font-medium shrink-0">{t.products.materialLabel}</span>
                      <span className="font-medium text-[#2A1708] text-right line-clamp-1">
                        {product.material}
                      </span>
                    </div>
                  </div>

                  {/* Supported Branding Techniques */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {product.techniques.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white border border-[#EAE3D5] text-[#865421] text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-[#EAE3D5] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#EAE3D5] text-[#653814] text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#bb8b2c]" />
                    <span>{t.products.actionDetail}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProductForQuote(product.name)}
                    className="bvp-btn-gold flex-1 py-2.5 px-3 rounded-xl font-controller text-[11px] sm:text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>{t.products.actionQuote}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#653814]/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#dec357]/60">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#EAE3D5] flex items-center justify-between bg-[#FAF8F5]">
              <div>
                <span className="font-controller text-xs text-[#865421] uppercase tracking-wider">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="font-controller text-xl text-[#653814] mt-0.5">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl text-[#6F5642] hover:text-[#653814] hover:bg-[#EAE3D5] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE3D5]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-[#653814] text-sm mb-1">Mô tả sản phẩm:</h4>
                <p className="text-sm text-[#6F5642] leading-relaxed font-normal">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="rounded-2xl bg-[#FAF8F5] p-4 border border-[#EAE3D5] space-y-2 text-xs sm:text-sm">
                <h4 className="font-controller text-xs text-[#865421] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#bb8b2c]" />
                  <span>{t.products.detailModal.techSpecs}</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#865421]">Số lượng tối thiểu (MOQ):</span>
                    <div className="font-bold text-[#653814] tabular-nums">{selectedProduct.moq}</div>
                  </div>
                  <div>
                    <span className="text-[#865421]">Thời gian sản xuất dự kiến:</span>
                    <div className="font-bold text-[#653814] tabular-nums">{selectedProduct.productionTime}</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#EAE3D5]">
                  <span className="text-[#865421]">Chất liệu tiêu chuẩn:</span>
                  <div className="font-semibold text-[#2A1708]">{selectedProduct.material}</div>
                </div>
              </div>

              {/* Branding Options */}
              <div>
                <h4 className="font-controller text-xs text-[#865421] uppercase tracking-wider mb-2">
                  {t.products.detailModal.brandingOptions}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.techniques.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#dec357]/60 text-[#653814] text-xs font-semibold"
                    >
                      ✓ {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quality Pledge Notice */}
              <div className="p-3.5 rounded-xl bg-white border border-[#dec357] text-[#865421] text-xs flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-[#bb8b2c] shrink-0" />
                <span>{t.products.detailModal.sampleNotice}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FAF8F5] border-t border-[#EAE3D5] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2.5 rounded-xl text-[#6F5642] hover:text-[#653814] font-bold text-xs cursor-pointer"
              >
                {t.products.detailModal.close}
              </button>
              <button
                type="button"
                onClick={() => {
                  const pName = selectedProduct.name;
                  setSelectedProduct(null);
                  onSelectProductForQuote(pName);
                }}
                className="bvp-btn-gold px-6 py-2.5 rounded-xl font-controller text-xs uppercase tracking-wider cursor-pointer"
              >
                {t.products.detailModal.quoteThis}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
