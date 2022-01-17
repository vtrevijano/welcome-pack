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
        youAreAlreadyHere.classList.remove("non-visible")
    }
}

const showListItems = () => {
    listContent.classList.remove('non-visible')
    homeContent.classList.add("non-visible")
    if (listContent.classList.contains('visible')) {
        youAreAlreadyHere.classList.add("non-visible")
    }
}

const redirectToHome = () => {
    homeContent.classList.remove('non-visible')
    homeContent.classList.add('visible')
    listContent.classList.add('non-visible')
    if (homeContent.classList.contains('visible')) {
        youAreAlreadyHere.classList.remove("non-visible")
    }
}

homeButton.addEventListener('click', showHomeContent)
listButton.addEventListener('click', showListItems)
logoImage.addEventListener('click', redirectToHome)


//PARA LA VISTA DETAIL, HABRÁ QUE AÑADIR UN BOTÓN DE: VER DETALLE, Y CADA BOTÓN TENDRÁ ASOCIADA UNA PETICIÓN, EN ESTE CASO A CADA PERSONAJE (HASTA 20). OTRA OPCIÓN ES AÑADIR UN INPUT QUE PIDA ID/NOMBRE PJ Y SE RECOJA LA INFO Y HAGA LA PETI.

//Contenido dinámico de la home

const showTtitle = () => {
    document.querySelector(".home__title").innerHTML = "Bienvenido a nuestra primera web usando Javascript!"
  }

const titleTimeOut = setTimeout(showTtitle, 2000);

const homeDescription = document.querySelector('.home__bodyText')

const mouseOver = (event) => {
    event.target.style.color = "red";
}
const mouseOut = (event) => {
    event.target.style.color = "black";
}
homeDescription.addEventListener("mouseover", mouseOver)
homeDescription.addEventListener("mouseout", mouseOut)

const moreInfoBlock = document.querySelector('.moreInfo')
const moreInfoButton = document.querySelector('.moreInfo__button')

const showMoreInfo = () => {
    moreInfoBlock.innerHTML = '<h2 class="moreInfo__title">Si estás viendo esto es porque has elegido ver más contenido</h2><p class="moreInfo__text">Pero no quiero engañarte, ya te he contado todo lo interesante que tenía que ofrecer, así que te dejo con la canción de pokemon, que así igual aprendes algo nuevo.</p><p class="moreInfo__song">Llegaré a ser el mejor El mejor que habrá jamás Mi causa es ser entrenador Tras mi gran prueba real Viajaré a cualquier lugar Llegaré a cualquier rincón Y al fin podré desentrañar El poder que hay en Pokémon Es Pokémon, hazte con todos </p>'
}


moreInfoButton.addEventListener('click', showMoreInfo)









//Mapa del footer

/* const footerMap = document.querySelector('.footer__map')

function initMap() {
    footerMap = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.5293101, lng: -5.6773233},
    zoom: 13
  });
}
initMap()
console.log(footerMap) */