$(document).ready(function() {
	
	//animations	
	$(".project_name").animated("bounceInUp");
	$(".project_tags").animated("fadeIn");
	
	$("img").hover(function() {
		$(".project_img").toggleClass("bounce animated");
	});
	
	//scrolify
	$.scrollify({
		section : ".section_scroll",
		easing: "easeInExpo",
		scrollSpeed: 1500
	});
	
	//others
	$("a.prev").hover(function() {
		$(".artwork").toggleClass("active");
	});
	$("a.next").hover(function() {
		$(".tlc").toggleClass("active");
	});
	
	//owl-carousel
	$('.owl-carousel').owlCarousel({
		items: 4,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            520:{
                items:1,
            },
            560:{
                items:2,
            },
            768:{
                items:2,
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

	//heightDetect
	function heightDetect() {
		$(".main_head").css("height", $(window).height())
	}
	heightDetect();
	
	$(window).resize(function() {
		heightDetect();
	});
	
	//toggle_menu
	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
		$(".top_menu").toggleClass("active");
		$(".header_content").toggleClass("opacity");
		$(".top_menu li a").toggleClass("fadeInUp animated");
	});
	
	//menu
	$(".top_menu ul li a").click(function() {
		$(".top_menu").toggleClass("active");
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
	
	$("body").on("click", ".top", function(){
        $("html, body").animate({scrollTop: 0},"slow");
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $(".top").addClass("active");
            $(".shadow").addClass("active");
            $(".text_wrapper").animated("zoomOut");
        } else {
            $(".top").removeClass("active");
            $(".shadow").removeClass("active");
            $(".text_wrapper").removeClass("zoomOut");
            $(".text_wrapper").animated("zoomIn");
        }    
    });
    
    $("body").append('<div class="top"><i class="fa fa-angle-up">');
});

$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});