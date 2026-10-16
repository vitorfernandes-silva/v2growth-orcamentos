export interface Plan {
  id: "starter" | "pro" | "growth";
  name: string;
  monthly: number;
  recommendedAdBudget: string;
  badge?: string;
  isRecommended?: boolean;
  tagline: string;
  description: string;
  includes: string[];
}

export interface TermOption {
  months: number;
  label: string;
  cycleName: string;
  badge?: string;
  isRecommended?: boolean;
  description: string;
}

export type PaymentMethodId = "monthly" | "partial" | "upfront";

export interface PaymentOption {
  id: PaymentMethodId;
  name: string;
  discountRate: number;
  badge?: string;
  description: string;
}

export type ReferralTierId = "none" | "upTo1000" | "from1001to2000" | "above2001";

export interface ReferralOption {
  id: ReferralTierId;
  label: string;
  contractRange: string;
  discountRate: number;
}

export const WHATSAPP_NUMBER = "5519990110101";

export const CLIENT_NAME = "Shot Café & Maple";
export const DECISION_MAKER = "Jairo";
export const AUTHOR_NAME = "Vitor Fernandes Silva";
export const PROVIDER_NAME = "V2 Growth";

export const SCOPE_DELIVERABLES = [
  {
    number: "01",
    title: "Estruturação de Combos & Cardápio Digital",
    tag: "iFood, 99Food & Maple",
    items: [
      "Criação, precificação estratégica e cadastro de combos matinais e produtos carro-chefe.",
      "Reorganização visual de categorias no iFood e 99Food para estimular cross-selling imediato.",
      "Otimização prática de títulos e fotos dos produtos para elevar o ticket médio (+12%).",
    ],
  },
  {
    number: "02",
    title: "Gestão Operacional de Delivery & iFood Ads",
    tag: "Tração Diária de Pedidos",
    items: [
      "Configuração e otimização de iFood Ads nos horários de pico (manhãs e pausas da tarde).",
      "Campanhas de ativação e recompra via IA focadas na base de 740+ favoritos no iFood.",
      "Gestão contínua das vitrines digitais no iFood e 99Food para acelerar itens de maior margem.",
    ],
  },
  {
    number: "03",
    title: "Tráfego Local, Google Perfil & WhatsApp",
    tag: "Presença em São Carlos",
    items: [
      "Otimização contínua do Google Perfil de Empresa (Google Meu Negócio) para captar buscas na região.",
      "Gestão de Meta Ads geolocalizado em São Carlos no raio de entrega e entorno da cafeteria.",
      "Triagem e automação de atendimento no WhatsApp para agilizar pedidos e encomendas.",
    ],
  },
  {
    number: "04",
    title: "Criativos, Vídeos & Acompanhamento de Vendas",
    tag: "Conversão Sem Burocracia",
    items: [
      "Criação de criativos de alta conversão para anúncios e redes sociais.",
      "Edição profissional de vídeos focados 100% em apetite visual e conversão em pedidos.",
      "Acompanhamento direto e relatórios objetivos focados em pedidos, ticket médio e retorno.",
    ],
  },
];

export const PLANS: Record<string, Plan> = {
  starter: {
    id: "starter",
    name: "Starter",
    monthly: 750,
    recommendedAdBudget: "A combinar",
    tagline: "Delivery Essencial & Tráfego Local",
    description:
      "Estruturar as vitrines digitais de venda imediata e atrair pedidos de São Carlos no dia a dia.",
    includes: [
      "Estruturação de Combos e Produtos Carro-Chefe no iFood e 99Food",
      "Gestão Operacional de iFood Ads (picos da manhã e pausas da tarde)",
      "Otimização Contínua do Google Perfil de Empresa (Google Meu Negócio)",
      "Gestão de Meta Ads Geolocalizado em São Carlos",
      "Criação de até 12 criativos por mês",
      "Edição de vídeos para anúncios e redes sociais",
      "Relatório mensal de marketing e vendas",
    ],
  },
  pro: {
    id: "pro",
    name: "Pro",
    monthly: 1000,
    recommendedAdBudget: "A combinar",
    badge: "Recomendado",
    isRecommended: true,
    tagline: "Aceleração Comercial Shot + Maple",
    description:
      "Escopo integrado para bater a meta de R$ 400k focado em aquisição, retenção no iFood e otimização contínua de delivery.",
    includes: [
      "Tudo incluído no plano Starter (Cardápios, iFood Ads, Google e Meta Ads)",
      "Otimização Mensal de iFood e 99Food",
      "Ativação e Recompra no iFood via IA (Base de 740+ favoritos)",
      "Criação de até 18 criativos por mês",
    ],
  },
  growth: {
    id: "growth",
    name: "Growth",
    monthly: 1500,
    recommendedAdBudget: "A combinar",
    badge: "Escala Máxima",
    tagline: "Domínio Digital & Expansão Multicanal",
    description:
      "Cobertura digital completa para escalar simultaneamente o Shot Café e a marca Maple com fidelização contínua.",
    includes: [
      "Tudo incluído no plano Pro (Operação de delivery, tráfego e otimização)",
      "Campanhas de Aquisição e Fidelização Digital Segmentada (USP/UFSCar, Empresas e Coworkings)",
      "Gestão de Comunidade no WhatsApp",
      "Criação de até 30 criativos por mês",
      "Edição avançada de vídeos (vídeos curtos, institucionais e ofertas)",
      "Alinhamento Quinzenal de Métricas (20 min)",
      "Bônus: Criação do Site Institucional do Shot Café",
    ],
  },
};

export const TERMS: TermOption[] = [
  {
    months: 3,
    label: "3 meses",
    cycleName: "Trimestral",
    badge: "Tração Rápida",
    description: "Foco imediato em superar os R$ 400k e validar os novos combos matinais.",
  },
  {
    months: 6,
    label: "6 meses",
    cycleName: "Semestral",
    badge: "Recomendado",
    isRecommended: true,
    description: "Consolidação do delivery, rotina de iFood Ads e blindagem de margem para 2027.",
  },
  {
    months: 12,
    label: "12 meses",
    cycleName: "Anual",
    badge: "Parceria Contínua",
    description: "Escala consistente rumo à retomada do faturamento histórico de 2021.",
  },
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "monthly",
    name: "Mensal (PIX, Boleto ou Cartão)",
    discountRate: 0,
    description: "Pagamento mensal recorrente durante o período escolhido.",
  },
  {
    id: "partial",
    name: "50% Antecipado",
    discountRate: 0.1,
    badge: "10% OFF",
    description: "50% na aprovação e os 50% restantes parcelados no contrato.",
  },
  {
    id: "upfront",
    name: "À Vista",
    discountRate: 0.15,
    badge: "15% OFF",
    description: "Quitação integral no início do projeto com desconto máximo.",
  },
];

export const REFERRAL_OPTIONS: ReferralOption[] = [
  {
    id: "none",
    label: "Sem indicação no momento",
    contractRange: "0%",
    discountRate: 0,
  },
  {
    id: "upTo1000",
    label: "Indicação até R$ 1.000",
    contractRange: "5% OFF",
    discountRate: 0.05,
  },
  {
    id: "from1001to2000",
    label: "Indicação R$ 1.001 a R$ 2.000",
    contractRange: "10% OFF",
    discountRate: 0.1,
  },
  {
    id: "above2001",
    label: "Indicação R$ 2.001+",
    contractRange: "20% OFF",
    discountRate: 0.2,
  },
];

export const FAQ_ITEMS = [
  {
    question: "A verba de iFood Ads e Meta Ads está incluída no valor mensal?",
    answer:
      "Não. A mensalidade remunera a execução da V2 Growth. A verba de anúncios é a combinar e paga diretamente às plataformas (iFood e Meta).",
  },
  {
    question: "Como funciona a rotina para não tomar o tempo do Jairo?",
    answer:
      "Sem apresentações longas ou relatórios teóricos burocráticos. Acompanhamento direto através de relatórios objetivos e alinhamentos ágeis focados estritamente em vendas, ticket médio e retorno dos anúncios.",
  },
  {
    question: "Existe taxa de setup ou implantação inicial?",
    answer:
      "Não. Toda a configuração inicial de cardápio, combos, iFood Ads e Meta Ads está 100% inclusa sem custo adicional.",
  },
  {
    question: "A submarca Maple já entra nessa operação?",
    answer:
      "Sim. Todos os planos já contemplam a otimização e campanhas para o Shot Café e para a Maple no iFood.",
  },
];

export interface CalculationResult {
  plan: Plan;
  term: TermOption;
  months: number;
  paymentOption: PaymentOption;
  referralOption: ReferralOption;
  monthlyFee: number;
  baseTotal: number;
  paymentDiscountAmount: number;
  valueAfterPaymentDiscount: number;
  referralDiscountAmount: number;
  finalTotal: number;
  effectiveMonthly: number;
  totalSavings: number;
  partialInitialPayment: number;
  partialRemainingPayment: number;
}

export function calculateProposal(
  planId: string,
  months: number,
  paymentId: PaymentMethodId,
  referralId: ReferralTierId
): CalculationResult {
  const plan = PLANS[planId] || PLANS.pro;
  const term = TERMS.find((t) => t.months === months) || TERMS[1];
  const paymentOption = PAYMENT_OPTIONS.find((p) => p.id === paymentId) || PAYMENT_OPTIONS[0];
  const referralOption = REFERRAL_OPTIONS.find((r) => r.id === referralId) || REFERRAL_OPTIONS[0];

  const monthlyFee = plan.monthly;
  const baseTotal = monthlyFee * term.months;

  const paymentDiscountAmount = baseTotal * paymentOption.discountRate;
  const valueAfterPaymentDiscount = baseTotal - paymentDiscountAmount;

  const referralDiscountAmount = valueAfterPaymentDiscount * referralOption.discountRate;
  const finalTotal = valueAfterPaymentDiscount - referralDiscountAmount;

  const effectiveMonthly = finalTotal / term.months;
  const totalSavings = baseTotal - finalTotal;

  const partialInitialPayment = finalTotal * 0.5;
  const partialRemainingPayment = finalTotal * 0.5;

  return {
    plan,
    term,
    months: term.months,
    paymentOption,
    referralOption,
    monthlyFee,
    baseTotal,
    paymentDiscountAmount,
    valueAfterPaymentDiscount,
    referralDiscountAmount,
    finalTotal,
    effectiveMonthly,
    totalSavings,
    partialInitialPayment,
    partialRemainingPayment,
  };
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function buildWhatsAppProposalUrl(calc: CalculationResult): string {
  const paymentDesc =
    calc.paymentOption.id === "monthly"
      ? "Mensal"
      : calc.paymentOption.id === "partial"
      ? "50% antecipado + 50% parcelado"
      : "À vista";

  let message = `Olá, Vitor! Aqui é o Jairo (${CLIENT_NAME}). Quero aprovar a proposta comercial:\n\n`;
  message += `• Plano: ${calc.plan.name} (${calc.plan.tagline})\n`;
  message += `• Prazo: ${calc.term.cycleName} (${calc.months} meses)\n`;
  message += `• Pagamento: ${paymentDesc}\n`;
  message += `• Valor Final: ${formatBRL(calc.finalTotal)} (equiv. ${formatBRL(calc.effectiveMonthly)}/mês)\n`;
  if (calc.totalSavings > 0) {
    message += `• Economia aplicada: ${formatBRL(calc.totalSavings)}\n`;
  }
  message += `\nVamos iniciar o onboarding!`;

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppContactUrl(): string {
  const message = `Olá, Vitor! Aqui é o Jairo (${CLIENT_NAME}). Vi a proposta comercial e gostaria de alinhar um ponto rápido.`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
