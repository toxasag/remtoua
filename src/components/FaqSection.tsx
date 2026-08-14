import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/landingData';

interface FaqProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span>Честные ответы мастера</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Часто задаваемые вопросы (FAQ)
          </h2>
          <p className="text-base text-slate-600">
            Всё, что нужно знать о совместимости, гарантии, доставке и эксплуатации
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4 mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-2 border-orange-500 shadow-md ring-1 ring-orange-200'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 flex items-start sm:items-center gap-2.5 sm:gap-3">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-orange-100 text-orange-700 text-[11px] sm:text-xs flex items-center justify-center shrink-0 font-mono font-bold mt-0.5 sm:mt-0">
                      Q{index + 1}
                    </span>
                    <span className="leading-snug">{item.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-transform duration-200 shrink-0 mt-0.5 sm:mt-0 ${isOpen ? 'rotate-180 text-orange-600 bg-orange-50 border-orange-200' : 'bg-white border-slate-200 text-slate-600 shadow-2xs'}`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed border-t border-slate-100 pt-3 sm:pt-4 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 shrink-0 mt-0.5" />
                      <p className="text-slate-700">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">Остался вопрос по вашей задаче или объекту?</h4>
            <p className="text-xs text-slate-600">
              Позвоните мастеру мастерской или напишите в мессенджер — подскажем точный тип гвоздя под ваш бетон.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenConsultation}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-xl transition-all shadow-md shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Спросить мастера</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <Phone className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Звонок</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
