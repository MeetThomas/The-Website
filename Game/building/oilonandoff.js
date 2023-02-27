const oilLevel_ONSHORE_Label = document.getElementById('oil-level-onshore');
const oilButton_ONSHORE = document.getElementById('oil-button-onshore');

// Fonction pour mettre à jour les coûts et la production de la mine de pétrole
function upgradeOil_ONSHORE() {
  if (gold >= oilGoldCost_ONSHORE && oilLevel_ONSHORE < 100) {
    // Réduction de la quantité d'or
    gold -= oilGoldCost_ONSHORE;

    // Mise à jour du niveau de la mine de pétrole, des coûts et de la production
    oilLevel_ONSHORE++;
    oilGoldCost_ONSHORE = Math.round(oilGoldCost_ONSHORE * 1.1);
    oilProduction_ONSHORE += getProductionIncrease(oilLevel_ONSHORE);

    // Mise à jour des éléments d'affichage
    goldLabel.textContent = gold;
    oilLevel_ONSHORE_Label.textContent = oilLevel_ONSHORE;
    document.getElementById('oil-cost-onshore').textContent = oilGoldCost_ONSHORE + " or";
    document.getElementById('oil-production-onshore').textContent = oilProduction_ONSHORE;
    oilButton_ONSHORE.textContent = `Améliorer`;
  } else {
    window.alert("Vous n'avez pas assez d'or.");
  }
}

// Fonction pour calculer l'augmentation de production en fonction du niveau de la mine de pétrole
function getProductionIncrease(oilLevel_ONSHORE) {
  if (oilLevel_ONSHORE < 1) {
    return Math.round(oilProduction_ONSHORE + 100);
  } else if (oilLevel_ONSHORE < 10) {
    return Math.round(oilProduction_ONSHORE * 0.25);
  } else if (oilLevel_ONSHORE < 50) {
    return Math.round(oilProduction_ONSHORE * 0.20);
  } else {
    return Math.round(oilProduction_ONSHORE * 0.10);
  }
}

// Ajout de l'écouteur d'événements pour le bouton de la mine de pétrole
oilButton_ONSHORE.addEventListener('click', upgradeOil_ONSHORE);

const oilLevel_OFFSHORE_Label = document.getElementById('oil-level-offshore');
const oilButton_OFFSHORE = document.getElementById('oil-button-offshore');

// Fonction pour mettre à jour les coûts et la production de la mine de pétrole
function upgradeOil_OFFSHORE() {
  if (gold >= oilGoldCost_OFFSHORE && oilLevel_OFFSHORE < 100) {
    // Réduction de la quantité d'or
    gold -= oilGoldCost_OFFSHORE;

    // Mise à jour du niveau de la mine de pétrole, des coûts et de la production
    oilLevel_OFFSHORE++;
    oilGoldCost_OFFSHORE = Math.round(oilGoldCost_OFFSHORE * 1.1);
    oilProduction_OFFSHORE += getProductionIncrease(oilLevel_OFFSHORE);

    // Mise à jour des éléments d'affichage
    goldLabel.textContent = gold;
    oilLevel_OFFSHORE_Label.textContent = oilLevel_OFFSHORE;
    document.getElementById('oil-cost-offshore').textContent = oilGoldCost_OFFSHORE + " or";
    document.getElementById('oil-production-offshore').textContent = oilProduction_OFFSHORE;
    oilButton_OFFSHORE.textContent = `Améliorer`;
  } else {
    window.alert("Vous n'avez pas assez d'or.");
  }
}

// Fonction pour calculer l'augmentation de production en fonction du niveau de la mine de pétrole
function getProductionIncrease(oilLevel_OFFSHORE) {
  if (oilLevel_OFFSHORE < 1) {
    return Math.round(oilProduction_OFFSHORE + 1000);
  } else if (oilLevel_OFFSHORE < 10) {
    return Math.round(oilProduction_OFFSHORE * 0.20);
  } else if (oilLevel_OFFSHORE < 50) {
    return Math.round(oilProduction_OFFSHORE * 0.15);
  } else {
    return Math.round(oilProduction_OFFSHORE * 0.10);
  }
}

// Ajout de l'écouteur d'événements pour le bouton de la mine de pétrole
oilButton_OFFSHORE.addEventListener('click', upgradeOil_OFFSHORE);