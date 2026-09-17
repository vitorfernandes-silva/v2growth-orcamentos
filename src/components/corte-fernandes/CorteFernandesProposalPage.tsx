"use client";

import React, { useState } from "react";
import Header from "@/components/corte-fernandes/Header";
import Hero from "@/components/corte-fernandes/Hero";
import GrowthSystem from "@/components/corte-fernandes/GrowthSystem";
import RevenueArchitecture from "@/components/corte-fernandes/RevenueArchitecture";
import PlansSection from "@/components/corte-fernandes/PlansSection";
import ProposalCalculator from "@/components/corte-fernandes/ProposalCalculator";
import SetupSection from "@/components/corte-fernandes/SetupSection";
import MetricsSection from "@/components/corte-fernandes/MetricsSection";
import PartnershipTimeline from "@/components/corte-fernandes/PartnershipTimeline";
import Responsibilities from "@/components/corte-fernandes/Responsibilities";
import PaymentMethods from "@/components/corte-fernandes/PaymentMethods";
import FAQ from "@/components/corte-fernandes/FAQ";
import Footer from "@/components/corte-fernandes/Footer";

export default function CorteFernandesProposalPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("pro");

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-[#f3f4f6]">
      {/* Decorative Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full glow-blur pointer-events-none"></div>
      <div className="absolute top-[1400px] right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full glow-blur pointer-events-none"></div>
      <div className="absolute top-[2800px] left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full glow-blur pointer-events-none"></div>
      <div className="absolute top-[4200px] right-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full glow-blur pointer-events-none"></div>

      {/* Header */}
      <Header />

      {/* 01. Hero */}
      <Hero />

      {/* 02. Growth System */}
      <GrowthSystem />

      {/* 03. Revenue Architecture */}
      <RevenueArchitecture />

      {/* 04. Plan Cards & Comparison Section */}
      <PlansSection
        selectedPlanId={selectedPlanId}
        onSelectPlan={handleSelectPlan}
      />

      {/* 05. Interactive Simulator */}
      <ProposalCalculator
        selectedPlanId={selectedPlanId}
        onPlanChange={handleSelectPlan}
      />

      {/* 06. Setup & Onboarding Free */}
      <SetupSection />

      {/* 07. Metrics */}
      <MetricsSection />

      {/* 08. Partnership Timeline */}
      <PartnershipTimeline />

      {/* 09. Responsibilities */}
      <Responsibilities />

      {/* 10. Payment Methods */}
      <PaymentMethods />

      {/* 11. FAQ Accordion (Última seção antes do rodapé) */}
      <FAQ />

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
