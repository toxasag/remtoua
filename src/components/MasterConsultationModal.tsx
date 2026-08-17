import React, { useState } from 'react';
import { X, MessageSquare, Send, Phone, User, CheckCircle2, Sparkles, HelpCircle, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface MasterConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterConsultationModal: React.FC<MasterConsultationModalProps> = ({ isOpen, onClose }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  if (!isOpen) return null;

  const quickQuestions = [
    'Какой длины гвоздь взять под тяжелый монолит B35?',
    'Подойдет ли узкий ствол под клипсы Промрукав / EKF 16–20 мм?',
    'Можно ли приехать на Марьину Рощу сегодня и провести отстрел?',
    'Сколько выстрелов делает баллон Keenly в мороз -10°C?',
  ];

  const handleSendCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSent ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-2xs">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Вопрос передан мастеру!</h3>
            <p className="text-xs text-slate-600">
              Мастер сервисного центра свяжется с вами по номеру <strong className="text-slate-900">{phoneNumber}</strong> в течение 5–10 минут.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 cursor-pointer"
              >
                Закрыть
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Задать вопрос мастеру</h3>
                <p className="text-xs text-slate-500">Прямая связь с сервисом на Марьиной Роще</p>
              </div>
            </div>

            {/* Instant Messenger buttons */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 hover:bg-sky-100 text-sky-800 font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <Send className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="truncate">Telegram</span>
              </a>

              <a
                href={COMPANY_INFO.max}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-800 font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">MAX</span>
              </a>
            </div>

            {/* Quick preset questions */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 block">Частые вопросы мастеров:</span>
              <div className="space-y-1.5">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setSelectedQuestion(q);
                      setCustomQuestion(q);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-colors border cursor-pointer ${
                      selectedQuestion === q
                        ? 'bg-orange-50 border-orange-500 text-orange-950 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    💬 {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSendCallback} className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Ваш вопрос мастеру:</label>
                <textarea
                  rows={2}
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="Напишите задачу (какой материал, толщина, объем работы)..."
                  className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-2xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Ваш номер телефона для ответа:</label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white border border-orange-400 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 font-semibold shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
              >
                <span>Получить консультацию мастера</span>
              </button>
            </form>

            <div className="text-center text-[11px] text-slate-500">
              Или звоните напрямую: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-orange-600 font-bold hover:underline">{COMPANY_INFO.phone}</a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
