"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import {
  CalculationResult,
  buildWhatsAppProposalUrl,
  buildWhatsAppContactUrl,
  formatBRL,
  CLIENT_NAME,
} from "@/data/corteFernandesData";

interface FinalCTAProps {
  calculation: CalculationResult;
}

export default function FinalCTA({ calculation }: FinalCTAProps) {
  const whatsappUrl = buildWhatsAppProposalUrl(calculation);
  const contactUrl = buildWhatsAppContactUrl();

  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="bg-gradient-to-br from-slate-900/90 via-primary/10 to-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-60 blur-3xl pointer-events-none"></div>

        <span className="text-xs uppercase tracking-wider text-secondary mb-3 block font-semibold">
          Próximo Passo
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          Vamos construir o motor de crescimento da{" "}
          <span className="text-gradient-primary">Corte & Fernandes?</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
          Selecione a configuração que melhor atende aos objetivos estratégicos do escritório e envie sua solicitação diretamente para a equipe de liderança da V2 Growth.
        </p>

        {/* Selected Proposal Snapshot Card */}
        <div className="max-w-xl mx-auto bg-slate-950/85 border border-slate-800/90 rounded-2xl p-5 sm:p-6 mb-8 text-left shadow-lg">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
            <span className="text-xs uppercase font-bold text-slate-400">Resumo da sua seleção</span>
            <span className="text-xs text-secondary font-semibold">Configuração pronta</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Plano</span>
              <strong className="text-white font-bold sm:text-sm">{calculation.plan.name}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Período</span>
              <strong className="text-white font-bold sm:text-sm">{calculation.months} meses</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Pagamento</span>
              <strong className="text-white font-bold sm:text-sm">{calculation.paymentOption.name}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Total Final</span>
              <strong className="text-emerald-400 font-bold sm:text-sm">{formatBRL(calculation.finalTotal)}</strong>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(25,61,235,0.45)] cursor-pointer text-sm sm:text-base"
          >
            <MessageSquare className="w-5 h-5 text-secondary fill-secondary" />
            <span>Quero avançar com a V2 Growth</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-slate-800 bg-slate-950/60 hover:bg-slate-900 text-slate-200 font-semibold px-7 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-sm sm:text-base"
          >
            <span>Falar com a V2 Growth</span>
          </a>
        </div>
      </div>
    </section>
  );
}
