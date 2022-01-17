//PETICIÓN A LA API DE POKEAPI PARA DEVOLVER LOS 10 PRIMEROS POKEMON.

const totalPokemon = document.querySelector('.character__list')

const getAllPokemons= async ()=>{
    totalPokemon.innerHTML = ''
    const pokemonList = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
    const pokemonsToJson = await pokemonList.json();
    const pokemonInfo = pokemonsToJson.results.map((pokemon,id)=>(
        {
        name:pokemon.name,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id+1}.png`
        }
    ))
    paintPokemon(pokemonInfo)
}

const paintPokemon = pokemons => {
    const totalInfo = pokemons.map(
        (pokemon) =>
        `<li class="pokeList">
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.image}" alt="${pokemon.name}"/>

        </li>`
    ).join('');
    totalPokemon.innerHTML = totalInfo
}

window.addEventListener('load', getAllPokemons)

