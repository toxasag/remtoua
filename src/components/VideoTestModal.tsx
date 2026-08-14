import React from 'react';
import { X, Play, Flame, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface VideoTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
}

export const VideoTestModal: React.FC<VideoTestModalProps> = ({ isOpen, onClose, onOpenOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Тестовый стенд мастерской</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Отстрел GSN50 II в тяжелый монолит B35
          </h3>
          <p className="text-xs text-slate-600">
            Заводская энергия 120 Дж и кованый гвоздь 22 мм: 0% загибов, 100% фиксация
          </p>
        </div>

        {/* Video simulation preview box */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-200 flex items-center justify-center group shadow-xs">
          <img
            src="/src/assets/images/ceiling_work_1786714312634.jpg"
            alt="Отстрел пистолета в потолок"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 mb-3 animate-pulse">
              <Play className="w-8 h-8 ml-1" />
            </div>
            <span className="text-white font-bold text-sm bg-black/70 px-3 py-1.5 rounded-lg border border-slate-700">
              Отстрел в реальном времени: 1 клипса за 1.2 секунды
            </span>
          </div>
        </div>

        {/* Key test results */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 block text-[10px]">Глубина захода:</span>
            <span className="font-bold text-orange-600 text-sm">22 мм в B35</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 block text-[10px]">Состояние клипсы:</span>
            <span className="font-bold text-emerald-700 text-sm">Без трещин</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 block text-[10px]">Усилие на отрыв:</span>
            <span className="font-bold text-slate-900 text-sm">&gt; 120 кгс</span>
          </div>
        </div>

        {/* Action button */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onOpenOrder();
            }}
            className="flex-1 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight shadow-md shadow-orange-200"
          >
            <span>Заказать с отстрелом при получении (25 990 ₽)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
