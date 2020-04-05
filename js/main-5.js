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
2. Player
3. Feedback
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
    $('.navMenu').addClass('fixedColor');
  } else {
    $('.navMenu').removeClass('fixedColor');
  }
})
/*Anchor Smooth scrolling*/
$(document).on('click', 'a[href^="#player"]', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 80
  }, 1000);
});
/*Anchor Smooth scrolling*/
$(document).on('click', 'a[href^="#startup"]', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 150
  }, 1000);
});

/*-----------------------------------------
2. Player
-------------------------------------------*/
var templateElement = document.getElementById('video');
var template = templateElement.innerHTML;
var posterElement = document.getElementById('video-poster');
var videoElement = document.getElementById('video-element');
posterElement.addEventListener('click', function() {
  videoElement.removeChild(posterElement);
  videoElement.innerHTML += template;
});


/*-----------------------------------------
3. Feedback
-------------------------------------------*/
$(document).ready(function() {
  $("#owl-feedback").owlCarousel({
    loop: true,
    items: 1,
    center: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsiveClass: true,
  })
});
