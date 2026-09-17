"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRightLinearIcon,
  ChatRoundDotsLinearIcon,
  ShieldCheckLinearIcon,
  ClockCircleLinearIcon,
} from "@solar-icons/react";
import { buildWhatsAppContactUrl } from "@/data/corteFernandesData";

export default function Hero() {
  const whatsappUrl = buildWhatsAppContactUrl();

  return (
    <section className="relative pt-16 pb-24 lg:pt-28 lg:pb-36 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
      {/* Top Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-950/70 px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
            Proposta Comercial B2B
          </span>
        </div>
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full text-xs font-medium text-secondary">
          <Image
            src="/corte-fernandes/cf_logo.png"
            alt="Corte & Fernandes"
            width={20}
            height={20}
            className="h-4 w-auto object-contain"
          />
          Corte & Fernandes Advogados | V2 Growth
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
        Estruturação comercial e autoridade no mercado corporativo para a{" "}
        <span className="text-gradient-primary">Corte & Fernandes</span>.
      </h1>

      {/* Subheadline */}
      <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-10 leading-relaxed">
        Proposta técnica da V2 Growth para implantar um processo previsível de prospecção e posicionamento B2B,
        integrando presença institucional no LinkedIn, governança de funil no HubSpot CRM e conformidade ética com a OAB.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
        <a
          href="#simulador"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-[0_0_24px_rgba(25,61,235,0.45)] cursor-pointer"
        >
          <span>Visualizar planos e simulação</span>
          <ArrowRightLinearIcon size={18} className="transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto border border-slate-800 bg-slate-950/50 hover:bg-slate-900/60 hover:border-slate-700 text-slate-200 font-semibold text-sm sm:text-base px-7 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
        >
          <ChatRoundDotsLinearIcon size={18} className="text-secondary" />
          <span>Falar com a V2 Growth</span>
        </a>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl w-full text-left">
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-secondary shrink-0">
            <ShieldCheckLinearIcon size={18} />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] text-slate-400 block font-medium">Conformidade OAB</span>
            <span className="text-xs font-semibold text-white truncate block">
              Provimento 205/2021 CFOAB
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-secondary shrink-0">
            <ClockCircleLinearIcon size={18} />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] text-slate-400 block font-medium">Flexibilidade de Escopo</span>
            <span className="text-xs font-semibold text-white truncate block">
              4, 6 ou 8 meses de contrato
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheckLinearIcon size={18} />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] text-slate-400 block font-medium">Implantação Inclusa</span>
            <span className="text-xs font-semibold text-white truncate block">
              Setup e Onboarding inclusos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
