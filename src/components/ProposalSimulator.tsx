"use client";

import React, { useState } from "react";
import { Check, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  message: string;
  features: string[];
}

export default function ProposalSimulator() {
  const [selectedPlan, setSelectedPlan] = useState<string>("essencial");

  const plans: Plan[] = [
    {
      id: "none",
      name: "Apenas Site Avulso",
      price: 0,
      description: "Criação da Página de Vendas profissional com identidade visual e bônus.",
      message: "Olá! Analisei a proposta comercial e gostaria de aprovar o projeto da Página de Vendas avulsa (com Identidade Visual, Logotipo e Bônus).",
      features: [
        "Landing Page profissional",
        "Identidade Visual (cores e fontes)",
        "Logotipo exclusivo",
        "Atualização do Google Meu Negócio",
        "Página de agendamento de horários",
      ],
    },
    {
      id: "start",
      name: "Plano Start",
      price: 350,
      description: "Ideal para manter presença local ativa no Google e redes sociais.",
      message: "Olá! Analisei a proposta e gostaria de aprovar a Página de Vendas + o Plano Start de Gestão Mensal (R$ 350,00/mês).",
      features: [
        "Tudo do Orçamento Avulso",
        "Gestão contínua do Google Meu Negócio",
        "Edição de 8 vídeos/mês para redes",
        "Edição de 4 imagens/mês para redes",
        "Acompanhamento próximo por WhatsApp",
      ],
    },
    {
      id: "essencial",
      name: "Plano Essencial",
      price: 500,
      description: "O mais recomendado. Foco total em anúncios no Google Ads e roteiros.",
      message: "Olá! Analisei a proposta e gostaria de aprovar a Página de Vendas + o Plano Essencial de Gestão Mensal (R$ 500,00/mês).",
      features: [
        "Tudo do Plano Start",
        "Gestão de Mídia Paga (Google Ads)",
        "Primeiros resultados na busca do Google",
        "Roteiros personalizados de vídeos/mês",
        "Suporte próximo sem jargão técnico",
      ],
    },
    {
      id: "growth",
      name: "Plano Growth",
      price: 650,
      description: "Aceleração máxima. Captura de contatos e automação de conversas.",
      message: "Olá! Analisei a proposta e gostaria de aprovar a Página de Vendas + o Plano Growth de Gestão Mensal (R$ 650,00/mês).",
      features: [
        "Tudo do Plano Essencial",
        "Página de captura de contatos (leads)",
        "Edição ampliada (12 vídeos + 8 imagens/mês)",
        "Automação de Directs no Instagram (Manychat)",
        "Máxima consistência e escala",
      ],
    },
  ];

  const currentPlan = plans.find((p) => p.id === selectedPlan) || plans[2];

  // Calculations
  const setupCost = 500;
  const domainCost = 50;
  const hostingCost = 40;
  
  const initialTotal = setupCost + domainCost;
  const monthlyTotal = hostingCost + currentPlan.price;

  const handleWhatsappRedirect = () => {
    const phoneNumber = "5519990110101";
    const text = encodeURIComponent(currentPlan.message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto" id="simulador">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Plan Selector */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-medium">
              Simulador Interativo
            </span>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-6">
              Escolha a combinação <span className="text-gradient-primary">perfeita para você</span>
            </h3>
            
            <div className="space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "bg-slate-900/80 border-secondary shadow-[0_0_20px_rgba(0,191,255,0.15)]"
                      : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700/60 hover:bg-slate-900/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                          selectedPlan === plan.id
                            ? "border-secondary bg-secondary text-slate-950"
                            : "border-slate-700"
                        }`}
                      >
                        {selectedPlan === plan.id && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-white text-base sm:text-lg leading-tight">
                            {plan.name}
                          </span>
                          {plan.id === "essencial" && (
                            <span className="bg-primary/20 text-secondary text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-primary/30 font-medium shrink-0">
                              Mais Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed break-words">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right shrink-0 pl-2">
                      <span className="font-bold text-emerald-400 text-base sm:text-lg block whitespace-nowrap">
                        {plan.price === 0 ? "Avulso" : `R$ ${plan.price}`}
                      </span>
                      {plan.price > 0 && <span className="text-[10px] text-slate-500 block">/mês</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Summary */}
        <div className="lg:col-span-5 flex">
          <div className="w-full bg-gradient-to-br from-slate-900/90 to-slate-950/95 border border-slate-800/80 rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full glow-blur -mr-16 -mt-16 pointer-events-none"></div>
            
            <div>
              <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2 pb-4 border-b border-slate-800/80">
                <ShieldCheck className="w-5 h-5 text-secondary" /> Resumo do Investimento
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-sm font-semibold text-slate-300 block">Página de Vendas Avulsa</span>
                    <span className="text-xs text-slate-500">Desenvolvimento, design e bônus (único)</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-400">R$ 500,00</span>
                </div>
                
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-sm font-semibold text-slate-300 block">Registro de Domínio</span>
                    <span className="text-xs text-slate-500">[seudominio].com.br (anual)</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-400">R$ 50,00</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-sm font-semibold text-slate-300 block">Hospedagem Cloud V2</span>
                    <span className="text-xs text-slate-500">Infraestrutura ativa 24h (mensal)</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-400">R$ 40,00/mês</span>
                </div>

                {currentPlan.price > 0 && (
                  <div className="flex justify-between items-start gap-4 pt-3 border-t border-slate-800/40">
                    <div>
                      <span className="text-sm font-bold text-secondary block">{currentPlan.name}</span>
                      <span className="text-xs text-slate-500">Plano de gestão ativo (mensal)</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-400">R$ {currentPlan.price.toFixed(2)}/mês</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Total Inicial Único:</span>
                  <span className="text-xl font-bold text-emerald-400">R$ {initialTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Total Mensalidade:</span>
                  <span className="text-xl font-bold text-emerald-400">R$ {monthlyTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-slate-500 text-right italic font-medium">
                  Assinatura sem fidelidade. Cancele quando quiser.
                </p>
              </div>

              <button
                onClick={handleWhatsappRedirect}
                className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(25,61,235,0.4)] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-secondary fill-secondary" />
                <span>Aprovar e Ir para o WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <span className="text-[10px] text-slate-500 text-center block mt-3 font-medium">
                Proposta garantida por 7 dias
              </span>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
