$(document).ready(function(){function e(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var a=e.indexOf("Trident/");if(a>0){var o=e.indexOf("rv:");return parseInt(e.substring(o+3,e.indexOf(".",o)),10)}var s=e.indexOf("Edge/");return s>0&&parseInt(e.substring(s+5,e.indexOf(".",s)),10)}$(".incr__minus").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())-1;t=t<1?0:t,e.html(t)}),$(".incr__minus.incr--one").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())-1;t=t<2?1:t,e.html(t)}),$(".incr__plus").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())+1;t=t>100?100:t,e.html(t)}),$(".basket-cont").perfectScrollbar();var t=0,a=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").removeClass("modal-fix"),$("body").css({overflow:"",position:"",top:""}).scrollTop(t),$(".modal").removeClass("modal__show"),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open")},o=function(){$(".modal-layer").hasClass("modal-layer-show")||$(".modal-layer").addClass("modal-layer-show"),$("body").hasClass("modal-fix")||($("body").addClass("modal-fix"),t=$("body").scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-t,width:"100%"}))};$(".modal-get").click(function(){$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open"),o();var e=$(this).data("modal");$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var t=$(".modal.modal__show").height();$(".modal-filter").height(t+30),$(".modal-wrap").css("minHeight",t+30)}),$(".modal-close ,modal-wrap , .modal-filter, .toggle-close-modal").click(function(){a()}),$(".head-tool__icon--profile .icon").click(function(){$(".enter").addClass("enter--open"),o()}),$(".enter-close").click(function(){$(".enter").removeClass("enter--open"),a()}),$(".head-tool__cart .icon").click(function(){$(".basket").addClass("basket--open"),o();var e=0;$(".basket__row").slice(0,2).each(function(){e+=1*$(this).outerHeight()}),$(".basket-cont").height(e)}),$(".basket-close").click(function(){$(".basket").removeClass("basket--open"),a()}),$(".blog-slider").owlCarousel({items:1,autoHeight:!1,dots:!1,autoplay:!0,singleItem:!0,nav:!1});var s=$(".blog-slider");s.owlCarousel(),$(".blog-slider-control__el--prev").click(function(){s.trigger("next.owl.carousel")}),$(".blog-slider-control__el--next").click(function(){s.trigger("prev.owl.carousel",[300])});var i=450;$(window).scroll(function(){var e=$(this).scrollTop();e>=i?$(".scroll-up").addClass("scroll-up--show"):$(".scroll-up").removeClass("scroll-up--show")}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1});var l=$("#mobile-menu").mmenu({navbar:{title:"Главное меню",content:["searchfield"]},extensions:["effect-listitems-slide","fullscreen"],offCanvas:{position:"left",zposition:"front"}});if(l.data("mmenu")){var n=l.data("mmenu");n.bind("opening",function(){$(".head-toggle").toggleClass("header-mobile-togle--open")}),n.bind("closing",function(){$(".head-toggle").toggleClass("header-mobile-togle--open")}),$(".modal-get").click(function(){n.close()})}$(".list-toogle").click(function(){$(".list-tool").slideToggle()}),$(".head-search__wrap .icon--mobile").click(function(){event.stopPropagation(),$(".head-search__wrap").addClass("head-search__wrap--show"),$(".head-search__wrap").on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(".head-search__wrap").removeClass("head-search__wrap--show")}),$(".head-search__input").focus()}),$(".card-tab__el").click(function(){var e=$(this).data("tab");$(".card-tab__el").removeClass("card-tab__el--active"),$(this).addClass("card-tab__el--active"),$(".card-attr").each(function(){var t=$(this).data("tab");t==e?$(this).addClass("card-attr--active"):$(this).removeClass("card-attr--active")})}),$(".contact-tab__el").click(function(){var e=$(this).data("tab");$(".contact-tab__el").removeClass("contact-tab__el--active"),$(this).addClass("contact-tab__el--active"),$(".contact-attr").each(function(){var t=$(this).data("tab");t==e?$(this).addClass("contact-attr--active"):$(this).removeClass("contact-attr--active")}),$(".contact-map__el").each(function(){var t=$(this).data("tab");t==e?$(this).addClass("contact-map__el--active"):$(this).removeClass("contact-map__el--active")})});var r=function(){var e=$(".main-cont--bread").height(),t=$(".card-about").height();$(".cont-gray").css("height",e+t+"px")};r(),$(".select-beauty").niceSelect(),$(".nice-select li").each(function(){var e=$(this).data("color");e&&$(this).prepend('<span class="order-select-color" style="background-color:  '+$(this).data("color")+' " ></span>')}),r();var c=function(e,t){var a=parseInt(e.substring(1,3),16),o=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16);a=parseInt(a*(100+t)/100),o=parseInt(o*(100+t)/100),s=parseInt(s*(100+t)/100),a=a<255?a:255,o=o<255?o:255,s=s<255?s:255;var i=1==a.toString(16).length?"0"+a.toString(16):a.toString(16),l=1==o.toString(16).length?"0"+o.toString(16):o.toString(16),n=1==s.toString(16).length?"0"+s.toString(16):s.toString(16);return"#"+i+l+n},d=function(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+t(e[1])+t(e[2])+t(e[3])};$(".filter__color-el").mouseover(function(){if($(this).hasClass("filter__color-el--white"))$(this).css("boxShadow","0 9px 13px #d4c8c8");else{var e=$(this).css("backgroundColor"),t=c(d(e),-40);$(this).css("boxShadow","0 9px 13px"+t)}}),$(".filter__color-el").mouseout(function(){$(this).css("boxShadow","none")}),$(".filter__color-el").click(function(){$(this).toggleClass("filter__color-el--active")});var h=function(){$(".filter__color-el").removeClass("filter__color-el--active")};$(".filter__size-el").click(function(){$(this).toggleClass("filter__size-el--active")});var f=function(){$(".filter__size-el").removeClass("filter__size-el--active")};$(".filter__head").click(function(){$(this).find(".filter__open").toggleClass("filter__open--active"),$(this).closest(".filter__el").find(".filter__content").slideToggle()}),$(".filter-clear").click(function(){h(),f()}),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()});(function(){$(this).width()>1023&&$(".item").hover(function(){$(this).toggleClass("item--active")}),$(this).width()<1023})();$(window).resize(function(){var e=$(".modal.modal__show").height();$(".modal-filter").height(e+30),$(".modal-wrap").css("minHeight",e+30)}),$(".card-img__main").slick({slidesToShow:2,autoplay:!1,speed:500,vertical:!1,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]}),$(".card-img__el").click(function(){var e=$(this).data("index");$(".card-img__main").slick("slickGoTo",e)}),$(".card-val-all").click(function(){$(".card-val .card-attr-row").css("display","flex"),$(this).hide()}),$(".timer").startTimer({loop:!0,loopInterval:3}),$('<span class="timer-dot">:</span>').insertAfter(".jst-hours"),setInterval(function(){$(".timer-dot").toggleClass("timer-dot--show")},1e3)}),function(e,t){"use strict";var a="img/pack.html",o=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var s,i,l="localStorage"in e&&null!==e.localStorage,n=function(){t.body.insertAdjacentHTML("afterbegin",i)},r=function(){t.body?n():t.addEventListener("DOMContentLoaded",n)};if(l&&localStorage.getItem("inlineSVGrev")==o&&(i=localStorage.getItem("inlineSVGdata")))return r(),!0;try{s=new XMLHttpRequest,s.open("GET",a,!0),s.onload=function(){s.status>=200&&s.status<400&&(i=s.responseText,r(),l&&(localStorage.setItem("inlineSVGdata",i),localStorage.setItem("inlineSVGrev",o)))},s.send()}catch(c){}}(window,document);