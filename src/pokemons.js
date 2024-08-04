// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemonsArray) {
  const fireArray = pokemonsArray.filter((pokemon) =>
    pokemon.type.includes("Fire")
  );
  return fireArray;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;
  let heightArray = pokemonsArray.map((pokemon) => pokemon.height);
  heightArray.sort();
  let shortest = pokemonsArray.filter(
    (pokemon) => pokemon.height === heightArray[0]
  );
  return shortest[0].name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;
  let count = 0;
  let totalCandy = pokemonsArray.reduce((acc, pokemon) => {
    if (!pokemon.candy_count) {
      count++;
      return acc;
    }
    count++;
    return acc + pokemon.candy_count;
  }, 0);
  let avg = (totalCandy / count).toFixed(2);
  return Number(avg);
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;
  let groundPokeArray = pokemonsArray.filter((pokemon) =>
    pokemon.type.includes("Ground")
  );
  let groundImgArray = groundPokeArray.map((pokemon) => pokemon.img);
  return groundImgArray.slice(0, 10);
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;
  let copyArray = JSON.parse(JSON.stringify(pokemonsArray));
  let weightArray = copyArray.map((pokemon) => {
    let weight = pokemon.weight.toString();
    pokemon.weight = Number(weight.slice(0, weight.indexOf("kg")));
    return pokemon;
  });
  let pikaWeight = weightArray
    .filter((pokemon) => pokemon.name === "Pikachu")
    .map((pokemon) => pokemon.weight);
  let heavyPokemons = weightArray
    .filter((pokemon) => pokemon.weight > pikaWeight[0])
    .map((pokemon) => pokemon.name);
  return heavyPokemons;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemonsArray) {
  let namesArray = pokemonsArray.map((pokemon) => pokemon.name);
  namesArray.sort();
  return namesArray.slice(0, 20);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemonsArray) {
  let strongPokeArray = pokemonsArray
    .filter((pokemon) => pokemon.weaknesses.length === 1)
    .map((pokemon) => pokemon.name);

  return strongPokeArray.slice(0, 15);
}
