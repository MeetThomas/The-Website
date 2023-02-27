// Calcul des coûts et de la production de la mine en fonction de son niveau

function updateMineValues() {
  // Calcul de la production de la mine en fonction de son niveau
  
  if (GOLDMINE_LV === 0) {
    GOLDMINE_PROD = 0;
    } else if (GOLDMINE_LV === 1) {
    GOLDMINE_PROD = 50;
    } else {
    GOLDMINE_PROD = Math.round(50 * Math.pow(1.07, GOLDMINE_LV - 1));
    }

  // Calcul des coûts pour le niveau suivant de la mine
  NEW_GOLD_COST_GOLDMINE = Math.round(BASE_GOLD_COST_GOLDMINE * Math.pow(1.1, GOLDMINE_LV));
  NEW_WOOD_COST_GOLDMINE = Math.round(BASE_WOOD_COST_GOLDMINE * Math.pow(1.1, GOLDMINE_LV));
}

function updateMineCosts() {
  updateMineValues();
  // Autres actions à effectuer après la mise à jour des coûts de la mine
}

//window.onload = function(GOLDMINE_LOAD) {
//  updateMineValues();
//  document.getElementById('mine-cost').textContent = NEW_GOLD_COST_GOLDMINE + " or et " + NEW_WOOD_COST_GOLDMINE + " bois";
//  document.getElementById('mine-production').textContent = GOLDMINE_PROD;
//  document.getElementById(`mine-level`).textContent = GOLDMINE_LV;
// };

const mineLevelLabel = document.getElementById('mine-level');
const mineButton = document.getElementById('mine-button');

// Fonction pour mettre à jour les coûts et la production de la mine
function upgradeMine() {
  if (gold >= NEW_GOLD_COST_GOLDMINE && wood >= NEW_WOOD_COST_GOLDMINE && GOLDMINE_LV < 100) {
    // Réduction de la quantité d'or et de bois
    gold -= NEW_GOLD_COST_GOLDMINE;
    wood -= NEW_WOOD_COST_GOLDMINE;

    // Mise à jour du niveau de la mine, des coûts et de la production
    GOLDMINE_LV++;
    mineLevelLabel.textContent = GOLDMINE_LV;
    updateMineValues();

    // Mise à jour des éléments d'affichage
    goldLabel.textContent = gold;
    woodLabel.textContent = wood;
    mineLevelLabel.textContent = GOLDMINE_LV;
    document.getElementById('mine-cost').textContent = NEW_GOLD_COST_GOLDMINE + " or et " + NEW_WOOD_COST_GOLDMINE + " bois";
    document.getElementById('mine-production').textContent = GOLDMINE_PROD;

    // Enregistement de la valeur GOLDMINE_LV
    localStorage.setItem('mine-level', GOLDMINE_LV);


  } else {
    window.alert("Vous n'avez pas assez de ressources.");
  }
  
}

// Ajout de l'écouteur d'événements pour le bouton de la mine
mineButton.addEventListener('click', upgradeMine);