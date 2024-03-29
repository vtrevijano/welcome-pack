'use strict';

//FUNCIONALIDAD DEL NAV, NAVEGACIÓN ENTRE LAS DISTINTAS PESTAÑAS

const homeContent = document.querySelector('.home__content')
const homeButton = document.querySelector('.home__button')
const listContent = document.querySelector('.list__content')
const listButton = document.querySelector('.list__button')
const youAreAlreadyHere = document.querySelector('.currentPage__text')
const logoImage = document.querySelector('.application__logo')

const showHomeContent = () => {
    homeContent.classList.remove('non-visible')
    homeContent.classList.add('visible')
    listContent.classList.add('non-visible')

    if (homeContent.classList.contains('visible')) {
        youAreAlreadyHere.classList.toggle("non-visible")
    }
}

const showListItems = () => {
    listContent.classList.remove('non-visible')
    listContent.classList.add('visible')
    homeContent.classList.add("non-visible")

    if (listContent.classList.contains('visible')) {
        youAreAlreadyHere.classList.toggle("non-visible")
    }
}

const redirectToHome = () => {
    homeContent.classList.remove('non-visible')
    homeContent.classList.add('visible')
    listContent.classList.add('non-visible')
    if (homeContent.classList.contains('visible')) {
        youAreAlreadyHere.classList.toggle("non-visible")
    }
}

homeButton.addEventListener('click', showHomeContent)
listButton.addEventListener('click', showListItems)
logoImage.addEventListener('click', redirectToHome)

//importo la función de info.js para la peti

import { getAllPokemons } from "./info.js"
window.addEventListener('load', getAllPokemons)

//Contenido dinámico de la home

//TÍTULO CON EL SET TIMEOUT
const showTtitle = () => {
    document.querySelector(".home__title").innerHTML = "Bienvenido a nuestra primera web usando Javascript!"
  }
const titleTimeOut = setTimeout(showTtitle, 2000);
const homeDescription = document.querySelector('.home__bodyText')

//PÁRRAFO QUE CAMBIA DE COLOR CON MOUSEOVER/MOUSEOUT
const mouseOver = (event) => {
    event.target.style.color = "red";
}
const mouseOut = (event) => {
    event.target.style.color = "black";
}
homeDescription.addEventListener("mouseover", mouseOver)
homeDescription.addEventListener("mouseout", mouseOut)

//DIV QUE DESPLIEGA INFO AL HACER CLICK
const moreInfoBlock = document.querySelector('.moreInfo')
const moreInfoButton = document.querySelector('.moreInfo__button')
const showMoreInfo = () => {
    moreInfoBlock.innerHTML = '<h2 class="moreInfo__title">Si estás viendo esto es porque has elegido ver más contenido</h2><p class="moreInfo__text">Pero no quiero engañarte, ya te he contado todo lo interesante que tenía que ofrecer, así que te dejo con la canción de pokemon, que así igual aprendes algo nuevo.</p><p class="moreInfo__song">Llegaré a ser el mejor El mejor que habrá jamás Mi causa es ser entrenador Tras mi gran prueba real Viajaré a cualquier lugar Llegaré a cualquier rincón Y al fin podré desentrañar El poder que hay en Pokémon Es Pokémon, hazte con todos </p>'
}
moreInfoButton.addEventListener('click', showMoreInfo)