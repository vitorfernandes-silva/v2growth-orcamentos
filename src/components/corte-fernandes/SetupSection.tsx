"use client";

import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function SetupSection() {
  return (
    <section className="py-20 bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-slate-900/80 via-primary/10 to-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-secondary tracking-wider bg-primary/15 border border-primary/30 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Implantação Comercial
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Implantação comercial sem taxa de adesão
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O setup e onboarding do HubSpot CRM, a otimização de presença no LinkedIn e a estruturação dos scripts estão inclusos em todos os planos sem custos adicionais de implementação.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Setup do HubSpot CRM
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Otimização técnica no LinkedIn
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Mapeamento de ICP e Scripts
              </span>
            </div>
          </div>

          <div className="text-center bg-slate-950/70 border border-slate-800 p-6 sm:p-8 rounded-2xl shrink-0 w-full sm:w-auto">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
              SETUP E ONBOARDING
            </span>
            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
              INCLUSO
            </div>
            <span className="text-[11px] text-slate-400 block mt-2 font-medium">
              Sem taxa de implantação
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
