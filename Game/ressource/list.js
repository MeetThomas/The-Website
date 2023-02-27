// Définition des constantes pour les coûts d'une mine
let BASE_GOLD_COST_CUTWOOD = 250;
let BASE_WOOD_COST_CUTWOOD = 100;

// Initialisation des valeurs de la mine
let CUTWOOD_LV = parseInt(localStorage.getItem('forest-level') || 0);
let CUTWOOD_PROD = 0;
let NEW_GOLD_COST_CUTWOOD = 0;
let NEW_WOOD_COST_CUTWOOD = 0;

// Définition des constantes pour les coûts d'une mine
let BASE_GOLD_COST_GOLDMINE = 250;
let BASE_WOOD_COST_GOLDMINE = 100;

// Initialisation des valeurs de la mine
let GOLDMINE_LV = parseInt(localStorage.getItem('mine-level') || 0);
let GOLDMINE_PROD = 0;
let NEW_GOLD_COST_GOLDMINE = 0;
let NEW_WOOD_COST_GOLDMINE = 0;























// Initialisation des ressources

let gold = parseInt(localStorage.getItem('gold') || 2000);
let wood = parseInt(localStorage.getItem('wood') || 2000);
let oil = parseInt(localStorage.getItem('oil') || 0);
let gasoline = parseInt(localStorage.getItem('gasoline') || 0);


let refineryCount = parseInt(localStorage.getItem('refinery-count') || 0);
let storageCapacity = parseInt(localStorage.getItem('storage-Capacity') || 5000);


let oilLevel_ONSHORE = parseInt(localStorage.getItem('oil-level-onshore') || 0);
let oilGoldCost_ONSHORE = parseInt(localStorage.getItem('oil-gold-cost-onshore') || 500);
let oilProduction_ONSHORE = parseInt(localStorage.getItem('oil-production-onshore') || 0);
let oilLevel_OFFSHORE = parseInt(localStorage.getItem('oil-level-offshore') || 0);
let oilGoldCost_OFFSHORE = parseInt(localStorage.getItem('oil-gold-cost-offshore') || 10000);
let oilProduction_OFFSHORE = parseInt(localStorage.getItem('oil-production-offshore') || 0);
let refineryProduction = parseInt(localStorage.getItem('refinery-production') || 0);


// Fonction de sauvegarde
function saveGameData() {
  localStorage.setItem('gold', gold);
  localStorage.setItem('wood', wood);
  localStorage.setItem('oil', oil);
  localStorage.setItem('gasoline', gasoline);
  localStorage.setItem('storage-Capacity', storageCapacity);
  localStorage.setItem('refinery-count', refineryCount);

}

// Appel de la fonction de sauvegarde toutes les 30 secondes
setInterval(saveGameData, 30000);


const goldLabel = document.getElementById('gold-label');
const woodLabel = document.getElementById('wood-label');
const oilLabel = document.getElementById('oil-label');
const gasolinelabel = document.getElementById('gasoline-label');

const refineryCountLabel = document.getElementById('refinery-count-label');
const storagelabel = document.getElementById('storage-label');

storagelabel.textContent = `${storageCapacity}`;

// Initialisation des variables de la refinery
let refineryCost = 5000;
let refineryProductionRate = 80;
let refineryConsumptionRate = 100;

