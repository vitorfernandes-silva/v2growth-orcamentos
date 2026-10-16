"use client";

import React from "react";
import { Check } from "lucide-react";
import { SCOPE_DELIVERABLES } from "@/data/shotCafeData";

export default function GrowthSystem() {
  return (
    <section
      className="py-14 sm:py-20 bg-slate-950/40 border-y border-slate-900/80"
      id="escopo"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-semibold">
            Escopo do Projeto
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            O que vamos entregar na prática
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
            Execução comercial direta, sem burocracia e sem reuniões longas que tomem o tempo do
            Jairo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {SCOPE_DELIVERABLES.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-slate-900/35 border border-slate-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold text-secondary bg-primary/15 border border-primary/30 px-2.5 py-0.5 rounded-full">
                    FRENTE {pillar.number}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3.5">
                  {pillar.title}
                </h3>

                <ul className="space-y-2">
                  {pillar.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
