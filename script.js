/*********************************************************
 * CONFIGURAÇÃO E ESTADO GLOBAL
 *********************************************************/
let properties = []; // Preenchido pelo banco de dados

const filterState = {
  cidade: "", tipo: "todas", precoMin: "", precoMax: "",
  quartos: "", vagas: "", banheiros: "", aceitaPets: "",
  mobiliado: "", areaMin: "", areaMax: ""
};

// Carrega os dados do Render assim que o site abre
async function loadData() {
    const appContainer = document.querySelector('#app .container');
    if(appContainer) appContainer.innerHTML = '<div style="padding:40px; text-align:center;">Carregando imóveis...</div>';

    try {
        const response = await fetch('https://imobiliaria-marcia.onrender.com/api/imoveis');
        const data = await response.json();
        
        properties = data.map(p => ({
            ...p,
            pets: p.pets === 'true' || p.pets === true,
            // Fallbacks para garantir que o design não quebre
            priceVenda: p.type === 'venda' ? p.price : null,
            priceAluguel: p.type === 'aluguel' ? p.price : null,
            images: Array.isArray(p.images) ? p.images : []
        }));

        router(); 
    } catch (err) {
        console.error("Erro ao carregar banco:", err);
        if(appContainer) appContainer.innerHTML = '<div class="error">Erro ao carregar imóveis.</div>';
    }
}

/*********************************************************
 * ROTEADOR (Faz os botões de navegação funcionarem)
 *********************************************************/
function router(){
  const hash = location.hash.replace('#','') || '/';
  const app = document.querySelector('#app .container');
  if(!app) return;

  // Limpa o conteúdo antes de renderizar a nova página
  app.innerHTML = "";

  if(hash === '/'){ renderHome(app); }
  else if(hash.startsWith('/imoveis/')){ renderDetail(app, hash.split('/')[2]); }
  else if(hash === '/imoveis'){ renderList(app); }
  else if(hash === '/marcia'){ renderAbout(app); }
  else if(hash === '/certificados'){ renderCertificates(app); }
  else if(hash === '/principios'){ renderPrincipios(app); }
  else if(hash === '/atendimento'){ renderAtendimento(app); }
  
  populateWhatsSelect();
  setActiveNav();
}

/*********************************************************
 * FUNÇÕES DE RENDERIZAÇÃO (Seu design original)
 *********************************************************/

function renderHome(target){
  const cheapest = [...properties].sort((a,b) => (a.price || 0) - (b.price || 0)).slice(0,4);
  target.innerHTML = `
    <section class="hero-card">
      <div class="hero-left">
        <h1>Márcia Hisae — Transformando sonhos em realidade</h1>
        <p class="muted">Especialista em Venda, Locação e Financiamento.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/imoveis">Ver Imóveis</a>
          <a class="btn btn-ghost" href="#/atendimento">Atendimento</a>
        </div>
      </div>
      <div class="hero-right">
        <img class="marcia-foto" src="assets/marcia-portrait.jpg" alt="Márcia Hisae" loading="lazy"/>
      </div>
    </section>
    <section style="margin-top:24px">
      <h2 class="destaques-header-title">Destaques</h2>
      <div class="destaques-grid" id="home-destaques-grid"></div>
    </section>
  `;
  const grid = document.getElementById('home-destaques-grid');
  cheapest.forEach(p => grid.insertAdjacentHTML('beforeend', propertyCardHTML(p)));
  setupCardBehaviors(grid);
}

// Função que cria o HTML de cada card
function propertyCardHTML(p){
  const firstImg = p.images?.[0] || "assets/placeholder.jpg";
  const displayPrice = p.type === "aluguel" ? `R$ ${formatMoney(p.price)}/mês` : `R$ ${formatMoney(p.price)}`;
  
  return `
    <div class="card card-prop" data-propid="${p.id}">
      <div class="card-media">
        <img src="${firstImg}" alt="${p.title}" loading="lazy" class="card-main-img"/>
        <button class="btn-del-mini" onclick="event.stopPropagation(); deletarImovel(${p.id})">🗑️</button>
      </div>
      <div class="card-body">
        <div class="list-loc">${p.shortLocation || ''}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-price">${displayPrice}</div>
        <div class="card-meta">${p.area} m² • ${p.bedrooms} qtos</div>
      </div>
    </div>
  `;
}

/*********************************************************
 * WHATSAPP E MENU MOBILE (Ajuste dos botões que pararam)
 *********************************************************/
const overlayWhats = document.getElementById('whats-modal-overlay');
const openWhatsBtn = document.getElementById('open-whats');

if(openWhatsBtn) {
    openWhatsBtn.onclick = () => openWhatsModalLocked(null);
}

function openWhatsModalLocked(propId){
  if(!overlayWhats) return;
  // Lógica de abertura do modal aqui...
  overlayWhats.classList.remove('hidden');
  overlayWhats.setAttribute('aria-hidden','false');
}

// Funções utilitárias
function formatMoney(n){ return Number(n||0).toLocaleString('pt-BR'); }

function setActiveNav() {
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === location.hash) link.classList.add('active');
  });
}

// Listeners essenciais
window.addEventListener('load', loadData);
window.addEventListener('hashchange', router);

// Adicione aqui as outras funções de renderização (renderList, renderAbout, etc) que você já tinha no seu código original
