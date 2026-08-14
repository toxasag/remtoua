import React, { useState } from 'react';
import { HelpCircle, Check, X, Shield, Sparkles, Cpu, Layers, Disc3, ArrowRight, Info } from 'lucide-react';
import { BRAND_TRUTH_DATA } from '../data/landingData';

interface BrandTruthProps {
  onOpenOrder: () => void;
}

export const BrandTruthSection: React.FC<BrandTruthProps> = ({ onOpenOrder }) => {
  const [selectedTab, setSelectedTab] = useState<'table' | 'scheme' | 'mechanism'>('table');

  return (
    <section id="truth" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5" />
            <span>Снятие главного сомнения</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {BRAND_TRUTH_DATA.title}
          </h2>
          <p className="text-base text-slate-600">
            Никаких секретов: объясняем честно, как устроен рынок прямого монтажа и почему оригинальный инструмент с завода стоит дешевле наценки посредников.
          </p>
        </div>

        {/* Narrative Cards: Supply chain transparency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 relative shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 font-black flex items-center justify-center text-lg mb-4">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Бренды прямого монтажа в РФ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              На рынке РФ популярны марки <strong className="text-slate-900 font-bold">Hybest, Satohi, Vapp, Fixpistols, Toua</strong>. Большинство из них собираются на крупнейших китайских фабриках на единой проверенной платформе.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 relative shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 font-black flex items-center justify-center text-lg mb-4">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Дилерская наценка: 35 000–42 000 ₽</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              При прохождении через цепочки посредников и розничные магазины стоимость инструмента вырастает до <strong className="text-slate-900 font-bold">35 000 – 42 000 ₽</strong>, а гарантия часто составляет всего 1 год в сторонних сервисах.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-orange-50/60 border-2 border-orange-500 relative shadow-md ring-1 ring-orange-200">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white font-black flex items-center justify-center text-lg mb-4 shadow-md shadow-orange-200">
              3
            </div>
            <h3 className="text-lg font-bold text-orange-900 mb-2">GSN50 II Direct: 25 990 ₽ + 5 лет</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Прямая заводская поставка пистолета 2-го поколения. 100% совместимость со всеми расходниками и запчастями, улучшенная поршневая и гарантия <strong className="text-orange-950 font-bold">5 лет от нашего сервиса</strong>.
            </p>
          </div>
        </div>

        {/* Comparison Table Block */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md ring-1 ring-slate-100">
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Сравнение характеристик и условий покупки
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Фактические параметры инструмента в дилерской рознице и прямой поставки GSN50 II
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold shrink-0">
              <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Экономия до 16 000 ₽ + 5 лет гарантии</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-xs uppercase tracking-wider text-slate-600">
                  <th className="py-3 sm:py-4 px-4 sm:px-6 font-bold w-[34%]">Параметр</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-slate-500 w-[33%]">Розница (Toua / Hybest / Fixpistols / Satohi)</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-orange-700 bg-orange-50/70 w-[33%]">GSN50 II (Прямая поставка)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {BRAND_TRUTH_DATA.comparisonTable.map((row, index) => (
                  <tr key={index} className={row.highlight ? 'bg-orange-50/30 hover:bg-orange-50/50' : 'hover:bg-slate-50/60'}>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 font-semibold text-slate-900">
                      <div>{row.parameter}</div>
                      {row.explanation && (
                        <div className="text-[11px] text-slate-500 font-normal mt-0.5">{row.explanation}</div>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-slate-600">
                      {row.touaStandard}
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-slate-900 bg-orange-50/50">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-orange-950 font-bold">{row.tengyaGsn50II}</span>
                        {row.highlight && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-600 text-white shrink-0">
                            ВЫГОДНЕЕ
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-orange-600 shrink-0" />
              <p className="text-xs text-slate-600">
                Заводская гарантия 5 лет поддерживается нашим авторизованным сервисным центром в Москве на Марьиной Роще.
              </p>
            </div>
            <button
              onClick={onOpenOrder}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 rounded-xl transition-all shadow-md shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer shrink-0 uppercase tracking-tight"
            >
              <span>Заказать GSN50 II за 25 990 ₽</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>

        {/* Mechanism Component breakdown */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-orange-600" />
            Что внутри обновленного GSN50 II (поколение 2):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-orange-700 block mb-1">Доработанная поршневая группа</span>
              <p className="text-slate-600 leading-relaxed">Усиленные компрессионные кольца обеспечивают стабильную энергию 100–120 Дж даже в мороз -15°C.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-orange-700 block mb-1">Узкий носик 16 мм</span>
              <p className="text-slate-600 leading-relaxed">Заводской электромонтажный ствол без люфтов точно заходит в клипсы Промрукав, EKF, DKC и IEK.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-orange-700 block mb-1">Защищенная плата розжига</span>
              <p className="text-slate-600 leading-relaxed">Электроника залита компаундом против вибраций и конденсата. Надежная искра при любом угле выстрела.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-orange-700 block mb-1">100% совместимость расходников</span>
              <p className="text-slate-600 leading-relaxed">Подходят любые баллоны Toua, Keenly 165мм и любые стандартные дюбель-гвозди 15–40 мм.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
