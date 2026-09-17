"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#030712]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <Image
            src="/v2growth-logo-new.png"
            alt="V2 Growth Logo"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="h-4 w-px bg-slate-800"></span>
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-medium hidden sm:inline-block">
            Proposta Comercial
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-xs text-slate-300 font-medium px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-800">
            <Image
              src="/corte-fernandes/cf_logo.png"
              alt="Corte & Fernandes"
              width={24}
              height={24}
              className="h-4 w-auto object-contain"
            />
            Corte & Fernandes Advogados
          </span>

          <a
            href="#simulador"
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_18px_rgba(25,61,235,0.4)] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Escolher proposta</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
