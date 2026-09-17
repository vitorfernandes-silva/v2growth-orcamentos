"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { PLANS, formatBRL } from "@/data/corteFernandesData";

interface PlansSectionProps {
  onSelectPlan?: (planId: string) => void;
  selectedPlanId?: string;
}

export default function PlansSection({ onSelectPlan, selectedPlanId }: PlansSectionProps) {
  const planList = [PLANS.starter, PLANS.pro, PLANS.growth];

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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
            Níveis de Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Planos de atuação para a{" "}
            <span className="text-gradient-primary">Corte & Fernandes</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Todos os planos incluem implantação inicial, configuração do HubSpot CRM e alinhamento do LinkedIn institucional sem taxas adicionais de adesão.
          </p>
        </div>

        {/* Expanded 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
          {planList.map((plan) => {
            const isPro = plan.id === "pro";
            const isCurrentSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro
                    ? "bg-slate-900/80 border-2 border-primary shadow-[0_0_35px_rgba(25,61,235,0.25)] lg:-translate-y-2"
                    : "bg-slate-900/30 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span
                      className={`text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full font-bold shadow-sm inline-block ${
                        isPro
                          ? "bg-primary text-white border border-primary/40"
                          : "bg-slate-800 text-secondary border border-slate-700"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-bold block mb-1">
                    {plan.tagline}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[32px]">
                    {plan.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="mb-6 pb-6 border-b border-slate-800/80">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight block">
                      {formatBRL(plan.monthly)}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1 font-medium">
                      por mês (implantação inclusa)
                    </span>
                  </div>

                  {/* Operational Note */}
                  {plan.operationalNote && (
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6 text-[11px] text-slate-400 leading-relaxed">
                      {plan.operationalNote}
                    </div>
                  )}

                  {/* Deliverables by Pillar */}
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-slate-300 block mb-2">
                        LinkedIn Institucional
                      </span>
                      <ul className="space-y-2">
                        {plan.pillars.linkedin.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-800/60">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-slate-300 block mb-2">
                        HubSpot CRM
                      </span>
                      <ul className="space-y-2">
                        {plan.pillars.crm.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-800/60">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-slate-300 block mb-2">
                        Prospecção Comercial B2B
                      </span>
                      <ul className="space-y-2">
                        {plan.pillars.prospecting.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.pillars.webinars && (
                      <div className="pt-2 border-t border-slate-800/60">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-slate-300 block mb-2">
                          Eventos Digitais
                        </span>
                        <ul className="space-y-2">
                          {plan.pillars.webinars.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                              <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* BÔNUS SECTION */}
                    <div className="pt-3 border-t border-slate-800/80 bg-slate-950/50 -mx-3 p-3.5 rounded-xl border border-primary/20">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-secondary block mb-2">
                        Bônus Inclusos
                      </span>
                      <ul className="space-y-2">
                        {plan.pillars.bonus.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-[11px]">
                            <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.id === "growth" && (
                        <p className="text-[10px] text-slate-400 mt-2.5 pt-2 border-t border-slate-800/80">
                          Nota: A licença do LinkedIn Sales Navigator é contratada diretamente pelo escritório junto ao LinkedIn caso opte pelo recurso.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => handleSelect(plan.id)}
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isPro || isCurrentSelected
                        ? "bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(25,61,235,0.3)]"
                        : "border border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <span>{isCurrentSelected ? "Plano Selecionado" : "Selecionar este plano"}</span>
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
