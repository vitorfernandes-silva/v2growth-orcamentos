"use client";

import React, { useState } from "react";
import {
  Check,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Percent,
  Scale,
} from "lucide-react";
import {
  PLANS,
  TERMS,
  PAYMENT_OPTIONS,
  REFERRAL_OPTIONS,
  PaymentMethodId,
  ReferralTierId,
  calculateProposal,
  formatBRL,
  buildWhatsAppProposalUrl,
  buildWhatsAppContactUrl,
  CLIENT_NAME,
} from "@/data/corteFernandesData";

interface ProposalCalculatorProps {
  selectedPlanId?: string;
  onPlanChange?: (id: string) => void;
}

export default function ProposalCalculator({
  selectedPlanId = "pro",
  onPlanChange,
}: ProposalCalculatorProps) {
  const [planId, setPlanId] = useState<string>(selectedPlanId);
  const [months, setMonths] = useState<number>(6);
  const [paymentId, setPaymentId] = useState<PaymentMethodId>("monthly");
  const [referralId, setReferralId] = useState<ReferralTierId>("none");

  // Sync with prop
  React.useEffect(() => {
    if (selectedPlanId && selectedPlanId !== planId) {
      setPlanId(selectedPlanId);
    }
  }, [selectedPlanId]);

  const handleSelectPlan = (id: string) => {
    setPlanId(id);
    if (onPlanChange) {
      onPlanChange(id);
    }
  };

  const calc = calculateProposal(planId, months, paymentId, referralId);
  const whatsappUrl = buildWhatsAppProposalUrl(calc);
  const contactUrl = buildWhatsAppContactUrl();

  const planList = [PLANS.starter, PLANS.pro, PLANS.growth];

  return (
    <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12" id="simulador">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider text-secondary mb-2.5 block font-semibold">
          Simulador Interativo
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Monte sua <span className="text-gradient-primary">proposta personalizada</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Selecione o plano, o período e a modalidade de pagamento. Os valores e os descontos são calculados
          instantaneamente com transparência total.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Configuration Steps */}
        <div className="lg:col-span-7 space-y-10">
          {/* ETAPA 1: ESCOLHA O PLANO */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/70">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-secondary text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-lg font-bold text-white">Escolha o Plano</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {planList.map((p) => {
                const isSelected = p.id === planId;
                const isPro = p.id === "pro";

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPlan(p.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? "bg-slate-900/90 border-secondary shadow-[0_0_20px_rgba(0,191,255,0.18)]"
                        : "bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/30"
                    }`}
                  >
                    {isPro && (
                      <span className="absolute top-2.5 right-2.5 text-[8px] uppercase tracking-wider font-bold text-secondary bg-primary/20 border border-primary/40 px-2 py-0.5 rounded-full">
                        Recomendado
                      </span>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected ? "border-secondary bg-secondary text-slate-950" : "border-slate-700"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-bold text-white text-base">{p.name}</span>
                      </div>

                      <p className="text-[11px] text-secondary font-medium mb-2">
                        {p.tagline}
                      </p>

                      <p className="text-[11px] text-slate-400 mb-3 line-clamp-3">
                        {p.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/60 flex items-baseline gap-1">
                      <span className="text-lg font-bold text-emerald-400">
                        {formatBRL(p.monthly)}
                      </span>
                      <span className="text-[10px] text-slate-400">/mês</span>
                    </div>
                  </button>
                );
              })}
            </div>
            {planId === "pro" && (
              <p className="text-xs text-secondary/90 mt-3.5 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Equilíbrio ideal entre frequência no LinkedIn, automações no CRM e capacitação do time.
              </p>
            )}
          </div>

          {/* ETAPA 2: ESCOLHA O PERÍODO */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/70">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-secondary text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-lg font-bold text-white">Escolha o Período</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {TERMS.map((t) => {
                const isSelected = t.months === months;
                return (
                  <button
                    key={t.months}
                    type="button"
                    onClick={() => setMonths(t.months)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
                      isSelected
                        ? "bg-slate-900/90 border-secondary shadow-[0_0_20px_rgba(0,191,255,0.18)]"
                        : "bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/30"
                    }`}
                  >
                    {t.badge && (
                      <span className="absolute top-2 right-2 text-[9px] uppercase tracking-wider font-bold text-secondary bg-primary/20 border border-primary/40 px-2 py-0.5 rounded-full">
                        {t.badge}
                      </span>
                    )}

                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? "border-secondary bg-secondary text-slate-950" : "border-slate-700"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-bold text-white text-base">{t.label}</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-snug">{t.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ETAPA 3: FORMA DE PAGAMENTO */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/70">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-secondary text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="text-lg font-bold text-white">Escolha a Forma de Pagamento</h3>
            </div>

            <div className="space-y-3.5">
              {PAYMENT_OPTIONS.map((opt) => {
                const isSelected = opt.id === paymentId;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPaymentId(opt.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-slate-900/90 border-secondary shadow-[0_0_20px_rgba(0,191,255,0.18)]"
                        : "bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/30"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                          isSelected ? "border-secondary bg-secondary text-slate-950" : "border-slate-700"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-base">{opt.name}</span>
                          {opt.badge && (
                            <span className="bg-emerald-500/15 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-semibold text-slate-400 block">
                        {opt.discountRate === 0 ? "Sem desconto" : `Economia de ${Math.round(opt.discountRate * 100)}%`}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ETAPA 4: DESCONTO POR INDICAÇÃO */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-7">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/70">
              <div className="flex items-center gap-2.5">
                <Percent className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-bold text-white">Bônus por Indicação</h3>
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                Opcional
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Caso o escritório indique uma empresa ou parceiro para a V2 Growth e essa indicação resulte
              em um novo contrato fechado, aplicamos um desconto adicional na sua contratação.
            </p>

            <div className="space-y-2.5">
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Minha indicação gerou um contrato de:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {REFERRAL_OPTIONS.map((ref) => {
                  const isSelected = ref.id === referralId;
                  return (
                    <button
                      key={ref.id}
                      type="button"
                      onClick={() => setReferralId(ref.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-slate-900/90 border-secondary text-white"
                          : "bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-400"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-secondary bg-secondary text-slate-950" : "border-slate-700"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold">{ref.label}</span>
                      </div>
                      {ref.discountRate > 0 && (
                        <span className="text-[11px] font-bold text-emerald-400">
                          +{Math.round(ref.discountRate * 100)}%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Summary Panel ("Sua proposta") */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full glow-blur -mr-24 -mt-24 pointer-events-none"></div>

            <div className="flex items-center justify-between pb-5 border-b border-slate-800/80 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-secondary font-bold block">
                  Resumo Financeiro
                </span>
                <h4 className="text-2xl font-black text-white">Sua proposta</h4>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                <Scale className="w-3 h-3 text-secondary" />
                Corte & Fernandes
              </span>
            </div>

            {/* Financial Rows */}
            <div className="space-y-3.5 mb-6 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span className="font-medium">Plano</span>
                <span className="font-bold text-white">{calc.plan.name}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="font-medium">Período de parceria</span>
                <span className="font-bold text-white">{calc.months} meses</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="font-medium">Mensalidade base</span>
                <span className="font-bold text-white">{formatBRL(calc.monthlyFee)}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300 pt-3 border-t border-slate-800/60">
                <div>
                  <span className="font-medium block">Valor do projeto</span>
                  <span className="text-[11px] text-slate-400">Total sem descontos</span>
                </div>
                <span className="font-bold text-slate-200">{formatBRL(calc.baseTotal)}</span>
              </div>

              {/* Payment Discount Row */}
              {calc.paymentDiscountAmount > 0 && (
                <div className="flex justify-between items-center text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <div>
                    <span className="font-semibold block text-xs">
                      Desconto condição de pagamento ({Math.round(calc.paymentOption.discountRate * 100)}%)
                    </span>
                    <span className="text-[10px] text-emerald-400/80">
                      {calc.paymentOption.name}
                    </span>
                  </div>
                  <span className="font-bold text-xs sm:text-sm">
                    Economia: {formatBRL(calc.paymentDiscountAmount)}
                  </span>
                </div>
              )}

              {/* Referral Discount Row */}
              {calc.referralDiscountAmount > 0 && (
                <div className="flex justify-between items-center text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <div>
                    <span className="font-semibold block text-xs">
                      Bônus de indicação ({Math.round(calc.referralOption.discountRate * 100)}%)
                    </span>
                    <span className="text-[10px] text-emerald-400/80">
                      {calc.referralOption.label}
                    </span>
                  </div>
                  <span className="font-bold text-xs sm:text-sm">
                    Economia: {formatBRL(calc.referralDiscountAmount)}
                  </span>
                </div>
              )}

              {/* Setup Row */}
              <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-slate-800/60">
                <span className="font-medium">Setup HubSpot e LinkedIn</span>
                <span className="font-bold text-emerald-400 uppercase text-xs tracking-wider">
                  Incluso
                </span>
              </div>
            </div>

            {/* Total Highlight Box */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                TOTAL DO PROJETO
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight leading-none mb-3">
                {formatBRL(calc.finalTotal)}
              </div>

              {/* Breakdown by Payment Mode */}
              <div className="text-xs text-slate-400 space-y-1.5 pt-3 border-t border-slate-800/80">
                {calc.paymentOption.id === "monthly" && (
                  <p>
                    Pagamento em <strong className="text-white">{calc.months} parcelas mensais</strong> de{" "}
                    <strong className="text-white">{formatBRL(calc.monthlyFee)}</strong>.
                  </p>
                )}

                {calc.paymentOption.id === "partial" && (
                  <>
                    <p className="text-slate-300">
                      Entrada (50%): <strong className="text-emerald-400">{formatBRL(calc.partialInitialPayment)}</strong>
                    </p>
                    <p className="text-slate-300">
                      Saldo restante (50%): <strong className="text-white">{formatBRL(calc.partialRemainingPayment)}</strong> parcelado conforme negociação contratual.
                    </p>
                  </>
                )}

                {calc.paymentOption.id === "upfront" && (
                  <p className="text-slate-300">
                    Pagamento integral à vista no início do projeto com condição especial.
                  </p>
                )}

                {calc.totalSavings > 0 && (
                  <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-emerald-400 font-bold text-xs">
                    <span>Economia total acumulada:</span>
                    <span>{formatBRL(calc.totalSavings)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_0_22px_rgba(25,61,235,0.45)] cursor-pointer text-sm"
              >
                <MessageSquare className="w-4 h-4 text-secondary" />
                <span>Confirmar proposta selecionada</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-slate-800 bg-slate-950/40 hover:bg-slate-900/60 text-slate-300 hover:text-white font-semibold py-3 px-5 rounded-full text-xs transition-colors block cursor-pointer"
              >
                Solicitar esclarecimentos à V2 Growth
              </a>

              <p className="text-[10px] text-slate-400 text-center font-medium pt-1">
                Ao clicar, você enviará a configuração selecionada diretamente para nossa equipe no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
