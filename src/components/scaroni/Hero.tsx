"use client";

import React from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { buildWhatsAppContactUrl } from "@/data/scaroniProposalData";

export default function Hero() {
  const whatsappUrl = buildWhatsAppContactUrl();

  return (
    <section className="relative pt-16 pb-24 lg:pt-28 lg:pb-36 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
      {/* Top Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-950/70 px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
            Proposta Comercial
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full text-xs font-medium text-secondary">
          Grupo Scaroni Imobiliária × V2 Growth
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
        Marketing não precisa apenas gerar contatos. Ele precisa ajudar a{" "}
        <span className="text-gradient-primary">gerar negócios</span>.
      </h1>

      {/* Subheadline */}
      <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-10 leading-relaxed">
        A proposta da V2 Growth é construir, junto com o Grupo Scaroni, um processo simples e
        mensurável para atrair pessoas interessadas, transformar interesse em oportunidades e
        melhorar o acompanhamento até a venda.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
        <a
          href="#simulador"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-[0_0_24px_rgba(25,61,235,0.45)] cursor-pointer"
        >
          <span>Escolher minha proposta</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto border border-slate-800 bg-slate-950/50 hover:bg-slate-900/60 hover:border-slate-700 text-slate-200 font-semibold text-sm sm:text-base px-7 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-secondary" />
          <span>Falar com a V2 Growth</span>
        </a>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl w-full text-left">
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-secondary shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] text-slate-400 block font-medium">Exclusividade</span>
            <span className="text-xs font-semibold text-white truncate block">
              Proposta personalizada Scaroni
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-secondary shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] text-slate-400 block font-medium">Flexibilidade</span>
            <span className="text-xs font-semibold text-white truncate block">
              4, 6 ou 8 meses de parceria
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] text-slate-400 block font-medium">Sem Custo de Entrada</span>
            <span className="text-xs font-semibold text-white truncate block">
              Setup e Onboarding 100% Grátis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
