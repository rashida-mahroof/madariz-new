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
		autoplayTimeout: 6000,
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
  $.js = function(el) {
	return $("[data-js=" + el + "]");
 };
 
 function carousel() {
	$.js("timeline-carousel").slick({
	   infinite: false,
	   arrows: false,
	   dots: true,
	   autoplay: false,
	   speed: 1100,
	   slidesToShow: 3,
	   slidesToScroll: 2,
	   responsive: [
		  {
			 breakpoint: 800,
			 settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			 }
		  }
	   ]
	});
 }
 
 carousel();
 