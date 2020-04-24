/*
	Project Name :
	Author Company : SpecThemes
	Project Date: 25 Mar, 2020
	Template Developer: vsafaryan50@gmail.com
==============================================
TABLE OF CONTENT
==============================================

1. Header
2. Reviews
3. Feedback
4. Brends
5. Player
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
if (document.getElementById('stick-black') !== null) {
  const navHeight = $("nav").height();
  $(window).scroll(function() {
    if ($(this).scrollTop() > navHeight) {
      $('.navMenu').addClass('fixedColor');
    } else {
      $('.navMenu').removeClass('fixedColor');
    }
  })
} else if (document.getElementById('stick-whith') !== null) {
  const navHeight = $("nav").height();
  $(window).scroll(function() {
    if ($(this).scrollTop() > navHeight) {
      $('.navMenu').addClass('fixed');
    } else {
      $('.navMenu').removeClass('fixed');
    }
  })
}

/*Anchor Smooth scrolling*/
$(document).on('click', 'a[href^="#about"]', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 80
  }, 1000);
});
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
2. Reviews
-------------------------------------------*/
/*owl-carousel reviresa*/
$(document).ready(function() {
  $("#owl-reviews").owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false
  })
});

/*-----------------------------------------
3. Feedback
-------------------------------------------*/
$(document).ready(function() {
  $("#owl-feedback-2").owlCarousel({
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
3. Feedback
-------------------------------------------*/
/*owl-carousel reviresa*/
$(document).ready(function() {
  var owl = $("#owl-feedback").owlCarousel({
    loop: true,
    /*stagePadding: 350,*/
    items: 1,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<img src='img/icon/next-owl.png' alt='next'>", "<img src='img/icon/prev-owl.png' alt='prev'>"]
    /*navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']*/
  })
});

$(document).ready(function() {
  $("#owl-feedback-3").owlCarousel({
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
/*-----------------------------------------
4. Brends
-------------------------------------------*/
/*brends*/
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

$(document).ready(function() {
  $("#owl-brends-2").owlCarousel({
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
/*-----------------------------------------
5. Player
-------------------------------------------*/
if (document.getElementById('video') !== null) {
  var templateElement = document.getElementById('video');
  var template = templateElement.innerHTML;
  var posterElement = document.getElementById('video-poster');
  var videoElement = document.getElementById('video-element');
  posterElement.addEventListener('click', function() {
    videoElement.removeChild(posterElement);
    videoElement.innerHTML += template;
  });
}

if (document.getElementById('player') !== null) {
  var doom = document.getElementById('player');
  var templateElement = document.getElementById('video-2');
  var template = templateElement.innerHTML;
  var posterElement = document.getElementById('video-poster-2');
  var videoElement = document.getElementById('video-element-2');
  posterElement.addEventListener('click', function() {
    videoElement.removeChild(posterElement);
    doom.style.padding = 0;
    doom.style.height = "400px";
    videoElement.style.height = "400px";
    videoElement.innerHTML += template;
  });
}


$('.collapse').collapse();
$('.dropdown-toggle').dropdown();
