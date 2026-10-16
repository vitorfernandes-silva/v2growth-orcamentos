"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import Header from "@/components/shot-cafe/Header";
import Hero from "@/components/shot-cafe/Hero";
import GrowthSystem from "@/components/shot-cafe/GrowthSystem";
import PlansSection from "@/components/shot-cafe/PlansSection";
import ProposalCalculator from "@/components/shot-cafe/ProposalCalculator";
import FAQ from "@/components/shot-cafe/FAQ";
import Footer from "@/components/shot-cafe/Footer";
import {
  calculateProposal,
  buildWhatsAppProposalUrl,
  formatBRL,
  PaymentMethodId,
  ReferralTierId,
} from "@/data/shotCafeData";

export default function ShotCafeProposalPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("pro");
  const [selectedMonths, setSelectedMonths] = useState<number>(6);
  const [selectedPaymentId, setSelectedPaymentId] = useState<PaymentMethodId>("monthly");
  const [selectedReferralId] = useState<ReferralTierId>("none");

  const calculation = calculateProposal(
    selectedPlanId,
    selectedMonths,
    selectedPaymentId,
    selectedReferralId
  );

  const whatsappApprovalUrl = buildWhatsAppProposalUrl(calculation);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-[#f3f4f6]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full glow-blur pointer-events-none"></div>

      {/* Header */}
      <Header />

      {/* 01. Hero Conciso */}
      <Hero />

      {/* 02. Escopo e Entregas do Projeto */}
      <GrowthSystem />

      {/* 03. Planos e Valores */}
      <PlansSection
        selectedPlanId={selectedPlanId}
        onSelectPlan={setSelectedPlanId}
      />

      {/* 04. Simulador de Fechamento */}
      <ProposalCalculator
        selectedPlanId={selectedPlanId}
        selectedMonths={selectedMonths}
        selectedPaymentId={selectedPaymentId}
        selectedReferralId={selectedReferralId}
        onPlanChange={setSelectedPlanId}
        onMonthsChange={setSelectedMonths}
        onPaymentChange={setSelectedPaymentId}
      />

      {/* 05. Dúvidas Essenciais */}
      <FAQ />

      {/* 06. Rodapé */}
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-[#030712]/95 border-t border-slate-800/90 px-4 py-3 backdrop-blur-lg">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-secondary font-bold block truncate">
              Plano {calculation.plan.name} • {calculation.months}m
            </span>
            <span className="text-sm font-black text-emerald-400 block">
              {formatBRL(calculation.effectiveMonthly)}
              <span className="text-[10px] text-slate-400 font-normal">/mês</span>
            </span>
          </div>

          <a
            href={whatsappApprovalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 bg-primary hover:bg-primary/90 text-white font-bold text-xs px-4 py-2.5 rounded-full flex items-center justify-center gap-1.5 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>Aprovar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
