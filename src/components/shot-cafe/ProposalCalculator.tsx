"use client";

import React from "react";
import { Check, ArrowRight, MessageSquare, Megaphone } from "lucide-react";
import {
  PLANS,
  TERMS,
  PAYMENT_OPTIONS,
  PaymentMethodId,
  ReferralTierId,
  calculateProposal,
  formatBRL,
  buildWhatsAppProposalUrl,
  CLIENT_NAME,
} from "@/data/shotCafeData";

interface ProposalCalculatorProps {
  selectedPlanId: string;
  selectedMonths: number;
  selectedPaymentId: PaymentMethodId;
  selectedReferralId: ReferralTierId;
  onPlanChange: (id: string) => void;
  onMonthsChange: (months: number) => void;
  onPaymentChange: (payment: PaymentMethodId) => void;
}

export default function ProposalCalculator({
  selectedPlanId,
  selectedMonths,
  selectedPaymentId,
  selectedReferralId,
  onPlanChange,
  onMonthsChange,
  onPaymentChange,
}: ProposalCalculatorProps) {
  const calc = calculateProposal(
    selectedPlanId,
    selectedMonths,
    selectedPaymentId,
    selectedReferralId
  );
  const whatsappUrl = buildWhatsAppProposalUrl(calc);

  const planList = [PLANS.starter, PLANS.pro, PLANS.growth];

  return (
    <section
      className="py-14 sm:py-20 bg-slate-950/40 border-y border-slate-900/80"
      id="simulador"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-semibold">
            Fechamento &amp; Condições
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Simulador de Investimento
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Selecione o plano, o prazo e a forma de pagamento para gerar o resumo final.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: 3 Compact Steps */}
          <div className="lg:col-span-7 space-y-5">
            {/* 1. Plano */}
            <div className="bg-slate-900/35 border border-slate-800/80 rounded-2xl p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                1. Plano de Escopo
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {planList.map((p) => {
                  const isSelected = p.id === selectedPlanId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onPlanChange(p.id)}
                      className={`min-h-12 text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-slate-900 border-secondary"
                          : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-white text-sm">{p.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-secondary" />}
                      </div>
                      <span className="text-sm font-bold text-emerald-400">
                        {formatBRL(p.monthly)}/mês
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Prazo */}
            <div className="bg-slate-900/35 border border-slate-800/80 rounded-2xl p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                2. Ciclo de Parceria
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {TERMS.map((t) => {
                  const isSelected = t.months === selectedMonths;
                  return (
                    <button
                      key={t.months}
                      type="button"
                      onClick={() => onMonthsChange(t.months)}
                      className={`min-h-12 text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 border-secondary"
                          : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-white text-sm">{t.cycleName}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-secondary" />}
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 block">
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Forma de Pagamento */}
            <div className="bg-slate-900/35 border border-slate-800/80 rounded-2xl p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                3. Forma de Pagamento
              </span>
              <div className="space-y-2.5">
                {PAYMENT_OPTIONS.map((opt) => {
                  const isSelected = opt.id === selectedPaymentId;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onPaymentChange(opt.id)}
                      className={`min-h-12 w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-slate-900 border-secondary"
                          : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{opt.name}</span>
                          {opt.badge && (
                            <span className="bg-emerald-500/15 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{opt.description}</p>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-secondary shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-primary/40 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <span className="text-sm font-bold text-white">Resumo Financeiro</span>
                <span className="text-xs text-secondary font-semibold">{CLIENT_NAME}</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                <div className="flex justify-between text-slate-300">
                  <span>Plano</span>
                  <strong className="text-white">{calc.plan.name}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Prazo</span>
                  <strong className="text-white">
                    {calc.term.cycleName} ({calc.months} meses)
                  </strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Mensalidade base</span>
                  <strong className="text-white">{formatBRL(calc.monthlyFee)}/mês</strong>
                </div>
                {calc.paymentDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>
                      Desconto ({Math.round(calc.paymentOption.discountRate * 100)}%)
                    </span>
                    <span>- {formatBRL(calc.paymentDiscountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800/70">
                  <span>Setup e Implantação</span>
                  <strong className="text-emerald-400 uppercase text-xs">Grátis</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                  VALOR FINAL DO CONTRATO
                </span>
                <div className="text-3xl font-black text-emerald-400 mt-0.5">
                  {formatBRL(calc.finalTotal)}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Equivalente a <strong className="text-white">{formatBRL(calc.effectiveMonthly)}/mês</strong>
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Megaphone className="w-3.5 h-3.5 text-secondary" />
                  Verba de anúncios:
                </span>
                <strong className="text-secondary">{calc.plan.recommendedAdBudget}</strong>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer text-xs sm:text-sm"
              >
                <MessageSquare className="w-4 h-4 text-secondary shrink-0" />
                <span>Aprovar Proposta no WhatsApp</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
