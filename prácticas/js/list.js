const totalPokemon = document.querySelector(".character__list");

//LA INFO QUE SE LE PASE A PAINTPOKEMON SE MAPEARÁ
const paintPokemon = (pokemons) => {
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
  export {paintPokemon}