export interface Plan {
  id: "starter" | "pro" | "growth";
  name: string;
  monthly: number;
  badge?: string;
  isRecommended?: boolean;
  tagline: string;
  description: string;
  pillars: {
    linkedin: string[];
    crm: string[];
    prospecting: string[];
    webinars?: string[];
    bonus: string[];
  };
  operationalNote?: string;
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

export const CLIENT_NAME = "Corte & Fernandes Advogados Associados";
export const PROVIDER_NAME = "V2 Growth";

export const PLANS: Record<string, Plan> = {
  starter: {
    id: "starter",
    name: "Starter",
    monthly: 497,
    tagline: "Fundação de Autoridade & Operação",
    description: "Para organizar a casa, estruturar o LinkedIn institucional e implantar um processo comercial profissional.",
    operationalNote: "A execução diária da prospecção ativa é realizada pela equipe interna do escritório.",
    pillars: {
      linkedin: [
        "Setup completo do perfil (otimização de SEO e conversão)",
        "Definição de Linhas Editoriais estratégicas",
        "8 conteúdos autorais por mês (2 publicações por semana)",
      ],
      crm: [
        "Setup inicial do HubSpot CRM (funil, etapas e campos personalizados)",
        "Importação e higienização da base de contatos",
        "Templates de e-mail profissionais para follow-up",
      ],
      prospecting: [
        "Estruturação Comercial Simples (ICP, Personas e Scripts de Vendas)",
        "Scripts de abordagem validados para LinkedIn e E-mail",
        "Acompanhamento semanal do Funil de Vendas e orientação de follow-ups",
      ],
      bonus: [
        "Conformidade Ética OAB (Provimento 205/2021 do CFOAB em todas as peças)",
      ],
    },
  },
  pro: {
    id: "pro",
    name: "Pro",
    monthly: 990,
    badge: "Mais Recomendado",
    isRecommended: true,
    tagline: "Aceleração de Autoridade & Conversão",
    description: "Volume, automações e inteligência comercial para transformar autoridade jurídica em reuniões de negócios.",
    operationalNote: "Acompanhamento próximo com automações multicanal e treinamento de time.",
    pillars: {
      linkedin: [
        "Tudo incluído no Starter",
        "Aumento para 12 conteúdos autorais por mês (3 por semana)",
        "Edição profissional de vídeos curtos",
        "Newsletter mensal temática no LinkedIn",
      ],
      crm: [
        "Automações completas de follow-up (E-mail, LinkedIn e WhatsApp)",
        "Fluxos de reengajamento de contatos inativos da base",
        "Gestão de tarefas e lembretes para os advogados",
      ],
      prospecting: [
        "Estruturação Comercial Completa (Playbook de Vendas B2B)",
        "Estratégia prática de Social Selling para os sócios",
        "Acompanhamento tático semanal de cadências e taxas de resposta",
      ],
      bonus: [
        "Treinamento e Capacitação do Time Interno (SDR / Comercial) para uso do HubSpot e scripts",
        "Conformidade Ética OAB (Provimento 205/2021 do CFOAB em todas as peças)",
      ],
    },
  },
  growth: {
    id: "growth",
    name: "Growth",
    monthly: 1490,
    badge: "Escala Máxima",
    tagline: "Dominação de Mercado & Escala",
    description: "Máxima presença com motor de autoridade via webinários mensais, lead scoring e mentoria estratégica.",
    operationalNote: "Operação integrada de alta performance com governança de metas e eventos digitais.",
    pillars: {
      linkedin: [
        "Tudo incluído no Pro",
        "Aumento para 16 conteúdos autorais por mês (4 por semana)",
        "Cortes e reels estratégicos extraídos dos webinários",
      ],
      crm: [
        "Lead Scoring preditivo para priorizar grandes contas B2B",
        "Dashboards executivos de Forecast e Previsão de Honorários",
        "Integração total de canais de captação (conforme plano assinado no HubSpot)",
      ],
      prospecting: [
        "Mentoria mensal estratégica com especialistas para alinhamento de metas",
        "Análise fina e refinamento contínuo de abordagens de alta conversão",
      ],
      webinars: [
        "Execução completa de 1 Webinário de Autoridade por mês",
        "Planejamento temático, roteiro e estrutura técnica do evento",
        "Fluxos automatizados de e-mail pré e pós-evento para agendamento de reuniões",
      ],
      bonus: [
        "Landing Page Institucional de Inscrição de alta conversão para os webinários",
        "Definição de Filtros & List Building B2B (Mapeamento detalhado de tomadores de decisão)",
        "Treinamento e Capacitação do Time Interno (SDR / Comercial)",
        "Conformidade Ética OAB (Provimento 205/2021 do CFOAB em todas as peças)",
      ],
    },
  },
};

export const TERMS: TermOption[] = [
  {
    months: 4,
    label: "4 meses",
    description: "Estruturação inicial e primeiros resultados",
  },
  {
    months: 6,
    label: "6 meses",
    badge: "Recomendado",
    description: "Equilíbrio ideal para maturidade de cadências e pipeline previsível",
  },
  {
    months: 8,
    label: "8 meses",
    badge: "Maior Continuidade",
    description: "Mais tempo para consolidação de autoridade e expansão de carteira",
  },
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "monthly",
    name: "Mensal",
    discountRate: 0,
    description: "Mensalidades fixas durante todo o período do contrato.",
  },
  {
    id: "partial",
    name: "50% Antecipado",
    discountRate: 0.1,
    badge: "10% OFF",
    description: "50% do valor total pago na assinatura do contrato e o restante parcelado.",
  },
  {
    id: "upfront",
    name: "À Vista",
    discountRate: 0.15,
    badge: "15% OFF",
    description: "Pagamento integral à vista no início da parceria com desconto máximo.",
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
  // LinkedIn Pillar
  { category: "LinkedIn & Autoridade", name: "Setup e Otimização de Perfil (SEO / Conversão)", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn & Autoridade", name: "Linhas Editoriais Estratégicas", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn & Autoridade", name: "Volume de Conteúdos Autorais", starter: "8 / mês (2x/sem)", pro: "12 / mês (3x/sem)", growth: "16 / mês (4x/sem)" },
  { category: "LinkedIn & Autoridade", name: "Edição de Vídeos Curtos", starter: "-", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn & Autoridade", name: "Newsletter Mensal no LinkedIn", starter: "-", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn & Autoridade", name: "Cortes Estratégicos dos Webinários", starter: "-", pro: "-", growth: "Sim" },

  // HubSpot CRM Pillar
  { category: "HubSpot CRM", name: "Setup Inicial (Funil, Etapas e Campos)", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Importação e Higienização de Base", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Templates de E-mail para Follow-up", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Automações de Follow-up e Reengajamento", starter: "-", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Lead Scoring Preditivo para Contas B2B", starter: "-", pro: "-", growth: "Sim" },
  { category: "HubSpot CRM", name: "Dashboards de Previsão de Honorários (Forecast)", starter: "-", pro: "-", growth: "Sim" },

  // Prospecção Ativa B2B
  { category: "Prospecção Ativa B2B", name: "Estruturação de ICP, Personas e Scripts", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Ativa B2B", name: "Acompanhamento Semanal do Funil", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Ativa B2B", name: "Playbook Completo de Vendas B2B", starter: "-", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Ativa B2B", name: "Estratégia de Social Selling", starter: "-", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Ativa B2B", name: "Mentoria Mensal Estratégica de Metas", starter: "-", pro: "-", growth: "Sim" },

  // Webinários Mensais
  { category: "Webinários & Eventos", name: "Webinário Mensal Completo (Roteiro e Gestão)", starter: "-", pro: "-", growth: "1 por mês" },
  { category: "Webinários & Eventos", name: "Fluxos de E-mail Pré e Pós-Evento", starter: "-", pro: "-", growth: "Sim" },

  // Bônus Especiais
  { category: "Bônus Especiais", name: "Conformidade Ética OAB (Provimento 205/2021)", starter: "Incluso", pro: "Incluso", growth: "Incluso" },
  { category: "Bônus Especiais", name: "Treinamento e Capacitação do Time Interno (SDR / Comercial)", starter: "-", pro: "Incluso", growth: "Incluso" },
  { category: "Bônus Especiais", name: "Mapeamento de ICP & List Building B2B (*)", starter: "-", pro: "-", growth: "Incluso" },
  { category: "Bônus Especiais", name: "Landing Page Institucional para os Webinários", starter: "-", pro: "-", growth: "Incluso" },
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a conformidade com as regras éticas da OAB?",
    answer:
      "Todas as nossas ações respeitam rigorosamente o Provimento 205/2021 do CFOAB e o Código de Ética e Disciplina da OAB. Não realizamos mercantilização, promessas de causas ganhas ou captação indevida. Focamos exclusivamente em autoridade técnica, conteúdo informativo e prospecção ativa qualificada no meio corporativo (B2B).",
  },
  {
    question: "Quem executa a prospecção ativa no dia a dia?",
    answer:
      "A execução diária de conexões, envio dos scripts e agendamento é realizada pelo time interno (SDR, estagiário ou advogados) do escritório Corte & Fernandes. A V2 Growth é responsável por toda a inteligência: construção do ICP, criação dos scripts de abordagem, automações no CRM, treinamento prático e mentoria semanal para garantir alta conversão.",
  },
  {
    question: "As licenças de ferramentas (HubSpot e LinkedIn Sales Navigator) estão inclusas?",
    answer:
      "Não. O investimento desta proposta remunera a assessoria, inteligência e tecnologia da V2 Growth. As eventuais assinaturas de plataformas de terceiros — como a licença do HubSpot CRM ou do LinkedIn Sales Navigator — são contratadas diretamente pelo escritório caso optem por utilizar recursos pagos dessas ferramentas.",
  },
  {
    question: "O setup e onboarding inicial são cobrados à parte?",
    answer:
      "Não. O setup completo do perfil, organização do funil no HubSpot CRM e mapeamento do ICP estão 100% inclusos gratuitamente em todos os planos desde o primeiro dia.",
  },
  {
    question: "Posso contratar por 4, 6 ou 8 meses?",
    answer:
      "Sim. Você escolhe o horizonte de contratação que melhor se alinha com o planejamento estratégico do escritório. O período de 6 meses é o mais recomendado para maturação completa do pipeline jurídico.",
  },
  {
    question: "Existe desconto para pagamento antecipado?",
    answer:
      "Sim. Pagando 50% antecipadamente e o restante parcelado, o escritório recebe 10% de desconto sobre o valor total do contrato. Optando pelo pagamento integral à vista no início do projeto, o desconto é de 15%.",
  },
  {
    question: "Como funciona o bônus de desconto por indicação?",
    answer:
      "Caso o escritório indique uma empresa ou parceiro para a V2 Growth e essa indicação resulte em um novo contrato fechado, a Corte & Fernandes recebe um desconto adicional de 5%, 10% ou 20% aplicado sequencialmente sobre o valor do projeto.",
  },
  {
    question: "Como funcionam os Webinários Mensais previstos no plano Growth?",
    answer:
      "No plano Growth, estruturamos 1 webinário temático por mês focado em dores de empresas e executivos. Cuidamos do tema, roteiro, landing page de captação e cadência de e-mails para levar os inscritos a reuniões de diagnóstico com os sócios.",
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
  const paymentOption = PAYMENT_OPTIONS.find((p) => p.id === paymentId) || PAYMENT_OPTIONS[0];
  const referralOption = REFERRAL_OPTIONS.find((r) => r.id === referralId) || REFERRAL_OPTIONS[0];

  const monthlyFee = plan.monthly;
  const baseTotal = monthlyFee * months;

  const paymentDiscountAmount = baseTotal * paymentOption.discountRate;
  const valueAfterPaymentDiscount = baseTotal - paymentDiscountAmount;

  const referralDiscountAmount = valueAfterPaymentDiscount * referralOption.discountRate;
  const finalTotal = valueAfterPaymentDiscount - referralDiscountAmount;

  const totalSavings = baseTotal - finalTotal;

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

  let message = `Olá, V2 Growth! Analisei a proposta comercial para o ${CLIENT_NAME} e gostaria de avançar.\n\n`;
  message += `Plano: ${calc.plan.name} (${calc.plan.tagline})\n`;
  message += `Período: ${calc.months} meses\n`;
  message += `Pagamento: ${paymentDesc}\n`;
  message += `Valor original: ${formatBRL(calc.baseTotal)}\n`;
  message += `Desconto de pagamento: ${paymentDiscountPercent}\n`;
  message += `Desconto por indicação: ${referralDiscountPercent}\n`;
  message += `Valor final: ${formatBRL(calc.finalTotal)}\n`;
  if (calc.totalSavings > 0) {
    message += `Economia total: ${formatBRL(calc.totalSavings)}\n`;
  }
  message += `\nGostaria de conversar sobre a formalização e os próximos passos do projeto.`;

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppContactUrl(subject = "Dúvida sobre proposta"): string {
  const message = `Olá, V2 Growth! Gostaria de conversar com um especialista sobre a proposta de crescimento comercial da Corte & Fernandes Advogados Associados.`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
