"use client";

import React from "react";
import { Check, Sparkles, ArrowRight, Megaphone } from "lucide-react";
import { PLANS, formatBRL } from "@/data/shotCafeData";

interface PlansSectionProps {
  onSelectPlan?: (planId: string) => void;
  selectedPlanId?: string;
}

export default function PlansSection({
  onSelectPlan,
  selectedPlanId = "pro",
}: PlansSectionProps) {
  const planList = [PLANS.starter, PLANS.pro, PLANS.growth];

  const handleSelectPlanCard = (id: string) => {
    if (onSelectPlan) {
      onSelectPlan(id);
    }
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6" id="planos">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-semibold">
          Planos &amp; Investimento
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          Escolha o plano ideal para o Shot Café &amp; Maple
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2.5">
          Setup e implantação inicial 100% gratuitos em todos os planos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {planList.map((plan) => {
          const isPro = plan.id === "pro";
          const isCurrentSelected = selectedPlanId === plan.id;

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all relative ${
                isPro
                  ? "bg-slate-900/75 border-2 border-primary shadow-[0_0_28px_rgba(25,61,235,0.2)]"
                  : "bg-slate-900/30 border border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span
                    className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold inline-flex items-center gap-1 ${
                      isPro
                        ? "bg-primary text-white"
                        : "bg-slate-800 text-secondary border border-slate-700"
                    }`}
                  >
                    {isPro && <Sparkles className="w-3 h-3" />}
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-wider text-secondary font-semibold block mb-1">
                  {plan.tagline}
                </span>
                <h3 className="text-2xl font-black text-white mb-1.5">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {plan.description}
                </p>

                {/* Price + Recommended Ad Spend */}
                <div className="mb-5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-emerald-400 tracking-tight">
                      {formatBRL(plan.monthly)}
                    </span>
                    <span className="text-xs text-slate-400">/mês</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800/70 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Megaphone className="w-3 h-3 text-secondary" />
                      Verba de anúncios:
                    </span>
                    <strong className="text-slate-200">{plan.recommendedAdBudget}</strong>
                  </div>
                </div>

                {/* Deliverables */}
                <ul className="space-y-2.5">
                  {plan.includes.map((item, idx) => {
                    const isBonus = item.startsWith("Bônus:");
                    return (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 text-xs leading-relaxed ${
                          isBonus
                            ? "bg-amber-500/10 border border-amber-500/30 text-amber-200 p-2 rounded-xl font-semibold"
                            : "text-slate-200"
                        }`}
                      >
                        {isBonus ? (
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        ) : (
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/70">
                <button
                  type="button"
                  onClick={() => handleSelectPlanCard(plan.id)}
                  className={`min-h-12 w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isPro || isCurrentSelected
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border border-slate-800 bg-slate-950/70 text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <span>
                    {isCurrentSelected ? "Plano Selecionado" : `Selecionar ${plan.name}`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
