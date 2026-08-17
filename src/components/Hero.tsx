import React from 'react';
import { Shield, Package, Sparkles, Truck, ShoppingCart, Zap, Wrench, CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '../data/landingData';

interface HeroProps {
  onOpenOrder: (productId?: string) => void;
  onOpenConsultation: () => void;
  onOpenVideoTest: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 bg-slate-50 border-b border-slate-200">
      {/* Background subtle gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          
          {/* Top Badge: Factory */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Оригинальные пистолеты TOUA</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Газовые монтажные пистолеты <span className="text-orange-600">по низким ценам</span>
            </h1>
            <p className="text-base sm:text-xl font-bold text-slate-700">
              Полный модельный ряд инструмента и крепежа напрямую от производителя
            </p>
          </div>

          {/* Price & Offer Card */}
          <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-md ring-1 ring-slate-100 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="text-[11px] uppercase tracking-widest font-bold text-slate-500 mb-1">
                  Прямые поставки с завода:
                </div>
                <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                  <span className="text-xs uppercase font-bold text-slate-500 self-center">Цены</span>
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    от 25 990 ₽
                  </span>
                  <span className="text-base sm:text-xl text-slate-400 line-through font-semibold">
                    37 000 ₽
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-600 font-bold mt-1">
                  Экономия до 11 010 ₽ без наценок дилеров и перекупщиков
                </p>
              </div>

              <div className="sm:text-right bg-orange-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-orange-200 sm:border-0">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 uppercase tracking-wide bg-orange-100 px-3 py-1 rounded-lg border border-orange-200 mb-1">
                  <Shield className="w-3.5 h-3.5 text-orange-600" />
                  Гарантия 5 лет
                </div>
                <p className="text-xs text-slate-600">
                  Собственный сервис и склад в Москве
                </p>
              </div>
            </div>

            {/* Action Button to Catalog */}
            <div className="pt-4">
              <button
                id="hero-go-to-catalog-btn"
                onClick={scrollToCatalog}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-base sm:text-lg py-3.5 px-6 rounded-xl shadow-lg shadow-orange-200 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-tight"
              >
                <ShoppingCart className="w-5 h-5 shrink-0" />
                <span>Смотреть каталог инструмента и крепежа (от 25 990 ₽)</span>
              </button>
            </div>
          </div>

          {/* Key Bullets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Truck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 leading-tight">Доставка за 1 день</h4>
                <p className="text-xs text-slate-500 mt-0.5">Курьером по Москве и МО или экспресс СДЭК с проверкой до оплаты</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 leading-tight">Прямой монтаж в монолит и сталь</h4>
                <p className="text-xs text-slate-500 mt-0.5">100–120 Дж энергии — 1 точка за 1 секунду без пыли и перфоратора</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <Shield className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 leading-tight">Честная гарантия 5 лет</h4>
                <p className="text-xs text-slate-500 mt-0.5">Собственный сервисный центр и оперативный ремонт на Марьиной Роще</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                <Package className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 leading-tight">Полная комплектация</h4>
                <p className="text-xs text-slate-500 mt-0.5">Ударопрочный кейс, 2 Li-Ion аккумулятора, сетевое ЗУ, масло и ключи</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
