"use client";

import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PLANS, formatBRL } from "@/data/scaroniProposalData";

interface PlansSectionProps {
  onSelectPlan?: (planId: string) => void;
  selectedPlanId?: string;
}

export default function PlansSection({ onSelectPlan, selectedPlanId }: PlansSectionProps) {
  const planList = [PLANS.starter, PLANS.pro, PLANS.growth, PLANS.scale];

  const handleSelect = (id: string) => {
    if (onSelectPlan) {
      onSelectPlan(id);
    }
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-slate-950/20 border-t border-slate-900/60" id="planos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
            Níveis de Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Escolha o nível de estrutura que faz sentido para o{" "}
            <span className="text-gradient-primary">Grupo Scaroni</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Todos os planos incluem implantação inicial e onboarding sem custo adicional.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {planList.map((plan) => {
            const isGrowth = plan.id === "growth";
            const isCurrentSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isGrowth
                    ? "bg-slate-900/70 border-2 border-primary shadow-[0_0_30px_rgba(25,61,235,0.2)] md:-translate-y-2"
                    : "bg-slate-900/30 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                {/* Optional Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-6 -translate-y-1/2">
                    <span
                      className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold shadow-sm inline-flex items-center gap-1 ${
                        isGrowth
                          ? "bg-primary text-white border border-primary/40"
                          : "bg-slate-800 text-secondary border border-slate-700"
                      }`}
                    >
                      {isGrowth && <Sparkles className="w-3 h-3" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    Plano
                  </span>
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-800/80">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight block">
                      {formatBRL(plan.monthly)}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1 font-medium">
                      /mês • sem taxas de adesão
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                      O que está incluído:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => handleSelect(plan.id)}
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isGrowth || isCurrentSelected
                        ? "bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(25,61,235,0.3)]"
                        : "border border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <span>{isCurrentSelected ? "Plano Selecionado" : "Simular este plano"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
