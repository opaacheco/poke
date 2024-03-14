//query string de uma api por exemplo, ? depois da ? vem o filtro, https://pokeapi.co/api/v2/pokemon?type=grass&name=i
const axios = require("axios").default;

axios
  .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
  .then(function (response) {
    console.log(response);
  });

console.log(10 + 10);
