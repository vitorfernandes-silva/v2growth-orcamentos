"use client";

import React from "react";
import { ArrowRight, Eye, BookOpen, Filter, CheckSquare, Handshake, Sparkles, RefreshCw, Layers } from "lucide-react";

export default function RevenueArchitecture() {
  const stages = [
    {
      phase: "Aquisição",
      tag: "Entrada de Oportunidades",
      color: "border-sky-500/30 bg-sky-500/5",
      steps: [
        {
          name: "Awareness",
          detail: "A pessoa descobre o Grupo Scaroni e os empreendimentos disponíveis.",
          icon: Eye,
        },
        {
          name: "Educação",
          detail: "A pessoa começa a entender os imóveis, oportunidades e diferenciais.",
          icon: BookOpen,
        },
        {
          name: "Priorização",
          detail: "Identificamos quais oportunidades e perfis merecem mais atenção imediata.",
          icon: Filter,
        },
      ],
    },
    {
      phase: "Conversão",
      tag: "Avanço Comercial",
      color: "border-primary/40 bg-primary/10",
      steps: [
        {
          name: "Seleção",
          detail: "A pessoa demonstra interesse real em uma oportunidade imobiliária específica.",
          icon: CheckSquare,
        },
        {
          name: "Compromisso",
          detail: "O cliente e a equipe comercial avançam para a visita e negociação da venda.",
          icon: Handshake,
        },
      ],
    },
    {
      phase: "Relacionamento",
      tag: "Continuidade e Expansão",
      color: "border-emerald-500/30 bg-emerald-500/5",
      steps: [
        {
          name: "Onboarding",
          detail: "O cliente recebe o acompanhamento e organização comercial adequados.",
          icon: Sparkles,
        },
        {
          name: "Retenção",
          detail: "Mantemos o relacionamento contínuo para reativar contatos na base.",
          icon: RefreshCw,
        },
        {
          name: "Expansão",
          detail: "Geramos novas oportunidades de investimento a partir da carteira existente.",
          icon: Layers,
        },
      ],
    },
  ];

  return (
    <section className="py-28 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Revenue Architecture
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Como vamos <span className="text-gradient-primary">pensar o crescimento</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
          Vamos olhar para toda a jornada que transforma uma pessoa que ainda não conhece a empresa em cliente — e
          depois trabalhar para que ela continue se relacionando com o Grupo Scaroni.
        </p>
      </div>

      {/* Visual Pipeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
        {stages.map((stage, idx) => (
          <div
            key={stage.phase}
            className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between ${stage.color} backdrop-blur-sm relative overflow-hidden`}
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Fase 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{stage.phase}</h3>
                </div>
                <span className="text-xs text-secondary font-medium px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
                  {stage.tag}
                </span>
              </div>

              <div className="space-y-4">
                {stage.steps.map((step, stepIdx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.name}
                      className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 transition-all hover:border-slate-700"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center text-secondary shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-bold text-white">
                          {step.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-10 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Etapa integrada ao funil</span>
              {idx < 2 && (
                <span className="hidden lg:inline-flex items-center gap-1 text-secondary font-medium">
                  Próxima fase <ArrowRight className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Closing Quote Banner */}
      <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-7 text-center">
        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed italic">
          &quot;Em resumo: não queremos olhar apenas para a entrada de novos contatos. Queremos entender toda a jornada até
          a venda e o relacionamento contínuo depois dela.&quot;
        </p>
      </div>
    </section>
  );
}
