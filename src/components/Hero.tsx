import React, { useState } from 'react';
import { Shield, Zap, Package, Wrench, ChevronRight, MessageCircle, CheckCircle2, Play, Flame, Sparkles, Award } from 'lucide-react';
import { HERO_DATA, COMPANY_INFO } from '../data/landingData';

interface HeroProps {
  onOpenOrder: (productId?: string) => void;
  onOpenConsultation: () => void;
  onOpenVideoTest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onOpenConsultation, onOpenVideoTest }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isTestFiring, setIsTestFiring] = useState(false);

  const galleryItems = HERO_DATA.gallery || [
    { id: 'tool', title: 'Инструмент', url: HERO_DATA.heroImage, label: 'GSN50 II 2-го поколения' },
  ];

  const currentPhoto = galleryItems[selectedPhotoIndex] || galleryItems[0];

  const triggerTestFire = () => {
    setIsTestFiring(true);
    setTimeout(() => setIsTestFiring(false), 900);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      {/* Background subtle gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Offer, Copy, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Газовый монтажный пистолет <span className="text-orange-600">GSN50 II</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-700">
                {HERO_DATA.titleSub}
              </p>
            </div>

            {/* Subtitle / Value proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-900 font-bold">Прямой монтаж по монолиту, стали и кирпичу без проводов и бурения перфоратором.</strong>{' '}
              Та же надежная база, что и в <strong className="text-slate-900 font-bold">Toua, Hybest, Fixpistols</strong>, но с доработанной поршневой группой 2-го поколения и честной гарантией 5 лет от нашей мастерской.
            </p>

            {/* Price & Offer Card */}
            <div className="p-4 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-md ring-1 ring-slate-100 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                <div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                    Цена сегодня по прямой поставке:
                  </div>
                  <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                    <span className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight">
                      25 990 ₽
                    </span>
                    <span className="text-base sm:text-xl text-slate-400 line-through font-semibold">
                      37 000 ₽
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-600 font-bold mt-1">
                    {HERO_DATA.economyNote}
                  </p>
                </div>

                <div className="sm:text-right bg-orange-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-orange-200 sm:border-0">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 uppercase tracking-wide bg-orange-100 px-3 py-1 rounded-lg border border-orange-200 mb-1">
                    <Shield className="w-3.5 h-3.5 text-orange-600" />
                    Гарантия 5 лет
                  </div>
                  <p className="text-xs text-slate-600">
                    В собственной мастерской в Москве (в рознице дают 1 год)
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 flex flex-col sm:flex-row gap-3">
                <button
                  id="hero-order-main-btn"
                  onClick={() => onOpenOrder('gsn50-ii')}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm sm:text-base lg:text-lg py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl shadow-lg shadow-orange-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-tight"
                >
                  <span>Заказать GSN50 II — 25 990 ₽</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <button
                  id="hero-ask-master-btn"
                  onClick={onOpenConsultation}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-base py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Задать вопрос мастеру</span>
                </button>
              </div>
            </div>

            {/* Trust Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Отстрел перед покупкой</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 truncate">В мастерской или при курьере</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Package className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Полный комплект</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 truncate">Кейс, 2 АКБ, зарядка, масло</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Запчасти на складе</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 truncate">Марьина Роща, Москва</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Interactive Hotspots */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl bg-white border border-slate-200 p-3 sm:p-4 shadow-xl ring-1 ring-slate-100 overflow-hidden group">
              
              {/* Top status bar inside card */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 mb-3 text-xs">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span className="font-bold text-slate-800 truncate">В наличии в Москве: 42 шт.</span>
                </div>
                <span className="text-orange-600 font-mono font-bold shrink-0 ml-2">120 Дж</span>
              </div>

              {/* Product Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] flex items-center justify-center border border-slate-200">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {/* Simulated test fire flash */}
                {isTestFiring && (
                  <div className="absolute inset-0 bg-orange-500/30 flex items-center justify-center backdrop-blur-xs transition-all animate-ping">
                    <div className="bg-orange-600 text-white font-black px-4 py-2 rounded-xl text-sm sm:text-lg flex items-center gap-2 shadow-2xl text-center">
                      <Flame className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" /> ВЫСТРЕЛ 120 ДЖ В МОНОЛИТ!
                    </div>
                  </div>
                )}

                {/* Hotspots over image */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1.5 text-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="truncate">Узкий ствол (клипсы 16 мм)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="truncate">Энергия: 100–120 Дж</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="truncate">2 Li-Ion АКБ (до 4000 выстр.)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="truncate">Гвозди 15–40 мм (2.6–3.0 мм)</span>
                    </div>
                  </div>
                </div>

                {/* Photo Badge overlay */}
                <div className="absolute top-2.5 left-2.5 bg-slate-900/85 text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700 backdrop-blur-xs">
                  {currentPhoto.label}
                </div>

                {/* Test Fire Action Tag */}
                <button
                  onClick={triggerTestFire}
                  className="absolute top-2.5 right-2.5 bg-slate-900/85 hover:bg-slate-900 text-orange-400 border border-orange-500/40 text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-1 rounded-lg flex items-center gap-1.5 backdrop-blur-sm transition-all hover:scale-105 cursor-pointer shadow-sm"
                  title="Нажмите для симуляции выстрела"
                >
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                  <span>Тест выстрела</span>
                </button>
              </div>

              {/* Photo Switcher Thumbnails */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {galleryItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`p-1.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                      selectedPhotoIndex === idx
                        ? 'bg-orange-50 border-orange-500 ring-2 ring-orange-200'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold text-slate-900 truncate">
                        {item.title}
                      </span>
                      <span className="block text-[9px] text-slate-500 truncate">
                        Фото {idx + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Card Footer badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">Экономия времени:</span>
                  <span className="font-extrabold text-orange-600 text-xs sm:text-sm">В 5 раз быстрее бура</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] sm:text-[11px]">Чистовой монтаж:</span>
                  <span className="font-extrabold text-emerald-600 text-xs sm:text-sm">0% пыли и грязи</span>
                </div>
              </div>

            </div>

            {/* Verification badge (prevent negative margin overflow on mobile) */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:-left-4 bg-slate-900 text-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-800">
              <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs uppercase leading-tight text-white">Заводская сборка Tengya</p>
                <p className="text-[11px] text-slate-300">100% оригинал с гарантией 5 лет</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
