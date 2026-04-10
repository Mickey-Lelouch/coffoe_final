/*=============== affichage du menu ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

// affichage
if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

// fermeture
if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== fermeture automatique du menu sur mobile ===============*/
const   navLink = document.querySelectorAll('.nav_link');

const   linckAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linckAction))

/*=============== modification de la barre de navigation lors du scroll ===============*/
const   shadowHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== element pupulaire ===============*/
const   swiperPopular = new Swiper('.popular_swiper',{
    loop: true,
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
            spaceBetween: 80,
        }
    }
})

/*=============== affichage du bouton rapide ===============*/ 
const   scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-up')
                        : scrollUp.classList.remove('show-up')
}
window.addEventListener('scroll', scrollUp)

/*=============== activation du bouton de navigation correspondant à la section ===============*/
const   sections = document.querySelectorAll('section[id]');

const   scrollActive = ()=>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetHeight - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelectorAll('.nav_menu a[href*=' + sectionId + ']')

                if (scrollDown > sectionTop && scrollDown <= screenTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                } else{
                    sectionsClass.classList.remove('active-link')
                }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== animation des elements ===============*/
const   sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: true, // repetition de l'animation
})
// animation des titre
sr.reveal(`.section_title`)
// animation du demi-cercle
sr.reveal(`.home_shape`, {
    origin: 'bottom'
})
//animation du cafe
sr.reveal(`.home_coffee`, {
    delay: 1000,
    distance: '200px',
    duration: 1500
})
//animation du splash
sr.reveal(`.home_splash`, {
    delay: 1600,
    scale: 0,
    duration: 1500
})
//animation des grains
sr.reveal(`.home_bean-1, .home_bean-2`, {
    delay: 2200,
    scale: 0,
    duration: 1500,
    rotate:{
        z: 180
    } 
})
//animatin des morceaux de glace
sr.reveal(`.home_ice-1, .home_ice-2`, {
    delay: 2600,
    scale: 0,
    duration: 1500,
    rotate:{
        z: 180
    } 
})
//animation des feuilles 
sr.reveal(`.home_leaf`, {
    delay: 2800,
    scale: 0,
    duration: 1500,
    rotate:{
        z: 90
    } 
})
//animation du titre d'acceuil
sr.reveal(`.home_title`, {
    delay: 3500,
})
//aniamtion des textes
sr.reveal(`.home_data, .home_sticker`, {
    delay: 4000,
})
//animation des elements : cafe populaire, elements du footer
sr.reveal(`.popular_swiper`, {
    delay: 900
})

sr.reveal(`.footer_container, .footer_copy`)
//texte du a propos
sr.reveal(`.about_data`, {
    origin: 'left'
})
//images du a propos
sr.reveal(`.about_images`, {
    origin: 'right'
})
// sac de cafe
sr.reveal(`.about_coffee`, {
    delay: 1000
})
//feuilles de cafe
sr.reveal(`.about_leaf-1, .about_leaf-2`, {
    delay: 1400,
    rotate:{
        z: 90
    }
})
//different produits et information
sr.reveal(`.products_card, .contact_info`, {
    interval: 100
})
//cercle
sr.reveal(`.contact_shape`, {
    delay: 600,
    scale: 0
})
//image de contact
sr.reveal(`.contact_delivery`, {
    delay: 1200,
})