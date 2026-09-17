import type { Metadata } from "next";
import CorteFernandesProposalPage from "@/components/corte-fernandes/CorteFernandesProposalPage";

export const metadata: Metadata = {
  title: "Proposta Comercial | Corte & Fernandes Advogados × V2 Growth",
  description:
    "Proposta comercial personalizada da V2 Growth para a Corte & Fernandes Advogados Associados. Posicionamento de autoridade no LinkedIn, HubSpot CRM e prospecção ativa B2B.",
  openGraph: {
    title: "Proposta Comercial | Corte & Fernandes Advogados × V2 Growth",
    description:
      "Uma estratégia previsível para transformar autoridade jurídica em reuniões e honorários corporativos.",
    type: "website",
  },
};

export default function Page() {
  return <CorteFernandesProposalPage />;
}
