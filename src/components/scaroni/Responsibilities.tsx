"use client";

import React from "react";
import { Check, ArrowRight, Shield, Building2 } from "lucide-react";

export default function Responsibilities() {
  const v2Responsibilities = [
    "Estratégia de marketing dentro do plano contratado",
    "Configuração técnica e gestão operacional das campanhas",
    "Criação dos criativos e materiais previstos no plano",
    "Análise aprofundada dos resultados e métricas",
    "Recomendações contínuas de melhoria e novos testes",
    "Landing Pages previstas no plano",
    "Acompanhamento ativo dos canais contratados",
    "Reuniões de alinhamento previstas no plano",
    "Relatórios periódicos de desempenho",
    "Automação e CRM nos planos que contemplam essas entregas",
  ];

  const scaroniResponsibilities = [
    "Acessos às plataformas e contas necessárias",
    "Informações detalhadas sobre os imóveis e lançamentos",
    "Aprovação dos materiais criativos dentro dos prazos combinados",
    "Informações comerciais de disponibilidade e valores",
    "Retorno e feedback sobre a qualidade real dos contatos recebidos",
    "Atualização rápida sobre alterações de imóveis e estoques",
    "Participação dos decisores nas reuniões estratégicas",
    "Atendimento rápido e qualificado dos contatos gerados pelas campanhas",
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Alinhamento Operacional
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
          Responsabilidades da <span className="text-gradient-primary">parceria</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          O sucesso de uma estratégia de Growth imobiliário depende de uma via de mão dupla bem
          alinhada entre geração de demanda e atendimento comercial.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* V2 Responsibilities */}
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-secondary">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase text-secondary font-bold tracking-wider block">
                  V2 Growth
                </span>
                <h3 className="text-xl font-bold text-white">O que fica por nossa conta</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {v2Responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-secondary mt-0.5 shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Grupo Scaroni Responsibilities */}
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase text-emerald-400 font-bold tracking-wider block">
                  Grupo Scaroni Imobiliária
                </span>
                <h3 className="text-xl font-bold text-white">O que precisamos de vocês</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {scaroniResponsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Critical Note */}
      <div className="max-w-4xl mx-auto bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 text-center">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          💡 <strong className="text-white">Ponto de atenção essencial:</strong> Marketing gera oportunidades
          qualificadas, mas a velocidade e qualidade do atendimento da equipe comercial influenciam diretamente
          a conversão em negócios fechados.
        </p>
      </div>
    </section>
  );
}
