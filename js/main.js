// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let searchBox1 = document.querySelector(".search-box1 .bx-search");
let searchBoxCancel1 = document.querySelector(".search-box1 .bx-x");
let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});
searchBox1.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput1");
  if(navbar.classList.contains("showInput1")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}




//partners section
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});
  //  banner CAROUSEL 
jQuery(document).ready(function($) {
  "use strict";

  $('#banner').owlCarousel({
      loop: true,
      center: true,
      items: 1,
      margin: 0,
      autoplay: true,
      dots:true,
      nav: true,
      autoplayTimeout: 4500,
      smartSpeed: 1800,
      navText:["<i class='bx bxs-chevron-left'></i>"," <i class='bx bxs-chevron-right'></i>"],
   
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1170: {
          items: 1
        }
      }
  });
});
  //  TESTIMONIALS CAROUSEL HOOK
jQuery(document).ready(function($) {
  "use strict";

  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});
  //  milestones
  jQuery(document).ready(function($) {
    "use strict";
  
    $('#milestones').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        
        nav: true,
        autoplayTimeout: 4500,
        smartSpeed: 1800,
        navText:["<i class='bx bxs-chevron-left'></i>"," <i class='bx bxs-chevron-right'></i>"],
     
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1170: {
            items: 3
          }
        }
    });
  });
  //  chronicle
  jQuery(document).ready(function($) {
    "use strict";
  
    $('#chronicle').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        
        nav: true,
        autoplayTimeout: 4500,
        smartSpeed: 1800,
        navText:["<i class='bx bxs-chevron-left'></i>"," <i class='bx bxs-chevron-right'></i>"],
     
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1170: {
            items: 3
          }
        }
    });
  });

  //partners section
$(document).ready(function(){
  $('.milestones').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 2
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1
          }
      }]
  });
});
