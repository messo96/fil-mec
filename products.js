// ===== PRODUCT DATASET =====
const staticProducts = [
  {
    code: "FM-FIL-001",
    name: "Filo da Cucito Gütermann 100m",
    description: "Filo in poliestere universale, resistente e adatto a tutti i tessuti. Disponibile in oltre 400 colori.",
    price: 2.90,
    image: "assets/prod-fili-cucito.png",
    category: "Fili",
    visible: true
  },
  {
    code: "FM-FIL-002",
    name: "Filo da Cucito Coats Dual Duty 200m",
    description: "Filo in cotone-poliestere per cuciture a mano e a macchina. Ideale per tessuti medi.",
    price: 3.50,
    image: "assets/prod-fili-cucito.png",
    category: "Fili",
    visible: true
  },
  {
    code: "FM-FIL-003",
    name: "Filo Mouliné DMC per Ricamo",
    description: "Filo a 6 capi in cotone egiziano per ricamo a punto croce e decorativo. Confezione da 8m.",
    price: 1.20,
    image: "assets/prod-fili-cucito.png",
    category: "Fili",
    visible: true
  },
  {
    code: "FM-BOT-001",
    name: "Bottoni Classici 4 Fori 15mm",
    description: "Set di 12 bottoni in resina di alta qualità, disponibili in colori assortiti. Diametro 15mm.",
    price: 3.20,
    image: "assets/prod-bottoni.png",
    category: "Bottoni",
    visible: true
  },
  {
    code: "FM-BOT-002",
    name: "Bottoni Madreperla Naturale 12mm",
    description: "Bottoni in vera madreperla con finitura lucida, eleganti per camicie e abiti. Set da 8 pezzi.",
    price: 5.80,
    image: "assets/prod-bottoni.png",
    category: "Bottoni",
    visible: true
  },
  {
    code: "FM-BOT-003",
    name: "Bottoni Pressione a Scatto 10mm",
    description: "Bottoni automatici a pressione in metallo nickelato. Confezione da 20 pezzi con applicatore.",
    price: 4.50,
    image: "assets/prod-bottoni.png",
    category: "Bottoni",
    visible: true
  },
  {
    code: "FM-CER-001",
    name: "Cerniera Lampo Metallo 20cm",
    description: "Cerniera con dentatura in metallo dorato o argentato, ideale per jeans e giacche. Vari colori.",
    price: 3.90,
    image: "assets/prod-cerniere.png",
    category: "Cerniere",
    visible: true
  },
  {
    code: "FM-CER-002",
    name: "Cerniera Invisibile 60cm",
    description: "Cerniera a spirale invisibile per abiti e gonne eleganti. Finitura discreta, facile da applicare.",
    price: 2.80,
    image: "assets/prod-cerniere.png",
    category: "Cerniere",
    visible: true
  },
  {
    code: "FM-CER-003",
    name: "Cerniera Divisibile Sportiva 70cm",
    description: "Cerniera separabile in nylon per giacche e felpe. Cursore reversibile, resistente al lavaggio.",
    price: 5.20,
    image: "assets/prod-cerniere.png",
    category: "Cerniere",
    visible: true
  },
  {
    code: "FM-NAS-001",
    name: "Nastro Raso Doppio 25mm",
    description: "Nastro in raso di seta doppia faccia, perfetto per fiocchi e decorazioni. Rotolo da 25 metri.",
    price: 6.50,
    image: "assets/prod-nastri.png",
    category: "Nastri",
    visible: true
  },
  {
    code: "FM-NAS-002",
    name: "Nastro Organza Glitter 15mm",
    description: "Nastro in organza con fili glitterati, ideale per bomboniere e confezioni regalo. Rotolo da 10m.",
    price: 4.20,
    image: "assets/prod-nastri.png",
    category: "Nastri",
    visible: true
  },
  {
    code: "FM-NAS-003",
    name: "Pizzo Merletto Tombolo 30mm",
    description: "Pizzo tradicional in cotone con disegno floreale, ideale per bordure e decorazioni. Al metro.",
    price: 3.80,
    image: "assets/prod-nastri.png",
    category: "Nastri",
    visible: true
  },
  {
    code: "FM-FOR-001",
    name: "Forbici da Sarto Professionali 25cm",
    description: "Forbici in acciaio inox con impugnatura ergonomica, lame affilate a laser. Per tessuti di ogni tipo.",
    price: 24.90,
    image: "assets/prod-forbici.png",
    category: "Forbici",
    visible: true
  },
  {
    code: "FM-FOR-002",
    name: "Forbici da Ricamo 10cm",
    description: "Forbicine di precisione con punte sottili per lavori di ricamo e dettagli. Design classico a cicogna.",
    price: 8.50,
    image: "assets/prod-forbici.png",
    category: "Forbici",
    visible: true
  },
  {
    code: "FM-AGH-001",
    name: "Set Aghi da Cucito Assortiti",
    description: "Confezione da 30 aghi per cucire a mano, misure assortite dalla n.3 alla n.9. In acciaio temperato.",
    price: 3.90,
    image: "assets/prod-aghi.png",
    category: "Aghi e Spille",
    visible: true
  },
  {
    code: "FM-AGH-002",
    name: "Spilli con Testa di Vetro 34mm",
    description: "Spilli da sarta con testina in vetro colorato resistente al calore. Confezione da 100 pezzi.",
    price: 4.50,
    image: "assets/prod-aghi.png",
    category: "Aghi e Spille",
    visible: true
  },
  {
    code: "FM-AGH-003",
    name: "Puntaspilli a Pomodoro",
    description: "Puntaspilli classico a forma di pomodoro con fragolina affila-aghi. Imbottito in lana.",
    price: 5.90,
    image: "assets/prod-aghi.png",
    category: "Aghi e Spille",
    visible: true
  },
  {
    code: "FM-ELA-001",
    name: "Elastico Piatto 25mm Nero",
    description: "Elastico piatto resistente per cinture e coulisse. Rotolo da 5 metri. Lavabile in lavatrice.",
    price: 3.40,
    image: "assets/prod-elastici.png",
    category: "Elastici",
    visible: true
  },
  {
    code: "FM-ELA-002",
    name: "Elastico Tondo Morbido 3mm",
    description: "Elastico rotondo in gomma rivestita, ideale per mascherine e lavoretti. Rotolo da 10 metri.",
    price: 2.90,
    image: "assets/prod-elastici.png",
    category: "Elastici",
    visible: true
  },
  {
    code: "FM-ELA-003",
    name: "Fettuccia Elastica Pizzo 20mm",
    description: "Elastico decorativo con bordo in pizzo, perfetto per lingerie e abiti. Bianco e nero. Al metro.",
    price: 2.50,
    image: "assets/prod-elastici.png",
    category: "Elastici",
    visible: true
  },
  {
    code: "FM-UNC-001",
    name: "Set Uncinetti Ergonomici 2-6mm",
    description: "Set di 9 uncinetti con manico in gomma soft-touch colorata. Misure dalla 2.0 alla 6.0 mm.",
    price: 14.90,
    image: "assets/prod-uncinetti.png",
    category: "Uncinetti e Ferri",
    visible: true
  },
  {
    code: "FM-UNC-002",
    name: "Uncinetto in Bambù 4mm",
    description: "Uncinetto singolo in legno di bambù naturale, leggero e piacevole al tatto. Lunghezza 15cm.",
    price: 3.20,
    image: "assets/prod-uncinetti.png",
    category: "Uncinetti e Ferri",
    visible: true
  },
  {
    code: "FM-UNC-003",
    name: "Ferri da Maglia Circolari 80cm",
    description: "Ferri circolari in alluminio con cavo flessibile da 80cm. Per maglieria in tondo. Misura 5mm.",
    price: 7.90,
    image: "assets/prod-uncinetti.png",
    category: "Uncinetti e Ferri",
    visible: true
  },
  {
    code: "FM-ACC-001",
    name: "Metro da Sarto 150cm",
    description: "Metro flessibile a nastro con doppia scala in centimetri e pollici. In fibra di vetro, non si deforma.",
    price: 1.90,
    image: "assets/prod-forbici.png",
    category: "Accessori",
    visible: true
  },
  {
    code: "FM-ACC-002",
    name: "Ditale da Cucito in Metallo",
    description: "Ditale classico in acciaio nickelato con puntini in rilievo. Disponibile in varie misure (S-M-L).",
    price: 2.20,
    image: "assets/prod-aghi.png",
    category: "Accessori",
    visible: true
  },
  {
    code: "FM-ACC-003",
    name: "Gessetti da Sarto Triangolari",
    description: "Set di 4 gessetti colorati per marcatura su tessuto. Facilmente removibili con ferro da stiro.",
    price: 2.80,
    image: "assets/prod-forbici.png",
    category: "Accessori",
    visible: true
  }
];

// Inizializza i prodotti leggendo da localStorage o usando il dataset statico
function getStoredProducts() {
  const stored = localStorage.getItem('filmec_products');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Garantisce che tutti i prodotti abbiano la chiave 'visible'
      return parsed.map(p => ({
        ...p,
        visible: p.visible !== undefined ? p.visible : true
      }));
    } catch (e) {
      console.error("Errore nel parsing dei prodotti memorizzati, uso i dati statici:", e);
    }
  }
  return staticProducts;
}

// Array dei prodotti esposto globalmente al sito
let products = getStoredProducts();

// Salva i prodotti nel localStorage e aggiorna la variabile globale
function saveProductsToStorage(newProducts) {
  products = newProducts;
  localStorage.setItem('filmec_products', JSON.stringify(newProducts));
}

// Ripristina il dataset originale (per emergenza)
function resetProductsToDefault() {
  products = JSON.parse(JSON.stringify(staticProducts));
  localStorage.setItem('filmec_products', JSON.stringify(products));
  return products;
}
