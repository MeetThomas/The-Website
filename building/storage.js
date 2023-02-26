
const storageLabel = document.getElementById('storage-label');
const storageButton = document.getElementById('storage-button');


// DEFINITIONS DES VALEURS

let storageCost = 1000;

storageButton.addEventListener('click', () => {
  if (gold >= storageCost) {
    gold -= storageCost;
    storageCapacity += 5000;
    storageCost *= 1.1;
    storageButton.textContent = `Acheter un hangar (coût : ${Math.floor(storageCost)} or)`;
    goldLabel.textContent = `Or disponible : ${Math.floor(gold)}`;
    storageLabel.textContent = `Stockage : ${storageCapacity}`;
  } else {
    window.alert("Vous n'avez pas assez d'or pour acheter un hangar de stockage.");
  }
});
