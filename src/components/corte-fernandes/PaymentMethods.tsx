"use client";

import React from "react";
import { QrCode, FileText, CreditCard } from "lucide-react";

export default function PaymentMethods() {
  const methods = [
    {
      name: "PIX",
      description: "Compensação instantânea para início ágil das etapas de kick-off e setup.",
      icon: QrCode,
      tag: "Mais Rápido",
    },
    {
      name: "Boleto Bancário",
      description: "Emissão de boletos faturados para a pessoa jurídica do escritório.",
      icon: FileText,
      tag: "Faturamento PJ",
    },
    {
      name: "Cartão de Crédito",
      description: "Pagamento com cartão de crédito corporativo com praticidade.",
      icon: CreditCard,
      tag: "Crédito ou Débito",
    },
  ];

  return (
    <section className="py-20 bg-slate-950/30 border-t border-slate-900/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-semibold">
            Flexibilidade Corporativa
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Formas de <span className="text-gradient-primary">pagamento</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Condições claras para simplificar a gestão financeira do escritório.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {methods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.name}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md">
                      {method.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{method.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-slate-400 text-center max-w-xl mx-auto">
          * Em modalidades com parcelamento, o cronograma de parcelas e vencimentos será formalizado no contrato comercial de prestação de serviços.
        </p>
      </div>
    </section>
  );
}
