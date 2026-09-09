"use client";

import React from "react";
import { UserCheck, Target, Users, TrendingUp } from "lucide-react";

export default function GrowthSystem() {
  const steps = [
    {
      number: "01",
      title: "Atrair",
      description:
        "Fazer mais pessoas certas conhecerem os imóveis e oportunidades do Grupo Scaroni.",
      icon: Target,
      highlight: "Visibilidade direcionada",
    },
    {
      number: "02",
      title: "Converter",
      description:
        "Transformar visitas, anúncios e campanhas em contatos interessados e qualificados.",
      icon: UserCheck,
      highlight: "Geração de contatos",
    },
    {
      number: "03",
      title: "Acompanhar",
      description:
        "Organizar e acompanhar os contatos para reduzir drasticamente oportunidades perdidas.",
      icon: Users,
      highlight: "Processo comercial",
    },
    {
      number: "04",
      title: "Melhorar",
      description:
        "Analisar os resultados e melhorar continuamente o que comprovadamente está funcionando.",
      icon: TrendingUp,
      highlight: "Otimização contínua",
    },
  ];

  return (
    <section className="py-24 bg-slate-950/40 border-y border-slate-900/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
            O que queremos construir
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Mais do que anúncios: um sistema para{" "}
            <span className="text-gradient-primary">gerar e aproveitar oportunidades</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            O objetivo não é simplesmente &quot;fazer marketing&quot;. É criar um processo consistente no qual
            cada etapa apoia e potencializa a próxima.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-primary/40 hover:bg-slate-900/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-secondary transition-colors">
                      ETAPA {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-secondary">
                    {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
