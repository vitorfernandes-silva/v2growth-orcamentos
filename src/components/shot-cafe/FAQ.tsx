"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/shotCafeData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6" id="faq">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Transparência Radical
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
          Perguntas <span className="text-gradient-primary">Frequentes</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Respostas diretas sobre rotina operacional, verba de iFood Ads, Maple e prazos.
        </p>
      </div>

      <div className="space-y-3.5">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-slate-900/35 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full min-h-14 text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-white">
                  {item.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-secondary bg-primary/20" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/50">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
