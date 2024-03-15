//query string de uma api por exemplo, ? depois da ? vem o filtro, https://pokeapi.co/api/v2/pokemon?type=grass&name=i
// const axios = require("axios").default;

// axios
//   .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
//   .then(function (response) {
//     console.log(response);
//   });

// console.log(10 + 10);

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10";

function pokemonToLi(pokemon) {
  return `<li class="pokemon">
  <span class="number">#001</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
    <ol class="types">
      <li class="type">grass</li>
      <li class="type">poison</li>
    </ol>
    <img
      class="mage"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
      alt="${pokemon.name}"
    />
  </div>
</li>`;
}

const listPokemons = document.getElementById("listPokemons");

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => {
    return jsonBody.results;
  })
  .then((pokemonList) => {
    console.log(pokemonList);
    for (let i = 0; i < pokemonList.length; i++) {
      const poke = pokemonList[i];
      listPokemons.innerHTML += pokemonToLi(poke);
    }
  })
  .catch((error) => {
    console.log(error);
  });
