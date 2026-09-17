"use client";

import React from "react";
import { CheckCircleLinearIcon, MinusLinearIcon } from "@solar-icons/react";
import { COMPARISON_FEATURES } from "@/data/corteFernandesData";

export default function PlanComparison() {
  const renderCell = (val: string) => {
    if (val === "Sim" || val === "Incluso") {
      return (
        <span className="inline-flex items-center justify-center text-emerald-400">
          <CheckCircleLinearIcon size={18} />
        </span>
      );
    }
    if (val === "Não" || val === "-") {
      return (
        <span className="inline-flex items-center justify-center text-slate-600">
          <MinusLinearIcon size={16} />
        </span>
      );
    }
    return (
      <span className="text-xs font-semibold text-slate-200 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
        {val}
      </span>
    );
  };

  const categories = Array.from(new Set(COMPARISON_FEATURES.map((f) => f.category)));

  return (
    <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Quadro Comparativo
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
          Comparativo técnico de <span className="text-gradient-primary">entregas e bônus</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Visão consolidada dos entregáveis e recursos contemplados no escopo operacional de cada plano.
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/70">
                <th className="py-5 px-6 text-sm font-bold text-white w-2/5">
                  Pilares de Atuação e Bônus
                </th>
                <th className="py-5 px-4 text-center text-xs sm:text-sm font-bold text-slate-300 w-1/5">
                  Starter
                  <span className="block text-[11px] font-normal text-emerald-400 mt-0.5">R$ 497/mês</span>
                </th>
                <th className="py-5 px-4 text-center text-xs sm:text-sm font-bold text-white bg-primary/10 w-1/5 border-x border-primary/20">
                  Pro
                  <span className="block text-[11px] font-semibold text-secondary mt-0.5">Recomendado (R$ 990)</span>
                </th>
                <th className="py-5 px-4 text-center text-xs sm:text-sm font-bold text-slate-300 w-1/5">
                  Growth
                  <span className="block text-[11px] font-normal text-emerald-400 mt-0.5">R$ 1.490/mês</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-xs sm:text-sm">
              {categories.map((cat) => {
                const items = COMPARISON_FEATURES.filter((f) => f.category === cat);
                const isBonus = cat === "Bônus Inclusos";

                return (
                  <React.Fragment key={cat}>
                    {/* Category Header Row */}
                    <tr className="bg-slate-950/80 border-t border-slate-800">
                      <td
                        colSpan={4}
                        className={`py-3 px-6 text-xs font-bold uppercase tracking-wider ${
                          isBonus ? "text-secondary" : "text-slate-400"
                        }`}
                      >
                        {cat}
                      </td>
                    </tr>

                    {/* Category Items */}
                    {items.map((row, idx) => (
                      <tr
                        key={row.name}
                        className={`hover:bg-slate-900/40 transition-colors ${
                          idx % 2 === 0 ? "bg-transparent" : "bg-slate-950/20"
                        }`}
                      >
                        <td className="py-4 px-6 text-slate-300 font-medium">
                          {row.name}
                        </td>
                        <td className="py-4 px-4 text-center">{renderCell(row.starter)}</td>
                        <td className="py-4 px-4 text-center bg-primary/5 border-x border-primary/20">
                          {renderCell(row.pro)}
                        </td>
                        <td className="py-4 px-4 text-center">{renderCell(row.growth)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-400 text-center">
          (*) A assinatura do LinkedIn Sales Navigator e eventuais planos avançados do HubSpot CRM são licenças contratadas separadamente pelo escritório junto aos fornecedores.
        </div>
      </div>
    </section>
  );
}
