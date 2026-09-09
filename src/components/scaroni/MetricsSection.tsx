"use client";

import React from "react";
import {
  Users,
  MousePointerClick,
  MessageSquare,
  Coins,
  Sparkles,
  CalendarCheck,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

export default function MetricsSection() {
  const metrics = [
    {
      name: "Pessoas alcançadas",
      description: "Quantas pessoas estão vendo as campanhas e conhecendo os imóveis.",
      icon: Users,
    },
    {
      name: "Cliques",
      description: "Quantas pessoas demonstraram interesse ativo nas oportunidades.",
      icon: MousePointerClick,
    },
    {
      name: "Contatos",
      description: "Quantas pessoas entraram em contato querendo conversar.",
      icon: MessageSquare,
    },
    {
      name: "Custo por contato",
      description: "Quanto estamos investindo, em média, para gerar cada contato.",
      icon: Coins,
    },
    {
      name: "Oportunidades",
      description: "Quantos contatos realmente têm potencial comercial e perfil de compra.",
      icon: Sparkles,
    },
    {
      name: "Visitas e reuniões",
      description: "Quantas oportunidades avançaram para a etapa presencial ou comercial.",
      icon: CalendarCheck,
    },
    {
      name: "Vendas",
      description: "Quantos negócios e contratos foram efetivamente fechados.",
      icon: BadgeCheck,
    },
    {
      name: "Retorno",
      description: "Quanto o investimento em marketing está contribuindo para gerar receita.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Indicadores Reais
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
          Como vamos saber se <span className="text-gradient-primary">estamos avançando?</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Sem relatórios confusos ou métricas que não significam nada para a empresa. Acompanhamos
          indicadores objetivos que conectam atração a faturamento.
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
