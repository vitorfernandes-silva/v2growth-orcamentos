import type { Metadata } from "next";
import ScaroniProposalPage from "@/components/scaroni/ScaroniProposalPage";

export const metadata: Metadata = {
  title: "Proposta Comercial | Grupo Scaroni × V2 Growth",
  description:
    "Proposta comercial personalizada da V2 Growth para o Grupo Scaroni Imobiliária. Conheça os planos, condições e escolha a melhor configuração para o projeto.",
  openGraph: {
    title: "Proposta Comercial | Grupo Scaroni × V2 Growth",
    description:
      "Uma estratégia para transformar marketing em crescimento no mercado imobiliário.",
    type: "website",
  },
};

export default function Page() {
  return <ScaroniProposalPage />;
}
