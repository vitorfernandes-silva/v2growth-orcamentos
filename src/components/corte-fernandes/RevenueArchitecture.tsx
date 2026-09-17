"use client";

import React from "react";
import { ArrowRight, Eye, BookOpen, Filter, CheckSquare, Handshake, ShieldCheck, RefreshCw, Layers } from "lucide-react";

export default function RevenueArchitecture() {
  const stages = [
    {
      phase: "Aquisição",
      tag: "Descoberta Institucional",
      color: "border-sky-500/30 bg-sky-500/5",
      steps: [
        {
          name: "Visibilidade Qualificada",
          detail: "Diretores, CFOs e tomadores de decisão descobrem o escritório por meio de publicações e análises técnicas no LinkedIn.",
          icon: Eye,
        },
        {
          name: "Educação Corporativa",
          detail: "Os executivos compreendem teses, jurisprudências e oportunidades jurídicas preventivas aplicáveis ao seu setor de atuação.",
          icon: BookOpen,
        },
        {
          name: "Mapeamento de Fit",
          detail: "Identificação proativa de empresas com demandas latentes e enquadramento no Perfil de Cliente Ideal (ICP).",
          icon: Filter,
        },
      ],
    },
    {
      phase: "Conversão",
      tag: "Avanço Consultivo",
      color: "border-primary/40 bg-primary/10",
      steps: [
        {
          name: "Interação Qualificada",
          detail: "O tomador de decisão responde à abordagem consultiva ou inscreve-se em eventos técnicos promovidos pelo escritório.",
          icon: CheckSquare,
        },
        {
          name: "Diagnóstico Preliminar",
          detail: "Condução de reunião executiva de diagnóstico diretamente com os sócios da banca para entendimento da demanda.",
          icon: Handshake,
        },
      ],
    },
    {
      phase: "Relacionamento",
      tag: "Honorários & Expansão",
      color: "border-emerald-500/30 bg-emerald-500/5",
      steps: [
        {
          name: "Formalização & Onboarding",
          detail: "Apresentação da proposta de honorários, assinatura contratual e integração aos canais de atendimento.",
          icon: ShieldCheck,
        },
        {
          name: "Retenção Ativa",
          detail: "Gestão transparente do histórico e das tarefas no HubSpot CRM, mantendo comunicação fluida e tempestiva.",
          icon: RefreshCw,
        },
        {
          name: "Expansão de Carteira",
          detail: "Identificação de novas frentes jurídicas e consultivas dentro da mesma estrutura corporativa atendida.",
          icon: Layers,
        },
      ],
    },
  ];

  return (
    <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Arquitetura de Aquisição B2B
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Estrutura da jornada de <span className="text-gradient-primary">crescimento do escritório</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
          Mapeamento completo das etapas que conduzem um tomador de decisão da fase de descoberta
          até a contratação de honorários, assegurando previsibilidade e relacionamento de longo prazo.
        </p>
      </div>

      {/* Expanded Visual Pipeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
        {stages.map((stage, idx) => (
          <div
            key={stage.phase}
            className={`rounded-3xl border p-7 sm:p-9 flex flex-col justify-between ${stage.color} backdrop-blur-sm relative overflow-hidden`}
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Etapa 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{stage.phase}</h3>
                </div>
                <span className="text-xs text-secondary font-medium px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800">
                  {stage.tag}
                </span>
              </div>

              <div className="space-y-4">
                {stage.steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.name}
                      className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 transition-all hover:border-slate-700"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-800/90 flex items-center justify-center text-secondary shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-white">
                          {step.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-11 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Etapa integrada ao pipeline</span>
              {idx < 2 && (
                <span className="hidden lg:inline-flex items-center gap-1 text-secondary font-medium">
                  Próxima etapa <ArrowRight className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Quote Banner */}
      <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-8 text-center">
        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
          A contratação de serviços jurídicos corporativos requer autoridade técnica e método.
          O crescimento sustentável resulta da combinação entre posicionamento qualificado, acompanhamento consultivo e organização do funil.
        </p>
      </div>
    </section>
  );
}
