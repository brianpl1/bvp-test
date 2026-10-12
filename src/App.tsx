/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, FontTheme, InquiryFormData } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BusinessAreas } from './components/BusinessAreas';
import { VisionMission } from './components/VisionMission';
import { OrderProcess } from './components/OrderProcess';
import { ProductsShowcase } from './components/ProductsShowcase';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SampleModal } from './components/SampleModal';
import { FontSwitcher } from './components/FontSwitcher';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('vi');
  const [fontTheme, setFontTheme] = useState<FontTheme>(() => {
    const saved = localStorage.getItem('bvp_font_theme');
    return (saved as FontTheme) || 'montserrat';
  });
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [contactInitialData, setContactInitialData] = useState<Partial<InquiryFormData>>({});

  useEffect(() => {
    localStorage.setItem('bvp_font_theme', fontTheme);
  }, [fontTheme]);

  // Scroll smoothly to contact section with pre-filled interest
  const scrollToContactWithData = (data: Partial<InquiryFormData>) => {
    setContactInitialData(data);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = () => {
    scrollToContactWithData({
      notes: 'Khách hàng yêu cầu báo giá dự án tổng thể.',
    });
  };

  const handleSelectCategoryForQuote = (categoryName: string) => {
    scrollToContactWithData({
      category: categoryName,
      notes: `Khách hàng quan tâm tư vấn chi tiết danh mục: ${categoryName}.`,
    });
  };

  const handleSelectProductForQuote = (productName: string) => {
    scrollToContactWithData({
      notes: `Yêu cầu báo giá chi tiết sản phẩm: ${productName}.`,
    });
  };

  return (
    <div
      data-theme-font={fontTheme}
      className="min-h-screen bg-[#FAF8F5] text-[#2A1708] flex flex-col selection:bg-[#dec357] selection:text-[#653814] transition-all"
    >
      {/* Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenQuoteModal={handleOpenQuoteModal}
        currentFont={fontTheme}
        onFontChange={setFontTheme}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 2. Introduction / Lời Ngỏ Section */}
        <AboutSection
          currentLang={currentLang}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 3. Business Areas Grid */}
        <BusinessAreas
          currentLang={currentLang}
          onSelectCategoryForQuote={handleSelectCategoryForQuote}
        />

        {/* 4. Vision, Mission & Core Values */}
        <VisionMission currentLang={currentLang} />

        {/* 5. Order Process 7-Step Flow */}
        <OrderProcess
          currentLang={currentLang}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 6. Key Products Showcase */}
        <ProductsShowcase
          currentLang={currentLang}
          onSelectProductForQuote={handleSelectProductForQuote}
        />

        {/* 7. Key Clients & Partners Showcase */}
        <ClientsSection currentLang={currentLang} />

        {/* 8. Contact & Inquiry Form with Validation & Appreciation Modal */}
        <ContactSection
          currentLang={currentLang}
          initialFormData={contactInitialData}
        />
      </main>

      {/* Corporate Footer */}
      <Footer currentLang={currentLang} />

      {/* Free Fabric & Prototype Sample Request Modal */}
      <SampleModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        currentLang={currentLang}
      />

      {/* Floating Font Customizer Tool */}
      <FontSwitcher
        currentFont={fontTheme}
        onFontChange={setFontTheme}
        currentLang={currentLang}
      />
    </div>
  );
}
