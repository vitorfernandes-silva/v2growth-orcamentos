"use client";

import React, { useState } from "react";
import Header from "@/components/scaroni/Header";
import Hero from "@/components/scaroni/Hero";
import GrowthSystem from "@/components/scaroni/GrowthSystem";
import RevenueArchitecture from "@/components/scaroni/RevenueArchitecture";
import PlansSection from "@/components/scaroni/PlansSection";
import PlanComparison from "@/components/scaroni/PlanComparison";
import ProposalCalculator from "@/components/scaroni/ProposalCalculator";
import SetupSection from "@/components/scaroni/SetupSection";
import MetricsSection from "@/components/scaroni/MetricsSection";
import PartnershipTimeline from "@/components/scaroni/PartnershipTimeline";
import Responsibilities from "@/components/scaroni/Responsibilities";
import Recommendation from "@/components/scaroni/Recommendation";
import FAQ from "@/components/scaroni/FAQ";
import PaymentMethods from "@/components/scaroni/PaymentMethods";
import FinalCTA from "@/components/scaroni/FinalCTA";
import Footer from "@/components/scaroni/Footer";
import { calculateProposal } from "@/data/scaroniProposalData";

export default function ScaroniProposalPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
  };

  const handleSelectRecommended = () => {
    setSelectedPlanId("growth");
  };

  // Default calculation for the final CTA summary banner
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
