// Calcul des coûts et de la production de la mine en fonction de son niveau

function updateForestValues() {
  // Calcul de la production de la mine en fonction de son niveau
  
  if (CUTWOOD_LV === 0) {
    CUTWOOD_PROD = 0;
    } else if (CUTWOOD_LV === 1) {
    CUTWOOD_PROD = 50;
    } else {
    CUTWOOD_PROD = Math.round(50 * Math.pow(1.07, CUTWOOD_LV - 1));
    }

  // Calcul des coûts pour le niveau suivant de la mine
  NEW_GOLD_COST_CUTWOOD = Math.round(BASE_GOLD_COST_CUTWOOD * Math.pow(1.1, CUTWOOD_LV));
  NEW_WOOD_COST_CUTWOOD = Math.round(BASE_WOOD_COST_CUTWOOD * Math.pow(1.1, CUTWOOD_LV));
}

function updateForestCosts() {
  updateForestValues();
  // Autres actions à effectuer après la mise à jour des coûts de la mine
}

//window.onload = function(CUTWOOD_LOAD) {
//  updateForestValues();
//  document.getElementById('forest-cost').textContent = NEW_GOLD_COST_CUTWOOD + " or et " + NEW_WOOD_COST_CUTWOOD + " bois";
//  document.getElementById('forest-production').textContent = CUTWOOD_PROD;
//  document.getElementById(`forest-level`).textContent = CUTWOOD_LV;
// };

const ForestLevelLabel = document.getElementById('forest-level');
const ForestButton = document.getElementById('forest-button');

// Fonction pour mettre à jour les coûts et la production de la mine
function upgradeForest() {
  if (gold >= NEW_GOLD_COST_CUTWOOD && wood >= NEW_WOOD_COST_CUTWOOD && CUTWOOD_LV < 100) {
    // Réduction de la quantité d'or et de bois
    gold -= NEW_GOLD_COST_CUTWOOD;
    wood -= NEW_WOOD_COST_CUTWOOD;

    // Mise à jour du niveau de la mine, des coûts et de la production
    CUTWOOD_LV++;
    ForestLevelLabel.textContent = CUTWOOD_LV;
    updateForestValues();

    // Mise à jour des éléments d'affichage
    goldLabel.textContent = gold;
    woodLabel.textContent = wood;
    ForestLevelLabel.textContent = CUTWOOD_LV;
    document.getElementById('forest-cost').textContent = NEW_GOLD_COST_CUTWOOD + " or et " + NEW_WOOD_COST_CUTWOOD + " bois";
    document.getElementById('forest-production').textContent = CUTWOOD_PROD;

    // Enregistement de la valeur CUTWOOD_LV
    localStorage.setItem('forest-level', CUTWOOD_LV);


  } else {
    window.alert("Vous n'avez pas assez de ressources.");
  }
  
}

// Ajout de l'écouteur d'événements pour le bouton de la mine
ForestButton.addEventListener('click', upgradeForest);


