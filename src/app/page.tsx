import React from "react";
import Image from "next/image";
import ProposalSimulator from "@/components/ProposalSimulator";
import { 
  Globe, 
  Palette, 
  Search, 
  Calendar, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Laptop,
  CheckCircle2,
  Lock,
  MessageSquare
} from "lucide-react";

export default function Home() {
  const whatsappNumber = "5519990110101";

  // Quick WhatsApp URL helper
  const getWhatsappUrl = (msg: string) => {
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712]">
      
      {/* Decorative Glows (Visual reference to V2 Growth website) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full glow-blur pointer-events-none"></div>
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full glow-blur pointer-events-none"></div>
      <div className="absolute top-[2500px] left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full glow-blur pointer-events-none"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-900/60 bg-[#030712]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/v2growth-logo-new.png"
              alt="V2 Growth Logo"
              width={140}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="h-4 w-px bg-slate-800"></span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
              Propostas
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-secondary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full font-medium">
              Edna Simeão
            </span>
            <a 
              href="#simulador"
              className="bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_15px_rgba(25,61,235,0.3)] cursor-pointer"
            >
              Simular & Aprovar
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 lg:pt-32 lg:pb-40 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 border border-slate-800/80 bg-slate-950/60 px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
            Proposta Comercial
          </span>
        </div>
        
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
          Uma presença digital que trabalha por{" "}
          <span className="text-gradient-primary">Edna Simeão</span> enquanto você cuida dos seus pacientes
        </h1>
        
        <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-400 font-normal mb-10 leading-relaxed">
          Mais visibilidade no Google, mais agendamentos e um posicionamento de destaque na internet, sem que você precise lidar com nenhuma complicação técnica.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <a
            href="#orcamento"
            className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(25,61,235,0.4)] cursor-pointer"
          >
            <span>Ver Orçamento Completo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#simulador"
            className="w-full sm:w-auto border border-slate-800/80 bg-slate-950/40 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900/20 font-bold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            Simular Combinações
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-xs text-slate-500 uppercase tracking-widest bg-slate-950/20 px-3 py-1 rounded-md border border-slate-900/40 font-medium">
          <span>Proposta válida por 7 dias</span>
        </div>
      </section>

      {/* Diagnóstico Rápido */}
      <section className="py-24 bg-slate-950/30 border-y border-slate-900/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-medium">
                Cenário Atual
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white">
                O diagnóstico do seu <span className="text-gradient-primary">momento</span>
              </h2>
            </div>
            
            <div className="md:col-span-8 space-y-6">
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Entendemos que o seu foco principal é o acolhimento e a atenção dedicada a cada paciente na clínica. Contudo, para expandir sua atuação e alcançar pessoas que necessitam do seu apoio, identificamos alguns pontos cruciais que merecem atenção:
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Dificuldade em manter consistência nas postagens e publicações nas redes sociais devido à intensa rotina clínica.
                  </p>
                </li>
                
                <li className="flex gap-3 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Necessidade de otimizar a visibilidade nos mecanismos de pesquisa do Google, para que pessoas da região encontrem seu consultório no momento exato em que buscam por ajuda.
                  </p>
                </li>

                <li className="flex gap-3 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Transição gradual e estruturada para atendimentos 100% online, reduzindo custos físicos e expandindo o alcance geográfico das consultas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Orçamento Avulso (Página de Vendas) */}
      <section className="py-28 max-w-7xl mx-auto px-6" id="orcamento">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-medium">
            Desenvolvimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Orçamento Avulso, <span className="text-gradient-primary">Sua Página de Vendas</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Uma estrutura completa para apresentar seu trabalho com profissionalismo, gerando confiança imediata no paciente.
          </p>
        </div>

        {/* 5 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Deliverable 1 */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 lg:p-8 hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_25px_rgba(25,61,235,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary/20 transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-3">1. Página de Vendas (Landing Page)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Um site simples e profissional focado em transformar visitantes em pacientes agendados. É o seu consultório funcionando 24 horas por dia na internet, mostrando quem você é e como atende, mesmo enquanto você está em consulta ou descansando.
            </p>
          </div>

          {/* Deliverable 2 */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 lg:p-8 hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_25px_rgba(25,61,235,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary/20 transition-colors">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-3">2. Identidade Visual</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Um conjunto de cores, fontes e estilo visual pensado especialmente para você. Isso faz com que tudo que você publicar pareça parte da mesma marca, transmitindo mais confiança para quem está conhecendo seu trabalho pela primeira vez.
            </p>
          </div>

          {/* Deliverable 3 */}
          <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 lg:p-8 hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_25px_rgba(25,61,235,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary/20 transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-3">3. Logotipo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Um símbolo único que representa você e seu consultório. Vai aparecer no site, nas redes sociais e em qualquer material, ajudando as pessoas a reconhecerem seu trabalho rapidamente.
            </p>
          </div>

          {/* Deliverable 4 */}
          <div className="bg-slate-900/60 border-2 border-secondary rounded-3xl p-6 lg:p-8 hover:border-secondary transition-all duration-300 group shadow-[0_0_20px_rgba(0,191,255,0.1)] relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-secondary/15 text-secondary text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-secondary/20 font-semibold">
              Bônus Especial
            </div>
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary/20 transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-3 flex items-center gap-2">
              4. Bônus: Google Meu Negócio
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ajuste do perfil que já aparece quando alguém pesquisa seu nome ou "psicóloga em Araras" no Google. Com as informações certas, fica mais fácil ser encontrada por quem já está procurando ajuda.
            </p>
          </div>

          {/* Deliverable 5 */}
          <div className="bg-slate-900/60 border-2 border-secondary rounded-3xl p-6 lg:p-8 hover:border-secondary transition-all duration-300 group shadow-[0_0_20px_rgba(0,191,255,0.1)] relative overflow-hidden lg:col-span-1">
            <div className="absolute top-4 right-4 bg-secondary/15 text-secondary text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-secondary/20 font-semibold">
              Bônus Especial
            </div>
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary/20 transition-colors">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-3">5. Bônus: Agenda de Horários</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Uma tela simples onde o próprio paciente escolhe o dia e horário disponível, sem precisar trocar várias mensagens com você para combinar. Isso economiza seu tempo e evita a sensação de agenda lotada.
            </p>
          </div>

          {/* Details / Domain info */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/80 rounded-3xl p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full glow-blur pointer-events-none"></div>
            <span className="text-xs text-secondary mb-1 uppercase tracking-wider font-semibold">Hospedagem & Registro</span>
            <h4 className="text-white font-bold text-base mb-2">Estrutura Técnica Inclusa</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Deixamos toda a parte chata configurada. O domínio ficará com endereço limpo e de fácil digitação como <span className="bg-slate-950 px-1.5 py-0.5 rounded text-white text-[11px] font-semibold">[seudominio].com.br</span>.
            </p>
          </div>

        </div>

        {/* Pricing for Setup */}
        <div className="bg-slate-950/60 border border-slate-900/60 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-secondary font-medium">Investimento do Site</span>
              <h3 className="text-white text-2xl font-extrabold">Desenvolvimento e Publicação</h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Pagamento único para criação de toda a estrutura digital, marcas e bônus.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-8 shrink-0">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">CUSTOS TÉCNICOS ADICIONAIS:</span>
                <span className="text-sm sm:text-base font-bold text-white block">Domínio: <span className="text-emerald-450 text-emerald-400 font-semibold">R$ 50,00/ano</span></span>
                <span className="text-sm sm:text-base font-bold text-white block">Hospedagem Cloud: <span className="text-emerald-450 text-emerald-400 font-semibold">R$ 40,00/mês</span></span>
              </div>
              
              <div className="text-left sm:text-right space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">INVESTIMENTO ÚNICO DO SITE:</span>
                <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">R$ 500,00</span>
                <span className="text-sm font-semibold text-white block">Implantação e Design (Pix ou Cartão)</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-900/60 flex justify-center">
            <a 
              href={getWhatsappUrl("Olá! Analisei a proposta comercial e gostaria de aprovar o projeto da Página de Vendas avulsa (com Identidade Visual, Logotipo e Bônus).")}
              target="_blank"
              className="w-full sm:w-auto text-center border border-primary text-white hover:bg-primary/10 transition-all font-bold px-8 py-3 rounded-full text-sm cursor-pointer"
            >
              Aprovar Página de Vendas Avulsa
            </a>
          </div>
        </div>
      </section>

      {/* Comparativo de Planos de Gestão */}
      <section className="py-24 bg-slate-950/20 border-t border-slate-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-medium">
              Recorrência
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Planos de Gestão de <span className="text-gradient-primary">Presença Digital</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              Cuidamos da sua presença na internet mês a mês, trazendo novas pessoas interessadas enquanto você foca nos atendimentos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* PLANO START */}
            <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 mb-2 block font-semibold">Essencial para Começar</span>
                <h3 className="text-xl font-bold text-white mb-2">Plano Start</h3>
                <p className="text-slate-400 text-xs mb-6">Foco em presença local no Google e conteúdo básico.</p>
                
                <div className="space-y-4 pt-6 border-t border-slate-800/40">
                  <div className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-white block">Gestão do Google Meu Negócio</span>
                      <p className="text-xs text-slate-400">
                        Cuidado contínuo do seu perfil no Google para buscas na sua região.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-white block">Edição de vídeos e imagens</span>
                      <p className="text-xs text-slate-400">
                        8 vídeos e 4 imagens por mês com edição profissional completa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/40">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-emerald-400">R$ 350,00</span>
                  <span className="text-xs text-white block mt-1 font-medium">/mês • assinatura sem fidelidade</span>
                </div>
                <a
                  href={getWhatsappUrl("Olá! Analisei a proposta e gostaria de aprovar a Página de Vendas + o Plano Start de Gestão Mensal (R$ 350,00/mês).")}
                  target="_blank"
                  className="w-full text-center border border-slate-850 hover:border-slate-700 hover:bg-slate-900/40 text-white font-bold py-3.5 px-6 rounded-full block text-sm transition-all duration-300 cursor-pointer"
                >
                  Quero esse plano
                </a>
              </div>
            </div>

            {/* PLANO ESSENCIAL */}
            <div className="bg-slate-900/60 border-2 border-primary rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(25,61,235,0.15)] relative transform lg:-translate-y-4">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-primary/20 font-semibold">
                Mais Popular
              </div>
              
              <div>
                <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-semibold">Tração Acelerada</span>
                <h3 className="text-xl font-bold text-white mb-2">Plano Essencial</h3>
                <p className="text-slate-400 text-xs mb-6">Tudo do Start mais anúncios patrocinados no Google Ads.</p>
                
                <div className="space-y-4 pt-6 border-t border-slate-800/40">
                  <span className="text-[10px] uppercase tracking-widest block -mb-1 text-slate-500 font-semibold">Tudo do Start, mais:</span>
                  
                  <div className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-white block">Gestão de Google Ads</span>
                      <p className="text-xs text-slate-400">
                        Anúncios no Google para destacar você no topo das buscas regionais.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-white block">Roteiro de vídeos</span>
                      <p className="text-xs text-slate-400">
                        Guia semanal simples do que falar para atrair pacientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/40">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-emerald-400">R$ 500,00</span>
                  <span className="text-xs text-white block mt-1 font-medium">/mês • assinatura sem fidelidade</span>
                </div>
                <a
                  href={getWhatsappUrl("Olá! Analisei a proposta e gostaria de aprovar a Página de Vendas + o Plano Essencial de Gestão Mensal (R$ 500,00/mês).")}
                  target="_blank"
                  className="w-full text-center bg-primary hover:bg-primary/95 text-white font-bold py-3.5 px-6 rounded-full block text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(25,61,235,0.3)] cursor-pointer"
                >
                  Quero esse plano
                </a>
              </div>
            </div>

            {/* PLANO GROWTH */}
            <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 mb-2 block font-semibold">Escala e Automatização</span>
                <h3 className="text-xl font-bold text-white mb-2">Plano Growth</h3>
                <p className="text-slate-400 text-xs mb-6">Tudo do Essencial mais automações e atração de leads.</p>
                
                <div className="space-y-4 pt-6 border-t border-slate-800/40">
                  <span className="text-[10px] uppercase tracking-widest block -mb-1 text-slate-500 font-semibold">Tudo do Essencial, mais:</span>
                  
                  <div className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-white block">Página de captura de leads</span>
                      <p className="text-xs text-slate-400">
                        Página para oferecer material digital gratuito em troca de contatos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-white block">Edição de vídeos ampliada</span>
                      <p className="text-xs text-slate-400">
                        Aumento para 12 vídeos e 8 imagens editadas por mês.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-sm font-semibold text-white block">Automação de Conversas (Manychat)</span>
                      <p className="text-xs text-slate-400">
                        Respostas automáticas no privado do Instagram.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/40">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-emerald-400">R$ 650,00</span>
                  <span className="text-xs text-white block mt-1 font-medium">/mês • assinatura sem fidelidade</span>
                </div>
                <a
                  href={getWhatsappUrl("Olá! Analisei a proposta e gostaria de aprovar a Página de Vendas + o Plano Growth de Gestão Mensal (R$ 650,00/mês).")}
                  target="_blank"
                  className="w-full text-center border border-slate-850 hover:border-slate-700 hover:bg-slate-900/40 text-white font-bold py-3.5 px-6 rounded-full block text-sm transition-all duration-300 cursor-pointer"
                >
                  Quero esse plano
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Simulador Interativo */}
      <section className="py-28 max-w-7xl mx-auto px-6 border-t border-slate-900/40">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-medium">
            Cálculo Dinâmico
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Monte o seu <span className="text-gradient-primary">investimento</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Consolide o orçamento avulso com a assinatura mensal que melhor se adequa ao seu momento. Transparência total.
          </p>
        </div>

        <ProposalSimulator />
      </section>

      {/* Diferenciais / Por que a V2 Growth */}
      <section className="py-24 bg-slate-950/40 border-y border-slate-900/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-wider text-secondary mb-2 block font-medium">
                Nossos Pilares
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                Por que a <span className="text-gradient-primary">V2 Growth</span> é ideal para o seu consultório?
              </h2>
              
              <div className="bg-slate-900/20 border border-slate-900/60 rounded-2xl p-5 text-slate-400 text-xs leading-relaxed">
                Nossa atuação é focada em simplificar a tecnologia para profissionais liberais. Você não precisa entender de desenvolvimento de sites, hospedagem ou códigos, cuidamos de toda a infraestrutura técnica.
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-slate-900/20 border border-slate-800/80 rounded-2xl">
                <h4 className="font-bold text-white text-base mb-2">Abordagem Ética e Clara</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Sem explorar dores de maneira antiética. Nossa estratégia respeita o Código de Ética de Psicologia, focando no posicionamento de valor e profissionalismo.
                </p>
              </div>

              <div className="p-6 bg-slate-900/20 border border-slate-800/80 rounded-2xl">
                <h4 className="font-bold text-white text-base mb-2">Acompanhamento Próximo</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Você não fala com robôs. Todo o acompanhamento e suporte é feito diretamente pelo WhatsApp de maneira humana, ágil e atenciosa.
                </p>
              </div>

              <div className="p-6 bg-slate-900/20 border border-slate-800/80 rounded-2xl">
                <h4 className="font-bold text-white text-base mb-2">Selo UFSCar</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Nascida no ecossistema de startups e ligada a projetos da Universidade Federal de São Carlos, garantindo processos sólidos e base técnica de excelência.
                </p>
              </div>

              <div className="p-6 bg-slate-900/20 border border-slate-800/80 rounded-2xl">
                <h4 className="font-bold text-white text-base mb-2">Sem Jargões Técnicos</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Esqueça termos confusos de marketing. Explicamos tudo em português simples, garantindo que você compreenda e participe de cada decisão de crescimento.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-28 max-w-5xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-primary/10 via-slate-900/60 to-secondary/10 border border-slate-800/80 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-50 blur-3xl pointer-events-none"></div>

          <span className="text-xs uppercase tracking-wider text-secondary mb-3 block font-medium">
            Próximo Passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Vamos iniciar a sua <span className="text-gradient-primary">jornada digital</span>?
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
            Clique no botão abaixo para aprovar a proposta e abrir o canal direto de WhatsApp para alinharmos os primeiros passos. Lembramos que as condições e valores são válidos por 7 dias.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsappUrl("Olá! Analisei a proposta comercial para a criação da minha Página de Vendas com a V2 Growth e gostaria de dar início ao projeto.")}
              target="_blank"
              className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(25,61,235,0.4)] cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-secondary fill-secondary" />
              <span>Aprovar Proposta Comercial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900/60 bg-slate-950/40 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/v2growth-logo-new.png"
              alt="V2 Growth Logo"
              width={120}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <span className="text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()}
            </span>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-slate-500 font-medium">
              Contato: contato@v2growth.com.br • São Carlos, SP
            </p>
            <p className="text-[10px] text-slate-600 font-medium max-w-md md:max-w-none flex items-center justify-center md:justify-end gap-1">
              <Lock className="w-3 h-3 text-primary" /> Esta proposta contém informações confidenciais exclusivas para Edna Simeão.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
