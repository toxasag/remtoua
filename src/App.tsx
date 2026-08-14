import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandTruthSection } from './components/BrandTruthSection';
import { WorkApplicationsSection } from './components/WorkApplicationsSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ServiceCenterSection } from './components/ServiceCenterSection';
import { CatalogSection } from './components/CatalogSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { MasterConsultationModal } from './components/MasterConsultationModal';
import { VideoTestModal } from './components/VideoTestModal';
import { MessageSquare, Phone, ShieldCheck, ChevronUp } from 'lucide-react';
import { COMPANY_INFO } from './data/landingData';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>('gsn50-ii');
  const [extras, setExtras] = useState<{ gasCount: number; nailsCount: number; nailsType: string } | undefined>(undefined);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenOrder = (
    productId: string = 'gsn50-ii',
    customExtras?: { gasCount: number; nailsCount: number; nailsType: string }
  ) => {
    setSelectedProductId(productId);
    setExtras(customExtras);
    setOrderModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Manrope',sans-serif] selection:bg-orange-600 selection:text-white">
      
      {/* Header */}
      <Header
        onOpenOrder={(pid) => handleOpenOrder(pid || 'gsn50-ii')}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        
        {/* 1. Hero */}
        <Hero
          onOpenOrder={(pid) => handleOpenOrder(pid || 'gsn50-ii')}
          onOpenConsultation={() => setConsultationModalOpen(true)}
          onOpenVideoTest={() => setVideoModalOpen(true)}
        />

        {/* 2. Brand Truth: Why GSN50 II costs 25 990 RUB */}
        <BrandTruthSection
          onOpenOrder={() => handleOpenOrder('gsn50-ii')}
        />

        {/* 3. Work Applications: Electricians, Ceilings, Plumbers */}
        <WorkApplicationsSection
          onOpenOrder={() => handleOpenOrder('gsn50-ii')}
        />

        {/* 4. ROI & Savings Calculator */}
        <SavingsCalculator
          onOpenOrder={() => handleOpenOrder('gsn50-ii')}
        />

        {/* 5. Service Center & 5-Year Warranty */}
        <ServiceCenterSection
          onOpenConsultation={() => setConsultationModalOpen(true)}
          onOpenOrder={() => handleOpenOrder('gsn50-ii')}
        />

        {/* 6. Product & Consumables Catalog */}
        <CatalogSection
          onOpenOrder={(pid, ext) => handleOpenOrder(pid, ext)}
          onOpenConsultation={() => setConsultationModalOpen(true)}
        />

        {/* 7. FAQ */}
        <FaqSection
          onOpenConsultation={() => setConsultationModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenOrder={(pid) => handleOpenOrder(pid || 'gsn50-ii')}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Sticky Quick Contact / Master Widget (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        
        {/* Ask Master floating button */}
        <button
          onClick={() => setConsultationModalOpen(true)}
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xl shadow-orange-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-tight"
          title="Задать вопрос мастеру сервиса"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Вопрос мастеру</span>
        </button>

        {/* Order 25 990 floating pill for mobile */}
        <button
          onClick={() => handleOpenOrder('gsn50-ii')}
          className="sm:hidden flex items-center gap-1.5 bg-slate-900 text-white font-bold text-xs py-2.5 px-3.5 rounded-xl shadow-lg border border-slate-700"
        >
          <ShieldCheck className="w-4 h-4 text-orange-500" />
          <span>Заказать 25 990 ₽</span>
        </button>
      </div>

      {/* Modals */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialProductId={selectedProductId}
        initialExtras={extras}
      />

      <MasterConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      <VideoTestModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenOrder={() => handleOpenOrder('gsn50-ii')}
      />

    </div>
  );
}
