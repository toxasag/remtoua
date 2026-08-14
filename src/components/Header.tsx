import React, { useState } from 'react';
import { Phone, MapPin, ShieldCheck, Truck, Wrench, Send, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface HeaderProps {
  onOpenOrder: (productId?: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrder, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top USP bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-bold text-orange-400">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
              <span>Гарантия 5 лет от сервиса</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Wrench className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Свой сервис в Москве</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Truck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{COMPANY_INFO.cdekDeliveryText}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-slate-300 ml-auto">
            <span className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700/80 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Склад: 09:00–20:00</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-base sm:text-xl tracking-tighter shadow-md shadow-orange-200 group-hover:scale-105 transition-transform shrink-0">
                TY
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                  <span className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-slate-900 truncate">
                    TENGYA <span className="text-orange-600">/</span> TOUA
                  </span>
                  <span className="text-[10px] bg-orange-100 text-orange-700 border border-orange-200 px-1 py-0.2 rounded font-mono font-bold tracking-normal hidden sm:inline-block">
                    Direct
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-500 hidden md:block truncate">
                  Официальный сервис и склад в Москве
                </span>
              </div>
            </a>

            {/* Address badge on desktop */}
            <div className="hidden xl:flex items-center gap-2.5 text-xs text-slate-600 pl-4 border-l border-slate-200">
              <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 truncate">Москва, 3-й пр-д Марьиной Рощи, 40с1</p>
                <p className="text-[11px] text-slate-500">Мастерская, отстрел и склад</p>
              </div>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-semibold text-slate-600 shrink-0">
            <button onClick={() => scrollToSection('truth')} className="hover:text-orange-600 transition-colors cursor-pointer">
              Почему дешевле
            </button>
            <button onClick={() => scrollToSection('applications')} className="hover:text-orange-600 transition-colors cursor-pointer">
              Для каких работ
            </button>
            <button onClick={() => scrollToSection('service')} className="hover:text-orange-600 transition-colors flex items-center gap-1 cursor-pointer">
              <span>Сервис 5 лет</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
            </button>
            <button onClick={() => scrollToSection('catalog')} className="hover:text-orange-600 transition-colors cursor-pointer">
              Каталог и цены
            </button>
            <button onClick={() => scrollToSection('calculator')} className="hover:text-orange-600 transition-colors cursor-pointer">
              Калькулятор
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-orange-600 transition-colors cursor-pointer">
              FAQ
            </button>
          </nav>

          {/* Contact and CTA */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Phone & Messengers */}
            <div className="hidden sm:flex flex-col items-end">
              <a 
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="text-sm sm:text-base lg:text-lg font-black text-slate-900 hover:text-orange-600 transition-colors tracking-tight flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-[11px]">
                <a 
                  href={COMPANY_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors flex items-center gap-0.5"
                >
                  <MessageSquare className="w-3 h-3" /> WhatsApp
                </a>
                <span className="text-slate-300">•</span>
                <a 
                  href={COMPANY_INFO.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 font-semibold transition-colors flex items-center gap-0.5"
                >
                  <Send className="w-3 h-3" /> Telegram
                </a>
              </div>
            </div>

            {/* Quick Order Button */}
            <button
              id="header-order-btn"
              onClick={() => onOpenOrder('gsn50-ii')}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-md shadow-orange-200 text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-1.5 cursor-pointer uppercase tracking-tight whitespace-nowrap"
            >
              <span className="hidden xs:inline sm:hidden md:inline">Заказать </span>
              <span>25 990 ₽</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <div className="flex flex-col gap-1 text-xs text-slate-600 pb-3 border-b border-slate-100">
            <span className="font-bold text-slate-900">{COMPANY_INFO.address}</span>
            <span className="text-slate-500">Пн–Сб 09:00–20:00, Вс 10:00–18:00</span>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-orange-600 font-black text-base mt-1 flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <button onClick={() => scrollToSection('truth')} className="text-left py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-semibold">
              Почему дешевле
            </button>
            <button onClick={() => scrollToSection('applications')} className="text-left py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-semibold">
              Для каких работ
            </button>
            <button onClick={() => scrollToSection('service')} className="text-left py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-semibold">
              Сервис 5 лет
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-left py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-semibold">
              Каталог и расходка
            </button>
            <button onClick={() => scrollToSection('calculator')} className="text-left py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-semibold">
              Калькулятор
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-semibold">
              Вопросы и ответы
            </button>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-800 font-bold text-xs text-center"
            >
              Вопрос мастеру
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder('gsn50-ii');
              }}
              className="flex-1 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs text-center shadow-md shadow-orange-200 uppercase tracking-tight"
            >
              Заказать за 25 990 ₽
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
