"use client";

import React from "react";
import { ArrowRight, MessageSquare, Coffee } from "lucide-react";
import { buildWhatsAppContactUrl, CLIENT_NAME } from "@/data/shotCafeData";

export default function Hero() {
  const whatsappUrl = buildWhatsAppContactUrl();

  return (
    <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
      {/* Minimal Client Badge */}
      <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/70 px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 mb-6">
        <Coffee className="w-3.5 h-3.5 text-secondary" />
        <span>Proposta Comercial • {CLIENT_NAME}</span>
      </div>

      {/* Concise Headline */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-4">
        Escopo de Execução Comercial &amp; Delivery para o{" "}
        <span className="text-gradient-primary">Shot Café &amp; Maple</span>.
      </h1>

      {/* Short Objective Subtitle */}
      <p className="max-w-2xl text-sm sm:text-base text-slate-400 font-normal mb-8 leading-relaxed">
        Plano prático e enxuto com <strong className="text-slate-200">gestão de iFood e 99Food</strong>,{" "}
        <strong className="text-slate-200">Google Meu Negócio</strong>,{" "}
        <strong className="text-slate-200">criativos</strong>,{" "}
        <strong className="text-slate-200">edição de vídeos</strong> e{" "}
        <strong className="text-slate-200">tráfego local em São Carlos</strong> para superar os R$
        400.000 de faturamento.
      </p>

      {/* Direct Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
        <a
          href="#planos"
          className="min-h-12 bg-primary hover:bg-primary/90 text-white font-bold text-sm px-7 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(25,61,235,0.4)] cursor-pointer"
        >
          <span>Ver Escopo e Valores</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-12 border border-slate-800 bg-slate-950/60 hover:bg-slate-900 text-slate-300 font-semibold text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-secondary" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
