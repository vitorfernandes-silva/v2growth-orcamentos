import type { Metadata } from "next";
import PortalHome from "@/components/PortalHome";

export const metadata: Metadata = {
  title: "V2 Growth | Propostas Comerciais",
  description: "Canal oficial e confidencial de propostas comerciais da V2 Growth.",
};

export default function Page() {
  return <PortalHome />;
}
