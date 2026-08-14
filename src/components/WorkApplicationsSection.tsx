import React, { useState } from 'react';
import { Zap, LayoutGrid, Droplets, CheckCircle2, Clock, ShieldAlert, ArrowRight, Gauge, Sparkles } from 'lucide-react';
import { WORK_TRADES } from '../data/landingData';

interface WorkApplicationsProps {
  onOpenOrder: () => void;
}

export const WorkApplicationsSection: React.FC<WorkApplicationsProps> = ({ onOpenOrder }) => {
  const [activeTradeId, setActiveTradeId] = useState<string>('electricians');

  const activeTrade = WORK_TRADES.find((t) => t.id === activeTradeId) || WORK_TRADES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-5 h-5" />;
      case 'layout-grid':
        return <LayoutGrid className="w-5 h-5" />;
      case 'droplets':
        return <Droplets className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="applications" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
            <Gauge className="w-3.5 h-3.5 text-orange-600" />
            <span>Применение инструмента</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Для каких работ берется пистолет
          </h2>
          <p className="text-base text-slate-600">
            Один инструмент заменяет перфоратор, ведро дюбелей, молоток и километры удлинителей на всех ключевых этапах отделки и инженерии.
          </p>
        </div>

        {/* Trade Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {WORK_TRADES.map((trade) => {
            const isActive = trade.id === activeTradeId;
            return (
              <button
                key={trade.id}
                onClick={() => setActiveTradeId(trade.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-base transition-all cursor-pointer ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-200 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {getIcon(trade.iconName)}
                <span>{trade.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Trade Detailed Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-4 sm:p-8 lg:p-10 shadow-md ring-1 ring-slate-100 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-100 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
                  {getIcon(activeTrade.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-orange-600">Специализация</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">{activeTrade.title}</h3>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <p className="text-sm sm:text-base text-slate-900 font-bold leading-relaxed">
                  {activeTrade.shortDesc}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeTrade.description}
              </p>

              {/* Tasks List */}
              <div className="space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Что крепится в 1 секунду:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {activeTrade.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speed & Consumable Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Скорость: {activeTrade.speed}</span>
                </div>
                <div className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
                  📌 Рекомендуемые гвозди: <span className="text-slate-900 font-bold">{activeTrade.suitablePins}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenOrder}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-md shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm uppercase tracking-tight"
                >
                  <span>Подобрать комплект под {activeTrade.title.toLowerCase()}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-md bg-slate-100">
                <img
                  src={activeTrade.image}
                  alt={activeTrade.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700 text-xs text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span>Чистая работа без пылеудаления и шума перфоратора</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Perforator vs Gas Gun Comparison Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-2">
              <ShieldAlert className="w-4 h-4" />
              Как было раньше (Перфоратор + Бур + Дюбель 6х40):
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              45–60 секунд на одно отверстие. Пыль сыпется на лицо и потолок. Постоянно ломаются буры в арматуре. Грохот на весь подъезд и жалобы соседей.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4" />
              Как сейчас с GSN50 II:
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              1 секунда на клипсу. Ни грамма пыли. Никаких удлинителей. Усилие до 120 Дж мгновенно пробивает монолит марки B35 и сталь до 4 мм.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
