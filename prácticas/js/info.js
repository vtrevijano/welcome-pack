"use strict";

//PETICIÓN A LA API DE POKEAPI PARA DEVOLVER LOS 10 PRIMEROS POKEMON.

const totalPokemon = document.querySelector(".character__list");

const getAllPokemons = async () => {

  //PETICIÓN A LA POKEAPI

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

const paintPokemon = (pokemons) => {

    //LA INFO QUE SE LE PASE A PAINTPOKEMON SE MAPEARÁ

  const totalInfo = pokemons.map(
      (pokemon) =>
        `<li onclick="Swal.fire({
            title: '${pokemon.name}',
            text: 'El id es: ${pokemon.id}',
            imageUrl: '${pokemon.image}',
            imageWidth: 280,
            background: '#213a65',
            imageAlt: 'Pokemon Image',
            padding: '1rem 0',
            color: '#feca1b',
          })";
            class="pokemon__list"/>

        <h1 class="pokemon__name">${pokemon.name}</h1>
        <img src="${pokemon.image}" alt="${pokemon.name}"/>
        </li>`
    )
    .join("");

    //LA INFO SE AÑADE AL CONTENIDO HTML DE LA UL
  totalPokemon.innerHTML = totalInfo;
};
export { getAllPokemons };
