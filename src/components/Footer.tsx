import React from 'react';
import { MapPin, Phone, MessageSquare, Send, ShieldCheck, Wrench, Truck, Clock, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface FooterProps {
  onOpenOrder: (productId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrder, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Guarantee */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                TY
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                TENGYA <span className="text-orange-500">/</span> TOUA Direct
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Прямые поставки газового монтажного инструмента 2-го поколения с завода-изготовителя Tengya (КНР) и собственный авторизованный сервис в Москве.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-bold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>Официальная гарантия 5 лет</span>
            </div>
          </div>

          {/* Col 2: Workshop & Warehouse */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Мастерская и склад в Москве
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Въезд свободный, парковка для клиентов сервиса бесплатная. Тестовый стенд для отстрела готов к работе.
            </p>
          </div>

          {/* Col 3: Delivery and Payment */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Доставка и оплата
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Отправка СДЭК по всей РФ в день заказа</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Оплата при получении после осмотра</span>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Бесплатная пересылка по гарантии СДЭКом</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 text-slate-400 font-bold text-[10px]">НДС</span>
                <span>Работаем с юрлицами с НДС и без НДС</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Связь с мастером
            </h4>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="text-lg font-black text-white hover:text-orange-400 transition-colors flex items-center gap-2 block"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              {COMPANY_INFO.phone}
            </a>

            <div className="flex gap-2 pt-1">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 hover:bg-emerald-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp
              </a>
              <a
                href={COMPANY_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-sky-950/80 border border-sky-700/60 text-sky-300 hover:bg-sky-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" /> Telegram
              </a>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold text-center cursor-pointer transition-colors shadow-2xs"
            >
              Заказать обратный звонок
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} TENGYA / TOUA Direct. Официальный сервис прямого монтажа в РФ.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-[11px] text-slate-400">
            <span>GSN50 II Direct 25 990 ₽</span>
            <span>•</span>
            <span>Toua GFN3490</span>
            <span>•</span>
            <span>Toua GSN50D</span>
            <span>•</span>
            <span>Keenly 165A</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
