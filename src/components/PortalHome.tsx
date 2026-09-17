"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, ArrowRight, Lock } from "lucide-react";

export default function PortalHome() {
  const whatsappNumber = "5519990110101";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    "Olá, V2 Growth! Acessei o portal de propostas comerciais e gostaria de conversar com a equipe."
  )}`;

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#030712] overflow-hidden px-6 py-12">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full glow-blur pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full glow-blur pointer-events-none"></div>

      {/* Top spacing / indicator */}
      <div className="w-full max-w-7xl flex justify-center z-10">
        <div className="inline-flex items-center gap-2 border border-slate-800 bg-slate-950/70 px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
            Portal Oficial de Propostas
          </span>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center my-auto py-10">
        {/* Big V2 Growth Logo */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
          <Image
            src="/v2growth-logo-new.png"
            alt="V2 Growth"
            width={340}
            height={80}
            className="relative h-14 sm:h-20 w-auto object-contain mx-auto"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Ambiente de Propostas <span className="text-gradient-primary">Comerciais</span>
        </h1>

        {/* Explanatory text */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
          Este é o espaço exclusivo e seguro da <strong className="text-white font-semibold">V2 Growth</strong> para apresentação,
          simulação e aprovação de propostas personalizadas. As propostas são confidenciais e acessadas
          diretamente através dos links individuais disponibilizados aos nossos clientes e parceiros.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(25,61,235,0.45)] cursor-pointer text-sm sm:text-base group"
          >
            <MessageSquare className="w-5 h-5 text-secondary fill-secondary" />
            <span>Entrar em contato</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <Lock className="w-3.5 h-3.5 text-primary" />
          <span>Acesso restrito via link direto da proposta</span>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-900/80 text-xs text-slate-400 font-medium z-10 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} V2 Growth. Todos os direitos reservados.
        </div>
        <div>
          Growth Marketing, Dados & Tecnologia
        </div>
      </div>
    </main>
  );
}
