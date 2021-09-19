
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

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 4000); // Change image every 4 seconds
// }
