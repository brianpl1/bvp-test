import React, { useState } from 'react';
import { Language, ProductItem } from '../types';
import { content } from '../translations';
import { productsData } from '../data/productsData';
import {
  Sparkles,
  ArrowRight,
  Eye,
  Check,
  Shield,
  Layers,
  X,
  Package,
  Clock,
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
    <section id="products" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#85581A] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.products.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            {t.products.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.products.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
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
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/20'
                  : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
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
              className="rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge if any */}
                {product.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </div>
                )}
                {/* Category Pill Right */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Product Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-amber-700 transition-colors mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Specifications Meta */}
                  <div className="space-y-1.5 py-3 border-y border-slate-100 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{t.products.moqLabel}</span>
                      <span className="font-bold text-slate-900">{product.moq}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{t.products.timeLabel}</span>
                      <span className="font-semibold text-slate-900">{product.productionTime}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2 pt-0.5">
                      <span className="text-slate-500 shrink-0">{t.products.materialLabel}</span>
                      <span className="font-medium text-slate-800 text-right line-clamp-1">
                        {product.material}
                      </span>
                    </div>
                  </div>

                  {/* Supported Branding Techniques */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {product.techniques.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.products.actionDetail}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProductForQuote(product.name)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold tracking-wide shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="text-xl font-black text-slate-950 mt-0.5">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Product Visual */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Mô tả sản phẩm:</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80 space-y-2 text-xs sm:text-sm">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Package className="w-4 h-4 text-amber-600" />
                  {t.products.detailModal.techSpecs}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-500">Số lượng tối thiểu (MOQ):</span>
                    <div className="font-bold text-slate-900">{selectedProduct.moq}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Thời gian sản xuất dự kiến:</span>
                    <div className="font-bold text-slate-900">{selectedProduct.productionTime}</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Chất liệu tiêu chuẩn:</span>
                  <div className="font-semibold text-slate-900">{selectedProduct.material}</div>
                </div>
              </div>

              {/* Branding Options */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {t.products.detailModal.brandingOptions}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.techniques.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold"
                    >
                      ✓ {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quality Pledge Notice */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t.products.detailModal.sampleNotice}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 font-bold text-xs cursor-pointer"
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
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs tracking-wide shadow-md cursor-pointer"
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
