$(document).ready(function(){
	
	//increment field
		$('.incr__minus').click(function () {
					var $input = $(this).parent().find('.incr__val span');
					var count = parseInt($input.html()) - 1;
					count = count < 1 ? 0 : count;
					$input.html(count);
			});

		$('.incr__minus.incr--one').click(function () {
					var $input = $(this).parent().find('.incr__val span');
					var count = parseInt($input.html()) - 1;
					count = count < 2 ? 1 : count;
					$input.html(count);
			});

		$('.incr__plus').click(function () {
				var $input = $(this).parent().find('.incr__val span');
				var count = parseInt($input.html()) + 1;
				count = count > 100 ? 100 : count;
				$input.html(count);
		});

		//increment field end

	//scroll template
	$('.basket-cont').perfectScrollbar();


	//modal
	var scrollPos = 0;
	var closeModal = function () {
  	$('.modal-layer').removeClass('modal-layer-show');
  	$("body").removeClass("modal-fix");
  	$('body').css({
            overflow: '',
            position: '',
            top: ''
        }).scrollTop(scrollPos);
    $('.modal').removeClass('modal__show');
		$('.enter').removeClass('enter--open');
		$('.basket').removeClass('basket--open');
	};

	var openModal = function () {

  	if(!$('.modal-layer').hasClass('modal-layer-show')){
			$('.modal-layer').addClass('modal-layer-show');
		}
		if(!$("body").hasClass("modal-fix")){
			$("body").addClass("modal-fix");
			 scrollPos = $('body').scrollTop();
        $('body').css({
            overflow: 'hidden',
            position: 'fixed',
            overflowY: 'scroll',
            top : -scrollPos,
            width:'100%'
        });
		}

	};

	$('.modal-get').click(function (){
		$('.enter').removeClass('enter--open');
		$('.basket').removeClass('basket--open');
		openModal();
		var currentModal = $(this).data("modal");
		$('.modal').each(function () {
			if ($(this).data('modal')===currentModal){
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $('.modal.modal__show').height();
		$('.modal-filter').height(modalHeightCont+30);
		$('.modal-wrap').css('minHeight',modalHeightCont + 30);
	});

	$('.modal-close ,modal-wrap , .modal-filter, .toggle-close-modal').click(function (){
		closeModal();
	});
	//modal-end

	//header-auth
	$('.head-tool__icon--profile .icon').click(function(){
		$('.enter').addClass('enter--open');
		openModal();
	});

	$('.enter-close').click(function(){
		$('.enter').removeClass('enter--open');
		closeModal();
	});
	//header-auth-end

	//header-basket
	$('.head-tool__cart .icon').click(function(){
		$('.basket').addClass('basket--open');
		openModal();

		var heightBlock = 0;
		$('.basket__row').slice(0,2).each(function () {
			heightBlock = heightBlock + $(this).outerHeight()*1;
		});
		$('.basket-cont').height(heightBlock);
	});

	$('.basket-close').click(function(){
		$('.basket').removeClass('basket--open');
		closeModal();
	});
	//header-basket-end

	//blog slider
	$(".blog-slider").owlCarousel({
		items: 1,
		autoHeight: false,
		dots: false,
		autoplay: true,
		singleItem: true,
		nav: false
	});

	var owl = $('.blog-slider');

	owl.owlCarousel();
	$('.blog-slider-control__el--prev').click(function() {
	    owl.trigger('next.owl.carousel');
	});
	$('.blog-slider-control__el--next').click(function() {
	    owl.trigger('prev.owl.carousel', [300]);
	});

	//scroll top
	var scrollTop = 450;
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= scrollTop ) {
				//var heightHeader=$('.header-main-wrap').height();
				$('.scroll-up').addClass('scroll-up--show');
			}
			else {
					$('.scroll-up').removeClass('scroll-up--show');
			}
	});

	$('.scroll-up').click(function() {
    $('html, body').animate({scrollTop: 0},800);
    return false;
  });

	//===== Mobile slide-left menu =====
	 var $menu = $("#mobile-menu").mmenu({
			navbar: {
				title: "Главное меню",
				"content": [
				"searchfield"
				]
			},
			/*"searchfield": {
			add: true,
			search: true
			},*/
			extensions: [
				//"effect-menu-slide",
				"effect-listitems-slide",
				"fullscreen"
			],
			offCanvas : {
				position : "left", // changing this alters the position of the menu
				zposition : "front"
			},
		});

	//Toggle header icon
	if ($menu.data( "mmenu" )) {
		var API = $menu.data( "mmenu" );
		API.bind( "opening", function() {
		  $('.head-toggle').toggleClass('header-mobile-togle--open');
		});
		API.bind( "closing", function() {
		  $('.head-toggle').toggleClass('header-mobile-togle--open');
		});
		$('.modal-get').click(function() {
         API.close();
      });
	}
	//===== Mobile slide-left menu =====

	//toggle mobile filter
		$('.list-toogle').click(function(){
			$('.list-tool').slideToggle();
		});
	//mobile search

	$('.head-search__wrap .icon--mobile').click(function(){
		event.stopPropagation();
		$('.head-search__wrap').addClass('head-search__wrap--show');
		$('.head-search__wrap').on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$('.head-search__wrap').removeClass('head-search__wrap--show');
		});
		$('.head-search__input').focus();
	});



	//slider on card
	/*$('.card-img__el').click(function(){
		var url = $(this).css('backgroundImage');
		$('.card-img__lg').css('backgroundImage', url);
	});*/

	//tab on card
	$('.card-tab__el').click(function(){
		var current = $(this).data('tab');
		$('.card-tab__el').removeClass('card-tab__el--active');
		$(this).addClass('card-tab__el--active');
		$('.card-attr').each(function () {
			var tab = $(this).data('tab');
			if(tab==current){
				$(this).addClass('card-attr--active');
			}else{
				$(this).removeClass('card-attr--active');
			}
		})
	});

	//tab on card
	$('.contact-tab__el').click(function(){
		var current = $(this).data('tab');
		$('.contact-tab__el').removeClass('contact-tab__el--active');
		$(this).addClass('contact-tab__el--active');
		$('.contact-attr').each(function () {
			var tab = $(this).data('tab');
			if(tab==current){
				$(this).addClass('contact-attr--active');
			}else{
				$(this).removeClass('contact-attr--active');
			}
		})
		$('.contact-map__el').each(function () {
			var tab = $(this).data('tab');
			if(tab==current){
				$(this).addClass('contact-map__el--active');
			}else{
				$(this).removeClass('contact-map__el--active');
			}
		})
	});

	//get height cont-gray
	var heightContGray = function(){
		var bredCrumbs = $('.main-cont--bread').height();
		var cardAbout = $('.card-about').height();
		$('.cont-gray').css('height',bredCrumbs + cardAbout + 'px')
	};
	heightContGray();

	//select
	$('.select-beauty').niceSelect();
	$('.nice-select li').each(function(){
		var selectColor = $(this).data('color');
		if(selectColor ){
			$(this)
			.prepend('<span class="order-select-color" style=\"background-color:  ' +$(this).data('color')+" \" ></span>");
		}
	});

/*	$('.nice-select').each(function(){
		var selectText = $(this).find('li').data('text');
		if(selectText) {
					$(this).find('.current').remove('.order-select-name');
						$(this).find('.current').prepend('<span class="order-select-name">' + selectText + '</span>');
				}
	});*/


	//select-end

	heightContGray();

	//filter color control
		//lighten color
		var shadeColor = function (color, percent) {

			var R = parseInt(color.substring(1,3),16);
			var G = parseInt(color.substring(3,5),16);
			var B = parseInt(color.substring(5,7),16);

			R = parseInt(R * (100 + percent) / 100);
			G = parseInt(G * (100 + percent) / 100);
			B = parseInt(B * (100 + percent) / 100);

			R = (R<255)?R:255;
			G = (G<255)?G:255;
			B = (B<255)?B:255;

			var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
			var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
			var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

			return "#"+RR+GG+BB;
	}

		//convert rgb - hex
		var rgb2hex =function (rgb) {
				rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				function hex(x) {
						return ("0" + parseInt(x).toString(16)).slice(-2);
				}
				return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}

		//hover box-shadow
		$('.filter__color-el').mouseover(function(){
			if(!$(this).hasClass('filter__color-el--white')) {
				var currentColor = $(this).css('backgroundColor');
				var lightenColor = shadeColor(rgb2hex(currentColor), -40);
				$(this).css('boxShadow', '0 9px 13px' + lightenColor);
			} else {
				$(this).css('boxShadow', '0 9px 13px #d4c8c8');
			}
		});
		$('.filter__color-el').mouseout(function () {
			$(this).css('boxShadow','none');
		});

		//active color
		$('.filter__color-el').click(function(){
			$(this).toggleClass('filter__color-el--active')
		});

		var removeColor = function(){
			$('.filter__color-el').removeClass('filter__color-el--active')
		}
	//filter color control end

	//filter size
	$('.filter__size-el').click(function(){
		$(this).toggleClass('filter__size-el--active')
	});
	var removeSize = function(){
			$('.filter__size-el').removeClass('filter__size-el--active')
	}
	//filter size-end

	//control filter
	$('.filter__head').click(function(){
		$(this).find('.filter__open').toggleClass('filter__open--active');
		$(this)
		.closest('.filter__el')
		.find('.filter__content')
		.slideToggle()
  });

  $('.filter-clear').click(function(){
  	removeColor();
  	removeSize();
  });
	//control filter-end

	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

	console.log(detectIE());
	if (detectIE() <= 14 && detectIE()) {
		$('body').empty();
		$('body').prepend('' +
		 '<div class="old-browser">' +
			'<div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br>' +
			'<div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br>' +
		'</div>');
	}

	//for init SVG 
	svg4everybody();
	// ==== clear storage =====
	 localStorage.clear();
	 sessionStorage.clear();
	 $(window).unload(function(){
		 localStorage.clear();
	 });
	// ==== clear storage end =====

	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/



	var resize = (function () {
		if( $(this).width() > 1023 ) {
			$('.item').hover(function(){
				$(this).toggleClass('item--active')
			});
    }
    if( $(this).width() < 1023 ) {
    }
	})();

	$(window).resize(function(){
		var modalHeightCont = $('.modal.modal__show').height();
		$('.modal-filter').height(modalHeightCont+30);
		$('.modal-wrap').css('minHeight',modalHeightCont + 30);
	});

	//resize function end

	//slider for item carousel

		$('.card-img__main').slick({
			slidesToShow: 2,
			autoplay: false,
			speed: 500,
			vertical:false,
			arrows:false,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
					dots:true
      	}
			}

  ]
		});
	$('.card-img__el').click(function(){
		var current = $(this).data('index');
		$('.card-img__main').slick('slickGoTo', current);

	});
	$('.card-img__main-control__el--next').click(function(){
		$(this).closest(".card-img__main-wrap").find(".card-img__main").slick('slickNext');
	});

	$('.card-img__main-control__el--prev').click(function(){
		$(this).closest(".card-img__main-wrap").find(".card-img__main").slick('slickPrev');
	});


	//slider for item carousel===end

	//show all card val
	$('.card-val-all').click(function(){
		$('.card-val .card-attr-row').css('display','flex');
		$(this).hide();
	});
	//show all card val===eтв

	//timer
	$('.timer').startTimer({
		loop: true,
		loopInterval: 3
	});
	$('<span class="timer-dot">:</span>').insertAfter('.jst-hours');
	setInterval(function(){
		$('.timer-dot').toggleClass('timer-dot--show');
	},1000);
	//timer===end

})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );