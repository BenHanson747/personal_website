
/****** Menu show Y hidden ******/

const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/****** Menu show ******/

/* validate if constant exists */
if(navToggle){
        navToggle.addEventListener('click',() =>{
            navMenu.classList.add('show-menu')
    })
}

/****** Menu hidden ******/

/* validate if constant exists */

if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
    })
}

/****** Remove menu mobile ******/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/****** Qualifications tab *******/

const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll ('[data-content]')

tabs.forEach(tab =>{
        tab.addEventListener('click',() =>{
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent =>{
                        tabContent.classList.remove('qualification__active')
                })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
                tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
        })
})

/***** Dark light theme ******/

function darkMode() {
        var element = document.body;
        element.classList.toggle("dark-theme");
     }

function iconChange(x) {
        x.classList.toggle("uil-sun");
      }


      /****** Portfolio Slideshow *******/

      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }

   /******* Scroll Reveal Animation *******/

   const sr = ScrollReveal({
           distance: '60px',
           duration: 2500,
           delay: 100,
           reset: true
   })

   /* bottom to up */
   sr.reveal('.section__title, .section__subtitle');

// Home

   sr.reveal('.home__title, .home_substitle, .home__description, .footer__title, .footer__subtitle',{origin: 'top'});
   sr.reveal('.uil-linkedin-alt', {origin: 'right', delay:'700'});
   sr.reveal( '.uil-github-alt', {origin: 'right', delay:'1000'});
   sr.reveal( '.uil-message', {origin: 'bottom', delay:'1100'});
   sr.reveal('.home__description',{origin: 'left', delay:'300'});
   sr.reveal('.home__img',{origin: 'bottom', delay:'500'});

   // About

   sr.reveal('.about__img, .about__buttons',{origin: 'bottom', delay:'400'});
   sr.reveal('.about__description, .about__info, .footer__links', {origin: 'top', interval:300});

   // Skills

   sr.reveal('.skills__img, .qualification__button',{origin: 'bottom', interval:200});

