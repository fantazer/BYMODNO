$(document).ready(function(){
	
	//slider on card
	$('.card-img__el').click(function(){
		var url = $(this).css('backgroundImage');
		$('.card-img__lg').css('backgroundImage', url);
	});

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

	//get height cont-gray
	var heightContGray = function(){
		var bredCrumbs = $('.main-cont--bread').height();
		var cardAbout = $('.card-about').height();
		console.log('bredCrumbs',bredCrumbs);
		console.log('cardAbout',cardAbout);
		$('.cont-gray').css('height',bredCrumbs + cardAbout + 'px')
	};
	heightContGray();

	//select
	$('.select-beauty').niceSelect()

	$('.item').hover(function(){
		$(this).toggleClass('item--active')
	});

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