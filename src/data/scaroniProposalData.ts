export interface Plan {
  id: "starter" | "pro" | "growth" | "scale";
  name: string;
  monthly: number;
  badge?: string;
  isRecommended?: boolean;
  description: string;
  includes: string[];
}

export interface TermOption {
  months: number;
  label: string;
  badge?: string;
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

export const CLIENT_NAME = "Grupo Scaroni Imobiliária";
export const PROVIDER_NAME = "V2 Growth";

export const PLANS: Record<string, Plan> = {
  starter: {
    id: "starter",
    name: "Starter",
    monthly: 790,
    description: "Para começar a estruturar a geração de oportunidades através de anúncios.",
    includes: [
      "Meta Ads",
      "TikTok Ads",
      "Planejamento e acompanhamento das campanhas",
      "Até 4 criativos por mês",
      "Textos para os anúncios",
      "Configuração e acompanhamento das conversões",
      "Relatório semanal",
      "Recomendações de melhoria",
      "Suporte operacional",
    ],
  },
  pro: {
    id: "pro",
    name: "Pro",
    monthly: 1290,
    badge: "Mais presença",
    description: "Para unir anúncios e conteúdo e fortalecer a presença digital.",
    includes: [
      "Tudo incluído no Starter",
      "Calendário de conteúdo para Instagram e TikTok",
      "2 conteúdos por semana",
      "Posts estáticos ou carrosséis",
      "Planejamento dos conteúdos",
      "Textos para os conteúdos",
      "Análise mensal dos principais resultados",
    ],
  },
  growth: {
    id: "growth",
    name: "Growth",
    monthly: 1890,
    badge: "RECOMENDADO",
    isRecommended: true,
    description: "Para construir uma operação de aquisição mais completa e mensurável.",
    includes: [
      "Tudo incluído no Pro",
      "Google Ads",
      "Campanhas de pesquisa",
      "Até 6 criativos por mês",
      "1 Landing Page por mês",
      "Landing Pages para lançamentos imobiliários",
      "Integração das Landing Pages com canais de contato",
      "Planejamento estratégico trimestral",
      "Reunião quinzenal de acompanhamento",
      "Dashboard com os principais indicadores",
      "Análise de geração de contatos e conversões",
      "Plano contínuo de melhorias",
    ],
  },
  scale: {
    id: "scale",
    name: "Scale",
    monthly: 2790,
    badge: "Operação completa",
    description: "Para conectar marketing, contatos, acompanhamento e automações.",
    includes: [
      "Tudo incluído no Growth",
      "Análise semanal do CRM",
      "Análise dos contatos por origem",
      "Acompanhamento do caminho dos contatos até a venda",
      "Identificação de contatos sem acompanhamento",
      "E-mail Marketing",
      "WhatsApp Marketing",
      "Automação de mensagens",
      "Fluxos de acompanhamento",
      "Nutrição de contatos",
      "Segmentação de contatos",
      "Análise do processo comercial",
      "Reunião quinzenal",
      "Planejamento estratégico trimestral",
    ],
  },
};

export const TERMS: TermOption[] = [
  {
    months: 4,
    label: "4 meses",
    description: "Entrada mais flexível",
  },
  {
    months: 6,
    label: "6 meses",
    badge: "Recomendado",
    description: "Melhor equilíbrio para construir e otimizar a estratégia",
  },
  {
    months: 8,
    label: "8 meses",
    badge: "Maior continuidade",
    description: "Mais tempo para testar, aprender e melhorar",
  },
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "monthly",
    name: "Mensal",
    discountRate: 0,
    description: "Você paga o valor da mensalidade todos os meses durante o período contratado.",
  },
  {
    id: "partial",
    name: "50% Antecipado",
    discountRate: 0.1,
    badge: "10% OFF",
    description: "Você paga 50% do contrato antecipadamente e o restante é parcelado.",
  },
  {
    id: "upfront",
    name: "À Vista",
    discountRate: 0.15,
    badge: "15% OFF",
    description: "Você paga todo o projeto no início e recebe a maior condição de desconto.",
  },
];

export const REFERRAL_OPTIONS: ReferralOption[] = [
  {
    id: "none",
    label: "Não tenho indicação",
    contractRange: "0%",
    discountRate: 0,
  },
  {
    id: "upTo1000",
    label: "Até R$ 1.000",
    contractRange: "5% de desconto adicional",
    discountRate: 0.05,
  },
  {
    id: "from1001to2000",
    label: "R$ 1.001 a R$ 2.000",
    contractRange: "10% de desconto adicional",
    discountRate: 0.1,
  },
  {
    id: "above2001",
    label: "R$ 2.001 ou mais",
    contractRange: "20% de desconto adicional",
    discountRate: 0.2,
  },
];

export const COMPARISON_FEATURES = [
  { name: "Meta Ads (Instagram & Facebook)", starter: "Sim", pro: "Sim", growth: "Sim", scale: "Sim" },
  { name: "TikTok Ads", starter: "Sim", pro: "Sim", growth: "Sim", scale: "Sim" },
  { name: "Google Ads (Rede de Pesquisa)", starter: "-", pro: "-", growth: "Sim", scale: "Sim" },
  { name: "Criativos Mensais", starter: "Até 4", pro: "Até 4", growth: "Até 6", scale: "Até 6" },
  { name: "Produção de Conteúdo", starter: "-", pro: "Sim", growth: "Sim", scale: "Sim" },
  { name: "Frequência de Conteúdo", starter: "-", pro: "2 / semana", growth: "2 / semana", scale: "2 / semana" },
  { name: "Landing Pages Mensais", starter: "-", pro: "-", growth: "1 por mês", scale: "1 por mês" },
  { name: "LPs para Lançamentos Imobiliários", starter: "-", pro: "-", growth: "Sim", scale: "Sim" },
  { name: "Planejamento Estratégico", starter: "Mensal", pro: "Mensal", growth: "Trimestral", scale: "Trimestral" },
  { name: "Reuniões de Acompanhamento", starter: "Suporte", pro: "Mensal", growth: "Quinzenal", scale: "Quinzenal" },
  { name: "Dashboard de Indicadores", starter: "-", pro: "-", growth: "Sim", scale: "Sim" },
  { name: "Análise de CRM", starter: "-", pro: "-", growth: "-", scale: "Semanal" },
  { name: "E-mail Marketing", starter: "-", pro: "-", growth: "-", scale: "Sim" },
  { name: "WhatsApp Marketing", starter: "-", pro: "-", growth: "-", scale: "Sim" },
  { name: "Automação de Mensagens", starter: "-", pro: "-", growth: "-", scale: "Sim" },
  { name: "Nutrição e Segmentação de Contatos", starter: "-", pro: "-", growth: "-", scale: "Sim" },
  { name: "Análise do Processo Comercial", starter: "-", pro: "-", growth: "-", scale: "Sim" },
];

export const FAQ_ITEMS = [
  {
    question: "A verba de anúncios está incluída?",
    answer:
      "Não. O investimento em Meta, TikTok e Google é pago diretamente às plataformas. Os valores desta proposta correspondem ao trabalho da V2 Growth.",
  },
  {
    question: "O setup é cobrado?",
    answer:
      "Não. O setup e o onboarding estão incluídos gratuitamente em todos os planos.",
  },
  {
    question: "Posso contratar por 4, 6 ou 8 meses?",
    answer:
      "Sim. Você escolhe o período que melhor fizer sentido para a empresa.",
  },
  {
    question: "Existe desconto para pagamento antecipado?",
    answer:
      "Sim. Pagando 50% antecipadamente, o desconto é de 10%. Pagando o projeto inteiro à vista, o desconto é de 15%.",
  },
  {
    question: "Como funciona o desconto por indicação?",
    answer:
      "Se você indicar alguém e essa indicação resultar em um novo contrato para a V2 Growth, você recebe um desconto adicional conforme o valor do novo contrato.",
  },
  {
    question: "Posso indicar mais de uma pessoa?",
    answer:
      "A interface pode permitir apenas uma indicação por contrato/proposta. Caso haja mais de uma indicação válida, a condição deverá ser negociada comercialmente.",
  },
  {
    question: "O desconto por indicação pode ser combinado com o desconto de pagamento?",
    answer:
      "Sim. O desconto de indicação é adicional ao desconto da forma de pagamento e é calculado sobre o valor que restar após o primeiro desconto.",
  },
  {
    question: "O contrato pode ser encerrado antes do prazo?",
    answer:
      "As condições de encerramento e rescisão são apresentadas no contrato comercial.",
  },
];

// Calculation Helper
export interface CalculationResult {
  plan: Plan;
  months: number;
  paymentOption: PaymentOption;
  referralOption: ReferralOption;
  monthlyFee: number;
  baseTotal: number;
  paymentDiscountAmount: number;
  valueAfterPaymentDiscount: number;
  referralDiscountAmount: number;
  finalTotal: number;
  totalSavings: number;
  // Specific breakdown
  partialInitialPayment: number;
  partialRemainingPayment: number;
}

export function calculateProposal(
  planId: string,
  months: number,
  paymentId: PaymentMethodId,
  referralId: ReferralTierId
): CalculationResult {
  const plan = PLANS[planId] || PLANS.growth;
  const paymentOption = PAYMENT_OPTIONS.find((p) => p.id === paymentId) || PAYMENT_OPTIONS[0];
  const referralOption = REFERRAL_OPTIONS.find((r) => r.id === referralId) || REFERRAL_OPTIONS[0];

  const monthlyFee = plan.monthly;
  const baseTotal = monthlyFee * months;

  // Formula as required:
  // valor_apos_pagamento = valor_base * (1 - desconto_pagamento)
  // valor_final = valor_apos_pagamento * (1 - desconto_indicacao)
  const paymentDiscountAmount = baseTotal * paymentOption.discountRate;
  const valueAfterPaymentDiscount = baseTotal - paymentDiscountAmount;

  const referralDiscountAmount = valueAfterPaymentDiscount * referralOption.discountRate;
  const finalTotal = valueAfterPaymentDiscount - referralDiscountAmount;

  const totalSavings = baseTotal - finalTotal;

  // 50% partial breakdown
  const partialInitialPayment = finalTotal * 0.5;
  const partialRemainingPayment = finalTotal * 0.5;

  return {
    plan,
    months,
    paymentOption,
    referralOption,
    monthlyFee,
    baseTotal,
    paymentDiscountAmount,
    valueAfterPaymentDiscount,
    referralDiscountAmount,
    finalTotal,
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
      ? "50% antecipado + restante parcelado"
      : "À vista";

  const paymentDiscountPercent = `${Math.round(calc.paymentOption.discountRate * 100)}%`;
  const referralDiscountPercent = `${Math.round(calc.referralOption.discountRate * 100)}%`;

  let message = `Olá, V2 Growth! Analisei a proposta do Grupo Scaroni e gostaria de avançar.\n\n`;
  message += `Plano: ${calc.plan.name}\n`;
  message += `Período: ${calc.months} meses\n`;
  message += `Pagamento: ${paymentDesc}\n`;
  message += `Valor original: ${formatBRL(calc.baseTotal)}\n`;
  message += `Desconto de pagamento: ${paymentDiscountPercent}\n`;
  message += `Desconto por indicação: ${referralDiscountPercent}\n`;
  message += `Valor final: ${formatBRL(calc.finalTotal)}\n`;
  if (calc.totalSavings > 0) {
    message += `Economia total: ${formatBRL(calc.totalSavings)}\n`;
  }
  message += `\nGostaria de conversar sobre os próximos passos.`;

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppContactUrl(subject = "Dúvida sobre proposta"): string {
  const message = `Olá, V2 Growth! Gostaria de conversar com um especialista sobre a proposta comercial personalizada para o Grupo Scaroni Imobiliária.`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
