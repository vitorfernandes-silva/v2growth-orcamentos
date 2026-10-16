"use client";

import React from "react";
import Image from "next/image";
import { Coffee, ArrowUpRight, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#030712]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
          <Image
            src="/v2growth-logo-new.png"
            alt="V2 Growth Logo"
            width={140}
            height={32}
            className="h-7 sm:h-8 w-auto object-contain shrink-0"
            priority
          />
          <span className="h-4 w-px bg-slate-800 hidden xs:inline-block"></span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-medium hidden sm:inline-block truncate">
            Proposta Comercial
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <span className="hidden md:inline-flex items-center gap-2 text-xs text-slate-200 font-medium px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-slate-800">
            <Coffee className="w-3.5 h-3.5 text-secondary" />
            <span>Shot Café &amp; Maple</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-semibold inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Exclusivo para Jairo
            </span>
          </span>

          <a
            href="#simulador"
            className="min-h-11 sm:min-h-10 bg-primary hover:bg-primary/90 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_18px_rgba(25,61,235,0.4)] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ver Planos</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
