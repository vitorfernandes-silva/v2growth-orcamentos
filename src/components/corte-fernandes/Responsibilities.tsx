"use client";

import React from "react";
import { Check, Shield, Scale } from "lucide-react";

export default function Responsibilities() {
  const v2Responsibilities = [
    "Estratégia e inteligência comercial B2B dentro do plano contratado",
    "Planejamento editorial e redação dos conteúdos autorais para o LinkedIn",
    "Setup técnico, fluxos e automações de follow-up no HubSpot CRM",
    "Elaboração dos scripts de abordagem consultiva e Playbook de Vendas",
    "Treinamento e capacitação do time interno de SDR/Comercial do escritório",
    "Planejamento, roteiro e landing page dos webinários (plano Growth)",
    "Acompanhamento semanal do funil de vendas e orientação de follow-up",
    "Garantia de conformidade com o Provimento 205/2021 do CFOAB em todos os materiais",
  ];

  const corteFernandesResponsibilities = [
    "Execução diária da prospecção ativa (envio das mensagens e convites no LinkedIn)",
    "Validação técnica das teses jurídicas e aprovação dos conteúdos nos prazos combinados",
    "Participação dos sócios nas reuniões estratégicas e acompanhamentos semanais",
    "Condução técnica das reuniões de diagnóstico e apresentação de propostas de honorários",
    "Atualização tempestiva dos status dos negócios e feedback da qualidade dos leads no CRM",
    "Disponibilização de licenças de ferramentas de terceiros caso optem por utilizar recursos pagos",
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
          Uma estratégia comercial de sucesso no setor jurídico combina a inteligência e método da V2 Growth
          com a autoridade técnica e execução ativa do escritório.
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
                <h3 className="text-xl font-bold text-white">Inteligência, Estratégia & CRM</h3>
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

        {/* Corte & Fernandes Responsibilities */}
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase text-emerald-400 font-bold tracking-wider block">
                  Corte & Fernandes
                </span>
                <h3 className="text-xl font-bold text-white">Execução Ativa & Fechamento</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {corteFernandesResponsibilities.map((item, idx) => (
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

      <div className="max-w-4xl mx-auto bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 text-center">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          💡 <strong className="text-white">Ponto de atenção fundamental:</strong> Como a prospecção ativa é
          executada diariamente pela equipe do cliente, o compromisso com a rotina de envio dos scripts e atualização do
          CRM é determinante para o volume final de reuniões geradas.
        </p>
      </div>
    </section>
  );
}
