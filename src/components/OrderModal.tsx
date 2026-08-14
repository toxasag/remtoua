import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Truck, Wrench, Package, Send, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/landingData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
  initialExtras?: { gasCount: number; nailsCount: number; nailsType: string };
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialProductId = 'gsn50-ii',
  initialExtras,
}) => {
  const [productId, setProductId] = useState<string>(initialProductId);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'cdek_pvz' | 'cdek_courier' | 'pickup_moscow'>('cdek_pvz');
  const [paymentMethod, setPaymentMethod] = useState<'cash_on_delivery' | 'bank_invoice_vat' | 'online_card'>('cash_on_delivery');
  const [gasCount, setGasCount] = useState<number>(initialExtras?.gasCount ?? 2);
  const [nailsCount, setNailsCount] = useState<number>(initialExtras?.nailsCount ?? 2);
  const [nailsType, setNailsType] = useState<string>(initialExtras?.nailsType ?? '19 мм (электромонтаж / потолки)');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const gasTotal = gasCount * 360;
  const nailsTotal = nailsCount * 590;
  const totalPrice = currentProduct.price + gasTotal + nailsTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    const generatedId = `TY-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedId);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-2xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold text-orange-600 tracking-wider">
                Заказ успешно оформлен
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Заказ № {orderNumber} принят!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Мастер сервиса перезвонит на номер <strong className="text-slate-900">{phone}</strong> в течение 10 минут для подтверждения адреса и комплектации.
              </p>
            </div>

            {/* Receipt card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Инструмент:</span>
                <span className="font-bold text-slate-900 text-right">{currentProduct.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Получатель:</span>
                <span className="font-semibold text-slate-800">{name || 'Мастер'} ({city || 'Москва'})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Доставка:</span>
                <span className="font-semibold text-slate-800">
                  {deliveryMethod === 'pickup_moscow' ? 'Самовывоз (Марьина Роща)' : 'СДЭК с оплатой при получении'}
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-700 font-bold">Сумма к оплате:</span>
                <span className="font-black text-base text-orange-600">{totalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-800 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-orange-600" />
              <span>Гарантийный талон на 5 лет уже прикреплен к вашему заказу</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" /> Написать мастеру в WhatsApp
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 cursor-pointer"
              >
                Вернуться на сайт
              </button>
            </div>
          </div>
        ) : (
          /* Order Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                Гарантия 5 лет • Без предоплаты
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Оформление заказа с проверкой и отстрелом
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Оплата строго при получении после осмотра посылки в СДЭК или в нашей мастерской
              </p>
            </div>

            {/* Model Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Выбранный инструмент:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setProductId(prod.id)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                      productId === prod.id
                        ? 'bg-orange-50 border-orange-500 text-slate-900 shadow-2xs ring-1 ring-orange-300'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-lg object-cover bg-white border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-xs font-bold block truncate">{prod.name.split('(')[0]}</span>
                      <span className="text-xs font-black text-orange-600">{prod.price.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs: Name, Phone, City */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Ваше имя:</label>
                <input
                  type="text"
                  placeholder="Иван / Мастер"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-2xs"
                />
              </div>

              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-semibold text-slate-700">
                  Телефон для СМС / звонка <span className="text-orange-600">*</span>:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-orange-400 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 font-semibold shadow-2xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Город доставки:</label>
                <input
                  type="text"
                  placeholder="Москва, СПб, Казань..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-2xs"
                />
              </div>
            </div>

            {/* Consumables add-on */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-900 block">Добавить расходники в комплект:</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Gas */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div>
                    <span className="text-slate-800 block font-medium">Газ KEENLY 165A</span>
                    <span className="text-slate-500 text-[10px]">360 ₽ / шт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGasCount(Math.max(0, gasCount - 1))}
                      className="w-6 h-6 rounded bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-orange-600">{gasCount} шт</span>
                    <button
                      type="button"
                      onClick={() => setGasCount(gasCount + 1)}
                      className="w-6 h-6 rounded bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Nails */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div>
                    <span className="text-slate-800 block font-medium">Гвозди по бетону</span>
                    <span className="text-slate-500 text-[10px]">590 ₽ / 1000 шт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setNailsCount(Math.max(0, nailsCount - 1))}
                      className="w-6 h-6 rounded bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-orange-600">{nailsCount} тыс.</span>
                    <button
                      type="button"
                      onClick={() => setNailsCount(nailsCount + 1)}
                      className="w-6 h-6 rounded bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery and Payment Radio options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Способ получения:</label>
                <select
                  value={deliveryMethod}
                  onChange={(e) => setDeliveryMethod(e.target.value as any)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-800 shadow-2xs"
                >
                  <option value="cdek_pvz">СДЭК до пункта выдачи (с осмотром)</option>
                  <option value="cdek_courier">СДЭК курьером в руки</option>
                  <option value="pickup_moscow">Самовывоз (Марьина Роща с отстрелом)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Способ оплаты:</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-800 shadow-2xs"
                >
                  <option value="cash_on_delivery">При получении (наложенный платеж СДЭК)</option>
                  <option value="bank_invoice_vat">По счету для юрлиц (с НДС / без НДС)</option>
                  <option value="online_card">Картой / СБП / в мастерской</option>
                </select>
              </div>
            </div>

            {/* Total and Submit */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 block">Итого к оплате:</span>
                <span className="text-2xl sm:text-3xl font-black text-orange-600">
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md shadow-orange-200 transition-all cursor-pointer uppercase tracking-tight"
              >
                Подтвердить заказ за {totalPrice.toLocaleString('ru-RU')} ₽
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Безопасная сделка: оплата только после вскрытия коробки и проверки комплекта</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
