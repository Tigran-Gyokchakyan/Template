/*
	Project Name :
	Author Company : SpecThemes
	Project Date: 25 Mar, 2020
	Template Developer: vsafaryan50@gmail.com
*/
/*
==============================================
TABLE OF CONTENT
==============================================

1. Header
2. Brends
3. Feedback
4. Player
==============================================
[END] TABLE OF CONTENT
==============================================
*/
"use strict";
/*-----------------------------------------
1. Header
-------------------------------------------*/
// /*Nav Bar*/
// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');
//   burger.addEventListener('click', () => {
//     /*Toggle nav*/
//     nav.classList.toggle('nav-active');
//     /*Animate Links*/
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = '';
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.5}s`;
//       }
//     });
//     /* Burger Animation*/
//     burger.classList.toggle('toggle')
//   });
// }
// navSlide();
// /*NavBar Stick*/
// const navHeight = $("nav").height();
// $(window).scroll(function() {
//   if ($(this).scrollTop() > navHeight) {
//     $('.navMenu').addClass('fixedColor');
//   } else {
//     $('.navMenu').removeClass('fixedColor');
//   }
// })


/*-----------------------------------------
2. Brends
-------------------------------------------*/
$(document).ready(function() {
  $("#owl-brends").owlCarousel({
    loop: true,
    items: 6,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      }
    }
  })
});

/*-----------------------------------------
3. Feedback
-------------------------------------------*/
$(document).ready(function() {
  $("#owl-feedback").owlCarousel({
    loop: true,
    items: 1,
    stagePadding: 130,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        stagePadding: 0,
      },
      600: {
        stagePadding: 50,
      },
      1000: {
        stagePadding: 0,
      },
      1200: {
        stagePadding: 130,
      }
    }
  })
});

/*-----------------------------------------
4. Player
-------------------------------------------*/
var doom = document.getElementById('player');
var templateElement = document.getElementById('video');
var template = templateElement.innerHTML;
var posterElement = document.getElementById('video-poster');
var videoElement = document.getElementById('video-element');
posterElement.addEventListener('click', function() {
  videoElement.removeChild(posterElement);
  doom.style.padding = 0;
  doom.style.height = "400px";
  videoElement.style.height = "400px";
  videoElement.innerHTML += template;
});
