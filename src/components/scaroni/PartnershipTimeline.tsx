"use client";

import React from "react";
import { Flag, Wrench, PlayCircle, BarChart3, RotateCw, TrendingUp } from "lucide-react";

export default function PartnershipTimeline() {
  const phases = [
    {
      step: "01",
      title: "Kick-off",
      desc: "Entendemos a fundo o negócio, o perfil dos imóveis, objetivos e prioridades comerciais.",
      icon: Flag,
    },
    {
      step: "02",
      title: "Estruturação",
      desc: "Organizamos campanhas, canais de tráfego, conteúdos e ferramentas de captação.",
      icon: Wrench,
    },
    {
      step: "03",
      title: "Execução",
      desc: "Colocamos toda a estratégia em funcionamento ativo no mercado.",
      icon: PlayCircle,
    },
    {
      step: "04",
      title: "Análise",
      desc: "Acompanhamos métricas, conversões de contatos e comportamento dos compradores.",
      icon: BarChart3,
    },
    {
      step: "05",
      title: "Melhoria",
      desc: "Identificamos o que precisa ser ajustado e refinado nos canais e mensagens.",
      icon: RotateCw,
    },
    {
      step: "06",
      title: "Crescimento",
      desc: "Repetimos e aceleramos o que gera negócio, escalando o retorno do investimento.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-slate-950/30 border-y border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
            Passo a Passo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Como funciona <span className="text-gradient-primary">a parceria na prática</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Um processo claro e contínuo. Não acreditamos em fórmulas mágicas pontuais, mas sim em
            método consistente de crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.step}
                className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-7 relative hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-secondary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    FASE {phase.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300 group-hover:text-secondary group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Highlight */}
        <div className="max-w-3xl mx-auto text-center border-l-2 border-secondary bg-slate-900/20 p-5 sm:p-6 rounded-r-2xl">
          <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
            &quot;O trabalho não termina quando uma campanha é publicada. É a partir dos dados e da
            qualidade dos contatos gerados que começamos a descobrir o que pode funcionar ainda melhor.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
