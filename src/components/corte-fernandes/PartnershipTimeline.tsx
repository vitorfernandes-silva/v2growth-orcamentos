"use client";

import React from "react";
import {
  FlagLinearIcon,
  SettingsLinearIcon,
  PlayCircleLinearIcon,
  Chart2LinearIcon,
  RestartLinearIcon,
  GraphUpLinearIcon,
} from "@solar-icons/react";

export default function PartnershipTimeline() {
  const phases = [
    {
      step: "01",
      title: "Diagnóstico & Kick-off",
      desc: "Imersão nas áreas de atuação da banca, teses defendidas, diferenciais competitivos e definição do ICP.",
      icon: FlagLinearIcon,
    },
    {
      step: "02",
      title: "Setup & Estruturação",
      desc: "Otimização de SEO do perfil do LinkedIn, configuração do HubSpot CRM e elaboração dos scripts de abordagem.",
      icon: SettingsLinearIcon,
    },
    {
      step: "03",
      title: "Ativação & Treinamento",
      desc: "Capacitação prática do time interno para uso do funil e início das publicações semanais de autoridade.",
      icon: PlayCircleLinearIcon,
    },
    {
      step: "04",
      title: "Acompanhamento Semanal",
      desc: "Análise contínua das cadências de prospecção, aceite de conexões e taxa de agendamento de reuniões.",
      icon: Chart2LinearIcon,
    },
    {
      step: "05",
      title: "Otimização Fina",
      desc: "Refinamento das mensagens com maior taxa de resposta e implementação de automações de follow-up.",
      icon: RestartLinearIcon,
    },
    {
      step: "06",
      title: "Escala & Consolidação",
      desc: "Previsibilidade de honorários no CRM, execução de webinários e posicionamento de referência no setor.",
      icon: GraphUpLinearIcon,
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
            Um cronograma claro e estruturado para que a banca sinta segurança e evolução constante em cada etapa.
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
                    <Icon size={20} />
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
      </div>
    </section>
  );
}
