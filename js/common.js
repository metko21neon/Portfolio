$(document).ready(function() {
	
	//animations	
	$(".project__name").animated("bounceInUp");
	$(".project__tags").animated("fadeIn");
	
	//scrolify
	$.scrollify({
		section : ".section_scroll",
		easing: "easeInExpo",
		scrollSpeed: 1500
	});
	
	//others
	$(".others__link_prev").hover(function() {
		$(".others__previous").toggleClass("others_active");
	});
	$(".others__link_next").hover(function() {
		$(".others__next").toggleClass("others_active");
	});
	
	//owl-carousel
	$('.owl-carousel').owlCarousel({
		items: 4,
		nav: true,
		navText: ["<i class='owl-carousel__icon fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            560:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            },
        },
	});
	
	//magnific popup
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
	
	//toggle_menu
	$(".toggle-menu__button").click(function() {
		$(".toggle-menu").toggleClass("active");
		$(".menu").toggleClass("menu_active");
		$(".menu__link").toggleClass("fadeInUp animated");
	});
	
	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
		$(".toggle-menu").toggleClass("active");
		$(".top_menu").toggleClass("active");
		$(".menu").toggleClass("menu_active");
		$(".header_content").toggleClass("opacity");
		$(".top_menu li a").toggleClass("fadeInUp animated");
	});
	
	//menu
	$(".menu__link").click(function() {
		$(".menu").toggleClass("menu_active");
		$(".toggle-menu").toggleClass("active");
	});
	
	$(".top_menu ul li a").click(function() {
		$(".top_menu").toggleClass("active");
		$(".menu").toggleClass("menu_active");
		$(".sandwich").toggleClass("active");
		$(".header_content").toggleClass("opacity");
	});

	//DownButton
	$(function() {
	  $('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1500, 'easeInExpo');
	  });
	});
	
	
	//to top
	$("body").append('<div class="top"><i class="top__icon fa fa-angle-up">');
	
	$("body").on("click", ".top", function(){
        $("html, body").animate({scrollTop: 0}, 2500, 'easeInExpo');
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $(".top").addClass("active");
            $(".shadow").addClass("active");
            $(".project__name_animation").animated("zoomOut");
            $(".project__tags_animation").animated("zoomOut");
        } else {
            $(".top").removeClass("active");
            $(".shadow").removeClass("active");
            $(".project__name_animation").removeClass("zoomOut");
            $(".project__name_animation").animated("zoomIn");
			$(".project__tags_animation").removeClass("zoomOut");
            $(".project__tags_animation").animated("zoomIn");
        }    
    });

});

$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});

$(window).load(function () {
    $(".loader__inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});