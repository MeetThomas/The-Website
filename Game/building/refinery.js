const refineryButton = document.getElementById('refinery-button');

// Fonction pour acheter une raffinerie
function buyRefinery() {
  if (gold >= 5000) {
    gold -= 5000;
    refineryCount++;
    refineryCountLabel.textContent = `${refineryCount}`;
    updateGold();
    updateRefineryCount(); // appel de la fonction updateRefineryCount après chaque achat
  } else {
    window.alert("Vous n'avez pas assez d'or pour acheter une raffinerie !");
  }
}

// Fonction pour mettre à jour le nombre de raffineries
function updateRefineryCount() {
  refineryCountLabel.textContent = `${refineryCount}`;
}

// Appel de la fonction updateRefineryCount toutes les 500ms
setInterval(updateRefineryCount, 500);

// --------------------------------------------------- //
    
// Fonction pour mettre à jour la production d'essence
  function updateGas() {
    if (refineryCount > 0 && oil >= 100*refineryCount) {
      oil -= 100*refineryCount;
      gasoline += 80*refineryCount;
      gasolinelabel.textContent = `${Math.floor(gasoline)}`;
      oilLabel.textContent = `${Math.floor(oil)}`;
    }
  }
  
// Mise à jour de l'affichage toutes les 500 millisecondes
  setInterval(function() {
    updateGas();
  }, 5000);
  
  // Ajout d'un écouteur d'événements sur le bouton d'achat de raffinerie
  refineryButton.addEventListener('click', buyRefinery);