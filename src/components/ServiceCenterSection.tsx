import React from 'react';
import { Wrench, ShieldCheck, Clock, Sparkles, MapPin, CheckCircle, ArrowUpRight, Award, Flame, Phone } from 'lucide-react';
import { SERVICE_CENTER_DATA, COMPANY_INFO } from '../data/landingData';

interface ServiceCenterProps {
  onOpenConsultation: () => void;
  onOpenOrder: () => void;
}

export const ServiceCenterSection: React.FC<ServiceCenterProps> = ({ onOpenConsultation, onOpenOrder }) => {
  return (
    <section id="service" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Собственная мастерская в Москве</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {SERVICE_CENTER_DATA.title}
          </h2>
          <p className="text-base text-slate-600">
            {SERVICE_CENTER_DATA.subtitle}
          </p>
        </div>

        {/* 3 Main Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {SERVICE_CENTER_DATA.pillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-colors group flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  {index === 0 && <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {index === 1 && <Clock className="w-5 h-5 sm:w-6 sm:h-6" />}
                  {index === 2 && <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
              </div>
              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-200 flex items-center text-xs text-orange-700 font-bold">
                <span>Гарантийное обязательство</span>
                <CheckCircle className="w-3.5 h-3.5 ml-1.5 text-orange-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Photo and Stock Status */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md ring-1 ring-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Workshop visual & Certificate */}
            <div className="lg:col-span-5 relative bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between p-4 sm:p-8">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 shadow-xs mb-4 sm:mb-6">
                <img
                  src={SERVICE_CENTER_DATA.workshopImage}
                  alt="Сервисный центр прямого монтажа в Москве"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                  <span className="text-[10px] sm:text-xs font-bold text-white bg-slate-900/90 px-2 sm:px-2.5 py-1 rounded-lg border border-slate-700 truncate">
                    📍 Москва, 3-й проезд Марьиной Рощи, 40с1
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Сервис: Hybest, Satohi, Vapp, Fixpistols, Toua</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">Прямые поставки узлов, оригинальные ремкомплекты и ремонт</p>
                  </div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 text-[11px] sm:text-xs text-slate-600 shadow-2xs">
                  <strong className="text-slate-900">Для регионов России:</strong> в случае гарантии доставка СДЭК за наш счет. Диагностика и устранение 24–48 часов.
                </div>
              </div>
            </div>

            {/* Right: Real Spare Parts Stock Table */}
            <div className="lg:col-span-7 p-4 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4 flex-wrap">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900">
                      Наличие запчастей и ремкомплектов на складе
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      Не нужно ждать месяцами из Китая — всё уже в Москве
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-bold shrink-0 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    Склад укомплектован
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {SERVICE_CENTER_DATA.warehouseStock.map((part, i) => (
                    <div 
                      key={i} 
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-xs"
                    >
                      <div className="min-w-0">
                        <span className="font-bold text-slate-900 block truncate">{part.name}</span>
                        <span className="text-slate-500 text-[11px]">Совместимость: {part.compatibleWith}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap">
                        <span className="text-emerald-700 font-bold text-[11px] sm:text-xs">{part.stockStatus}</span>
                        <span className="text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium shadow-2xs">Замена: {part.repairTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-600 font-medium">
                  Нужен ремонт или ТО (Hybest, Satohi, Vapp, Fixpistols, Toua)?
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>Связаться с мастером</span>
                  </button>
                  <button
                    onClick={onOpenOrder}
                    className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-orange-200 uppercase tracking-tight"
                  >
                    <span>Купить с гарантией 5 лет</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
