import type { Metadata } from "next";
import ShotCafeProposalPage from "@/components/shot-cafe/ShotCafeProposalPage";

export const metadata: Metadata = {
  title: "Proposta Comercial | Shot Café & Maple × V2 Growth",
  description:
    "Do Ticket Médio à Escala: Plano Operacional para Superar os R$ 400.000 e Consolidar o Core Business do Shot Café & Maple.",
  openGraph: {
    title: "Proposta Comercial | Shot Café & Maple × V2 Growth",
    description:
      "Plano Operacional Exclusivo para Jairo: Engenharia de Ofertas, Domínio de iFood & Maple e Tráfego Local em São Carlos.",
    type: "website",
  },
};

export default function Page() {
  return <ShotCafeProposalPage />;
}
