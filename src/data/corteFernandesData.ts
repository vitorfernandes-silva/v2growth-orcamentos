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
    tagline: "Estruturação & Fundação Comercial",
    description: "Estruturação do posicionamento no LinkedIn e organização do funil comercial no HubSpot CRM.",
    operationalNote: "A execução diária dos contatos é realizada pela equipe interna do escritório com orientação tática da V2 Growth.",
    pillars: {
      linkedin: [
        "Setup completo do perfil institucional com foco em autoridade e SEO",
        "Definição de Linhas Editoriais estratégicas para o meio corporativo",
        "8 artigos e publicações autorais por mês (2 por semana)",
      ],
      crm: [
        "Setup inicial do HubSpot CRM com funil, etapas e campos customizados",
        "Higienização e importação da base de contatos do escritório",
        "Modelos de e-mail profissionais para acompanhamento de oportunidades",
      ],
      prospecting: [
        "Definição de Perfil de Cliente Ideal (ICP), personas e teses de abordagem",
        "Elaboração de roteiros consultivos para LinkedIn e e-mail",
        "Acompanhamento semanal do funil de vendas para orientar próximos passos",
      ],
      bonus: [
        "Conformidade rigorosa com o Provimento 205/2021 do CFOAB em todas as peças",
      ],
    },
  },
  pro: {
    id: "pro",
    name: "Pro",
    monthly: 990,
    badge: "Recomendado",
    isRecommended: true,
    tagline: "Aceleração & Automação de Pipeline",
    description: "Ampliação de frequência, automações multicanal de acompanhamento e capacitação do time interno.",
    operationalNote: "Acompanhamento tático próximo com cadências estruturadas e rotina comercial ativa.",
    pillars: {
      linkedin: [
        "Escopo completo do plano Starter",
        "12 artigos e publicações autorais por mês (3 por semana)",
        "Edição profissional de vídeos curtos institucionais",
        "Newsletter mensal temática no LinkedIn voltada a executivos",
      ],
      crm: [
        "Automações de acompanhamento multicanal (e-mail, LinkedIn e WhatsApp)",
        "Fluxos programados de reengajamento para contatos inativos da base",
        "Painel de tarefas e lembretes para os advogados responsáveis",
      ],
      prospecting: [
        "Playbook comercial completo de vendas consultivas B2B",
        "Metodologia prática de Social Selling para os sócios da banca",
        "Acompanhamento tático semanal de conversão de contatos em reuniões",
      ],
      bonus: [
        "Capacitação prática da equipe interna para operação do CRM e cadências",
        "Conformidade rigorosa com o Provimento 205/2021 do CFOAB em todas as peças",
      ],
    },
  },
  growth: {
    id: "growth",
    name: "Growth",
    monthly: 1490,
    badge: "Operação Completa",
    tagline: "Expansão & Governança Jurídica",
    description: "Operação integrada com eventos ao vivo, qualificação preditiva de contas e mentoria estratégica de metas.",
    operationalNote: "Gestão executiva de crescimento com governança periódica e eventos digitais de alta autoridade.",
    pillars: {
      linkedin: [
        "Escopo completo do plano Pro",
        "16 publicações autorais por mês (4 por semana)",
        "Cortes estratégicos dos eventos online para ampla distribuição",
      ],
      crm: [
        "Qualificação preditiva (Lead Scoring) para priorizar contas corporativas",
        "Painéis executivos de previsão de honorários e saúde do funil",
        "Integração de canais de captação conforme licença ativa no HubSpot",
      ],
      prospecting: [
        "Mentoria mensal executiva para alinhamento de metas e novos mercados",
        "Refinamento contínuo das abordagens comerciais de maior conversão",
      ],
      webinars: [
        "Estruturação completa de 1 webinário temático de autoridade por mês",
        "Roteirização técnica e planejamento temático do evento digital",
        "Fluxos automatizados de convite e acompanhamento pós-evento",
      ],
      bonus: [
        "Página institucional com alta taxa de conversão para inscrição em eventos",
        "Mapeamento detalhado de tomadores de decisão corporativos (ICP) (nota: requer avaliação de licença do LinkedIn Sales Navigator pela banca)",
        "Capacitação prática e contínua para a equipe interna do escritório",
        "Conformidade rigorosa com o Provimento 205/2021 do CFOAB em todas as peças",
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
    description: "Tempo ideal para maturação de cadências e previsibilidade comercial",
  },
  {
    months: 8,
    label: "8 meses",
    badge: "Continuidade",
    description: "Consolidação de posicionamento institucional e expansão de clientes",
  },
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "monthly",
    name: "Mensal",
    discountRate: 0,
    description: "Faturamento mensal regular durante o período de contratação.",
  },
  {
    id: "partial",
    name: "50% Antecipado",
    discountRate: 0.1,
    badge: "10% de desconto",
    description: "Entrada de 50% na assinatura do contrato e saldo restante parcelado.",
  },
  {
    id: "upfront",
    name: "À Vista",
    discountRate: 0.15,
    badge: "15% de desconto",
    description: "Quitação integral no início da parceria com condição especial de desconto.",
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
    contractRange: "5% adicional",
    discountRate: 0.05,
  },
  {
    id: "from1001to2000",
    label: "R$ 1.001 a R$ 2.000",
    contractRange: "10% adicional",
    discountRate: 0.1,
  },
  {
    id: "above2001",
    label: "R$ 2.001 ou mais",
    contractRange: "20% adicional",
    discountRate: 0.2,
  },
];

export const COMPARISON_FEATURES = [
  // LinkedIn
  { category: "LinkedIn Institucional", name: "Otimização de Perfil (SEO e Conversão)", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn Institucional", name: "Linhas Editoriais Estratégicas", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn Institucional", name: "Frequência de Conteúdos Autorais", starter: "8 por mês", pro: "12 por mês", growth: "16 por mês" },
  { category: "LinkedIn Institucional", name: "Edição Profissional de Vídeos Curtos", starter: "Não", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn Institucional", name: "Newsletter Mensal no LinkedIn", starter: "Não", pro: "Sim", growth: "Sim" },
  { category: "LinkedIn Institucional", name: "Distribuição de Cortes dos Webinários", starter: "Não", pro: "Não", growth: "Sim" },

  // HubSpot CRM
  { category: "HubSpot CRM", name: "Setup Inicial do Pipeline e Campos", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Higienização e Importação de Base", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Modelos de E-mail de Acompanhamento", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Automações Multicanal de Acompanhamento", starter: "Não", pro: "Sim", growth: "Sim" },
  { category: "HubSpot CRM", name: "Qualificação Preditiva de Contas (Lead Scoring)", starter: "Não", pro: "Não", growth: "Sim" },
  { category: "HubSpot CRM", name: "Painéis de Previsão de Honorários (Forecast)", starter: "Não", pro: "Não", growth: "Sim" },

  // Prospecção Ativa B2B
  { category: "Prospecção Comercial B2B", name: "Mapeamento de ICP, Personas e Roteiros", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Comercial B2B", name: "Acompanhamento Semanal do Funil", starter: "Sim", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Comercial B2B", name: "Playbook Completo de Vendas B2B", starter: "Não", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Comercial B2B", name: "Metodologia de Social Selling", starter: "Não", pro: "Sim", growth: "Sim" },
  { category: "Prospecção Comercial B2B", name: "Mentoria Mensal de Metas e Performance", starter: "Não", pro: "Não", growth: "Sim" },

  // Webinários
  { category: "Eventos Digitais", name: "Planejamento e Roteiro de Webinário Mensal", starter: "Não", pro: "Não", growth: "1 por mês" },
  { category: "Eventos Digitais", name: "Fluxos de E-mail de Inscrição e Pós-Evento", starter: "Não", pro: "Não", growth: "Sim" },

  // Bônus
  { category: "Bônus Inclusos", name: "Conformidade Ética OAB (Provimento 205/2021)", starter: "Incluso", pro: "Incluso", growth: "Incluso" },
  { category: "Bônus Inclusos", name: "Capacitação Prática da Equipe Interna", starter: "Não", pro: "Incluso", growth: "Incluso" },
  { category: "Bônus Inclusos", name: "Mapeamento de Decisores Corporativos (requer avaliação do LinkedIn Sales Navigator)", starter: "Não", pro: "Não", growth: "Incluso" },
  { category: "Bônus Inclusos", name: "Página Institucional de Inscrição de Eventos", starter: "Não", pro: "Não", growth: "Incluso" },
];

export const FAQ_ITEMS = [
  {
    question: "Como é assegurada a conformidade com as normas da OAB?",
    answer:
      "Todas as iniciativas seguem estritamente as diretrizes do Provimento 205/2021 do CFOAB e do Código de Ética e Disciplina da OAB. A estratégia apoia-se no caráter informativo, na sobriedade e na autoridade técnica, vedando expressamente qualquer forma de mercantilização ou promessa de resultados judiciais.",
  },
  {
    question: "Qual é a divisão operacional da prospecção diária?",
    answer:
      "A abordagem direta, o envio dos roteiros e os agendamentos são conduzidos pela equipe interna do escritório. A V2 Growth é responsável por toda a inteligência estratégica: definição do perfil de cliente ideal (ICP), elaboração dos roteiros consultivos, estruturação das automações no CRM e acompanhamento tático semanal para aprimorar os índices de conversão.",
  },
  {
    question: "As licenças de softwares terceiros estão inclusas na proposta?",
    answer:
      "Não. Os valores apresentados remuneram a assessoria, planejamento e tecnologia da V2 Growth. Licenças de ferramentas de terceiros, a exemplo do HubSpot CRM ou do LinkedIn Sales Navigator, são contratadas diretamente pela banca junto aos respectivos provedores caso o escritório opte por planos pagos.",
  },
  {
    question: "Existe cobrança de taxa de implantação ou adesão?",
    answer:
      "Não. A configuração do funil no HubSpot CRM, o alinhamento de perfil no LinkedIn e a estruturação dos roteiros iniciais estão inclusos sem qualquer custo adicional em todos os planos.",
  },
  {
    question: "Quais são os prazos contratuais disponíveis?",
    answer:
      "A proposta prevê opções de 4, 6 ou 8 meses de parceria. O período de 6 meses é recomendado pela V2 Growth por proporcionar o tempo necessário para maturação das cadências e geração de previsibilidade no pipeline.",
  },
  {
    question: "Como funcionam as condições de pagamento antecipado?",
    answer:
      "Para a modalidade com 50% de entrada antecipada e saldo restante parcelado, aplica-se 10% de desconto sobre o valor total do contrato. Para pagamento integral à vista no início da parceria, concede-se 15% de desconto sobre o valor total.",
  },
  {
    question: "Como é aplicado o bônus por indicação?",
    answer:
      "Caso o escritório indique uma empresa ou parceiro para a V2 Growth e essa indicação resulte em contrato efetivado, a Corte & Fernandes recebe um desconto adicional de 5%, 10% ou 20%, calculado sequencialmente sobre o saldo do projeto.",
  },
  {
    question: "Como são estruturados os webinários no plano Growth?",
    answer:
      "No plano Growth, a V2 Growth realiza o planejamento temático, roteirização, estruturação da página de inscrição e automações de comunicação pré e pós-evento para converter participantes em reuniões de diagnóstico com os sócios.",
  },
];

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
      ? "50% antecipado e saldo parcelado"
      : "À vista";

  const paymentDiscountPercent = `${Math.round(calc.paymentOption.discountRate * 100)}%`;
  const referralDiscountPercent = `${Math.round(calc.referralOption.discountRate * 100)}%`;

  let message = `Olá, equipe V2 Growth. Analisei a proposta comercial para a ${CLIENT_NAME} e gostaria de avançar.\n\n`;
  message += `Plano: ${calc.plan.name} (${calc.plan.tagline})\n`;
  message += `Período: ${calc.months} meses\n`;
  message += `Forma de pagamento: ${paymentDesc}\n`;
  message += `Valor base: ${formatBRL(calc.baseTotal)}\n`;
  message += `Desconto de pagamento: ${paymentDiscountPercent}\n`;
  message += `Bônus por indicação: ${referralDiscountPercent}\n`;
  message += `Valor final do projeto: ${formatBRL(calc.finalTotal)}\n`;
  if (calc.totalSavings > 0) {
    message += `Economia total: ${formatBRL(calc.totalSavings)}\n`;
  }
  message += `\nGostaria de alinhar os próximos passos operacionais.`;

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppContactUrl(subject = "Dúvida sobre proposta"): string {
  const message = `Olá, equipe V2 Growth. Gostaria de conversar com um especialista sobre a proposta de estruturação comercial da Corte & Fernandes Advogados Associados.`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
