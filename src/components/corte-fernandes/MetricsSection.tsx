"use client";

import React from "react";
import {
  Users,
  UserCheck,
  MessageSquare,
  CalendarCheck,
  FolderKanban,
  FileCheck2,
  TrendingUp,
  LineChart,
} from "lucide-react";

export default function MetricsSection() {
  const metrics = [
    {
      name: "Alcance Qualificado",
      description: "Quantos diretores, CFOs e tomadores de decisão estão sendo impactados pelos artigos no LinkedIn.",
      icon: Users,
    },
    {
      name: "Aceite de Conexões",
      description: "Percentual de tomadores de decisão que aceitam conexão direta com o perfil dos sócios.",
      icon: UserCheck,
    },
    {
      name: "Respostas Consultivas",
      description: "Volume de decisores que respondem aos scripts de abordagem e demonstram interesse em diálogo.",
      icon: MessageSquare,
    },
    {
      name: "Reuniões Agendadas",
      description: "Quantidade de reuniões de diagnóstico jurídico agendadas para a equipe de sócios e advogados.",
      icon: CalendarCheck,
    },
    {
      name: "Pipeline no HubSpot",
      description: "Volume financeiro total de propostas de honorários ativas em negociação no funil do CRM.",
      icon: FolderKanban,
    },
    {
      name: "Conversão em Honorários",
      description: "Proporção de reuniões de diagnóstico que se convertem em contratos formais de assessoria jurídica.",
      icon: FileCheck2,
    },
    {
      name: "Forecast Comercial",
      description: "Previsibilidade matemática de receita e honorários futuros com base no avanço das etapas no CRM.",
      icon: LineChart,
    },
    {
      name: "Retorno do Investimento",
      description: "Valor do ciclo de vida (LTV) dos novos clientes corporativos frente ao custo da assessoria de Growth.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Governança de Resultados
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
          Como vamos saber se <span className="text-gradient-primary">estamos avançando?</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Sem métricas de vaidade. Acompanhamos indicadores comerciais concretos que conectam posicionamento
          institucional a reuniões na agenda e contratos de honorários.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((metric, idx) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5 sm:p-6 hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary mb-4">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{metric.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{metric.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
