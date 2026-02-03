/*********************************************************
 * CONFIGURAÇÃO, ESTADO E CARREGAMENTO
 *********************************************************/
let properties = []; 

const filterState = {
  cidade: "", tipo: "todas", precoMin: "", precoMax: "",
  quartos: "", vagas: "", banheiros: "", aceitaPets: "",
  mobiliado: "", areaMin: "", areaMax: ""
};

// Carrega os dados do Render assim que o site abre
async function loadData() {
    const appContainer = document.querySelector('#app .container');
    if(appContainer) appContainer.innerHTML = '<div style="padding:40px; text-align:center;">Carregando imóveis da Márcia...</div>';

    try {
        const response = await fetch('https://imobiliaria-marcia.onrender.com/api/imoveis');
        const data = await response.json();
        
        properties = data.map(p => ({
            ...p,
            pets: p.pets === 'true' || p.pets === true,
            priceVenda: p.type === 'venda' ? p.price : null,
            priceAluguel: p.type === 'aluguel' ? p.price : null,
            images: Array.isArray(p.images) ? p.images : [],
            mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.title)}`
        }));

        router(); 
    } catch (err) {
        console.error("Erro ao carregar banco:", err);
        if(appContainer) appContainer.innerHTML = '<div style="padding:40px; text-align:center; color:red;">Erro ao carregar imóveis. Verifique a conexão com o servidor.</div>';
    }
}

/*********************************************************
 * EXCLUSÃO DE IMÓVEIS
 *********************************************************/
async function deletarImovel(id) {
    if(!confirm("Márcia, deseja realmente excluir este imóvel permanentemente?")) return;
    try {
        const response = await fetch(`https://imobiliaria-marcia.onrender.com/api/imoveis/${id}`, { method: 'DELETE' });
        if(response.ok) {
            alert("✅ Imóvel removido com sucesso!");
            loadData();
        }
    } catch (err) {
        alert("❌ Erro ao tentar excluir o imóvel.");
    }
}

/*********************************************************
 * ROTEADOR (Navegação)
 *********************************************************/
function router(){
  const hash = location.hash.replace('#','') || '/';
  const app = document.querySelector('#app .container');
  if(!app) return;

  app.innerHTML = ""; // Limpa antes de renderizar

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
 * RENDERIZAÇÃO DA HOME
 *********************************************************/
function renderHome(target){
  const cheapest = [...properties].sort((a,b) => (a.price || 0) - (b.price || 0)).slice(0,4);
  target.innerHTML = `
    <section class="hero-card">
      <div class="hero-left">
        <h1>Márcia Hisae — Transformando sonhos em realidade</h1>
        <p class="muted">Especialista em Venda, Locação e Financiamento. Atendimento personalizado.</p>
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

/*********************************************************
 * COMPONENTE CARD (HTML do Imóvel)
 *********************************************************/
function propertyCardHTML(p){
  const firstImg = p.images?.[0] || "assets/placeholder.jpg";
  const displayPrice = p.type === "aluguel" ? `R$ ${formatMoney(p.price)}/mês` : `R$ ${formatMoney(p.price)}`;
  
  return `
    <div class="card card-prop" data-propid="${p.id}">
      <div class="card-media">
        <img src="${firstImg}" alt="${p.title}" loading="lazy" class="card-main-img"/>
        <button class="btn-del-mini" style="position:absolute; top:10px; right:10px; background:rgba(255,255,255,0.8); border:none; border-radius:50%; width:30px; height:30px; cursor:pointer;" onclick="event.stopPropagation(); deletarImovel(${p.id})">🗑️</button>
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
 * WHATSAPP E MODAIS (Os botões que pararam)
 *********************************************************/
const overlayWhats = document.getElementById('whats-modal-overlay');
const openWhatsBtn = document.getElementById('open-whats');
const closeWhatsX = document.getElementById('whats-modal-close');
const cancelBtn = document.getElementById('w-cancel');
const sendBtn = document.getElementById('w-send');
const nameInput = document.getElementById('w-name');
const propSelect = document.getElementById('w-property');
const lbOverlay = document.getElementById('lightbox-overlay');
const burgerBtn = document.getElementById('mobile-burger');
const mobileClose = document.getElementById('mobile-close');
const mobileOverlay = document.getElementById('mobile-menu-overlay');

// Eventos de clique
if(openWhatsBtn) openWhatsBtn.onclick = () => openWhatsModalLocked(null);
if(closeWhatsX) closeWhatsX.onclick = closeWhatsModal;
if(cancelBtn) cancelBtn.onclick = closeWhatsModal;
if(burgerBtn) burgerBtn.onclick = () => mobileOverlay.classList.remove('hidden');
if(mobileClose) mobileClose.onclick = () => mobileOverlay.classList.add('hidden');

function openWhatsModalLocked(propId){
  if(!overlayWhats) return;
  overlayWhats.classList.remove('hidden');
  overlayWhats.setAttribute('aria-hidden','false');
}

function closeWhatsModal(){
  overlayWhats.classList.add('hidden');
}

function populateWhatsSelect(){
  if(!propSelect) return;
  propSelect.innerHTML = properties.map(p => `<option value="${p.id}">${p.title}</option>`).join('');
}

/*********************************************************
 * UTILITÁRIOS E INICIALIZAÇÃO
 *********************************************************/
function formatMoney(n){ return Number(n||0).toLocaleString('pt-BR'); }

function setupCardBehaviors(container) {
    container.querySelectorAll('.card-prop').forEach(card => {
        card.onclick = () => {
            const id = card.getAttribute('data-propid');
            location.hash = `#/imoveis/${id}`;
        };
    });
}

function setActiveNav() {
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.classList.remove('active');
    const hash = location.hash || '#/';
    if(link.getAttribute('href') === hash) link.classList.add('active');
  });
}

// Inicializadores essenciais
window.addEventListener('load', loadData);
window.addEventListener('hashchange', router);

// Renderização de outras páginas (Sobre, etc)
function renderAbout(target){ target.innerHTML = `<section class="principios-card"><h2>Márcia Hisae</h2><p>Especialista imobiliária...</p></section>`; }
function renderAtendimento(target){ target.innerHTML = `<section class="principios-card"><h2>Atendimento</h2><p>Whatsapp: 11 91221-1078</p></section>`; }
function renderPrincipios(target){ target.innerHTML = `<section class="principios-card"><h2>Princípios</h2><p>Melhoria contínua...</p></section>`; }
function renderCertificates(target){ target.innerHTML = `<section class="principios-card"><h2>Certificados</h2><p>CRECI...</p></section>`; }
function renderList(target){ 
    target.innerHTML = `<h2>Todos os Imóveis</h2><div id="cards" class="grid"></div>`;
    const grid = document.getElementById('cards');
    properties.forEach(p => grid.insertAdjacentHTML('beforeend', propertyCardHTML(p)));
    setupCardBehaviors(grid);
}
