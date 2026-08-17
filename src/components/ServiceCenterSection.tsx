import React from 'react';
import { Wrench, ShieldCheck, Clock, Sparkles, Award } from 'lucide-react';
import { SERVICE_CENTER_DATA } from '../data/landingData';

interface ServiceCenterProps {
  onOpenConsultation?: () => void;
  onOpenOrder?: () => void;
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
            </div>
          ))}
        </div>

        {/* Workshop Photo and Information */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md ring-1 ring-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Workshop visual */}
            <div className="lg:col-span-6 relative bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-4 sm:p-8">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 shadow-xs">
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
            </div>

            {/* Workshop Details */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-5 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">Сервисный центр: Satohi, Hybest, Fixpistol, VAPP, Toua</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Прямые поставки оригинальных узлов, ремкомплектов и расходных материалов</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block">Диагностика и ремонт в Москве:</span>
                  <p className="text-slate-600">Тестовый стенд, проверка компрессии, чистка камеры сгорания и замена бойков от 15 минут прямо при вас.</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 space-y-1">
                  <span className="font-bold text-emerald-950 block">Для регионов России:</span>
                  <p className="text-emerald-800">В случае гарантийного обслуживания доставка СДЭК за наш счет. Срок диагностики и устранения — 24–48 часов.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
