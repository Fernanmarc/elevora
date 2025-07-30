// Estado do formulário
let formStep = 1;
let formData = {
  nome: '',
  whatsapp: '',
  email: '',
  empresa: '',
  site: '',
  segmento: '',
  ticketMedio: '',
  areaAtuacao: '',
  jaInvestiu: '',
  investimentoMedio: '',
  concorrentes: '',
  objetivos: [],
  orcamento: '',
  comoConheceu: '',
  atendimento: '',
  informacoes: ''
};

// Função para criar ícones SVG
function createIcon(iconName, className = 'icon') {
  const icons = {
    'arrow-right': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>',
    'check-circle': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    'target': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>',
    'users': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
    'trending-up': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',
    'lightbulb': '<svg class="' + className + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
    'star': '<svg class="' + className + '" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>'
  };
  return icons[iconName] || '';
}

// Função para renderizar o conteúdo principal
function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="hero-section gradient-purple">
        <!-- Elementos geométricos decorativos -->
        <div class="geometric-circle animate-float" style="top: 5rem; left: 2.5rem; width: 8rem; height: 8rem;"></div>
        <div class="geometric-circle animate-float" style="bottom: 5rem; right: 2.5rem; width: 6rem; height: 6rem; animation-delay: 1s;"></div>
        <div class="geometric-circle animate-float" style="top: 50%; right: 5rem; width: 4rem; height: 4rem; animation-delay: 2s;"></div>
        
        <div class="container text-center hero-content" style="margin-bottom: 25px">
          <div style="margin-bottom: 2rem;">
            <img src="./logo-elevora.svg" alt="Elévora Digital" style="height: 4rem; margin: 0 auto 1.5rem;" />
          </div>
          
          <h1 class="hero-title">
            Seu negócio está pronto para ser <span style="color: #d58646;">elevado?</span>
          </h1>
          
          <p class="hero-subtitle">
            Descubra o que está oculto entre você e os seus melhores resultados.
          </p>
          
          <p class="hero-description">
            Com o Diagnóstico Estratégico Elévora, você ganha clareza, direção e inteligência para investir certo, crescer certo e se posicionar acima dos seus concorrentes.
          </p>
          
          <button class="btn btn-primary" onclick="scrollToForm()">
            Quero Ser Diagnosticado
            ${createIcon('arrow-right', 'icon icon-diagnostico')}
          </button>
        </div>
      </section>

      <!-- Seção Quem Somos -->
      <section class="section bg-white">
        <div class="container">
          <div style="max-width: 64rem; margin: 0 auto;" class="text-center">
            <h2 class="section-title">Quem Somos</h2>
            
            <p class="section-text">
              Na Elévora, não somos apenas uma agência. Somos estrategistas e arquitetos de crescimento para negócios locais que desejam sair do lugar comum.
            </p>
            
            <div class="grid grid-cols-4 gap-8" style="margin-bottom: 3rem;">
              <div class="card">
                <div class="text-center">
                  ${createIcon('target')}
                  <h3 class="card-title">Direção Criativa</h3>
                </div>
                <div class="card-content">
                  <p>Marcas fortes não podem se comunicar de qualquer jeito.</p>
                </div>
              </div>
              
              <div class="card">
                <div class="text-center">
                  ${createIcon('trending-up')}
                  <h3 class="card-title">Copywriting Estratégico</h3>
                </div>
                <div class="card-content">
                  <p>Cada palavra precisa gerar movimento e resultado.</p>
                </div>
              </div>
              
              <div class="card">
                <div class="text-center">
                  ${createIcon('users')}
                  <h3 class="card-title" style"line-height: 1;">Consultoria Profunda</h3>
                </div>
                <div class="card-content">
                  <p>Lado a lado com líderes e equipes comerciais.</p>
                </div>
              </div>
              
              <div class="card">
                <div class="text-center">
                  ${createIcon('lightbulb')}
                  <h3 class="card-title">Método Eleva</h3>
                </div>
                <div class="card-content">
                  <p>Sistema exclusivo que revela oportunidades reais.</p>
                </div>
              </div>
            </div>
            
            <p class="section-text" style="font-weight: 600;">
              Nosso compromisso? Elevar marcas, resultados e a confiança de quem decide crescer.
            </p>
          </div>
        </div>
      </section>

      <!-- Seção Para Quem É -->
      <section class="section bg-beige">
        <div class="container">
          <div style="max-width: 64rem; margin: 0 auto;">
            <h2 class="section-title text-center">A Elévora é Para Você Se...</h2>
            
            <div class="space-y-6">
              <div class="checklist-item">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Você é dono ou gestor de um negócio local que não aceita ser apenas mais um no mercado.</p>
              </div>
              <div class="checklist-item">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Você quer entender onde investir em tráfego pago — sem desperdiçar verba.</p>
              </div>
              <div class="checklist-item">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Você deseja construir uma marca que seja lembrada e respeitada.</p>
              </div>
              <div class="checklist-item">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Você sente que poderia faturar mais, mas falta clareza sobre o caminho.</p>
              </div>
              <div class="checklist-item">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Você quer alinhar marketing e vendas para vender mais — e melhor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Seção Diagnóstico -->
      <section class="section bg-white">
        <div class="container">
          <div style="max-width: 64rem; margin: 0 auto;" class="text-center">
            <h2 class="section-title">Por Que Você Precisa do Diagnóstico Elévora?</h2>
            
            <p class="section-text">
              Fazer anúncios sem diagnóstico é como navegar sem bússola. O Diagnóstico Estratégico Elévora revela tudo aquilo que está invisível para a maioria dos negócios:
            </p>
            
            <div class="grid grid-cols-2 gap-8" style="margin-bottom: 3rem;">
              <div class="flex items-start space-x-4" style="text-align: left;">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Quem são seus verdadeiros concorrentes — e onde estão vencendo você.</p>
              </div>
              <div class="flex items-start space-x-4" style="text-align: left;">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Qual o tamanho real do seu mercado — e o seu espaço de crescimento.</p>
              </div>
              <div class="flex items-start space-x-4" style="text-align: left;">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Quais plataformas e campanhas realmente fazem sentido para o seu segmento.</p>
              </div>
              <div class="flex items-start space-x-4" style="text-align: left;">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Quanto você deveria investir para alcançar resultados reais, sem blefe.</p>
              </div>
              <div class="flex items-start space-x-4" style="text-align: left;">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">O tom, a narrativa e o posicionamento que farão sua marca se tornar inesquecível.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Seção Provocação -->
      <section class="section gradient-purple" style="color: white;">
        <div class="container">
          <div style="max-width: 64rem; margin: 0 auto;" class="text-center">
            <h2 class="section-title" style="color: white; margin-bottom: 3rem;">
              Perguntas que Negócios Visionários Precisam Responder
            </h2>
            
            <p class="section-text" style="color: #e9dcc7;">Você sabe responder, com precisão:</p>
            
            <div class="space-y-6" style="margin-bottom: 3rem;">
              <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 0.5rem; backdrop-filter: blur(4px);">
                <p style="font-size: 1.125rem; color: white;">Quem é o concorrente que está tirando seus clientes hoje?</p>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 0.5rem; backdrop-filter: blur(4px);">
                <p style="font-size: 1.125rem; color: white;">O ticket médio que seu público está disposto a pagar?</p>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 0.5rem; backdrop-filter: blur(4px);">
                <p style="font-size: 1.125rem; color: white;">Quais canais de mídia geram clientes — e quais geram apenas cliques vazios?</p>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 0.5rem; backdrop-filter: blur(4px);">
                <p style="font-size: 1.125rem; color: white;">O posicionamento emocional que fará sua marca ser lembrada na mente do seu público?</p>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 0.5rem; backdrop-filter: blur(4px);">
                <p style="font-size: 1.125rem; color: white;">Quanto investir em tráfego pago sem comprometer seu caixa, mas garantindo resultado?</p>
              </div>
            </div>
            
            <p class="section-text" style="color: #e9dcc7;">
              Se essas respostas não estão claras, seu negócio está operando no escuro.
            </p>
            <p style="font-size: 1.5rem; font-weight: bold; color: #d58646;">
              O Diagnóstico Elévora acende a luz.
            </p>
          </div>
        </div>
      </section>

      <!-- Seção O Que Você Recebe -->
      <section class="section bg-white">
        <div class="container">
          <div style="max-width: 64rem; margin: 0 auto;">
            <h2 class="section-title text-center">O Que Você Vai Receber Com o Diagnóstico Elévora</h2>
            
            <div class="grid grid-cols-2 gap-8" style="margin-bottom: 3rem;">
              <div class="flex items-start space-x-4">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Estudo estratégico profundo do seu mercado, nicho e concorrência</p>
              </div>
              <div class="flex items-start space-x-4">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Análise do seu posicionamento atual e recomendações para diferenciá-lo</p>
              </div>
              <div class="flex items-start space-x-4">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Estimativa técnica de investimento ideal em mídia para sua realidade</p>
              </div>
              <div class="flex items-start space-x-4">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Indicação das melhores plataformas e estratégias para captar clientes</p>
              </div>
              <div class="flex items-start space-x-4">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Sugestão de narrativa, tom de voz e caminhos criativos para a sua marca</p>
              </div>
              <div class="flex items-start space-x-4">
                ${createIcon('check-circle', 'check-icon')}
                <p class="section-text" style="margin-bottom: 0;">Plano de ação claro, pronto para ser implementado</p>
              </div>
            </div>
            
            <div class="text-center">
              <span class="span-text" style="color: #d58646; border: 2px solid #d58646; padding: 0.5rem 1.5rem; border-radius: 9999px; font-size: 1.125rem;">
                Tudo elaborado por especialistas, não por sistemas automáticos.
              </span>
            </div>
          </div>
        </div>
      </section>

     <!-- Seção Depoimento -->
      <section class="section bg-beige">
        <div class="container">
          <div style="max-width: 64rem; margin: 0 auto;" class="text-center">
            <div id="testimonial-slider" class="testimonial">
              <!-- Imagem do cliente -->
              <img src="" alt="Foto do cliente" class="testimonial-img" id="testimonial-img">

              <div class="stars" id="testimonial-stars"></div>
              <blockquote class="testimonial-text" id="testimonial-text"></blockquote>
              <cite class="testimonial-author" id="testimonial-author"></cite>
            </div>

            <!-- Botões de navegação -->
            <div class="testimonial-nav mt-4">
              <button onclick="prevTestimonial()">&#8592;</button>
              <button onclick="nextTestimonial()">&#8594;</button>
            </div>
          </div>
        </div>
      </section>


      <!-- Seção CTA -->
      <section class="section gradient-purple" style="color: white;">
        <div class="container">
          <div style="max-width: 64rem; margin: 0 auto;" class="text-center">
            <h2 class="section-title" style="color: white;">
              Pronto Para Elevar o Seu Negócio?
            </h2>
            
            <p class="section-text" style="color: #e9dcc7; margin-bottom: 3rem;">
              Preencha o formulário abaixo e receba gratuitamente o Diagnóstico Estratégico Elévora. Uma análise real, feita sob medida para o seu negócio — não é apenas um orçamento.
            </p>
            
            <button class="btn btn-primary" onclick="scrollToForm()">
              Quero Ser Diagnosticado
              ${createIcon('arrow-right', 'icon icon-diagnostico')}
            </button>
          </div>
        </div>
      </section>

      <!-- Formulário -->
      <section id="formulario" class="section bg-white">
        <div class="container">
          <div class="form-container">
            <div class="text-center" style="margin-bottom: 3rem;">
              <h2 class="section-title">Formulário – Diagnóstico Estratégico Elévora</h2>
              <div class="form-steps">
                <div class="form-step ${formStep >= 1 ? 'active' : 'inactive'}">1</div>
                <div class="form-step ${formStep >= 2 ? 'active' : 'inactive'}">2</div>
                <div class="form-step ${formStep >= 3 ? 'active' : 'inactive'}">3</div>
                <div class="form-step ${formStep >= 4 ? 'active' : 'inactive'}">4</div>
              </div>
            </div>

            <form id="diagnostico-form" onsubmit="handleSubmit(event)">
              ${renderFormStep()}
              
              <div class="form-navigation">
                ${formStep > 1 ? '<button type="button" class="btn btn-secondary bt-mobile2" onclick="prevStep()">Voltar</button>' : '<div></div>'}
                
                ${formStep < 4 ? 
                  '<button type="button" class="btn btn-primary bt-mobile" onclick="nextStep()">Continuar ' + createIcon('arrow-right', 'icon icon-diagnostico ico-mobile') + '</button>' :
                  '<button type="submit" class="btn btn-primary bt-mobile">Enviar Formulário</button>'
                }
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
<!-- Seção FAQ -->
    <section class="section section-beige">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title">Perguntas Frequentes</h2>
                
                <div class="faq-container">
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span class="span-faq-title">O Diagnóstico Elévora é mesmo gratuito?</span>
                            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="p-span-text">Sim. O Diagnóstico Estratégico Elévora é oferecido sem custo inicial. Porém, é realizado apenas para negócios que se encaixem em nosso perfil de atendimento e que realmente estejam comprometidos em crescer. É uma análise profunda, não apenas um orçamento superficial.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span class="span-faq-title">O Diagnóstico serve para qualquer tipo de negócio?</span>
                            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="p-span-text">Nosso foco principal são negócios locais que desejam crescer de forma estruturada, investir em tráfego pago com inteligência e construir marcas sólidas. Se você atua no comércio, serviços ou saúde, por exemplo, e quer se posicionar acima da concorrência, o Diagnóstico Elévora é para você.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span class="span-faq-title">Quanto tempo leva para receber o diagnóstico?</span>
                            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="p-span-text">Em média, de 3 a 5 dias úteis após o envio do formulário completo. É um estudo individualizado, feito manualmente, com análises profundas. Não trabalhamos com relatórios prontos ou automáticos.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span class="span-faq-title">Preciso contratar a Elévora depois de fazer o diagnóstico?</span>
                            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="p-span-text">Não necessariamente. O Diagnóstico é um presente nosso, para você entender onde está e para onde pode ir. Caso você deseje aplicar as recomendações com nossa equipe, teremos prazer em apresentar nossos planos. Mas não há obrigação de continuidade.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span class="span-faq-title">Vocês garantem aumento de vendas após o diagnóstico?</span>
                            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="p-span-text">O Diagnóstico Elévora entrega clareza estratégica, não promessas mágicas. Nenhuma agência séria pode garantir vendas sem considerar mercado, orçamento e execução. O que garantimos é uma análise minuciosa que mostra onde estão suas reais oportunidades de crescimento.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span class="span-faq-title">O diagnóstico é feito por inteligência artificial?</span>
                            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="p-span-text">Não. O Diagnóstico Elévora é elaborado por estrategistas humanos, com experiência em negócios locais, mercado digital e análise competitiva. Usamos dados e ferramentas para apoiar as conclusões, mas o olhar crítico e consultivo é exclusivamente humano.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span class="span-faq-title">Minha empresa está começando agora. Vale a pena fazer o diagnóstico?</span>
                            <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p class="p-span-text">Sim, desde que você tenha clareza de que deseja investir com inteligência e construir um posicionamento sólido desde o início. Negócios em fase inicial podem evitar desperdícios e acelerar o crescimento ao entender desde cedo onde está o caminho certo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="Footer">
  <footer class="text-center py-4 gradient-purple" style="color: white;">
    <!-- Logo -->
    <div class="footer-logo mb-2">
      <img src="./logo-elevora.svg" alt="Logo Elévora" class="img-fluid edit-logo">
    </div>

    <!-- Ícones sociais -->
    <div class="d-flex justify-content-center gap-4 mb-3">
      <a href="https://api.whatsapp.com/send?phone=5511988210558&text=Ol%C3%A1!%20Vim%20do%20site%20da%20El%C3%A9vora%20Digital%20e%20gostaria%20de%20saber%20mais!" class="footer-icon" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elevoradigital@gmail.com&su=Interesse em diagnóstico estratégico&body=Olá! Vim pelo site da Elévora Digital e gostaria de saber mais sobre os serviços.
" class="footer-icon" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
      <a href="https://www.instagram.com/elevoradigital/" class="footer-icon" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/share/16U1UJhjhE/" class="footer-icon" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
    </div>

    <!-- Linha divisória -->
    <div class="footer-divider"></div>

    <!-- Texto -->
    <p class="footer-text">
      A Elévora Digital atua como núcleo de inteligência estratégica para negócios locais.
      Diagnóstico gratuito sujeito à análise de disponibilidade.
    </p>
  </footer>
</section>

    </div>
  `;
}

// Função para renderizar o passo atual do formulário
function renderFormStep() {
  switch(formStep) {
    case 1:
      return `
        <div class="card">
          <h3 class="card-title">📝 Dados Básicos do Contato</h3>
          <div class="space-y-4">
            <div class="form-group">
              <label class="form-label" for="nome">Nome completo *</label>
              <input class="form-input" id="nome" type="text" value="${formData.nome}" onchange="updateFormData('nome', this.value)" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="whatsapp">WhatsApp *</label>
              <input class="form-input" id="whatsapp" type="text" value="${formData.whatsapp}" onchange="updateFormData('whatsapp', this.value)" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="email">E-mail corporativo *</label>
              <input class="form-input" id="email" type="email" value="${formData.email}" onchange="updateFormData('email', this.value)" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="empresa">Nome da empresa ou negócio *</label>
              <input class="form-input" id="empresa" type="text" value="${formData.empresa}" onchange="updateFormData('empresa', this.value)" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="site">Site ou Instagram da empresa</label>
              <input class="form-input" id="site" type="text" value="${formData.site}" onchange="updateFormData('site', this.value)">
            </div>
          </div>
        </div>
      `;
    case 2:
      return `
        <div class="card">
          <h3 class="card-title">🔎 Sobre o Negócio</h3>
          <div class="space-y-4">
            <div class="form-group">
              <label class="form-label" for="segmento">Qual seu segmento ou nicho de atuação?</label>
              <input class="form-input" id="segmento" type="text" value="${formData.segmento}" onchange="updateFormData('segmento', this.value)">
            </div>
            <div class="form-group">
              <label class="form-label">Ticket médio dos seus produtos ou serviços?</label>
              <select class="form-select" onchange="updateFormData('ticketMedio', this.value)">
                <option value="">Selecione uma opção</option>
                <option value="ate-100" ${formData.ticketMedio === 'ate-100' ? 'selected' : ''}>R$ até 100</option>
                <option value="101-300" ${formData.ticketMedio === '101-300' ? 'selected' : ''}>R$ 101 – 300</option>
                <option value="301-500" ${formData.ticketMedio === '301-500' ? 'selected' : ''}>R$ 301 – 500</option>
                <option value="501-1000" ${formData.ticketMedio === '501-1000' ? 'selected' : ''}>R$ 501 – 1.000</option>
                <option value="1001-3000" ${formData.ticketMedio === '1001-3000' ? 'selected' : ''}>R$ 1.001 – 3.000</option>
                <option value="3001-mais" ${formData.ticketMedio === '3001-mais' ? 'selected' : ''}>R$ 3.001 ou mais</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Área geográfica de atuação do seu negócio:</label>
              <select class="form-select" onchange="updateFormData('areaAtuacao', this.value)">
                <option value="">Selecione uma opção</option>
                <option value="local" ${formData.areaAtuacao === 'local' ? 'selected' : ''}>Somente bairro ou cidade</option>
                <option value="regional" ${formData.areaAtuacao === 'regional' ? 'selected' : ''}>Cidades vizinhas</option>
                <option value="estadual" ${formData.areaAtuacao === 'estadual' ? 'selected' : ''}>Estado todo</option>
                <option value="nacional" ${formData.areaAtuacao === 'nacional' ? 'selected' : ''}>Brasil todo</option>
                <option value="internacional" ${formData.areaAtuacao === 'internacional' ? 'selected' : ''}>Internacional</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Já investiu em tráfego pago antes?</label>
              <select class="form-select" onchange="updateFormData('jaInvestiu', this.value); renderApp();">
                <option value="">Selecione uma opção</option>
                <option value="sim" ${formData.jaInvestiu === 'sim' ? 'selected' : ''}>Sim</option>
                <option value="nao" ${formData.jaInvestiu === 'nao' ? 'selected' : ''}>Não</option>
              </select>
            </div>
            ${formData.jaInvestiu === 'sim' ? `
              <div class="form-group">
                <label class="form-label" for="investimentoMedio">Se sim, qual foi o investimento médio mensal?</label>
                <input class="form-input" id="investimentoMedio" type="number" value="${formData.investimentoMedio}" onchange="updateFormData('investimentoMedio', this.value)">
              </div>
            ` : ''}
            <div class="form-group">
              <label class="form-label" for="concorrentes">Liste até 3 principais concorrentes ou referências que admira:</label>
              <textarea class="form-textarea" id="concorrentes" onchange="updateFormData('concorrentes', this.value)">${formData.concorrentes}</textarea>
            </div>
          </div>
        </div>
      `;
    case 3:
      return `
        <div class="card">
          <h3 class="card-title">💰 Orçamento e Objetivos</h3>
          <div class="space-y-4">
            <div class="form-group">
              <label class="form-label">Principais objetivos com marketing digital:</label>
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input type="checkbox" ${formData.objetivos.includes('Atrair mais clientes') ? 'checked' : ''} onchange="toggleObjective('Atrair mais clientes')">
                  <span>Atrair mais clientes</span>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" ${formData.objetivos.includes('Vender mais pelo Instagram / WhatsApp') ? 'checked' : ''} onchange="toggleObjective('Vender mais pelo Instagram / WhatsApp')">
                  <span>Vender mais pelo Instagram / WhatsApp</span>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" ${formData.objetivos.includes('Fortalecer minha marca na região') ? 'checked' : ''} onchange="toggleObjective('Fortalecer minha marca na região')">
                  <span>Fortalecer minha marca na região</span>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" ${formData.objetivos.includes('Lançar novos produtos ou serviços') ? 'checked' : ''} onchange="toggleObjective('Lançar novos produtos ou serviços')">
                  <span>Lançar novos produtos ou serviços</span>
                </div>
                <div class="checkbox-item">
                  <input type="checkbox" ${formData.objetivos.includes('Crescer em escala') ? 'checked' : ''} onchange="toggleObjective('Crescer em escala')">
                  <span>Crescer em escala</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Quanto pretende investir mensalmente em mídia paga?</label>
              <select class="form-select" onchange="updateFormData('orcamento', this.value)">
                <option value="">Selecione uma opção</option>
                <option value="ate-500" ${formData.orcamento === 'ate-500' ? 'selected' : ''}>até R$ 500</option>
                <option value="501-1000" ${formData.orcamento === '501-1000' ? 'selected' : ''}>R$ 501 – 1.000</option>
                <option value="1001-2000" ${formData.orcamento === '1001-2000' ? 'selected' : ''}>R$ 1.001 – 2.000</option>
                <option value="2001-3000" ${formData.orcamento === '2001-3000' ? 'selected' : ''}>R$ 2.001 – 3.000</option>
                <option value="acima-3000" ${formData.orcamento === 'acima-3000' ? 'selected' : ''}>acima de R$ 3.000</option>
              </select>
            </div>
          </div>
        </div>
      `;
    case 4:
      return `
        <div class="card">
          <h3 class="card-title">🧭 Sobre a Elévora</h3>
          <div class="space-y-4">
            <div class="form-group">
              <label class="form-label">Como conheceu a Elévora?</label>
              <select class="form-select" onchange="updateFormData('comoConheceu', this.value)">
                <option value="">Selecione uma opção</option>
                <option value="instagram" ${formData.comoConheceu === 'instagram' ? 'selected' : ''}>Instagram</option>
                <option value="indicacao" ${formData.comoConheceu === 'indicacao' ? 'selected' : ''}>Indicação</option>
                <option value="google" ${formData.comoConheceu === 'google' ? 'selected' : ''}>Google / Pesquisa</option>
                <option value="evento" ${formData.comoConheceu === 'evento' ? 'selected' : ''}>Evento ou palestra</option>
                <option value="outro" ${formData.comoConheceu === 'outro' ? 'selected' : ''}>Outro</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Deseja ser atendido por telefone ou WhatsApp?</label>
              <select class="form-select" onchange="updateFormData('atendimento', this.value)">
                <option value="">Selecione uma opção</option>
                <option value="whatsapp" ${formData.atendimento === 'whatsapp' ? 'selected' : ''}>WhatsApp</option>
                <option value="telefone" ${formData.atendimento === 'telefone' ? 'selected' : ''}>Telefone</option>
                <option value="ambos" ${formData.atendimento === 'ambos' ? 'selected' : ''}>Ambos</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="informacoes">Deixe aqui alguma informação que considere importante para entendermos seu negócio:</label>
              <textarea class="form-textarea" id="informacoes" onchange="updateFormData('informacoes', this.value)">${formData.informacoes}</textarea>
            </div>
          </div>
        </div>
      `;
    default:
      return '';
  }
}

// Funções de navegação do formulário
function nextStep() {
  if (formStep < 4) {
    formStep++;
    renderApp();
    scrollToForm(); 
  }
}

function prevStep() {
  if (formStep > 1) {
    formStep--;
    renderApp();
    scrollToForm()  // idem
  }
}

// Função para atualizar dados do formulário
function updateFormData(field, value) {
  formData[field] = value;
}

// Função para alternar objetivos (checkboxes)
function toggleObjective(objective) {
  if (formData.objetivos.includes(objective)) {
    formData.objetivos = formData.objetivos.filter(obj => obj !== objective);
  } else {
    formData.objetivos.push(objective);
  }
}

// Função para rolar até o formulário
function scrollToForm() {
  document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
}

// function handleSubmit(e) {
//   e.preventDefault();

// // Enviar para Google Sheets
//   fetch("https://script.google.com/macros/s/SEU_SCRIPT_ID/exec", {
//     method: "POST",
//     body: JSON.stringify(formData),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(response => {
//     if (response.ok) {
//       alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
//       window.location.href = "https://api.whatsapp.com/send?phone=5511988210558&text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20da%20El%C3%A9vora%20Digital%20e%20gostaria%20de%20dar%20continuidade%20ao%20diagn%C3%B3stico%20estrat%C3%A9gico.%20Podemos%20conversar%3F";
//     } else {
//       alert('Erro ao enviar. Tente novamente mais tarde.');
//     }
//   })
//   .catch(error => {
//     console.error('Erro:', error);
//     alert('Erro ao enviar. Tente novamente mais tarde.');
//   });
// }

function handleSubmit(e) {
  e.preventDefault();

  // 🔍 1. Validação dos campos obrigatórios
  const camposObrigatorios = {
    nome: "Nome completo",
    whatsapp: "WhatsApp",
    email: "E-mail corporativo",
    empresa: "Nome da empresa ou negócio"
  };

  for (const campo in camposObrigatorios) {
    if (!formData[campo] || formData[campo].trim() === "") {
      alert(`Por favor, preencha o campo obrigatório: ${camposObrigatorios[campo]}`);
      return;
    }
  }

  // ✉️ 2. Envio do formulário via fetch
  fetch("https://script.google.com/macros/s/SEU_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
      window.location.href = "https://api.whatsapp.com/send?phone=5511988210558&text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20da%20El%C3%A9vora%20Digital%20e%20gostaria%20de%20dar%20continuidade%20ao%20diagn%C3%B3stico%20estrat%C3%A9gico.%20Podemos%20conversar%3F";
    } else if (response.status === 404) {
      alert('Servidor não encontrado (404). Verifique se o link está correto ou se o script foi publicado.');
    } else if (response.status === 400) {
      alert('Dados inválidos. Verifique os campos e tente novamente.');
    } else {
      alert(`Erro ao enviar (código ${response.status}). Tente novamente mais tarde.`);
    }
  })
  .catch(error => {
    console.error('Erro de rede:', error);
    alert('Erro de conexão com o servidor. Verifique sua internet ou se o formulário já foi publicado.');
  });
}

// Inicializar a aplicação quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  renderApp();
});


  const testimonials = [
    {
      text: "A Elévora nos deu uma clareza que nunca tivemos. Nosso investimento agora é certeiro, nosso posicionamento está mais forte e finalmente temos uma marca que as pessoas reconhecem.",
      author: "— Cliente Satisfeito, CEO, Empresa Local",
      stars: 5,
      image: "./foto_1.png"
    },
    {
      text: "Graças à Elévora, conseguimos escalar nossas vendas sem perder qualidade. Hoje, temos clareza total do nosso funil e das campanhas.",
      author: "— Diretora de Marketing, Startup X",
      stars: 5,
      image: "./foto_2.png"
    },
    {
      text: "Nunca pensei que uma consultoria de marketing pudesse impactar tanto. Hoje somos referência no nosso nicho.",
      author: "— Fundador, Empresa Y",
      stars: 4,
      image: "./foto_3.png"
    }
  ];

  let current = 0;

  function renderTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById('testimonial-text').textContent = `"${testimonial.text}"`;
    document.getElementById('testimonial-author').textContent = testimonial.author;
    document.getElementById('testimonial-img').src = testimonial.image;

    const starsContainer = document.getElementById('testimonial-stars');
    starsContainer.innerHTML = '';

    for (let i = 0; i < testimonial.stars; i++) {
      try {
        const icon = createIcon('star', 'star'); // se existir no seu sistema
        starsContainer.appendChild(icon);
      } catch (e) {
        const span = document.createElement('span');
        span.innerHTML = '⭐';
        span.style.fontSize = '1.5rem';
        starsContainer.appendChild(span);
      }
    }
  }

  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    renderTestimonial(current);
  }

  function prevTestimonial() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(current);
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderTestimonial(current);
    setInterval(nextTestimonial, 10000); // troca a cada 10s
  });


  // Função para inicializar o FAQ
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });
}

// Função para alternar FAQ
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fechar todos os FAQs
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Se não estava ativo, ativar o clicado
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

