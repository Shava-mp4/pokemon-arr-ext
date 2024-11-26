// All Those Pokemon!

//Load data from file
let pokemonData;
fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (pokemonData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl1 = document.getElementById("span1");
let outputEl2 = document.getElementById("span2");
let outputEl3 = document.getElementById("div1");
let outputEl4 = document.getElementById("div2");

// Button Event Listener
document.getElementById("btn1").addEventListener("click", randPokeBtnClicked);
document.getElementById("btn2").addEventListener("click", randTeamBtnClicked);
document
  .getElementById("input1")
  .addEventListener("change", displayStartLetPokemon);
document
  .getElementById("input2")
  .addEventListener("change", displayPokemonNameLength);

function randPokeBtnClicked() {
  let rand = randomElement(pokemonData);
  outputEl1.innerHTML = `</br> <image src = "images/${rand}.png"> <p>${rand}</p> `;
}

function randTeamBtnClicked() {
  outputEl2.innerHTML = "";
  let rand = [];
  for (let i = 0; i < 3; i++) {
    rand.push(randomElement(pokemonData));
  }

  for (let i = 0; i < rand.length; i++) {
    outputEl2.classList.add("out");
    outputEl2.innerHTML += `<span class="in" </br> <image src = "images/${rand[i]}.png"> <p>${rand[i]}</p> </span`;
  }
}

function displayStartLetPokemon() {
  let pokeLetter = document.getElementById("input1").value;
  let pokemonWL = [];
  for (let i = 0; i < pokemonData.length; i++) {
    if (pokemonData[i].charAt(0) == pokeLetter) {
      pokemonWL.push(pokemonData[i]);
    }
  }
  for (let k = 0; k < pokemonWL.length; k++) {
    outputEl3.innerHTML += `<span class="in" > </br> <image src = "images/${pokemonWL[k]}.png"> <p>${pokemonWL[k]}</p> </span`;
  }
  console.log(pokemonWL);
}

function displayPokemonNameLength() {
  let nameLength = document.getElementById("input2").value;
  let pokeNames = [];
  for (let i = 0; i < pokemonData.length; i++) {
    if (pokemonData[i].length == nameLength) {
      pokeNames.push(pokemonData[i]);
    }
  }

  for (let i = 0; i < pokeNames.length; i++) {
    outputEl4.innerHTML += ` <span class="in"> </br> <image src = "images/${pokeNames[i]}.png"> <p>${pokeNames[i]}</p> </span>`;
  }
  console.log(pokeNames);
}
