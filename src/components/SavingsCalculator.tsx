import React, { useState } from 'react';
import { Calculator, Clock, Sparkles, TrendingUp, DollarSign, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface SavingsCalculatorProps {
  onOpenOrder: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenOrder }) => {
  const [pointsPerMonth, setPointsPerMonth] = useState<number>(2000);
  const [hourlyRate, setHourlyRate] = useState<number>(1200); // Master's wage / hr in RUB

  // Calculations
  // Perforator: 45 sec per point (drilling + insert dowel + screw + hammer)
  // GSN50 II: 2 sec per point (aim + shot)
  const perforatorHours = (pointsPerMonth * 45) / 3600;
  const gasGunHours = (pointsPerMonth * 2) / 3600;
  const hoursSaved = Math.round(perforatorHours - gasGunHours);

  // Drill bits saved (1 drill bit breaks/wears out every 250 holes in monolithic B30 concrete, price 450 RUB)
  const drillBitsSaved = Math.ceil(pointsPerMonth / 250);
  const drillBitsMoneySaved = drillBitsSaved * 450;

  // Total value of saved working time + consumables
  const timeValueSaved = hoursSaved * hourlyRate;
  const totalMonthlyBenefit = timeValueSaved + drillBitsMoneySaved;

  // Payback period of GSN50 II (25 990 RUB)
  const paybackMonths = Math.max(0.3, Number((25990 / totalMonthlyBenefit).toFixed(1)));

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-orange-600" />
            <span>Экономика мастера</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Калькулятор окупаемости прямого монтажа
          </h2>
          <p className="text-base text-slate-600">
            Посчитайте, сколько часов на стремянке и денег на сгоревших бурах вы экономите каждый месяц
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-8 lg:p-10 shadow-md ring-1 ring-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Controls Left */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              
              {/* Points slider */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs sm:text-sm">
                  <span className="font-bold text-slate-800">Количество точек / клипс в месяц:</span>
                  <span className="text-lg sm:text-xl font-black text-orange-600 font-mono">
                    {pointsPerMonth.toLocaleString('ru-RU')} точек
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={pointsPerMonth}
                  onChange={(e) => setPointsPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-medium">
                  <span>300 (1 квартира)</span>
                  <span>2 000 (коттедж)</span>
                  <span>10 000 (бригада)</span>
                </div>
              </div>

              {/* Hourly rate slider */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs sm:text-sm">
                  <span className="font-bold text-slate-800">Стоимость вашего рабочего часа:</span>
                  <span className="text-lg sm:text-xl font-black text-slate-900 font-mono">
                    {hourlyRate.toLocaleString('ru-RU')} ₽ / час
                  </span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="3000"
                  step="100"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-medium">
                  <span>600 ₽</span>
                  <span>1 500 ₽</span>
                  <span>3 000 ₽</span>
                </div>
              </div>

              {/* Trade benchmarks */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-800 block">Типовые объемы мастеров:</span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setPointsPerMonth(800)}
                    className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                  >
                    1к-квартира (~800)
                  </button>
                  <button
                    onClick={() => setPointsPerMonth(2500)}
                    className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                  >
                    Коттедж 200 м² (~2500)
                  </button>
                  <button
                    onClick={() => setPointsPerMonth(6000)}
                    className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                  >
                    Бригада (~6000)
                  </button>
                </div>
              </div>

            </div>

            {/* Results Right */}
            <div className="lg:col-span-6 p-4 sm:p-8 rounded-3xl bg-orange-50/50 border border-orange-200 flex flex-col justify-between space-y-5 sm:space-y-6 shadow-xs">
              
              <div className="space-y-3 sm:space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-orange-800">
                  Ваша чистая выгода каждый месяц:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500 font-medium block mb-1">Сэкономленное время:</span>
                    <span className="text-xl sm:text-3xl font-black text-emerald-600 block">
                      {hoursSaved} часов
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      ≈ {(hoursSaved / 8).toFixed(1)} полноценных смен
                    </span>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500 font-medium block mb-1">Сэкономлено на бурах:</span>
                    <span className="text-xl sm:text-3xl font-black text-orange-600 block">
                      {drillBitsMoneySaved.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {drillBitsSaved} шт буров SDS+
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-orange-600 text-white shadow-md shadow-orange-200">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 mb-1">
                    <span className="text-xs font-bold text-orange-100">Денежный эквивалент выгоды:</span>
                    <span className="text-xl sm:text-3xl font-black text-white">
                      +{totalMonthlyBenefit.toLocaleString('ru-RU')} ₽ / мес
                    </span>
                  </div>
                  <p className="text-xs text-orange-100 mt-1">
                    GSN50 II (25 990 ₽) полностью окупит себя за <strong className="text-white font-black underline decoration-white/40">{paybackMonths} мес.</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenOrder}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
              >
                <span>Начать экономить время с GSN50 II</span>
                <ArrowRight className="w-4 h-4 text-orange-400 shrink-0" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
