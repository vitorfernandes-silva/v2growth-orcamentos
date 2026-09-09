"use client";

import React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import { CLIENT_NAME } from "@/data/scaroniProposalData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/80 bg-slate-950/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Image
            src="/v2growth-logo-new.png"
            alt="V2 Growth Logo"
            width={130}
            height={30}
            className="h-7 w-auto object-contain"
          />
          <span className="hidden sm:inline-block h-4 w-px bg-slate-800"></span>
          <p className="text-xs text-slate-400">
            Growth Marketing, Dados e Tecnologia para empresas que querem crescer.
          </p>
        </div>

        <div className="text-center md:text-right space-y-1">
          <p className="text-xs text-slate-400 flex items-center justify-center md:justify-end gap-1.5 font-medium">
            <Lock className="w-3.5 h-3.5 text-primary" />
            Proposta comercial preparada exclusivamente para o {CLIENT_NAME}.
          </p>
          <p className="text-[11px] text-slate-400 font-medium">
            © {new Date().getFullYear()} V2 Growth • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
