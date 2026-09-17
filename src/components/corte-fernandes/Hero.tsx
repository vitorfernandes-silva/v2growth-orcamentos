"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRightLinearIcon,
  ChatRoundDotsLinearIcon,
} from "@solar-icons/react";
import { buildWhatsAppContactUrl } from "@/data/corteFernandesData";

export default function Hero() {
  const whatsappUrl = buildWhatsAppContactUrl();

  return (
    <section className="relative pt-16 pb-20 lg:pt-28 lg:pb-28 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
      {/* Top Client Badge */}
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex items-center gap-2.5 border border-primary/30 bg-primary/10 px-4 py-2 rounded-full text-xs font-medium text-secondary shadow-sm backdrop-blur-sm">
          <Image
            src="/corte-fernandes/cf_emblem.png"
            alt="Corte & Fernandes"
            width={24}
            height={24}
            className="h-5 w-auto object-contain"
            priority
          />
          <span className="font-semibold">Corte & Fernandes Advogados | V2 Growth</span>
        </div>
      </div>

      {/* Main Headline (Expanded Width) */}
      <h1 className="max-w-5xl lg:max-w-6xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
        Estruturação comercial e autoridade no mercado corporativo para a{" "}
        <span className="text-gradient-primary">Corte & Fernandes</span>.
      </h1>

      {/* Subheadline (Expanded Width) */}
      <p className="max-w-4xl lg:max-w-5xl text-base sm:text-lg lg:text-xl text-slate-300 font-normal mb-10 leading-relaxed">
        Proposta técnica da V2 Growth para implantar um processo previsível de prospecção e posicionamento B2B,
        integrando presença institucional no LinkedIn, governança de funil no HubSpot CRM e conformidade ética com a OAB.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
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
    </section>
  );
}
