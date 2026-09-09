"use client";

import React from "react";
import { CheckCircle, ShieldCheck, Zap } from "lucide-react";

export default function SetupSection() {
  return (
    <section className="py-20 bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-slate-900/80 via-primary/10 to-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-secondary tracking-wider bg-primary/15 border border-primary/30 px-3 py-1 rounded-full">
              <Zap className="w-3.5 h-3.5" />
              Implantação Completa
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Começamos sem taxa de implantação
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A implantação e o onboarding estratégico estão incluídos em todos os planos sem nenhum
              custo adicional. Sem taxas surpresas de adesão.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Alinhamento inicial de objetivos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Configuração de canais
              </span>
            </div>
          </div>

          <div className="text-center bg-slate-950/70 border border-slate-800 p-6 sm:p-8 rounded-2xl shrink-0 w-full sm:w-auto">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
              SETUP + ONBOARDING
            </span>
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
              GRÁTIS
            </div>
            <span className="text-[11px] text-slate-400 block mt-2 font-medium">
              Incluso no início do contrato
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
