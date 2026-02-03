/*********************************************************
 * ESTADO GLOBAL E CARREGAMENTO DO BANCO
 *********************************************************/
let properties = []; 

const filterState = {
  cidade: "", tipo: "todas", precoMin: "", precoMax: "",
  quartos: "", vagas: "", banheiros: "", aceitaPets: "",
  mobiliado: "", areaMin: "", areaMax: ""
};

// Carrega os imóveis do Render assim que o site abre
async function loadData() {
    const appContainer = document.querySelector('#app .container');
    if(appContainer) appContainer.innerHTML = '<div style="padding:100px; text-align:center;">Carregando imóveis da Márcia...</div>';

    try {
        const response = await fetch('https://imobiliaria-marcia.onrender.com/api/imoveis');
        const data = await response.json();
        
        properties = data.map(p => ({
            ...p,
            pets: p.pets === 'true' || p.pets === true,
            images: Array.isArray(p.images) ? p.images : [],
            mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.title + " " + p.shortLocation)}`
        }));

        router(); // Chama o roteador após carregar os dados
    } catch (err) {
        console.error("Erro ao conectar com o banco:", err);
        router(); // Tenta rodar o site mesmo sem imóveis para não travar os menus
    }
}

/*********************************************************
 * ROTEADOR (Navegação entre menus)
 *********************************************************/
function router(){
  const hash = location.hash.replace('#','') || '/';
  const app = document.querySelector('#app .container');
  if(!app) return;

  app.innerHTML = ""; // Limpa a tela antes de trocar de seção

  if(hash === '/' || hash === ''){ renderHome(app); }
  else if(hash.startsWith('/imoveis/')){ renderDetail(app, hash.split('/')[2]); }
  else if(hash === '/imoveis'){ renderList(app); }
  else if(hash === '/marcia'){ renderAbout(app); }
  else if(hash === '/certificados'){ renderCertificates(app); }
  else if(hash === '/principios'){ renderPrincipios(app); }
  else if(hash === '/atendimento'){ renderAtendimento(app); }
  
  window.scrollTo(0,0);
  setActiveNav();
}

/*********************************************************
 * SESSÃO: MÁRCIA HISAE (SOBRE)
 *********************************************************/
function renderAbout(target){
  target.innerHTML = `
    <section class="contact-card" style="display:flex;justify-content:center;margin:40px auto;">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-start;gap:20px;background:#fff;border:1px solid #e6eef7;border-radius:12px;box-shadow:0 10px 24px rgba(0,0,0,0.05);padding:30px;max-width:850px;">
        <img src="assets/marcia-portrait.jpg" alt="Márcia Hisae" style="width:220px;border-radius:10px;object-fit:cover;" loading="lazy"/>
        <div style="flex:1;min-width:280px;">
          <h2 style="margin:0;font-size:24px;font-weight:700;color:#0B3B71">Márcia Hisae</h2>
          <p style="margin-top:12px;font-size:16px;line-height:1.6;color:#666;">Sou especialista de Mercado Imobiliário com foco em Venda, Locação e Financiamento. Com cuidado, precisão documental e transparência, transformo sonhos em realidade.</p>
          <div style="margin-top:15px;font-weight:600;color:#999;">CRECI PJ 36766 • CRECI PF 176234</div>
          <div style="margin-top:20px; display:flex; align-items:center; gap:10px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" style="width:20px;">
            <a href="https://www.instagram.com/marciahisae" target="_blank" style="font-weight:600;color:#0B3B71;text-decoration:none;">@marciahisae</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/*********************************************************
 * SESSÃO: CERTIFICADOS
 *********************************************************/
function renderCertificates(target){
  const certs = [
    { img:"assets/cert1.jpg", label:"CRECI PF 176234" },
    { img:"assets/cert2.jpg", label:"CRECI PJ 36766" },
    { img:"assets/fgv.jpg", label:"Formação / Especialização" }
  ];
  target.innerHTML = `
    <h2 style="color:#0B3B71;">Certificados</h2>
    <p class="muted">Documentação e certificações profissionais.</p>
    <div class="certs-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:20px; margin-top:30px;">
      ${certs.map(c => `
        <div class="card" style="padding:15px; text-align:center;">
          <img src="${c.img}" style="width:100%; border-radius:8px; cursor:pointer;" onclick="openLightbox(['${c.img}'], 0)">
          <div style="margin-top:10px; font-weight:600; color:#0B3B71;">${c.label}</div>
        </div>
      `).join('')}
    </div>
  `;
}

/*********************************************************
 * SESSÃO: PRINCÍPIOS (KAIZEN / 5S)
 *********************************************************/
function renderPrincipios(target){
  target.innerHTML = `
    <h2 style="color:#0B3B71;">Princípios</h2>
    <p class="muted">Cultura de melhoria contínua, disciplina e respeito ao cliente.</p>
    <div style="background:#f4f7fa; padding:30px; border-radius:12px; margin-top:20px;">
      <h3 style="color:#D6A528; font-size:32px; margin:0;">改善</h3>
      <h4 style="margin:5px 0; color:#0B3B71;">Kaizen — Melhoria Contínua</h4>
      <p style="color:#666; line-height:1.6;">Kaizen é a prática diária de melhorar processos, cuidar dos detalhes e entregar valor real para o cliente. Não é acaso. É disciplina, transparência e evolução constante.</p>
    </div>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:15px; margin-top:20px;">
        <div class="card" style="text-align:center; padding:15px;"><strong>Seiri</strong><br><small>Utilização</small></div>
        <div class="card" style="text-align:center; padding:15px;"><strong>Seiton</strong><br><small>Organização</small></div>
        <div class="card" style="text-align:center; padding:15px;"><strong>Seisou</strong><br><small>Limpeza</small></div>
        <div class="card" style="text-align:center; padding:15px;"><strong>Seiketsu</strong><br><small>Saúde</small></div>
        <div class="card" style="text-align:center; padding:15px;"><strong>Shitsuke</strong><br><small>Autodisciplina</small></div>
    </div>
  `;
}

/*********************************************************
 * SESSÃO: ATENDIMENTO
 *********************************************************/
function renderAtendimento(target){
  target.innerHTML = `
    <div class="contact-card" style="max-width:600px; margin:40px auto; padding:40px;">
      <h2 style="color:#0B3B71;">Atendimento</h2>
      <p>Segunda à Sábado das 09:00 - 18:00</p>
      <p><strong>Whatsapp:</strong> 11 91221-1078</p>
      <h3 style="margin-top:25px; color:#0B3B71;">Endereços</h3>
      <p><a href="https://goo.gl/maps/..." target="_blank" style="color:#0B3B71; text-decoration:none;">Rua José Versolato, 111 - Centro, São Bernardo do Campo - SP</a></p>
      <p><a href="https://goo.gl/maps/..." target="_blank" style="color:#0B3B71; text-decoration:none;">Av. Paulista, 2073 - Jardins - SP</a></p>
    </div>
  `;
}

/*********************************************************
 * FUNÇÕES ESSENCIAIS (HOME, LISTA, WHATSAPP, LIGHTBOX)
 *********************************************************/
function renderHome(target){
  const highlights = properties.slice(0,4);
  target.innerHTML = `
    <section class="hero-card">
      <div class="hero-left">
        <h1>Márcia Hisae — Transformando sonhos em realidade</h1>
        <p class="muted">Venda, Locação e Financiamento com atendimento personalizado.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/imoveis">Ver Imóveis</a>
          <a class="btn btn-ghost" href="#/atendimento">Atendimento</a>
        </div>
      </div>
      <div class="hero-right"><img class="marcia-foto" src="assets/marcia-portrait.jpg"></div>
    </section>
    <h2 class="destaques-header-title" style="margin-top:40px;">Destaques</h2>
    <div class="grid" id="home-grid"></div>
  `;
  const grid = document.getElementById('home-grid');
  highlights.forEach(p => grid.insertAdjacentHTML('beforeend', propertyCardHTML(p)));
  setupCardBehaviors(grid);
}

function propertyCardHTML(p){
  const firstImg = p.images?.[0] || "assets/placeholder.jpg";
  return `
    <div class="card card-prop" data-propid="${p.id}" style="cursor:pointer;">
      <div class="card-media">
        <img src="${firstImg}" class="card-main-img">
        <button onclick="event.stopPropagation(); deletarImovel(${p.id})" style="position:absolute; top:10px; right:10px; background:white; border:none; border-radius:50%; width:30px; height:30px; box-shadow:0 2px 5px rgba(0,0,0,0.2);">🗑️</button>
      </div>
      <div class="card-body">
        <div style="font-size:12px; color:#999;">${p.shortLocation}</div>
        <div style="font-weight:700; color:#0B3B71; margin:5px 0;">${p.title}</div>
        <div style="color:#D6A528; font-weight:700;">R$ ${formatMoney(p.price)}</div>
      </div>
    </div>
  `;
}

function setupCardBehaviors(container) {
    container.querySelectorAll('.card-prop').forEach(card => {
        card.onclick = () => location.hash = `#/imoveis/${card.dataset.propid}`;
    });
}

function setActiveNav() {
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === (location.hash || '#/')) link.classList.add('active');
  });
}

function formatMoney(n){ return Number(n||0).toLocaleString('pt-BR'); }

// Botões do Modal de WhatsApp (Corrigindo o erro de "não funciona")
document.getElementById('open-whats').onclick = () => document.getElementById('whats-modal-overlay').classList.remove('hidden');
document.getElementById('whats-modal-close').onclick = () => document.getElementById('whats-modal-overlay').classList.add('hidden');

window.addEventListener('load', loadData);
window.addEventListener('hashchange', router);

// MOBILE MENU
document.getElementById('mobile-burger').onclick = () => document.getElementById('mobile-menu-overlay').classList.remove('hidden');
document.getElementById('mobile-close').onclick = () => document.getElementById('mobile-menu-overlay').classList.add('hidden');
