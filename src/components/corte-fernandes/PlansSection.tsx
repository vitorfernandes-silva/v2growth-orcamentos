"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircleLinearIcon,
  MinusLinearIcon,
  ArrowRightLinearIcon,
} from "@solar-icons/react";
import {
  PLANS,
  COMPARISON_FEATURES,
  formatBRL,
} from "@/data/corteFernandesData";

interface PlansSectionProps {
  onSelectPlan?: (planId: string) => void;
  selectedPlanId?: string;
}

export default function PlansSection({
  onSelectPlan,
  selectedPlanId,
}: PlansSectionProps) {
  const handleSelect = (id: string) => {
    if (onSelectPlan) {
      onSelectPlan(id);
    }
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderCell = (val: string) => {
    if (val === "Sim" || val === "Incluso") {
      return <CheckCircleLinearIcon size={18} className="text-emerald-400" />;
    }
    if (val === "Não" || val === "-") {
      return <MinusLinearIcon size={16} className="text-slate-600" />;
    }
    return (
      <span className="text-xs font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/70 text-center">
        {val}
      </span>
    );
  };

  const categories = Array.from(
    new Set(COMPARISON_FEATURES.map((f) => f.category))
  );

  return (
    <section className="w-full py-20 lg:py-28 bg-slate-950/20 border-t border-slate-900/60" id="planos">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex text-center justify-center items-center gap-4 flex-col mb-12 lg:mb-16">
          <Badge
            variant="secondary"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-bold bg-secondary/10 text-secondary border border-secondary/30"
          >
            Níveis de Parceria e Comparativo
          </Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-3xl text-center font-extrabold text-white">
              Planos estruturados para a{" "}
              <span className="text-gradient-primary">Corte & Fernandes</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400 max-w-2xl text-center">
              Todos os planos contemplam implantação completa, alinhamento institucional no LinkedIn e parametrização do CRM com conformidade ética OAB.
            </p>
          </div>

          {/* Unified 4-Column Grid: Pricing Cards + Feature Comparison */}
          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x divide-slate-800/80 pt-6 border border-slate-800/80 rounded-3xl bg-slate-900/30 overflow-hidden shadow-2xl backdrop-blur-sm mt-6">
            {/* Top-Left Cell: Overview / Context */}
            <div className="col-span-3 lg:col-span-1 p-5 md:p-6 flex flex-col justify-between bg-slate-950/50">
              <div>
                <span className="text-xs uppercase tracking-wider text-secondary font-bold block mb-1">
                  Estrutura Comercial
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Visão Geral</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Compare as entregas operacionais de cada nível e selecione o modelo adequado para o momento da banca.
                </p>
              </div>
              <div className="mt-6 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                Implantação técnica inclusa em todos os planos sem cobrança de taxa de adesão.
              </div>
            </div>

            {/* Column 1: Starter */}
            <div className="px-4 py-6 md:px-6 md:py-8 gap-3 flex flex-col justify-between bg-slate-950/20">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    {PLANS.starter.tagline}
                  </span>
                </div>
                <p className="text-2xl font-bold text-white">{PLANS.starter.name}</p>
                <p className="text-xs text-slate-400 mt-2 min-h-[36px] leading-relaxed">
                  {PLANS.starter.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-baseline gap-1.5 text-xl mt-6">
                  <span className="text-3xl lg:text-4xl font-black text-emerald-400">
                    {formatBRL(PLANS.starter.monthly)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium"> / mês</span>
                </p>
              </div>
              <Button
                variant={selectedPlanId === "starter" ? "default" : "outline"}
                onClick={() => handleSelect("starter")}
                className={`gap-2 mt-6 cursor-pointer text-xs font-bold rounded-full py-2.5 transition-all ${
                  selectedPlanId === "starter"
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(25,61,235,0.4)]"
                    : "border-slate-800 bg-slate-950/60 text-slate-200 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span>{selectedPlanId === "starter" ? "Plano Selecionado" : "Selecionar Starter"}</span>
                <ArrowRightLinearIcon size={16} />
              </Button>
            </div>

            {/* Column 2: Pro (Recommended) */}
            <div className="px-4 py-6 md:px-6 md:py-8 gap-3 flex flex-col justify-between bg-slate-900/50 relative border-t-2 lg:border-t-0 border-primary">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase tracking-wider text-secondary font-bold">
                    {PLANS.pro.tagline}
                  </span>
                  <Badge className="bg-primary text-white text-[10px] uppercase font-extrabold px-2 py-0.5 shadow-sm border-none">
                    Recomendado
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-white">{PLANS.pro.name}</p>
                <p className="text-xs text-slate-400 mt-2 min-h-[36px] leading-relaxed">
                  {PLANS.pro.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-baseline gap-1.5 text-xl mt-6">
                  <span className="text-3xl lg:text-4xl font-black text-emerald-400">
                    {formatBRL(PLANS.pro.monthly)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium"> / mês</span>
                </p>
              </div>
              <Button
                variant="default"
                onClick={() => handleSelect("pro")}
                className="gap-2 mt-6 cursor-pointer text-xs font-bold rounded-full py-2.5 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(25,61,235,0.45)]"
              >
                <span>{selectedPlanId === "pro" ? "Plano Selecionado" : "Selecionar Pro"}</span>
                <ArrowRightLinearIcon size={16} />
              </Button>
            </div>

            {/* Column 3: Growth */}
            <div className="px-4 py-6 md:px-6 md:py-8 gap-3 flex flex-col justify-between bg-slate-950/20">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    {PLANS.growth.tagline}
                  </span>
                  <Badge variant="outline" className="text-[10px] uppercase font-bold text-slate-400 border-slate-700 px-2 py-0.5">
                    Completo
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-white">{PLANS.growth.name}</p>
                <p className="text-xs text-slate-400 mt-2 min-h-[36px] leading-relaxed">
                  {PLANS.growth.description}
                </p>
                <p className="flex flex-col lg:flex-row lg:items-baseline gap-1.5 text-xl mt-6">
                  <span className="text-3xl lg:text-4xl font-black text-emerald-400">
                    {formatBRL(PLANS.growth.monthly)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium"> / mês</span>
                </p>
              </div>
              <Button
                variant={selectedPlanId === "growth" ? "default" : "outline"}
                onClick={() => handleSelect("growth")}
                className={`gap-2 mt-6 cursor-pointer text-xs font-bold rounded-full py-2.5 transition-all ${
                  selectedPlanId === "growth"
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(25,61,235,0.4)]"
                    : "border-slate-800 bg-slate-950/60 text-slate-200 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span>{selectedPlanId === "growth" ? "Plano Selecionado" : "Selecionar Growth"}</span>
                <ArrowRightLinearIcon size={16} />
              </Button>
            </div>

            {/* Comparison Categories and Feature Rows */}
            {categories.map((category) => {
              const items = COMPARISON_FEATURES.filter((f) => f.category === category);
              const isBonus = category === "Bônus Inclusos";

              return (
                <React.Fragment key={category}>
                  {/* Category Header Bar */}
                  <div
                    className={`px-4 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-slate-800/80 ${
                      isBonus ? "bg-secondary/15 text-secondary" : "bg-slate-950/70 text-slate-300"
                    }`}
                  >
                    <b className="text-xs uppercase tracking-wider font-bold">{category}</b>
                  </div>
                  <div
                    className={`hidden lg:block border-t border-slate-800/80 ${
                      isBonus ? "bg-secondary/5" : "bg-slate-950/70"
                    }`}
                  ></div>
                  <div
                    className={`hidden lg:block border-t border-slate-800/80 ${
                      isBonus ? "bg-secondary/5" : "bg-slate-950/70"
                    }`}
                  ></div>
                  <div
                    className={`hidden lg:block border-t border-slate-800/80 ${
                      isBonus ? "bg-secondary/5" : "bg-slate-950/70"
                    }`}
                  ></div>

                  {/* Feature Rows */}
                  {items.map((item, idx) => (
                    <React.Fragment key={item.name}>
                      {/* Label column (Spans 3 cols on mobile, 1 col on desktop) */}
                      <div
                        className={`px-4 lg:px-6 col-span-3 lg:col-span-1 py-3.5 border-t border-slate-800/60 text-xs sm:text-sm font-medium text-slate-300 flex items-center ${
                          idx % 2 === 0 ? "bg-slate-950/30" : "bg-slate-900/20"
                        }`}
                      >
                        {item.name}
                      </div>

                      {/* Starter Column */}
                      <div
                        className={`px-3 py-3 md:px-6 md:py-3.5 flex justify-center items-center border-t border-slate-800/60 ${
                          idx % 2 === 0 ? "bg-slate-950/30" : "bg-slate-900/20"
                        }`}
                      >
                        {renderCell(item.starter)}
                      </div>

                      {/* Pro Column (Subtle primary background highlight) */}
                      <div className="px-3 py-3 md:px-6 md:py-3.5 flex justify-center items-center border-t border-slate-800/60 bg-primary/5">
                        {renderCell(item.pro)}
                      </div>

                      {/* Growth Column */}
                      <div
                        className={`px-3 py-3 md:px-6 md:py-3.5 flex justify-center items-center border-t border-slate-800/60 ${
                          idx % 2 === 0 ? "bg-slate-950/30" : "bg-slate-900/20"
                        }`}
                      >
                        {renderCell(item.growth)}
                      </div>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              );
            })}
          </div>

          {/* Footnote */}
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-400">
              Licenças de plataformas terceiras (como LinkedIn Sales Navigator ou assinaturas avançadas de CRM) são contratadas diretamente pela banca junto aos respectivos fornecedores caso opte pelo recurso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
