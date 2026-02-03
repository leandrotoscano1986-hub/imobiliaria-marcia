/*********************************************************
 * ESTADO GLOBAL E CARREGAMENTO
 *********************************************************/
let properties = []; // Agora buscamos do banco de dados

const filterState = {
  cidade: "", tipo: "todas", precoMin: "", precoMax: "",
  quartos: "", vagas: "", banheiros: "", aceitaPets: "", 
  mobiliado: "", areaMin: "", areaMax: ""
};

// Função para buscar os dados do seu servidor no Render
async function loadData() {
    const container = document.querySelector('#app .container');
    if(container) container.innerHTML = '<div class="loading">Carregando imóveis da Márcia...</div>';

    try {
        const response = await fetch('https://imobiliaria-marcia.onrender.com/api/imoveis');
        const data = await response.json();
        
        // Mapeia os dados do banco para o formato do seu design
        properties = data.map(p => ({
            id: p.id,
            type: p.type,
            title: p.title,
            area: p.area,
            bedrooms: p.bedrooms,
            bathrooms: p.bathrooms,
            parking: p.parking,
            pets: p.pets === 'true',
            priceVenda: p.type === 'venda' ? p.price : null,
            priceAluguel: p.type === 'aluguel' ? p.price : null,
            shortLocation: p.shortLocation, // O Render já entrega o campo corrigido
            longDescription: p.longDescription,
            images: Array.isArray(p.images) ? p.images : [],
            mapsUrl: `https://maps.google.com/?cid=2573567265377490517&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3`
        }));

        router(); // Inicializa o site após carregar os dados
    } catch (err) {
        if(container) container.innerHTML = '<div class="error">Erro ao conectar com o banco de dados.</div>';
        console.error("Erro:", err);
    }
}

// Inicia o processo
window.addEventListener('load', () => {
    loadData();
    setActiveNav();
});

/*********************************************************
 * EXCLUSÃO DE IMÓVEIS (Para a Márcia testar)
 *********************************************************/
async function deletarImovel(id) {
    if(!confirm("Márcia, deseja realmente excluir este imóvel permanentemente?")) return;
    
    try {
        const response = await fetch(`https://imobiliaria-marcia.onrender.com/api/imoveis/${id}`, {
            method: 'DELETE'
        });
        if(response.ok) {
            alert("✅ Imóvel removido com sucesso!");
            loadData(); // Recarrega a lista
        }
    } catch (err) {
        alert("❌ Erro ao tentar excluir o imóvel.");
    }
}

/*********************************************************
 * ELEMENTOS GLOBAIS DO DOM
 *********************************************************/
const lbOverlay = document.getElementById('lightbox-overlay');
const lbImg = document.getElementById('lightbox-img');
const lbClose = document.getElementById('lightbox-close');
const lbPrev = document.getElementById('lightbox-prev');
const lbNext = document.getElementById('lightbox-next');
const overlayWhats = document.getElementById('whats-modal-overlay');
const closeWhatsX = document.getElementById('whats-modal-close');
const cancelBtn = document.getElementById('w-cancel');
const sendBtn = document.getElementById('w-send');
const nameInput = document.getElementById('w-name');
const propSelect = document.getElementById('w-property');
const otherField = document.getElementById('w-other-field');
const otherInput = document.getElementById('w-other');
const selectWrap = document.getElementById('w-select-wrap');
const lockedWrap = document.getElementById('w-locked-prop');
const lockedValue = document.getElementById('w-locked-value');
const openWhatsBtn = document.getElementById('open-whats');
const mobileOverlay = document.getElementById('mobile-menu-overlay');
const burgerBtn = document.getElementById('mobile-burger');
const mobileClose = document.getElementById('mobile-close');

/*********************************************************
 * ROTEADOR
 *********************************************************/
function router(){
  const hash = location.hash.replace('#','') || '/';
  const app = document.querySelector('#app .container');
  if(!app) return;

  if(hash === '/'){ renderHome(app); }
  else if(hash.startsWith('/imoveis/')){ renderDetail(app, hash.split('/')[2]); }
  else if(hash === '/imoveis'){ renderList(app); }
  else if(hash === '/marcia'){ renderAbout(app); }
  else if(hash === '/certificados'){ renderCertificates(app); }
  else if(hash === '/principios'){ renderPrincipios(app); }
  else if(hash === '/atendimento'){ renderAtendimento(app); }
  
  populateWhatsSelect();
}

/*********************************************************
 * COMPONENTES DE INTERFACE (Home, List, Detail)
 *********************************************************/
function propertyCardHTML(p){
  const firstImg = p.images?.[0] || "assets/placeholder.jpg";
  const displayPrice = p.type === "aluguel" ? `R$ ${formatMoney(p.priceAluguel)}/mês` : `R$ ${formatMoney(p.priceVenda)}`;
  
  return `
    <div class="card card-prop" data-propid="${p.id}">
      <div class="card-media">
        <img src="${firstImg}" alt="${p.title}" loading="lazy" class="card-main-img"/>
        <button class="btn-card-del" onclick="event.stopPropagation(); deletarImovel(${p.id})">🗑️</button>
      </div>
      <div class="card-body">
        <div class="list-loc">${p.shortLocation}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-price">${displayPrice}</div>
        <div class="card-meta">${p.area} m² • ${p.bedrooms} qtos • ${p.parking} vagas</div>
      </div>
    </div>
  `;
}

// ... Restante das funções (renderHome, renderList, renderDetail, etc) permanecem as mesmas 
// ... mas agora elas usam a variável 'properties' que é alimentada pelo banco.

/*********************************************************
 * UTILITÁRIOS
 *********************************************************/
function formatMoney(n){ return Number(n||0).toLocaleString('pt-BR'); }

function setActiveNav() {
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => link.classList.remove('active'));
  const hash = location.hash || '#/';
  const activeSelector = `[href="${hash}"]`;
  document.querySelectorAll(activeSelector).forEach(link => link.classList.add('active'));
}

window.addEventListener('hashchange', router);
