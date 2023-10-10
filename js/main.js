 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	// Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-service').owlCarousel({
			center: false,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive:{
				0:{
					items: 2,
					dots: false,
					center: true,
				},
				500:{
					items: 2,
					center: true,
					dots: false,
				},
				992:{
					items: 3,
					center: true,
				},
				1201:{
					items: 4,
					autoplay: false,
					nav: false,
					dots: false,
					mouseDrag: false,
					touchDrag: false,
					pullDrag: false,
				}

			}
		});

		$('.carousel-solution').owlCarousel({
			center: false,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive:{
				0:{
					items: 1,
					dots: false,
				},
				500:{
					items: 2,
					center: true,
					dots: false,
				},
				992:{
					items: 3,
					center: true,
				},
				1201:{
					items: 4,
					loop: false,
					autoplay: false,
					nav: false,
					dots: false,
					mouseDrag: false,
					touchDrag: false,
					pullDrag: false,
				}
			}
		});

		$('.carousel-project').owlCarousel({
			center: false,
			loop: true,
			autoplay: false,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		});

		$('.carousel-testimony').owlCarousel({
			center: false,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					dots: false,
				},
				500:{
					items: 1,
					center: true,
					dots: false,
				},
				992:{
					items: 3,
					center: true,
				},
				1201:{
					items: 4,
					loop: false,
					autoplay: false,
					margin: 60,
					nav: false,
					dots: false,
					mouseDrag: false,
					touchDrag: false,
					pullDrag: false,
				}
			}
		});

		$('.carousel-stage').owlCarousel({
			center: false,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive:{
				0:{
					items: 1,
					dots: false,
				},
				768:{
					items: 1,
					center: true,
					dots: false,
				},
				992:{
					items: 2,
					center: true,
				},
				1201:{
					items: 3,
					loop: false,
					autoplay: false,
					margin: 60,
					nav: false,
					dots: false,
					mouseDrag: false,
					touchDrag: false,
					pullDrag: false,
				},
				1921:{
					items: 3,
					loop: false,
					autoplay: false,
					margin: 90,
					nav: false,
					dots: false,
					mouseDrag: false,
					touchDrag: false,
					pullDrag: false,
				}
			}
		});

		$('.carousel-counter').owlCarousel({
			center: false,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive:{
				0:{
					items: 1,
					dots: false,
				},
				500:{
					items: 2,
					center: true,
					dots: false,
				},
				992:{
					items: 3,
					autoplay: false,
					nav: false,
					dots: false,
					mouseDrag: false,
					touchDrag: false,
					pullDrag: false,
				}

			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
			navToggler = $('.navbar-toggler');
			navbar = $('.ftco_navbar'),
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
			  navbar.removeClass('scrolled sleep');
			  navToggler.click();
			  navbar.addClass('scrolled awake');
			} else {
			  navbar.addClass('scrolled sleep');
			  navbar.removeClass('scrolled awake');
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


	$('#book_pick_date,#book_off_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#time_pick').timepicker();



})(jQuery);

      
// $('.projects .owl-carousel .owl-dots .owl-dot:nth-child(1), .projects .owl-carousel .owl-dots .owl-dot:nth-child(2)').click(function(e){
// 	$('.projects .owl-carousel .owl-dots').animate({
//         scrollLeft: -$('.projects .owl-carousel .owl-dots .owl-dot.active').offset().left
//     }, 500);
// })
// $('.projects .owl-carousel .owl-dots .owl-dot:nth-child(3), .projects .owl-carousel .owl-dots .owl-dot:nth-child(4)').click(function(e){
// 	$('.projects .owl-carousel .owl-dots').animate({
//         scrollLeft: $('.projects .owl-carousel .owl-dots .owl-dot.active').offset().left + 200
//     }, 500);
// })
if ($('.hero-wrap')) {
	$('.hero-wrap').mousemove(function(event) {
		 $(".hero-wrap").css({
			 // "top": -event.pageY / 50,
			 'background-position-y': -event.pageY / 50,
			//  "left": -event.pageX / 50
			 'background-position-x': -event.pageX / 50,
				
		 });
	});
}