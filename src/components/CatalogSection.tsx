import React, { useState } from 'react';
import { ShoppingCart, Check, ShieldCheck, Zap, Sparkles, Plus, Minus, PackageCheck, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { PRODUCTS, CONSUMABLES } from '../data/landingData';
import { ProductItem } from '../types';

interface CatalogProps {
  onOpenOrder: (productId: string, extras?: { gasCount: number; nailsCount: number; nailsType: string }) => void;
  onOpenConsultation: () => void;
}

export const CatalogSection: React.FC<CatalogProps> = ({ onOpenOrder, onOpenConsultation }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [gasCount, setGasCount] = useState<number>(2);
  const [nailsCount, setNailsCount] = useState<number>(2);
  const [nailsType, setNailsType] = useState<string>('19 мм (электромонтаж / потолки)');

  const gsn50Price = 25990;
  const gasPrice = 360;
  const nailsPrice = 590;

  const kitTotalPrice = gsn50Price + gasCount * gasPrice + nailsCount * nailsPrice;

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
            <ShoppingCart className="w-4 h-4 text-orange-600" />
            <span>Каталог оборудования и расходников</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Каталог инструмента и расходных материалов
          </h2>
          <p className="text-base text-slate-600">
            Оригинальные пистолеты с завода и фирменные расходники Keenly / Toua в наличии на складе в Москве.
          </p>
        </div>

        {/* 3 Main Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {PRODUCTS.map((product) => {
            const isFlagship = product.id === 'gsn50-ii';

            return (
              <div
                key={product.id}
                className={`rounded-3xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isFlagship
                    ? 'bg-white border-2 border-orange-500 shadow-md ring-1 ring-orange-200 lg:-translate-y-2 relative'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="p-4 sm:p-5 pb-0">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[10px] sm:text-[11px] font-black uppercase px-2 sm:px-2.5 py-1 rounded-md tracking-wider ${
                          isFlagship
                            ? 'bg-orange-600 text-white shadow-2xs'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {product.badge}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        В наличии
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3 sm:mb-4">{product.subtitle}</p>
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-[4/3] bg-slate-100 border-y border-slate-200 overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isFlagship && (
                      <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-[10px] sm:text-[11px] font-bold text-orange-400 flex items-center gap-1 shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>Гарантия 5 лет</span>
                      </div>
                    )}
                  </div>

                  {/* Key specs */}
                  <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-100 text-slate-600 gap-2">
                        <span className="text-slate-500 shrink-0">Назначение:</span>
                        <span className="font-semibold text-right text-slate-800">{product.purpose}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100 text-slate-600 gap-2">
                        <span className="text-slate-500 shrink-0">Крепеж/Гвозди:</span>
                        <span className="font-bold text-right text-orange-700">{product.nails}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100 text-slate-600 gap-2">
                        <span className="text-slate-500 shrink-0">Энергия:</span>
                        <span className="font-bold text-slate-900">{product.energy}</span>
                      </div>
                      <div className="flex justify-between py-1 text-slate-600 gap-2">
                        <span className="text-slate-500 shrink-0">Гарантия:</span>
                        <span className="font-bold text-emerald-700">{product.warranty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="p-4 sm:p-5 pt-0 mt-auto">
                  <div className="flex items-baseline justify-between mb-3 sm:mb-4 pt-3 border-t border-slate-100 gap-2 flex-wrap">
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-slate-900">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-slate-400 line-through ml-2">
                          {product.oldPrice.toLocaleString('ru-RU')} ₽
                        </span>
                      )}
                    </div>
                    {isFlagship && (
                      <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        Экономия 11 010 ₽
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => onOpenOrder(product.id)}
                      className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-tight ${
                        isFlagship
                          ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-200'
                          : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800'
                      }`}
                    >
                      <span>{isFlagship ? 'Купить GSN50 II' : `Заказать ${product.name.split(' ')[1] || 'нейлер'}`}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors text-center font-medium cursor-pointer"
                    >
                      Посмотреть полный комплект поставки
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consumables Section */}
        <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-8 lg:p-10 mb-16 shadow-xs">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Всегда в наличии</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Расходные материалы в наличии
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Фирменные баллоны с лубрикантом и усиленные гвозди с баллистическим наконечником
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {CONSUMABLES.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                <div className="w-full sm:w-32 md:w-36 h-36 sm:h-32 md:h-36 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-200 shadow-2xs">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2 w-full min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  <p className="text-[11px] text-slate-500 font-mono truncate">{item.specs}</p>
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <span className="text-base sm:text-lg font-black text-orange-600">{item.priceUnit}</span>
                    <button
                      onClick={() => onOpenOrder('gsn50-ii')}
                      className="text-xs bg-white hover:bg-slate-100 text-slate-800 font-bold px-3 py-1.5 rounded-lg border border-slate-300 transition-colors shadow-2xs cursor-pointer shrink-0"
                    >
                      Добавить к заказу
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master's Complete Kit Quick Configurator */}
        <div className="rounded-3xl bg-white border-2 border-orange-500 p-4 sm:p-8 lg:p-10 shadow-md ring-1 ring-orange-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Готовый комплект мастера под ключ</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900">
                Соберите комплект GSN50 II с баллонами и гвоздями
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Выберите нужное количество расходников для вашего объема работ и получите готовый к работе инструмент с гарантией 5 лет.
              </p>

              <div className="space-y-3 pt-2">
                {/* Gas canisters counter */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Газовые баллоны KEENLY 165A (360 ₽/шт)</span>
                    <span className="text-[11px] text-slate-500">1 баллон = до 1 200 выстрелов со смазкой</span>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <button
                      onClick={() => setGasCount(Math.max(0, gasCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold shadow-2xs cursor-pointer"
                      aria-label="Уменьшить количество баллонов"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-12 text-center font-bold text-xs sm:text-sm text-slate-900">{gasCount} шт</span>
                    <button
                      onClick={() => setGasCount(gasCount + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold shadow-2xs cursor-pointer"
                      aria-label="Увеличить количество баллонов"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Nails boxes counter */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-900 block">Усиленные гвозди по бетону (590 ₽ / 1000 шт)</span>
                    <select
                      value={nailsType}
                      onChange={(e) => setNailsType(e.target.value)}
                      className="mt-1 bg-white border border-slate-300 text-[11px] text-slate-800 rounded px-2 py-1 shadow-2xs font-medium max-w-full truncate"
                    >
                      <option value="19 мм (электромонтаж / потолки)">19 мм (электромонтаж / потолки)</option>
                      <option value="22 мм (монолит / багет)">22 мм (монолит / багет)</option>
                      <option value="25 мм (штукатурка / стяжка)">25 мм (штукатурка / стяжка)</option>
                      <option value="32 мм (сантехника / перфолента)">32 мм (сантехника / перфолента)</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <button
                      onClick={() => setNailsCount(Math.max(0, nailsCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold shadow-2xs cursor-pointer"
                      aria-label="Уменьшить количество гвоздей"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-12 text-center font-bold text-xs sm:text-sm text-slate-900">{nailsCount} тыс.</span>
                    <button
                      onClick={() => setNailsCount(nailsCount + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold shadow-2xs cursor-pointer"
                      aria-label="Увеличить количество гвоздей"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Kit Summary */}
            <div className="lg:col-span-5 p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Состав вашего заказа:</span>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-800">
                    <span>Пистолет GSN50 II (полный комплект)</span>
                    <span className="font-bold">25 990 ₽</span>
                  </div>
                  {gasCount > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Газ Keenly 165A ({gasCount} шт × 360 ₽)</span>
                      <span>{(gasCount * 360).toLocaleString('ru-RU')} ₽</span>
                    </div>
                  )}
                  {nailsCount > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Гвозди {nailsType.split(' ')[0]} ({nailsCount} тыс. шт)</span>
                      <span>{(nailsCount * 590).toLocaleString('ru-RU')} ₽</span>
                    </div>
                  )}
                  <div className="flex justify-between text-emerald-700 font-bold pt-1 border-t border-slate-200">
                    <span>Гарантия 5 лет + ТО</span>
                    <span>БЕСПЛАТНО</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Тестовый отстрел перед оплатой</span>
                    <span>БЕСПЛАТНО</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-4 pt-3 border-t border-slate-200">
                  <span className="text-xs uppercase font-bold text-slate-500">Итоговая стоимость:</span>
                  <span className="text-2xl sm:text-3xl font-black text-orange-600">
                    {kitTotalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>

                <button
                  onClick={() => onOpenOrder('gsn50-ii', { gasCount, nailsCount, nailsType })}
                  className="w-full py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
                >
                  <PackageCheck className="w-5 h-5 shrink-0" />
                  <span>Оформить этот комплект</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                  Оплата после проверки и отстрела при получении
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Package Contents Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-4 sm:p-6 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto my-auto">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-900">Комплект поставки {selectedProduct.name}</h4>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer p-1"
                  aria-label="Закрыть"
                >
                  ✕
                </button>
              </div>

              {selectedProduct.id === 'gsn50-ii' && (
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200">
                  <img
                    src="/src/assets/images/gsn50ii_full_kit_1786716063526.jpg"
                    alt="Полный комплект поставки GSN50 II"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-2 text-xs text-slate-700 max-h-60 overflow-y-auto pr-1">
                {selectedProduct.packageContents?.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 py-1 border-b border-slate-100">
                    <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    const pid = selectedProduct.id;
                    setSelectedProduct(null);
                    onOpenOrder(pid);
                  }}
                  className="flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-tight shadow-md shadow-orange-200 cursor-pointer"
                >
                  Заказать за {selectedProduct.price.toLocaleString('ru-RU')} ₽
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2.5 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 cursor-pointer"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
