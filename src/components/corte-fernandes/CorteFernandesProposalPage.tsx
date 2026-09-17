"use client";

import React, { useState } from "react";
import Header from "@/components/corte-fernandes/Header";
import Hero from "@/components/corte-fernandes/Hero";
import GrowthSystem from "@/components/corte-fernandes/GrowthSystem";
import RevenueArchitecture from "@/components/corte-fernandes/RevenueArchitecture";
import PlansSection from "@/components/corte-fernandes/PlansSection";
import PlanComparison from "@/components/corte-fernandes/PlanComparison";
import ProposalCalculator from "@/components/corte-fernandes/ProposalCalculator";
import SetupSection from "@/components/corte-fernandes/SetupSection";
import MetricsSection from "@/components/corte-fernandes/MetricsSection";
import PartnershipTimeline from "@/components/corte-fernandes/PartnershipTimeline";
import Responsibilities from "@/components/corte-fernandes/Responsibilities";
import Recommendation from "@/components/corte-fernandes/Recommendation";
import FAQ from "@/components/corte-fernandes/FAQ";
import PaymentMethods from "@/components/corte-fernandes/PaymentMethods";
import FinalCTA from "@/components/corte-fernandes/FinalCTA";
import Footer from "@/components/corte-fernandes/Footer";
import { calculateProposal } from "@/data/corteFernandesData";

export default function CorteFernandesProposalPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("pro");

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
  };

  const handleSelectRecommended = () => {
    setSelectedPlanId("pro");
  };

  // Base snapshot calculation for the Final CTA card
  const calculation = calculateProposal(selectedPlanId, 6, "monthly", "none");

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

      {/* 04. Plan Cards */}
      <PlansSection
        selectedPlanId={selectedPlanId}
        onSelectPlan={handleSelectPlan}
      />

      {/* 05. Comparison Matrix */}
      <PlanComparison />

      {/* 06. Interactive Simulator */}
      <ProposalCalculator
        selectedPlanId={selectedPlanId}
        onPlanChange={handleSelectPlan}
      />

      {/* 07. Setup & Onboarding Free */}
      <SetupSection />

      {/* 08. Metrics */}
      <MetricsSection />

      {/* 09. Partnership Timeline */}
      <PartnershipTimeline />

      {/* 10. Responsibilities */}
      <Responsibilities />

      {/* 11. Recommendation */}
      <Recommendation onSelectRecommended={handleSelectRecommended} />

      {/* 12. FAQ Accordion */}
      <FAQ />

      {/* 13. Payment Methods */}
      <PaymentMethods />

      {/* 14. Final CTA */}
      <FinalCTA calculation={calculation} />

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
