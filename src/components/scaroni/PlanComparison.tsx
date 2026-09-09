"use client";

import React from "react";
import { Check, Minus } from "lucide-react";
import { COMPARISON_FEATURES } from "@/data/scaroniProposalData";

export default function PlanComparison() {
  const renderCell = (val: string) => {
    if (val === "Sim") {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400">
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      );
    }
    if (val === "-") {
      return (
        <span className="inline-flex items-center justify-center text-slate-600">
          <Minus className="w-3.5 h-3.5" />
        </span>
      );
    }
    return (
      <span className="text-xs font-semibold text-slate-200 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
        {val}
      </span>
    );
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Transparência Total
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
          Comparativo detalhado de <span className="text-gradient-primary">entregas por plano</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Entenda com precisão o que está contemplado no escopo operacional de cada nível de investimento.
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60">
                <th className="py-5 px-6 text-sm font-bold text-white w-2/6">
                  Entregas & Recursos
                </th>
                <th className="py-5 px-4 text-center text-xs sm:text-sm font-bold text-slate-300 w-1/6">
                  Starter
                  <span className="block text-[11px] font-normal text-emerald-400 mt-0.5">R$ 790/mês</span>
                </th>
                <th className="py-5 px-4 text-center text-xs sm:text-sm font-bold text-slate-300 w-1/6">
                  Pro
                  <span className="block text-[11px] font-normal text-emerald-400 mt-0.5">R$ 1.290/mês</span>
                </th>
                <th className="py-5 px-4 text-center text-xs sm:text-sm font-bold text-white bg-primary/10 w-1/6 border-x border-primary/20">
                  Growth
                  <span className="block text-[11px] font-semibold text-secondary mt-0.5">★ Recomendado</span>
                </th>
                <th className="py-5 px-4 text-center text-xs sm:text-sm font-bold text-slate-300 w-1/6">
                  Scale
                  <span className="block text-[11px] font-normal text-emerald-400 mt-0.5">R$ 2.790/mês</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-xs sm:text-sm">
              {COMPARISON_FEATURES.map((row, idx) => (
                <tr
                  key={row.name}
                  className={`hover:bg-slate-900/40 transition-colors ${
                    idx % 2 === 0 ? "bg-transparent" : "bg-slate-950/20"
                  }`}
                >
                  <td className="py-4 px-6 text-slate-300 font-medium">{row.name}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.starter)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.pro)}</td>
                  <td className="py-4 px-4 text-center bg-primary/5 border-x border-primary/20">
                    {renderCell(row.growth)}
                  </td>
                  <td className="py-4 px-4 text-center">{renderCell(row.scale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
