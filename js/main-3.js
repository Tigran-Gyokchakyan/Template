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
2. Feedback
3. Brends
==============================================
[END] TABLE OF CONTENT
==============================================
*/
"use strict";
/*-----------------------------------------
1. Header
-------------------------------------------*/
/*Nav Bar*/
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
$(window).scroll(function () {
	if ($(this).scrollTop() > navHeight) {
		$('.navMenu').addClass('fixedColor');
	} else {
		$('.navMenu').removeClass('fixedColor');
	}
})
/*-----------------------------------------
2. Feedback
-------------------------------------------*/
/*owl-carousel reviresa*/
$(document).ready(function () {
	var owl = $("#owl-feedback").owlCarousel({
		loop: true,
		/*stagePadding: 350,*/
		items: 1,
		margin:0,
		nav: true,
		dots: false,
		navText: ["<img src='img/icon/next-owl.png'>","<img src='img/icon/prev-owl.png'>"]
		/*navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']*/
	})

});
/*-----------------------------------------
3. Brends
-------------------------------------------*/
/*owl-carousel brends*/
$(document).ready(function () {
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
