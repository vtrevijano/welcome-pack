"use strict";
import { paintPokemon } from "./list.js";

//PETICIÓN A LA API DE POKEAPI PARA DEVOLVER LOS 9 PRIMEROS POKEMON.
const getAllPokemons = async () => {
const pokemonList = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"
  );
  const pokemonsToJson = await pokemonList.json();

  //HACEMOS UN MAP DEL RESULTADO PARA QUEDARNOS LA INFO QUE NOS INTERESA

  const pokemonInfo = pokemonsToJson.results.map((pokemon, id) => ({
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      id + 1
    }.png`,
    id: id,
  }));

  //PASAMOS A LA FUNCIÓN QUE PINTA EL LISTADO LA INFO DE LA CONSTANTE
  paintPokemon(pokemonInfo);

};

 
export { getAllPokemons };
