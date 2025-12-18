import React from 'react';
import {
  ShieldCheck,
  Scale,
  UserCheck,
  MessageSquare,
  FileSearch,
  ShieldAlert,
  Banknote,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Header / Navbar (Simplified for Landing Page) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-serviceseguros-blue" />
            <span className="text-xl font-bold tracking-tight text-serviceseguros-blue">ServiceSeguros</span>
          </div>
          <a
            href="https://wa.me/5564993134371"
            className="hidden md:flex items-center gap-2 text-serviceseguros-blue font-semibold hover:text-serviceseguros-light-blue transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Falar com o Parceiro</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-serviceseguros-blue/5 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-serviceseguros-accent/10 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-serviceseguros-blue/10 text-serviceseguros-blue font-semibold text-sm mb-6 animate-fade-in">
                <ShieldCheck className="w-4 h-4" />
                <span>Parceiro Jurídico Recomendado</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
                Parceiro jurídico recomendado pela <span className="text-serviceseguros-blue">ServiceSeguros</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Conheça a <span className="font-bold text-slate-900 uppercase">SOUZA & BORGES ADVOGADOS ASSOCIADOS</span>,
                o escritório que indicamos para questões jurídicas ligadas a seguros, contratos e proteção do consumidor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#sobre"
                  className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
                >
                  Conhecer a Souza & Borges Advogados
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/5564993134371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5 text-green-600" />
                  Falar pelo WhatsApp
                </a>
              </div>

              <div className="mt-16 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Scale className="w-8 h-8 text-slate-700" />
                  </div>
                  <span className="text-xs mt-2 uppercase tracking-widest font-bold">Ética Jurídica</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <UserCheck className="w-8 h-8 text-slate-700" />
                  </div>
                  <span className="text-xs mt-2 uppercase tracking-widest font-bold">Confiança Total</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Recommend Section */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que recomendamos a SOUZA & BORGES ADVOGADOS ASSOCIADOS?</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Como empresa que atua com seguros, nós da ServiceSeguros sabemos que, às vezes, você pode enfrentar problemas como sinistro negado, cláusulas pouco claras ou golpes financeiros. Em muitas situações, é vital ter um apoio jurídico sério.
            </p>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldAlert className="w-8 h-8" />,
                  title: "Direito do Consumidor",
                  desc: "Atuação forte em contratos de seguros e serviços financeiros buscando clareza e justiça."
                },
                {
                  icon: <FileSearch className="w-8 h-8" />,
                  title: "Golpes e Fraudes",
                  desc: "Experiência com golpes que atingem segurados e consumidores no ambiente digital."
                },
                {
                  icon: <Banknote className="w-8 h-8" />,
                  title: "Dívidas e Bancos",
                  desc: "Apoio jurídico em renegociação e revisão de contratos de crédito e seguros atrelados."
                },
                {
                  icon: <UserCheck className="w-8 h-8" />,
                  title: "BPC para Autistas",
                  desc: "Orientação para famílias que buscam segurança financeira através de benefícios assistenciais."
                },
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: "Linguagem Simples",
                  desc: "Atendimento organizado com explicação clara das possibilidades em cada caso específico."
                },
                {
                  icon: <Scale className="w-8 h-8" />,
                  title: "Postura Ética",
                  desc: "Nossa indicação baseia-se na clareza e respeito às normas da advocacia, sem promessas vãs."
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 bg-serviceseguros-blue/5 text-serviceseguros-blue rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How They Can Help Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Como a Souza & Borges pode ajudar você, cliente da ServiceSeguros</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Trabalhamos para que você se sinta protegido. Se você passou ou passa por alguma dessas situações, pode ser útil conversar com um especialista:
                </p>
                <ul className="space-y-4">
                  {[
                    "Sinistro negado ou pago parcialmente pela seguradora",
                    "Dúvidas sobre cláusulas complexas do contrato de seguro",
                    "Cobrança de seguros que você não se lembra de ter contratado",
                    "Golpes e fraudes em nome de seguradoras ou bancos",
                    "Dificuldades em cancelar seguros vinculados a cartões"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-serviceseguros-accent shrink-0" />
                      <span className="text-slate-700 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-3">
                  <span className="w-10 h-10 bg-serviceseguros-blue text-white rounded-lg flex items-center justify-center font-bold">1</span>
                  <h4 className="font-bold text-lg">Direito Securitário</h4>
                  <p className="text-sm text-slate-600">Análise de apólices e defesa em face de negativas indevidas.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-3">
                  <span className="w-10 h-10 bg-serviceseguros-accent text-white rounded-lg flex items-center justify-center font-bold">2</span>
                  <h4 className="font-bold text-lg">Proteção Digital</h4>
                  <p className="text-sm text-slate-600">Orientação sobre preservação de provas em casos de golpes online.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-3">
                  <span className="w-10 h-10 bg-serviceseguros-blue text-white rounded-lg flex items-center justify-center font-bold">3</span>
                  <h4 className="font-bold text-lg">Direito Bancário</h4>
                  <p className="text-sm text-slate-600">Revisão de contratos de crédito e juros abusivos em seguros embutidos.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-3">
                  <span className="w-10 h-10 bg-serviceseguros-accent text-white rounded-lg flex items-center justify-center font-bold">4</span>
                  <h4 className="font-bold text-lg">Direito Assistencial</h4>
                  <p className="text-sm text-slate-600">Apoio a famílias com requisitos para BPC e outras proteções.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 p-4 bg-amber-50 rounded-lg border border-amber-100 text-amber-800 text-sm italic text-center">
              Nota: Cada caso é único e será avaliado individualmente, sem promessa de resultado garantido.
            </div>
          </div>
        </section>

        {/* Testimonial / Recommendation Block */}
        <section className="py-20 bg-serviceseguros-blue text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} className="w-6 h-6 text-serviceseguros-accent fill-serviceseguros-accent" />)}
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-center leading-relaxed mb-8 italic">
                "Na ServiceSeguros, trabalhamos para que nossos clientes se sintam protegidos em todas as etapas. A Souza & Borges Advogados Associados se destacou para nós pela forma clara de explicar os cenários e pelo respeito às normas da advocacia. Por isso, indicamos esse escritório como parceiro para quem busca apoio sério e responsável."
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-xl uppercase tracking-widest text-serviceseguros-accent">Equipe ServiceSeguros</p>
                <p className="text-white/60 text-sm">Cuidado e proteção em cada passo</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8">Sobre a SOUZA & BORGES ADVOGADOS ASSOCIADOS</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Trata-se de uma sociedade simples pura de serviços advocatícios, regularmente inscrita no
                  <span className="font-bold"> CNPJ 53.266.530/0001-42</span>. Nossa sede física está localizada no coração de Morrinhos/GO, mas nossa infraestrutura digital nos permite atender clientes de todo o país com a mesma proximidade e excelência.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-serviceseguros-blue shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Endereço</p>
                      <p className="text-slate-700 font-medium text-sm">Rua 7 de Setembro, nº 655, Centro, Morrinhos/GO</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-serviceseguros-blue shrink-0" />
                    <p className="text-slate-700 font-medium text-sm">Padrão ético de atendimento e organização processual.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 text-serviceseguros-blue font-bold hover:underline">
                    Visitar site oficial <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="bg-slate-900 rounded-3xl p-10 text-white relative flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-serviceseguros-accent">Valores que valorizamos:</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Ética e Seriedade</h4>
                      <p className="text-white/60 text-sm">Cumprimento rigoroso do Código de Ética e Disciplina da OAB.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Clareza na Comunicação</h4>
                      <p className="text-white/60 text-sm">Sem "juridiquês". Explicamos seus direitos de forma que você entenda.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Organização</h4>
                      <p className="text-white/60 text-sm">Gestão eficiente de prazos e atualização constante do cliente.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Como funciona o atendimento da Souza & Borges</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Contato Incial",
                  desc: "Você envia sua situação pelo WhatsApp ou e-mail institucional."
                },
                {
                  step: "02",
                  title: "Análise Jurídica",
                  desc: "O escritório analisa os fatos e documentos para verificar as viabilidades."
                },
                {
                  step: "03",
                  title: "Proposta Clara",
                  desc: "Apresentamos uma proposta de honorários justa e formalizamos o contrato."
                },
                {
                  step: "04",
                  title: "Acompanhamento",
                  desc: "Você recebe atualizações periódicas sobre o andamento do seu caso."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-5xl font-extrabold text-slate-100 absolute top-4 right-4 z-0">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-16 border-2 border-slate-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-serviceseguros-blue text-white rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-xl">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Quer falar com o escritório que recomendamos?</h2>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
                Se você é cliente da <span className="font-bold text-serviceseguros-blue">ServiceSeguros</span> e precisa de orientação jurídica técnica e responsável, fale agora com a <span className="font-bold">SOUZA & BORGES ADVOGADOS ASSOCIADOS</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a
                  href="https://wa.me/5564993134371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-4 px-10 flex items-center justify-center gap-3 text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
                <a
                  href="mailto:contato@souzaborges.adv.br"
                  className="btn-secondary py-4 px-10 flex items-center justify-center gap-3 text-lg"
                >
                  <Mail className="w-6 h-6" />
                  Enviar E-mail
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 w-full">
                <p className="text-slate-400 text-sm max-w-lg mx-auto">
                  A decisão de contratar o escritório é sempre do cliente.
                  Oferecemos um trabalho jurídico sério e técnico, sem promessa de resultado certo ou garantia de vitória judicial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-8 h-8 text-serviceseguros-accent" />
                <span className="text-2xl font-bold tracking-tight">ServiceSeguros</span>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed">
                Nossa missão é proteger o que é importante para você. Além de seguros, oferecemos a segurança de contar com parceiros jurídicos de alta confiança.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contatos do Escritório</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-serviceseguros-accent" />
                  (64) 99313-4371
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-serviceseguros-accent" />
                  contato@souzaborges.adv.br
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Endereço</h4>
              <p className="text-white/60 leading-relaxed">
                Rua 7 de Setembro, nº 655<br />
                Centro, Morrinhos/GO<br />
                CEP 75.650-078
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
            <p>&copy; {new Date().getFullYear()} ServiceSeguros. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
