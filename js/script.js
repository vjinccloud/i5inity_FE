$(function() {
	setLoading();
	setScroll();
	setMobileMenu();	
	setSider();
	setNaviToggle();

});
function setNaviToggle(){
	if($('.header-div .had-sub-menu').length>0){
		$('.header-div .had-sub-menu .link').hover(function(){
			$('.header-div').removeClass('active');
			$('.header-div .had-sub-menu').removeClass('active');
			$('.header-div .none-sub-menu').removeClass('active');
			$(this).closest(".had-sub-menu").addClass('active');
			$(this).closest(".header-div").addClass('active');
		});
		$('main').hover(function(){
			$('.header-div').removeClass('active');
			$('.header-div .had-sub-menu').removeClass('active');
		});
	}
	if($('.header-div .none-sub-menu').length>0){
		$('.header-div .none-sub-menu').hover(function(){
			$('.header-div').removeClass('active');
			$('.header-div .had-sub-menu').removeClass('active');
			$('.header-div .none-sub-menu').removeClass('active');
			$(this).addClass('active');			
		});
		$('main').hover(function(){
			$('.header-div').removeClass('active');
			$('.header-div .none-sub-menu').removeClass('active');
		});
	}
}
function setLoading(){
	if($('#loading').length>0){
		$('#loading').fadeOut(1500);//1.5秒
	}
}

function setOverLapToggle(){
	//按空白的地方關閉
	$(document).on("click","main,.overlap", function (event) {		
		$('body').removeClass('body-popup-active');	
	}); 
}

function isInView(el) {
    windowTop = $(window).scrollTop();
    windowButtom = windowTop + $(window).height();
    elTop = $(el).offset().top-$('header').height();
    elButtom = elTop + $(el).height();

    return (elTop >= windowTop && elButtom <= windowButtom);
}
function setPopupOpen(id){	
	$('body').addClass('body-popup-active');	
	$('#'+ id).addClass('active');
}
function setPopupHide(id){	
	$('body').removeClass('body-popup-active');	
	$('#'+ id).removeClass('active');
}


function copyUrl(id) {
    $("body").after("<input id='copyVal' />");
    var text = id;
    var input = document.getElementById("copyVal");
    input.value = text;
    input.select();
    input.setSelectionRange(0, input.value.length);   
    document.execCommand("copy");
    $("#copyVal").remove();
}
function getQuery(q) {
	return (window.location.search.match(new RegExp('[?&]' + q + '=([^&]+)')) || [, null])[1];
}
function setMobileMenu(){	
	if($('#mobile-nav').length>0){
		var headerNaviHtml = $('header .header-div .navi').html();
		var headerSocietyContactHtml = $('header .header-div .society-contact').html();
		$('#mobile-nav .navi').append(headerNaviHtml);	
		$('#mobile-nav .society-contact').append(headerSocietyContactHtml);	
		$('.toggle-btn').click(function(){
			$('body').toggleClass('body-toggle-open');
			var memberCartHei = $('.member-cart').outerHeight();					
			var naviMaxHeight = $(window).height() - memberCartHei - 20;
			$('#mobile-nav .navi').css('max-height',naviMaxHeight+'px');
		});
		$('#mobile-nav .navi ul li .link i').click(function(){
			$(this).parent().parent().toggleClass('active').siblings('.active').removeClass('active');
		});
		$('.overlap').click(function(){
			$('body').removeClass('body-toggle-open');
		});
		$(document).on("click"," #mobile-nav .navi ul li a:not('.link')", function (event) {		
			$('body').removeClass('body-toggle-open');
		}); 

		$(document).on("click","#mobile-nav .navi ul li.had-sub-menu .link i", function (event) {		
			event.preventDefault();
		}); 
		
		
	}	
}
function setScroll() {
	$(window).scroll(function() {
			var scrollVal = $(this).scrollTop();
			if (scrollVal > 100) {
					$('body').addClass('scroll');
			} else {
					$('body').removeClass('scroll');
			}
	});
}
function setSider(){
	if($('.section-swiper .swiperHome').length>0){
		var swiperHome = new Swiper(".section-swiper .swiperHome", {	
			loop:true,
			autoplay: {
				delay: 10000,//10秒切换一次
			},
			navigation: {
				nextEl: ".section-swiper .swiper-button-next",
				prevEl: ".section-swiper .swiper-button-prev",
			},		
			pagination: {
				el: ".section-swiper .swiper-pagination",
				clickable: true,
			},
		});
	}
	if($('.swiperColumn').length>0){
		var swiperColumn = new Swiper(".swiperColumn", {	
			loop:true,
			autoplay: {
				delay: 10000,//10秒切换一次
			},	
			pagination: {
				el: ".swiperColumn .swiper-pagination",
				clickable: true,
			},
			spaceBetween: 20,
			slidesPerView: 4,
			breakpoints: {
				350: {
				slidesPerView: 1,				
				},
				640: {
				slidesPerView: 1,				
				},
				768: {
				slidesPerView: 2,				
				},
				1024: {
				slidesPerView: 3,				
				},
				1366: {
				slidesPerView: 4,				
				},
			},
			
		});
	}
	if($('.swiperCare').length>0){
		var swiperCare = new Swiper(".swiperCare", {	
			loop:true,
			autoplay: {
				delay: 10000,//10秒切换一次
			},		
			pagination: {
				el: ".swiperCare .swiper-pagination",
				clickable: true,
			},
			spaceBetween: 20,
			breakpoints: {
				350: {
				slidesPerView: 1.2,				
				},
				640: {
				slidesPerView: 1.2,				
				},
				768: {
				slidesPerView: 2.2,				
				},
				1024: {
				slidesPerView: 3.2,				
				},
				1366: {
				slidesPerView: 4.2,				
				},
			},
			
		});
	}
	if($('.swiperHealth').length>0){
		var swiperHealth = new Swiper(".swiperHealth", {	
			spaceBetween: 10,			
			mousewheel: {
				releaseOnEdges: true,
			}, 
			w: "auto",
			centeredSlides: true,
			spaceBetween: 20,
			breakpoints: {
				350:{
				slidesPerView: 1.2,	
				},
				640: {
				slidesPerView: 1.2,				
				},
				768: {
				slidesPerView: 2.2,				
				},
				1024: {
				slidesPerView: 2.2,				
				},
				1366: {
				slidesPerView: 3.2,				
				},
			},
			
		});
	}
	if($('.swiperEnvironment').length>0){
		var swiperEnvironment = new Swiper(".swiperEnvironment", {	
			spaceBetween: 10,			
			mousewheel: {
				releaseOnEdges: true,
			}, 
			w: "auto",
			centeredSlides: true,
			spaceBetween: 20,
			breakpoints: {
				350:{
				slidesPerView: 1.2,	
				},
				640: {
				slidesPerView: 1.2,				
				},
				768: {
				slidesPerView: 2.2,				
				},
				1024: {
				slidesPerView: 2.2,				
				},
				1366: {
				slidesPerView: 3.2,				
				},
			},
			
		});
	}
	
}
