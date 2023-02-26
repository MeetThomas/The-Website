function updateResource(resourceLabel, resource, production, excessMessage) {
    const storedResource = Math.min(resource, storageCapacity);
    const excessResource = resource - storedResource;
    resource = storedResource + production;
    if (resource > storageCapacity) {
      resource = storageCapacity;
    }
    resourceLabel.textContent = `${Math.floor(resource)}`;
    storageLabel.textContent = `Stockage : ${storageCapacity}`;
    if (excessResource > 0) {}
    return resource;
  }
  
  
  setInterval(function() {
    gold = updateResource(goldLabel, gold, GOLDMINE_PROD, 'd\'or');
  }, 500);
  
  setInterval(function() {
    oil = updateResource(oilLabel, oil, oilProduction_OFFSHORE + oilProduction_ONSHORE, 'de pétrole');
  }, 500);
  
  setInterval(function() {
    wood = updateResource(woodLabel, wood, CUTWOOD_PROD, 'de bois');
  }, 500);
  
  setInterval(function() {
    gasoline = updateResource(gasolinelabel, gasoline, refineryProduction, 'd\'essence');
  }, 500);


// Mise à jour de l'affichage des ressources
goldLabel.textContent = gold;
woodLabel.textContent = wood;
oilLabel.textContent = oil;
gasolinelabel.textContent = gasoline;






window.onload = function() {
  // 
  updateMineValues();
  document.getElementById('mine-cost').textContent = NEW_GOLD_COST_GOLDMINE + " or et " + NEW_WOOD_COST_GOLDMINE + " bois";
  document.getElementById('mine-production').textContent = GOLDMINE_PROD;
  document.getElementById(`mine-level`).textContent = GOLDMINE_LV;
  //
  updateForestValues();
  document.getElementById('forest-cost').textContent = NEW_GOLD_COST_CUTWOOD + " or et " + NEW_WOOD_COST_CUTWOOD + " bois";
  document.getElementById('forest-production').textContent = CUTWOOD_PROD;
  document.getElementById(`forest-level`).textContent = CUTWOOD_LV;
};