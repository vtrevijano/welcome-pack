const homeContent = document.querySelector('.home__content')
const homeButton = document.querySelector('.home__button')
const listContent = document.querySelector('.list__content')
const listButton = document.querySelector('.list__button')
const weAreHere = document.querySelector('.currentPage__text')

const hideHomeContent = () => {
    homeContent.classList.remove('non-visible')
    homeContent.classList.add('visible')
    listContent.classList.add('non-visible')
    if (homeContent.classList.contains('visible')) {
        weAreHere.classList.remove("non-visible")
    }
}

const hideListContent = () => {
    listContent.classList.remove('non-visible')
    homeContent.classList.add("non-visible")
    if (listContent.classList.contains('visible')) {
        weAreHere.classList.remove("non-visible")
    }
    
}

homeButton.addEventListener('click', hideHomeContent)
listButton.addEventListener('click', hideListContent)

//PARA LA VISTA DETAIL, HABRÁ QUE AÑADIR UN BOTÓN DE: VER DETALLE, Y CADA BOTÓN TENDRÁ ASOCIADA UNA PETICIÓN, EN ESTE CASO A CADA PERSONAJE (HASTA 20). OTRA OPCIÓN ES AÑADIR UN INPUT QUE PIDA ID/NOMBRE PJ Y SE RECOJA LA INFO Y HAGA LA PETI.