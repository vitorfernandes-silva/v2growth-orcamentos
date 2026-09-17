"use client";

import React from "react";
import { ShieldCheckLinearIcon, ArrowRightLinearIcon, CheckCircleLinearIcon } from "@solar-icons/react";

interface RecommendationProps {
  onSelectRecommended?: () => void;
}

export default function Recommendation({ onSelectRecommended }: RecommendationProps) {
  const handleSelect = () => {
    if (onSelectRecommended) {
      onSelectRecommended();
    }
    const elem = document.getElementById("simulador");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950/20 via-primary/5 to-slate-950/20 border-y border-slate-900/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900/60 border-2 border-primary rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(25,61,235,0.2)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full glow-blur -mr-40 -mt-40 pointer-events-none"></div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full">
              <ShieldCheckLinearIcon size={14} />
              Recomendação Estratégica V2
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Alinhamento técnico ideal para a Corte & Fernandes Advogados
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Nossa recomendação para o escritório
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6 pt-6 border-t border-slate-800">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Plano Pro <span className="text-secondary">(Ciclo semestral)</span>
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Justificativa estratégica:{" "}
                <strong className="text-white">
                  Apresenta a estrutura indicada para consolidação de presença institucional e previsibilidade de reuniões. Integra aumento na frequência no LinkedIn com edição de vídeos, fluxos automatizados de nutrição no CRM, Playbook comercial e capacitação prática da equipe interna.
                </strong>
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircleLinearIcon size={16} className="text-emerald-400 shrink-0" />
                  12 conteúdos mensais com edição de vídeos curtos e newsletter
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleLinearIcon size={16} className="text-emerald-400 shrink-0" />
                  Automações completas de follow-up multicanal (E-mail, LinkedIn e WhatsApp)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleLinearIcon size={16} className="text-emerald-400 shrink-0" />
                  Bônus: Capacitação prática da equipe interna de atendimento e comercial
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                  Mensalidade
                </span>
                <span className="text-3xl font-black text-emerald-400 block mt-0.5">
                  R$ 990,00<span className="text-xs text-slate-400 font-normal">/mês</span>
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Valor base (6 meses):</span>
                  <strong className="text-white">R$ 5.940,00</strong>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Setup e Onboarding:</span>
                  <strong className="text-emerald-400 uppercase font-bold">Incluso</strong>
                </div>
              </div>

              <button
                onClick={handleSelect}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(25,61,235,0.4)] cursor-pointer text-sm"
              >
                <span>Selecionar esta proposta</span>
                <ArrowRightLinearIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
