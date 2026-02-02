/*********************************************************
 * DADOS DOS IMÓVEIS (dummy)
 *********************************************************/
const properties = [
  { id:"AP-001", type:"venda",   title:"Apartamento à venda com 38m², 2 quartos e 0 vagas",
    area:38, bedrooms:2, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:289900, priceAluguel:null, condominio:280, iptu:90, totalMensal:null,
    shortLocation:"São Paulo • Liberdade", addressStreet:"Av. Amarela 45", addressArea:"Liberdade, São Paulo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Av+Amarela+45+Liberdade+Sao+Paulo+SP",
    images:["assets/ap2-1.jpg","assets/ap2-2.jpg"],
    longDescription:"Ambiente com ótima iluminação natural e ventilação. Localização estratégica na Liberdade, rodeado de comércio, serviços, metrô e cultura."
  },
  { id:"AP-002", type:"aluguel", title:"Kitnet para alugar com 28m², 0 quarto e 0 vagas",
    area:28, bedrooms:0, bathrooms:1, parking:0, pets:true, furnished:true,
    priceVenda:null, priceAluguel:1200, condominio:200, iptu:50, totalMensal:1450,
    shortLocation:"São Bernardo do Campo • Centro", addressStreet:"Rua Mariana da Cunha Moda", addressArea:"Centro, São Bernardo do Campo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Mariana+da+Cunha+Moda+Sao+Bernardo+do+Campo+SP",
    images:["assets/al1-1.jpg","assets/al1-2.jpg","assets/al1-3.jpg"],
    longDescription:"Kitnet prática e pronta para morar. Perfeita para quem busca mobilidade, segurança e custo-benefício. Localização central, fácil acesso a transporte público, mercados e serviços."
  },
  { id:"AP-003", type:"venda",   title:"Casa à venda com 120m², 3 quartos e 2 vagas",
    area:120, bedrooms:3, bathrooms:2, parking:2, pets:false, furnished:false,
    priceVenda:720000, priceAluguel:null, condominio:0, iptu:150, totalMensal:null,
    shortLocation:"Campinas • Barão Geraldo", addressStreet:"Rua Doutor Jorge Zaidan", addressArea:"Barão Geraldo, Campinas",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Doutor+Jorge+Zaidan+Campinas+SP",
    images:["assets/cp3-1.jpg","assets/cp3-2.jpg","assets/cp3-3.jpg"],
    longDescription:"Casa espaçosa e aconchegante, ideal para família. Quintal excelente para receber amigos e família. Fácil acesso a serviços, parques e vias importantes da região."
  },
  { id:"AP-004", type:"aluguel", title:"Apartamento para alugar com 45m², 1 quarto e 0 vagas",
    area:45, bedrooms:1, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:null, priceAluguel:1600, condominio:250, iptu:70, totalMensal:1920,
    shortLocation:"Osasco • Paulista", addressStreet:"Rua da Paulista, 100", addressArea:"Paulista, Osasco",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+da+Paulista+100+Osasco+SP",
    images:["assets/al2-1.jpg","assets/al2-2.jpg"],
    longDescription:"Apartamento bem localizado, com fácil acesso a transporte, serviços e comércio. Ideal para quem busca praticidade, segurança e comodidade no dia a dia."
  },
   { id:"AP-005", type:"venda",   title:"Apartamento à venda com 38m², 2 quartos e 0 vagas",
    area:38, bedrooms:2, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:289900, priceAluguel:null, condominio:280, iptu:90, totalMensal:null,
    shortLocation:"São Paulo • Liberdade", addressStreet:"Av. Amarela 45", addressArea:"Liberdade, São Paulo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Av+Amarela+45+Liberdade+Sao+Paulo+SP",
    images:["assets/ap2-1.jpg","assets/ap2-2.jpg"],
    longDescription:"Ambiente com ótima iluminação natural e ventilação. Localização estratégica na Liberdade, rodeado de comércio, serviços, metrô e cultura."
  },
  { id:"AP-006", type:"aluguel", title:"Kitnet para alugar com 28m², 0 quarto e 0 vagas",
    area:28, bedrooms:0, bathrooms:1, parking:0, pets:true, furnished:true,
    priceVenda:null, priceAluguel:1200, condominio:200, iptu:50, totalMensal:1450,
    shortLocation:"São Bernardo do Campo • Centro", addressStreet:"Rua Mariana da Cunha Moda", addressArea:"Centro, São Bernardo do Campo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Mariana+da+Cunha+Moda+Sao+Bernardo+do+Campo+SP",
    images:["assets/al1-1.jpg","assets/al1-2.jpg","assets/al1-3.jpg"],
    longDescription:"Kitnet prática e pronta para morar. Perfeita para quem busca mobilidade, segurança e custo-benefício. Localização central, fácil acesso a transporte público, mercados e serviços."
  },
  { id:"AP-007", type:"venda",   title:"Casa à venda com 120m², 3 quartos e 2 vagas",
    area:120, bedrooms:3, bathrooms:2, parking:2, pets:false, furnished:false,
    priceVenda:720000, priceAluguel:null, condominio:0, iptu:150, totalMensal:null,
    shortLocation:"Campinas • Barão Geraldo", addressStreet:"Rua Doutor Jorge Zaidan", addressArea:"Barão Geraldo, Campinas",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Doutor+Jorge+Zaidan+Campinas+SP",
    images:["assets/cp3-1.jpg","assets/cp3-2.jpg","assets/cp3-3.jpg"],
    longDescription:"Casa espaçosa e aconchegante, ideal para família. Quintal excelente para receber amigos e família. Fácil acesso a serviços, parques e vias importantes da região."
  },
  { id:"AP-008", type:"aluguel", title:"Apartamento para alugar com 45m², 1 quarto e 0 vagas",
    area:45, bedrooms:1, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:null, priceAluguel:1600, condominio:250, iptu:70, totalMensal:1920,
    shortLocation:"Osasco • Paulista", addressStreet:"Rua da Paulista, 100", addressArea:"Paulista, Osasco",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+da+Paulista+100+Osasco+SP",
    images:["assets/al2-1.jpg","assets/al2-2.jpg"],
    longDescription:"Apartamento bem localizado, com fácil acesso a transporte, serviços e comércio. Ideal para quem busca praticidade, segurança e comodidade no dia a dia."
  },
   { id:"AP-009", type:"venda",   title:"Apartamento à venda com 38m², 2 quartos e 0 vagas",
    area:38, bedrooms:2, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:289900, priceAluguel:null, condominio:280, iptu:90, totalMensal:null,
    shortLocation:"São Paulo • Liberdade", addressStreet:"Av. Amarela 45", addressArea:"Liberdade, São Paulo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Av+Amarela+45+Liberdade+Sao+Paulo+SP",
    images:["assets/ap2-1.jpg","assets/ap2-2.jpg"],
    longDescription:"Ambiente com ótima iluminação natural e ventilação. Localização estratégica na Liberdade, rodeado de comércio, serviços, metrô e cultura."
  },
  { id:"AP-010", type:"aluguel", title:"Kitnet para alugar com 28m², 0 quarto e 0 vagas",
    area:28, bedrooms:0, bathrooms:1, parking:0, pets:true, furnished:true,
    priceVenda:null, priceAluguel:1200, condominio:200, iptu:50, totalMensal:1450,
    shortLocation:"São Bernardo do Campo • Centro", addressStreet:"Rua Mariana da Cunha Moda", addressArea:"Centro, São Bernardo do Campo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Mariana+da+Cunha+Moda+Sao+Bernardo+do+Campo+SP",
    images:["assets/al1-1.jpg","assets/al1-2.jpg","assets/al1-3.jpg"],
    longDescription:"Kitnet prática e pronta para morar. Perfeita para quem busca mobilidade, segurança e custo-benefício. Localização central, fácil acesso a transporte público, mercados e serviços."
  },
  { id:"AP-011", type:"venda",   title:"Casa à venda com 120m², 3 quartos e 2 vagas",
    area:120, bedrooms:3, bathrooms:2, parking:2, pets:false, furnished:false,
    priceVenda:720000, priceAluguel:null, condominio:0, iptu:150, totalMensal:null,
    shortLocation:"Campinas • Barão Geraldo", addressStreet:"Rua Doutor Jorge Zaidan", addressArea:"Barão Geraldo, Campinas",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Doutor+Jorge+Zaidan+Campinas+SP",
    images:["assets/cp3-1.jpg","assets/cp3-2.jpg","assets/cp3-3.jpg"],
    longDescription:"Casa espaçosa e aconchegante, ideal para família. Quintal excelente para receber amigos e família. Fácil acesso a serviços, parques e vias importantes da região."
  },
  { id:"AP-012", type:"aluguel", title:"Apartamento para alugar com 45m², 1 quarto e 0 vagas",
    area:45, bedrooms:1, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:null, priceAluguel:1600, condominio:250, iptu:70, totalMensal:1920,
    shortLocation:"Osasco • Paulista", addressStreet:"Rua da Paulista, 100", addressArea:"Paulista, Osasco",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+da+Paulista+100+Osasco+SP",
    images:["assets/al2-1.jpg","assets/al2-2.jpg"],
    longDescription:"Apartamento bem localizado, com fácil acesso a transporte, serviços e comércio. Ideal para quem busca praticidade, segurança e comodidade no dia a dia."
  },
   { id:"AP-013", type:"venda",   title:"Apartamento à venda com 38m², 2 quartos e 0 vagas",
    area:38, bedrooms:2, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:289900, priceAluguel:null, condominio:280, iptu:90, totalMensal:null,
    shortLocation:"São Paulo • Liberdade", addressStreet:"Av. Amarela 45", addressArea:"Liberdade, São Paulo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Av+Amarela+45+Liberdade+Sao+Paulo+SP",
    images:["assets/ap2-1.jpg","assets/ap2-2.jpg"],
    longDescription:"Ambiente com ótima iluminação natural e ventilação. Localização estratégica na Liberdade, rodeado de comércio, serviços, metrô e cultura."
  },
  { id:"AP-014", type:"aluguel", title:"Kitnet para alugar com 28m², 0 quarto e 0 vagas",
    area:28, bedrooms:0, bathrooms:1, parking:0, pets:true, furnished:true,
    priceVenda:null, priceAluguel:1200, condominio:200, iptu:50, totalMensal:1450,
    shortLocation:"São Bernardo do Campo • Centro", addressStreet:"Rua Mariana da Cunha Moda", addressArea:"Centro, São Bernardo do Campo",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Mariana+da+Cunha+Moda+Sao+Bernardo+do+Campo+SP",
    images:["assets/al1-1.jpg","assets/al1-2.jpg","assets/al1-3.jpg"],
    longDescription:"Kitnet prática e pronta para morar. Perfeita para quem busca mobilidade, segurança e custo-benefício. Localização central, fácil acesso a transporte público, mercados e serviços."
  },
  { id:"AP-015", type:"venda",   title:"Casa à venda com 120m², 3 quartos e 2 vagas",
    area:120, bedrooms:3, bathrooms:2, parking:2, pets:false, furnished:false,
    priceVenda:720000, priceAluguel:null, condominio:0, iptu:150, totalMensal:null,
    shortLocation:"Campinas • Barão Geraldo", addressStreet:"Rua Doutor Jorge Zaidan", addressArea:"Barão Geraldo, Campinas",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+Doutor+Jorge+Zaidan+Campinas+SP",
    images:["assets/cp3-1.jpg","assets/cp3-2.jpg","assets/cp3-3.jpg"],
    longDescription:"Casa espaçosa e aconchegante, ideal para família. Quintal excelente para receber amigos e família. Fácil acesso a serviços, parques e vias importantes da região."
  },
  { id:"AP-016", type:"aluguel", title:"Apartamento para alugar com 45m², 1 quarto e 0 vagas",
    area:45, bedrooms:1, bathrooms:1, parking:0, pets:false, furnished:false,
    priceVenda:null, priceAluguel:1600, condominio:250, iptu:70, totalMensal:1920,
    shortLocation:"Osasco • Paulista", addressStreet:"Rua da Paulista, 100", addressArea:"Paulista, Osasco",
    mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Rua+da+Paulista+100+Osasco+SP",
    images:["assets/al2-1.jpg","assets/al2-2.jpg"],
    longDescription:"Apartamento bem localizado, com fácil acesso a transporte, serviços e comércio. Ideal para quem busca praticidade, segurança e comodidade no dia a dia."
  },
];

/*********************************************************
 * ESTADO GLOBAL DE FILTROS
 *********************************************************/
const filterState = {
  cidade: "", tipo: "todas",
  precoMin: "", precoMax: "",
  quartos: "", vagas: "", banheiros: "",
  aceitaPets: "", mobiliado: "",
  areaMin: "", areaMax: ""
};

/*********************************************************
 * ELEMENTOS GLOBAIS DO DOM (serão preenchidos depois)
 *********************************************************/
const sharePopover = document.getElementById('share-popover');

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

/* mobile menu elements */
const mobileOverlay = document.getElementById('mobile-menu-overlay');
const burgerBtn = document.getElementById('mobile-burger');
const mobileClose = document.getElementById('mobile-close');

/*********************************************************
 * ROTEADOR
 *********************************************************/
function router(){
  const hash = location.hash.replace('#','') || '/';
  const app = document.querySelector('#app .container');

  if(hash === '/'){ renderHome(app); }
  else if(hash.startsWith('/imoveis/')){ renderDetail(app, hash.split('/')[2]); }
  else if(hash === '/imoveis'){ renderList(app); }
  else if(hash === '/marcia'){ renderAbout(app); }
  else if(hash === '/certificados'){ renderCertificates(app); }
  else if(hash === '/principios'){ renderPrincipios(app); }
  else if(hash === '/atendimento'){ renderAtendimento(app); }
  else {
    app.innerHTML = `<div style="padding:40px;background:white;border-radius:10px;box-shadow:0 6px 20px rgba(11,43,99,0.04)">Página não encontrada</div>`;
  }

  populateWhatsSelect();
  setActiveNav(); // 👈 importante
}


/*********************************************************
 * HOME
 *********************************************************/
function getCheapestProps(limit=4){
  const effectivePrice = (p)=>
    p.type==="aluguel" ? (p.totalMensal ?? p.priceAluguel ?? Infinity)
                       : (p.priceVenda ?? Infinity);
  return [...properties].sort((a,b)=> effectivePrice(a)-effectivePrice(b)).slice(0,limit);
}
function renderHome(target){
  const cheapest = getCheapestProps(4);
  target.innerHTML = `
    <section class="hero-card">
      <div class="hero-left">
        <h1>Márcia Hisae — Transformando sonhos em realidade</h1>
        <p class="muted">Especialista em Venda, Locação e Financiamento. Atendimento personalizado com respeito e eficiência.</p>
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
      <div class="destaques-header-desc">Alguns exemplos de imóveis com excelente custo-benefício em venda e locação.</div>
      <div class="destaques-grid" id="home-destaques-grid"></div>
    </section>
  `;
  const grid = document.getElementById('home-destaques-grid');
  cheapest.forEach(p=> grid.insertAdjacentHTML('beforeend', propertyCardHTML(p)));
  setupCardBehaviors(grid);
}

/*********************************************************
 * LISTA + NOVA BARRA DE FILTROS (pílulas/dropdowns)
 *********************************************************/
function renderList(target){
  target.innerHTML = `
    <section class="filters-bar">
      <div class="filters-row" id="filters-row">

        <!-- Localidade: input -->
        <div class="pill-input">
          <span>📍</span>
          <input id="inp-localidade" placeholder="Qualquer lugar em São Paulo, SP" value="${filterState.cidade || ''}">
        </div>

        <!-- Comprar/Alugar -->
        <div class="pill-wrap">
          <button class="pill" data-pill="tipo" aria-expanded="false">
            <span id="pill-tipo-label">${filterState.tipo==="aluguel"?"Alugar":filterState.tipo==="venda"?"Comprar":"Comprar"}</span>
            <span class="caret">▾</span>
          </button>
          <div class="dropdown" id="dd-tipo" role="menu">
            <div class="dropdown-list">
              <div class="dropdown-item" data-tipo="aluguel">Alugar</div>
              <div class="dropdown-item" data-tipo="venda">Comprar</div>
            </div>
          </div>
        </div>

        <!-- Valor do imóvel (preço) -->
        <div class="pill-wrap">
          <button class="pill" data-pill="preco">
            <span>Valor do imóvel</span><span class="caret">▾</span>
          </button>
          <div class="dropdown" id="dd-preco">
            <div class="range-2cols">
              <input id="preco-min" placeholder="Mínimo (R$)" inputmode="numeric">
              <input id="preco-max" placeholder="Máximo (R$)" inputmode="numeric">
            </div>
            <div class="dropdown-actions">
              <button class="btn btn-ghost" id="preco-limpar">Limpar</button>
              <button class="btn btn-primary" id="preco-aplicar">Aplicar</button>
            </div>
          </div>
        </div>

        <!-- Quartos -->
        <div class="pill-wrap">
          <button class="pill" data-pill="quartos"><span id="pill-quartos">1+ quartos</span><span class="caret">▾</span></button>
          <div class="dropdown" id="dd-quartos">
            <div class="dropdown-list">
              ${["1+","2+","3+","4+"].map(v=>`<div class="dropdown-item dd-qtd" data-kind="quartos" data-val="${v}">${v}</div>`).join("")}
            </div>
          </div>
        </div>

        <!-- Vagas -->
        <div class="pill-wrap">
          <button class="pill" data-pill="vagas"><span id="pill-vagas">1+ vagas</span><span class="caret">▾</span></button>
          <div class="dropdown" id="dd-vagas">
            <div class="dropdown-list">
              ${["0+","1+","2+","3+"].map(v=>`<div class="dropdown-item dd-qtd" data-kind="vagas" data-val="${v}">${v}</div>`).join("")}
            </div>
          </div>
        </div>

        <!-- Banheiros -->
        <div class="pill-wrap">
          <button class="pill" data-pill="banheiros"><span id="pill-banheiros">1+ banheiros</span><span class="caret">▾</span></button>
          <div class="dropdown" id="dd-banheiros">
            <div class="dropdown-list">
              ${["1+","2+","3+","4+"].map(v=>`<div class="dropdown-item dd-qtd" data-kind="banheiros" data-val="${v}">${v}</div>`).join("")}
            </div>
          </div>
        </div>

        <!-- Área -->
        <div class="pill-wrap">
          <button class="pill" data-pill="area"><span>Área</span><span class="caret">▾</span></button>
          <div class="dropdown" id="dd-area">
            <div class="range-2cols">
              <input id="area-min" placeholder="Mín (m²)" inputmode="numeric">
              <input id="area-max" placeholder="Máx (m²)" inputmode="numeric">
            </div>
            <div class="dropdown-actions">
              <button class="btn btn-ghost" id="area-limpar">Limpar</button>
              <button class="btn btn-primary" id="area-aplicar">Aplicar</button>
            </div>
          </div>
        </div>

        <!-- Mobiliado -->
        <div class="pill-wrap">
          <button class="pill" data-pill="mobiliado"><span id="pill-mob">Mobiliado</span><span class="caret">▾</span></button>
          <div class="dropdown" id="dd-mobiliado">
            <div class="dropdown-list">
              <div class="dropdown-item dd-mob" data-val="">Tanto faz</div>
              <div class="dropdown-item dd-mob" data-val="sim">Sim</div>
              <div class="dropdown-item dd-mob" data-val="nao">Não</div>
            </div>
          </div>
        </div>

        <!-- Mais filtros => abre drawer existente -->
        <button class="pill" id="btn-mais-filtros">Mais filtros</button>
      </div>
    </section>

    <section style="margin-top:14px">
      <div id="cards" class="grid"></div>
    </section>
  `;

  // Render cards iniciais
  renderCards();

  // ====== Lógica dos dropdowns/pílulas ======
  const row = document.getElementById('filters-row');

  // Abre/fecha dropdown do alvo
  row.querySelectorAll('.pill[data-pill]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const type = btn.getAttribute('data-pill');
      // fecha todos
      closeAllDropdowns();
      // abre o do alvo
      const dd = document.getElementById('dd-'+type);
      if(dd){
        btn.dataset.open = "true";
        dd.classList.add('open');
        positionDropdown(btn, dd);
      }
    });
  });

  // Localidade input (enter aplica)
  const inpCidade = document.getElementById('inp-localidade');
  inpCidade.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      filterState.cidade = inpCidade.value.trim();
      renderList(target);
    }
  });
  inpCidade.addEventListener('blur', ()=>{
    filterState.cidade = inpCidade.value.trim();
    renderCards();
  });

  // Tipo (comprar/alugar)
  document.querySelectorAll('#dd-tipo .dropdown-item').forEach(it=>{
    it.addEventListener('click', ()=>{
      const t = it.getAttribute('data-tipo');
      filterState.tipo = t;
      document.getElementById('pill-tipo-label').textContent = (t==="aluguel"?"Alugar":"Comprar");
      closeAllDropdowns(); renderCards();
    });
  });

  // Preço (min/max)
  const precoMin = document.getElementById('preco-min');
  const precoMax = document.getElementById('preco-max');
  // pré-preencher
  precoMin.value = filterState.precoMin || "";
  precoMax.value = filterState.precoMax || "";
  document.getElementById('preco-limpar').onclick = ()=>{
    precoMin.value=""; precoMax.value="";
    filterState.precoMin=""; filterState.precoMax="";
    closeAllDropdowns(); renderCards();
  };
  document.getElementById('preco-aplicar').onclick = ()=>{
    filterState.precoMin = (precoMin.value||"").replace(/\D/g,'');
    filterState.precoMax = (precoMax.value||"").replace(/\D/g,'');
    closeAllDropdowns(); renderCards();
  };

  // Quartos/Vagas/Banheiros (qtd)
  function applyQtd(kind, val){
    if(kind==="quartos") filterState.quartos = val.replace("+","");
    if(kind==="vagas")   filterState.vagas   = (val==="3+")?"3+":val.replace("+","");
    if(kind==="banheiros") filterState.banheiros = val;
    // atualizar label amigável
    if(kind==="quartos") document.getElementById('pill-quartos').textContent = `${val} quartos`;
    if(kind==="vagas")   document.getElementById('pill-vagas').textContent   = `${val} vagas`;
    if(kind==="banheiros") document.getElementById('pill-banheiros').textContent = `${val} banheiros`;
    closeAllDropdowns(); renderCards();
  }
  document.querySelectorAll('.dd-qtd').forEach(el=>{
    el.addEventListener('click', ()=> applyQtd(el.dataset.kind, el.dataset.val));
  });

  // Área
  const areaMin = document.getElementById('area-min');
  const areaMax = document.getElementById('area-max');
  areaMin.value = filterState.areaMin || "";
  areaMax.value = filterState.areaMax || "";
  document.getElementById('area-limpar').onclick = ()=>{
    areaMin.value=""; areaMax.value="";
    filterState.areaMin=""; filterState.areaMax="";
    closeAllDropdowns(); renderCards();
  };
  document.getElementById('area-aplicar').onclick = ()=>{
    filterState.areaMin = (areaMin.value||"").replace(/\D/g,'');
    filterState.areaMax = (areaMax.value||"").replace(/\D/g,'');
    closeAllDropdowns(); renderCards();
  };

  // Mobiliado
  document.querySelectorAll('.dd-mob').forEach(el=>{
    el.addEventListener('click', ()=>{
      filterState.mobiliado = el.dataset.val; // "", "sim", "nao"
      document.getElementById('pill-mob').textContent = "Mobiliado" + (filterState.mobiliado?`: ${el.textContent}`:"");
      closeAllDropdowns(); renderCards();
    });
  });

  // Mais filtros (abre drawer antigo)
  document.getElementById('btn-mais-filtros').addEventListener('click', openDrawer);

  // Fecha dropdowns ao clicar fora
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('.pill-wrap')) closeAllDropdowns();
  }, {capture:true});
}

// util: posiciona dropdown alinhado à pílula
function positionDropdown(btn, dd){
  const r = btn.getBoundingClientRect();
  dd.style.minWidth = r.width + "px";
  dd.style.left = "0px";
}

// fecha tudo
function closeAllDropdowns(){
  document.querySelectorAll('.dropdown.open').forEach(d=>d.classList.remove('open'));
  document.querySelectorAll('.pill[data-open="true"]').forEach(p=>p.dataset.open="false");
}

/*********************************************************
 * FILTRAGEM + CARDS
 *********************************************************/
function applyFilters(list){
  return list.filter(p=>{
    if(filterState.tipo!=="todas" && p.type!==filterState.tipo) return false;
    if(filterState.cidade){
      const v = filterState.cidade.toLowerCase();
      const loc = (p.shortLocation+" "+p.addressArea).toLowerCase();
      if(!loc.includes(v)) return false;
    }
    const effectivePrice = p.type==="aluguel"
      ? (p.totalMensal ?? p.priceAluguel ?? Infinity)
      : (p.priceVenda ?? Infinity);
    if(filterState.precoMin){
      if(effectivePrice < (Number(filterState.precoMin)||0)) return false;
    }
    if(filterState.precoMax){
      if(effectivePrice > (Number(filterState.precoMax)||Infinity)) return false;
    }
    if(filterState.quartos){
      if(filterState.quartos==="4+") { if(p.bedrooms<4) return false; }
      else { if(p.bedrooms < (Number(filterState.quartos)||0)) return false; }
    }
    if(filterState.vagas){
      if(filterState.vagas==="3+") { if(p.parking<3) return false; }
      else { if(p.parking < (Number(filterState.vagas)||0)) return false; }
    }
    if(filterState.aceitaPets==="true" && !p.pets) return false;
    if(filterState.banheiros){
      if(filterState.banheiros==="4+") { if(p.bathrooms<4) return false; }
      else { if(p.bathrooms < (Number(filterState.banheiros)||0)) return false; }
    }
    if(filterState.mobiliado==="sim" && !p.furnished) return false;
    if(filterState.mobiliado==="nao" && p.furnished) return false;
    if(filterState.areaMin && p.area < (Number(filterState.areaMin)||0)) return false;
    if(filterState.areaMax && p.area > (Number(filterState.areaMax)||Infinity)) return false;
    return true;
  });
}

function renderCards(){
  const container = document.getElementById('cards');
  if(!container) return;
  container.innerHTML = '';
  applyFilters(properties).forEach(p=> container.insertAdjacentHTML('beforeend', propertyCardHTML(p)));
  setupCardBehaviors(container);
}

/*********************************************************
 * CARD HTML + comportamento
 *********************************************************/
function propertyCardHTML(p){
  const firstImg = p.images?.[0] || "";
  const petHTML = p.pets 
  ? `<div class="pet-badge"><span class="pet-emoji">🐶</span><span>Aceita Pet</span></div>`
  : "";
  const displayPrice = p.type==="aluguel" ? `R$ ${formatMoney(p.priceAluguel)} aluguel`
                                          : `R$ ${formatMoney(p.priceVenda)}`;
  const dots = (p.images||[]).map((_,i)=>`<span class="card-dot ${i===0?'active':''}" data-dot="${i}"></span>`).join('');
  return `
    <div class="card card-prop" data-propid="${p.id}">
      <div class="card-media" data-images='${JSON.stringify(p.images||[])}' data-index="0">
        ${petHTML}
        <img src="${firstImg}" alt="${p.title}" loading="lazy" class="card-main-img"/>
        <div class="card-nav">
          <button class="card-arrow card-prev" aria-label="Anterior">‹</button>
          <button class="card-arrow card-next" aria-label="Próxima">›</button>
        </div>
        <div class="card-dots">${dots}</div>
      </div>
      <div class="card-body">
        <div class="list-loc">${p.shortLocation}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-price">${displayPrice}</div>
        <div class="card-meta">${p.area} m² • ${p.bedrooms} quarto(s) • ${p.parking} vaga(s)</div>
      </div>
    </div>
  `;
}

function setupCardBehaviors(scopeEl){
  // Clique no card -> detalhe
  scopeEl.querySelectorAll('.card.card-prop').forEach(card=>{
    card.addEventListener('click', (e)=>{
      if(e.target.closest('.card-arrow') || e.target.closest('.card-dots')) return;
      const pid = card.getAttribute('data-propid');
      location.hash = '#/imoveis/' + pid;
    });
  });

  // Navegação de imagens no hover
  scopeEl.querySelectorAll('.card-media').forEach(media=>{
    const imgEl = media.querySelector('.card-main-img');
    const prev = media.querySelector('.card-prev');
    const next = media.querySelector('.card-next');
    const dotsWrap = media.querySelector('.card-dots');

    const imgs = JSON.parse(media.getAttribute('data-images')||"[]");
    if(!imgs.length) return;

    let idx = 0;
    const setIdx = (i)=>{
      idx = (i+imgs.length)%imgs.length;
      media.setAttribute('data-index', idx);
      imgEl.src = imgs[idx];
      dotsWrap.querySelectorAll('.card-dot').forEach((d,i)=> d.classList.toggle('active', i===idx));
    };

    prev.addEventListener('click', (e)=>{ e.stopPropagation(); setIdx(idx-1); });
    next.addEventListener('click', (e)=>{ e.stopPropagation(); setIdx(idx+1); });
    dotsWrap.querySelectorAll('.card-dot').forEach(dot=>{
      dot.addEventListener('click', (e)=>{ e.stopPropagation(); setIdx(Number(dot.getAttribute('data-dot'))||0); });
    });
    media.addEventListener('mouseleave', ()=> setIdx(0));
  });
}

/*********************************************************
 * DETALHE
 *********************************************************/
let currentDetailProperty = null;

function renderDetail(target,id){
  const p = properties.find(x=>x.id===id);
  if(!p){
    target.innerHTML = `<div style="padding:40px;background:white;border-radius:10px;box-shadow:0 6px 20px rgba(11,43,99,0.04)">Imóvel não encontrado</div>`;
    return;
  }
  currentDetailProperty = p;

  const priceBlock = (p.type==="aluguel") ? `
      <div>Aluguel: R$ ${formatMoney(p.priceAluguel||0)}</div>
      <div>Condomínio: R$ ${formatMoney(p.condominio||0)}</div>
      <div>IPTU: R$ ${formatMoney(p.iptu||0)}</div>
      <div class="detail-total">Total mensal: R$ ${formatMoney(p.totalMensal ?? ((p.priceAluguel||0)+(p.condominio||0)+(p.iptu||0)))}</div>`
    : `
      <div>Condomínio: R$ ${formatMoney(p.condominio||0)}</div>
      <div>IPTU: R$ ${formatMoney(p.iptu||0)}</div>
      <div class="detail-total">Valor de venda: R$ ${formatMoney(p.priceVenda||0)}</div>`;

  target.innerHTML = `
    <section class="detail-wrap">
      <div class="detail-left">
        <div class="detail-title">${p.title}</div>
        <div class="detail-prices">${priceBlock}</div>

        <div class="detail-actions">
          <button class="whats-contact-btn" id="detail-whats">Contato via WhatsApp</button>
          <button class="share-btn" id="detail-share"><span class="share-ico">🔗</span><span>Compartilhar</span></button>
        </div>
      </div>

      <div class="detail-gallery">
        <div class="detail-gallery-track" id="detail-track">
          ${p.images.map(img=>`
            <div class="detail-gallery-item" data-img="${img}">
              <img src="${img}" alt="${p.title}" loading="lazy"/>
            </div>
          `).join('')}
        </div>
        <button class="detail-gal-arrow left" id="detail-prev">‹</button>
        <button class="detail-gal-arrow right" id="detail-next">›</button>
      </div>
    </section>

    <section class="detail-info-block">
      <a class="detail-address-card" href="${p.mapsUrl}" target="_blank" rel="noopener">
        <div>
          <div class="detail-address-main">${p.addressStreet}</div>
          <div class="detail-address-sub">${p.addressArea}</div>
        </div>
        <div style="margin-left:auto;font-size:20px;line-height:1;color:var(--brandBlue);font-weight:600;">→</div>
      </a>

      <div class="detail-specs-row">
        <div class="spec-item"><div class="spec-icon">📐</div>${p.area} m²</div>
        <div class="spec-item"><div class="spec-icon">🛏️</div>${p.bedrooms} quarto(s)</div>
        <div class="spec-item"><div class="spec-icon">🚿</div>${p.bathrooms} banheiro(s)</div>
        <div class="spec-item"><div class="spec-icon">🚗</div>${p.parking} vaga(s)</div>
        <div class="spec-item"><div class="spec-icon">🐾</div>${p.pets ? "Aceita pet" : "Não aceita pet"}</div>
        <div class="spec-item"><div class="spec-icon">🛋️</div>${p.furnished ? "Mobiliado" : "Sem mobília"}</div>
      </div>

      <div class="detail-desc-title">Descrição</div>
      <div class="detail-desc-text">${p.longDescription}</div>
    </section>
  `;

  document.getElementById('detail-whats').addEventListener('click', ()=> openWhatsModalLocked(p.id));

  const track = document.getElementById('detail-track');
  let dIndex=0;
  const updateDetailGallery = ()=>{
    const firstChild = track.firstElementChild;
    const slideWidth = firstChild ? firstChild.getBoundingClientRect().width : 0;
    track.style.transform = `translateX(${-dIndex*slideWidth}px)`;
  };
  document.getElementById('detail-prev').addEventListener('click', ()=>{ dIndex=(dIndex-1+p.images.length)%p.images.length; updateDetailGallery(); });
  document.getElementById('detail-next').addEventListener('click', ()=>{ dIndex=(dIndex+1)%p.images.length; updateDetailGallery(); });

  track.querySelectorAll('.detail-gallery-item').forEach((item,idx)=> item.addEventListener('click', ()=> openLightbox(p.images, idx)));

  document.getElementById('detail-share').addEventListener('click', (e)=> openShareMenu(e.currentTarget, p));
}

/*********************************************************
 * SOBRE / CERTIFICADOS / PRINCÍPIOS / ATENDIMENTO
 *********************************************************/
function renderAbout(target){
  target.innerHTML = `
    <section class="contact-card" style="display:flex;justify-content:center;margin:0 auto;">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-start;gap:16px;background:#fff;border:1px solid var(--border-soft);border-radius:12px;box-shadow:0 10px 24px rgba(0,0,0,0.05);padding:20px;max-width:850px;">
        <img src="assets/marcia-portrait.jpg" alt="Márcia Hisae" class="marcia-foto" style="width:180px;border-radius:10px;border:1px solid var(--border-soft);object-fit:cover;background:#fff;" loading="lazy"/>
        <div style="flex:1;min-width:220px;">
          <h2 style="margin:0;font-size:20px;font-weight:700;color:var(--text-dark)">Márcia Hisae</h2>
          <p class="muted" style="margin-top:6px;font-size:15px;line-height:1.6;">Sou especialista de Mercado Imobiliário com foco em Venda, Locação e Financiamento. Com cuidado, precisão documental e transparência, transformo sonhos em realidade.</p>
          <div class="muted" style="margin-top:8px;font-size:14px;line-height:1.4;">CRECI PJ 36766 • CRECI PF 176234</div>
          <div style="margin-top:12px; display:flex; align-items:center; gap:8px;">
            <img src="assets/instagram-icon.svg" alt="Instagram" class="instagram-icon">
            <a class="address-link" href="https://www.instagram.com/marciahisae" target="_blank" rel="noopener" style="font-weight:600;color:var(--brandBlue);text-decoration:none;">@marciahisae</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

const certificates = [
  { img:"assets/cert1.jpg", label:"CRECI PF 176234" },
  { img:"assets/cert2.jpg", label:"CRECI PJ 36766" },
  { img:"assets/fgv.jpg",   label:"Formação / Especialização" },
];

function renderCertificates(target){
  target.innerHTML = `
    <section class="principios-card">
      <h2 style="margin:0;font-size:22px;font-weight:700;color:var(--text-dark)">Certificados</h2>
      <p class="muted" style="margin-top:6px">Documentação e certificações profissionais.</p>
      <div class="certs-grid" id="certs-grid"></div>
    </section>
  `;
  const grid = document.getElementById('certs-grid');
  certificates.forEach((c, idx) => {
    grid.insertAdjacentHTML('beforeend', `
      <div class="cert-card" data-cert-idx="${idx}">
        <div class="cert-img-wrap"><img src="${c.img}" alt="${c.label}" loading="lazy"/></div>
        <div class="cert-label">${c.label}</div>
      </div>
    `);
  });
  grid.querySelectorAll('.cert-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const start = Number(card.getAttribute('data-cert-idx'));
      openLightbox(certificates.map(c=>c.img), start);
    });
  });
}

function renderPrincipios(target){
  target.innerHTML = `
    <section class="principios-card">
      <h2>Princípios</h2>
      <p class="muted" style="margin-top:6px">Cultura de melhoria contínua, disciplina e respeito ao cliente.</p>
      <div class="kaizen-section" style="margin-top:16px;">
        <div class="kaizen-symbol">改善</div>
        <div class="kaizen-text">
          <div class="kaizen-title"><strong>Kaizen</strong> — Melhoria Contínua</div>
          <div class="kaizen-desc">Kaizen é a prática diária de melhorar processos, cuidar dos detalhes e entregar valor real para o cliente. Não é acaso. É disciplina, transparência e evolução constante.</div>
        </div>
      </div>
      <div class="fiveS-grid">
        <div class="s-card"><div class="s-kanji">整理</div><div class="s-name"><strong>Seiri</strong></div><div class="s-meaning">Senso de Utilização<br/>Manter apenas o necessário.</div></div>
        <div class="s-card"><div class="s-kanji">整頓</div><div class="s-name"><strong>Seiton</strong></div><div class="s-meaning">Senso de Organização<br/>Cada coisa no seu lugar.</div></div>
        <div class="s-card"><div class="s-kanji">清掃</div><div class="s-name"><strong>Seisou</strong></div><div class="s-meaning">Senso de Limpeza<br/>Cuidar do ambiente físico.</div></div>
        <div class="s-card"><div class="s-kanji">清潔</div><div class="s-name"><strong>Seiketsu</strong></div><div class="s-meaning">Senso de Saúde e Higiene<br/>Padronizar boas práticas.</div></div>
        <div class="s-card"><div class="s-kanji">躾</div><div class="s-name"><strong>Shitsuke</strong></div><div class="s-meaning">Senso de Autodisciplina<br/>Compromisso contínuo.</div></div>
      </div>
    </section>
  `;
}

function renderAtendimento(target) {
  target.innerHTML = `
    <section class="contact-wrapper">
      <div class="contact-card">
        <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:700;color:var(--text-dark)">Atendimento</h2>
        <p class="muted" style="margin:0 0 20px 0;">Segunda à Sábado das 09:00 - 18:00</p>
        <p class="muted" style="margin:0 0 20px 0;">Whatsapp - 11 91221-1078</p>
        <h3 style="margin:0 0 8px 0;font-size:18px;font-weight:600;color:var(--text-dark)">Endereços</h3>
        <p style="margin:0 0 12px 0;line-height:1.5;">
          <a class="address-link" href="https://www.google.com/maps/dir/?api=1&destination=Rua+Jos%C3%A9+Versolato+111+Centro+S%C3%A3o+Bernardo+do+Campo+SP" target="_blank" rel="noopener">Rua José Versolato, 111 - Centro, São Bernardo do Campo - SP</a>
        </p>
        <p style="margin:0 0 20px 0;line-height:1.5;">
          <a class="address-link" href="https://www.google.com/maps/dir/?api=1&destination=Av+Paulista+2073+Jardins+S%C3%A3o+Paulo+SP" target="_blank" rel="noopener">Av. Paulista, 2073 - Jardins - SP</a>
        </p>
      </div>
    </section>
  `;
}

/*********************************************************
 * WHATSAPP MODAL
 *********************************************************/
let currentLockedProperty = null;

function populateWhatsSelect(){
  if(!propSelect) return;
  if(selectWrap.classList.contains('hidden')) return;
  propSelect.innerHTML = '';
  properties.forEach(p=>{
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.id} — ${p.title} • ${p.shortLocation} • ` + (p.type==="aluguel" ? `R$ ${formatMoney(p.priceAluguel||0)}` : `R$ ${formatMoney(p.priceVenda||0)}`);
    propSelect.appendChild(opt);
  });
  const o = document.createElement('option'); o.value='other'; o.textContent='Outro (descrever)'; propSelect.appendChild(o);
}
openWhatsBtn.addEventListener('click', ()=> openWhatsModalLocked(null));
[cancelBtn, closeWhatsX].forEach(btn=>{ if(btn){ btn.addEventListener('click', closeWhatsModal); } });
if(propSelect){ propSelect.addEventListener('change', ()=> otherField.classList.toggle('hidden', propSelect.value !== 'other')); }
if(sendBtn){
  sendBtn.addEventListener('click', ()=>{
    const name = nameInput.value.trim();
    if(!name){ alert('Por favor informe seu primeiro nome.'); nameInput.focus(); return; }
    let selectedTitle = "";
    if(currentLockedProperty){
      const p = properties.find(x=>x.id===currentLockedProperty);
      selectedTitle = p ? p.title : currentLockedProperty;
    } else {
      const selected = propSelect.value;
      if(selected === 'other'){ selectedTitle = otherInput.value.trim() || "Imóvel não especificado"; }
      else { const p = properties.find(x=>x.id===selected); selectedTitle = p ? p.title : selected; }
    }
    const text = encodeURIComponent(`Olá Márcia, sou ${name}. Tenho interesse no imóvel ${selectedTitle}. Pode me enviar mais informações?`);
    const phone = '5511912211078';
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`,'_blank');
    closeWhatsModal();
  });
}
function openWhatsModalLocked(propId){
  currentLockedProperty = propId || null;
  if(currentLockedProperty){
    const p = properties.find(x=>x.id===currentLockedProperty);
    lockedValue.value = p ? `${p.id} — ${p.title} (${p.shortLocation})` : currentLockedProperty;
    lockedWrap.classList.remove('hidden');
    selectWrap.classList.add('hidden');
    otherField.classList.add('hidden');
  } else {
    lockedWrap.classList.add('hidden');
    selectWrap.classList.remove('hidden');
    otherField.classList.add('hidden');
    populateWhatsSelect();
  }
  nameInput.value=""; otherInput.value="";
  overlayWhats.classList.remove('hidden'); overlayWhats.setAttribute('aria-hidden','false');
}
function closeWhatsModal(){
  overlayWhats.classList.add('hidden');
  overlayWhats.setAttribute('aria-hidden','true');
  currentLockedProperty = null;
}

/*********************************************************
 * SHARE (simples)
 *********************************************************/
function openShareMenu(_, prop){
  const propUrl = location.origin + location.pathname + "#/imoveis/" + prop.id;
  const title   = "Imóvel - Márcia Hisae";
  const text    = `Dá uma olhada nesse imóvel: ${prop.title}`;
  if (navigator.share) {
    navigator.share({ title, text, url: propUrl }).catch(()=>{});
  } else {
    const message = `${text} - ${propUrl}`;
    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(message), "_blank");
  }
}

/*********************************************************
 * LIGHTBOX
 *********************************************************/
let lbImages = []; let lbIndex = 0;
function openLightbox(imgArr, startIndex){ lbImages = imgArr; lbIndex = startIndex; syncLightboxImage(); lbOverlay.classList.remove('hidden'); lbOverlay.setAttribute('aria-hidden','false'); }
function closeLightbox(){ lbOverlay.classList.add('hidden'); lbOverlay.setAttribute('aria-hidden','true'); }
function syncLightboxImage(){ if(!lbImages[lbIndex]) return; lbImg.src = lbImages[lbIndex]; }
lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', ()=>{ lbIndex=(lbIndex-1+lbImages.length)%lbImages.length; syncLightboxImage(); });
lbNext.addEventListener('click', ()=>{ lbIndex=(lbIndex+1)%lbImages.length; syncLightboxImage(); });
lbOverlay.addEventListener('click',(e)=>{ if(e.target===lbOverlay) closeLightbox(); });

/*********************************************************
 * DRAWER "MAIS FILTROS" (já existente – mantido)
 *********************************************************/
const drawerOverlay = document.createElement('div');
drawerOverlay.id = "filters-drawer-overlay";
drawerOverlay.className = "mobile-menu-overlay hidden";
drawerOverlay.setAttribute('aria-hidden','true');
drawerOverlay.innerHTML = `
  <div id="filters-drawer" class="mobile-menu-panel" style="max-width:320px;">
    <button id="drawer-close" class="mobile-close-btn" aria-label="Fechar filtros">✕</button>
    <div style="font-weight:600;font-size:16px;color:var(--text-dark);margin-bottom:12px;">Mais filtros</div>

    <div style="font-size:14px;color:var(--text-dark);line-height:1.5;">
      <div style="margin-bottom:12px;">
        <div style="font-weight:600;margin-bottom:6px;">Banheiros</div>
        <div id="chip-banheiros" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
      </div>
      <div style="margin-bottom:12px;">
        <div style="font-weight:600;margin-bottom:6px;">Vagas</div>
        <div id="chip-vagas" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
      </div>
      <div style="margin-bottom:12px;">
        <div style="font-weight:600;margin-bottom:6px;">Quartos</div>
        <div id="chip-quartos" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
      </div>
      <div style="margin-bottom:12px;">
        <div style="font-weight:600;margin-bottom:6px;">Mobiliado</div>
        <div id="chip-mobiliado" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
      </div>
      <div style="margin-bottom:12px;">
        <div style="font-weight:600;margin-bottom:6px;">Área (m²)</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <div style="flex:1;min-width:100px;">
            <div style="font-size:13px;font-weight:500;margin-bottom:4px;">Mínima</div>
            <input id="f-area-min" style="width:100%;padding:8px;border:1px solid var(--border-soft);border-radius:8px;">
          </div>
          <div style="flex:1;min-width:100px;">
            <div style="font-size:13px;font-weight:500;margin-bottom:4px;">Máxima</div>
            <input id="f-area-max" style="width:100%;padding:8px;border:1px solid var(--border-soft);border-radius:8px;">
          </div>
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;gap:8px;margin-top:20px;">
      <button id="drawer-clear" class="btn-ghost" style="flex:1;">Limpar</button>
      <button id="drawer-apply" class="btn-primary" style="flex:1;border:none;">Aplicar</button>
    </div>
  </div>
`;
document.body.appendChild(drawerOverlay);

const drawerPanel = document.getElementById('filters-drawer');
const drawerClose = document.getElementById('drawer-close');
const drawerApply = document.getElementById('drawer-apply');
const drawerClear = document.getElementById('drawer-clear');
const chipQuartosRow = document.getElementById('chip-quartos');
const chipVagasRow = document.getElementById('chip-vagas');
const chipBanheirosRow = document.getElementById('chip-banheiros');
const chipMobiliadoRow = document.getElementById('chip-mobiliado');
const areaMinInput = document.getElementById('f-area-min');
const areaMaxInput = document.getElementById('f-area-max');

function openDrawer(){ drawerOverlay.classList.remove('hidden'); drawerOverlay.classList.add('active'); drawerOverlay.setAttribute('aria-hidden','false'); buildDrawerChips(); }
function closeDrawer(){
  drawerOverlay.classList.remove('active'); drawerOverlay.setAttribute('aria-hidden','true');
  setTimeout(()=>{ if(!drawerOverlay.classList.contains('active')) drawerOverlay.classList.add('hidden'); },200);
}
if(drawerClose){ drawerClose.addEventListener('click', closeDrawer); }
drawerOverlay.addEventListener('click', (e)=>{ if(e.target===drawerOverlay) closeDrawer(); });
if(drawerApply){
  drawerApply.addEventListener('click', ()=>{
    filterState.areaMin = areaMinInput.value.trim();
    filterState.areaMax = areaMaxInput.value.trim();
    const app = document.querySelector('#app .container'); renderList(app); closeDrawer();
  });
}
if(drawerClear){
  drawerClear.addEventListener('click', ()=>{
    filterState.banheiros=""; filterState.vagas=""; filterState.quartos="";
    filterState.mobiliado=""; filterState.areaMin=""; filterState.areaMax="";
    areaMinInput.value=""; areaMaxInput.value=""; buildDrawerChips();
  });
}
function buildDrawerChips(){
  chipQuartosRow.innerHTML = ""; ["1+","2+","3+","4+"].forEach(val=>{
    const active = filterState.quartos===val.replace("+","");
    chipQuartosRow.insertAdjacentHTML('beforeend', `<div class="chip-select ${active?'active':''}" data-type="quartos" data-val="${val}">${val}</div>`);
  });
  chipVagasRow.innerHTML = ""; ["0+","1+","2+","3+"].forEach(val=>{
    const base = val.replace("+",""); const active = filterState.vagas===base || (filterState.vagas==="3+" && val==="3+");
    chipVagasRow.insertAdjacentHTML('beforeend', `<div class="chip-select ${active?'active':''}" data-type="vagas" data-val="${val}">${val}</div>`);
  });
  chipBanheirosRow.innerHTML = ""; ["1+","2+","3+","4+"].forEach(val=>{
    const base = val.replace("+",""); const active = filterState.banheiros===val || filterState.banheiros===base;
    chipBanheirosRow.insertAdjacentHTML('beforeend', `<div class="chip-select ${active?'active':''}" data-type="banheiros" data-val="${val}">${val}</div>`);
  });
  chipMobiliadoRow.innerHTML = "";
  [{val:"",label:"Tanto faz"},{val:"sim",label:"Sim"},{val:"nao",label:"Não"}].forEach(o=>{
    const active = filterState.mobiliado===o.val;
    chipMobiliadoRow.insertAdjacentHTML('beforeend', `<div class="chip-select ${active?'active':''}" data-type="mobiliado" data-val="${o.val}">${o.label}</div>`);
  });
  areaMinInput.value = filterState.areaMin||""; areaMaxInput.value = filterState.areaMax||"";
  drawerPanel.querySelectorAll('.chip-select').forEach(ch=>{
    ch.addEventListener('click', ()=>{
      const t = ch.getAttribute('data-type'); const v = ch.getAttribute('data-val');
      if(t==="quartos") filterState.quartos = v.replace("+","");
      else if(t==="vagas") filterState.vagas = (v==="3+") ? "3+" : v.replace("+","");
      else if(t==="banheiros") filterState.banheiros = v;
      else if(t==="mobiliado") filterState.mobiliado = v;
      buildDrawerChips();
    });
  });
}

/*********************************************************
 * MOBILE MENU
 *********************************************************/
function openMobileMenu(){ mobileOverlay.classList.remove('hidden'); mobileOverlay.classList.add('active'); mobileOverlay.setAttribute('aria-hidden','false'); }
function closeMobileMenu(){
  mobileOverlay.classList.remove('active'); mobileOverlay.setAttribute('aria-hidden','true');
  setTimeout(()=>{ if(!mobileOverlay.classList.contains('active')) mobileOverlay.classList.add('hidden'); },200);
}
if(burgerBtn){ burgerBtn.addEventListener('click', openMobileMenu); }
if(mobileClose){ mobileClose.addEventListener('click', closeMobileMenu); }
mobileOverlay.addEventListener('click', (e)=>{ const panel = e.target.closest('.mobile-menu-panel'); if(!panel){ closeMobileMenu(); } });
mobileOverlay.querySelectorAll('.mobile-link').forEach(link=> link.addEventListener('click', closeMobileMenu));

// Detecta dispositivos sem hover e marca no <html>
try {
  if (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window) {
    document.documentElement.classList.add('is-touch');
  }
} catch (e) {
  // fallback simples para mobile
  document.documentElement.classList.add('is-touch');
}

/*********************************************************
 * UTIL + LISTENERS
 *********************************************************/
function formatMoney(n){ return Number(n||0).toLocaleString('pt-BR',{minimumFractionDigits:0}); }

window.addEventListener('hashchange', () => {
  router();
  setActiveNav();        // atualiza o menu quando trocar a hash
});

window.addEventListener('load', () => {
  router();
  setActiveNav();        // garante o ativo no carregamento inicial
});

// opcional (reforço, não atrapalha)
document.addEventListener('DOMContentLoaded', setActiveNav);

// ESC fecha overlays/dropdowns
window.addEventListener('keydown', (e)=>{
  if(e.key==="Escape"){ closeMobileMenu(); closeDrawer(); closeLightbox(); closeWhatsModal(); closeAllDropdowns(); }
});

// HEADER FIXO: altura + sombra
(function(){
  const header = document.querySelector('header');
  if(!header) return;
  const setHeaderHeight = () => {
    const h = header.offsetHeight || 80;
    document.documentElement.style.setProperty('--headerH', h + 'px');
  };
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 2);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Fecha o modal de WhatsApp clicando fora
overlayWhats.addEventListener('click', (e) => {
  if (e.target === overlayWhats) { closeWhatsModal(); }
});

/*********************************************************
 * MENU ATIVO (destaque da seção atual)
 *********************************************************/
function setActiveNav() {
  // remove o ativo atual
  document.querySelectorAll('.main-nav .nav-link, .mobile-nav-links .mobile-link')
    .forEach(link => link.classList.remove('active'));

  // pega o hash atual
  const hash = location.hash.replace('#', '') || '/';
  let activeSelector = '';

  if (hash === '/' || hash === '') activeSelector = '[href="#/"]';
  else if (hash.startsWith('/imoveis/')) activeSelector = '[href="#/imoveis"]';
  else if (hash.startsWith('/imoveis')) activeSelector = '[href="#/imoveis"]';
  else if (hash.startsWith('/marcia')) activeSelector = '[href="#/marcia"]';
  else if (hash.startsWith('/certificados')) activeSelector = '[href="#/certificados"]';
  else if (hash.startsWith('/principios')) activeSelector = '[href="#/principios"]';
  else if (hash.startsWith('/atendimento')) activeSelector = '[href="#/atendimento"]';

  // aplica classe active no link correto
  if (activeSelector) {
    document.querySelectorAll('.main-nav .nav-link' + activeSelector + ', .mobile-nav-links .mobile-link' + activeSelector)
      .forEach(link => link.classList.add('active'));
  }
}

