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
==============================================
[END] TABLE OF CONTENT
==============================================
*/
"use strict";
/*-----------------------------------------
1. Header
-------------------------------------------*/
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', () => {
    /*Toggle nav*/
    nav.classList.toggle('nav-active');
    /*Animate Links*/
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.5}s`;
      }
    });
    /* Burger Animation*/
    burger.classList.toggle('toggle')
  });
}
navSlide();
/*NavBar Stick*/
const navHeight = $("nav").height();
$(window).scroll(function() {
  if ($(this).scrollTop() > navHeight) {
    $('.navMenu').addClass('fixed');
  } else {
    $('.navMenu').removeClass('fixed');
  }
})


/*-----------------------------------------
2. Brends
-------------------------------------------*/
/*owl-carousel brends*/
$(document).ready(function() {
  $("#owl-brends").owlCarousel({
    loop: true,
    items: 8,
    center: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 8,
      }
    }
  })
});
