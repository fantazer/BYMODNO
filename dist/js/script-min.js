$(document).ready(function(){function t(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);var r=t.indexOf("Trident/");if(r>0){var n=t.indexOf("rv:");return parseInt(t.substring(n+3,t.indexOf(".",n)),10)}var i=t.indexOf("Edge/");return i>0&&parseInt(t.substring(i+5,t.indexOf(".",i)),10)}var e=!0,r=function(t,r){$(window).resize(function(){return $(window).width()<t&&e?(r.apply({},[]),e=!1):$(window).width()>t?e=!0:void 0})},n=function(){console.log("i am foo")};r(768,n),$(".card-img__el").click(function(){var t=$(this).css("backgroundImage");$(".card-img__lg").css("backgroundImage",t)}),$(".card-tab__el").click(function(){var t=$(this).data("tab");$(".card-tab__el").removeClass("card-tab__el--active"),$(this).addClass("card-tab__el--active"),$(".card-attr").each(function(){var e=$(this).data("tab");e==t?$(this).addClass("card-attr--active"):$(this).removeClass("card-attr--active")})});var i=function(){var t=$(".main-cont--bread").height(),e=$(".card-about").height();console.log("bredCrumbs",t),console.log("cardAbout",e),$(".cont-gray").css("height",t+e+"px")};i(),$(".select-beauty").niceSelect(),$(".nice-select li").each(function(){var t=$(this).data("color");t&&$(this).prepend('<span class="order-select-color" style="background-color:  '+$(this).data("color")+' " ></span>')}),$(".item").hover(function(){$(this).toggleClass("item--active")}),i();var o=function(t,e){var r=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),i=parseInt(t.substring(5,7),16);r=parseInt(r*(100+e)/100),n=parseInt(n*(100+e)/100),i=parseInt(i*(100+e)/100),r=r<255?r:255,n=n<255?n:255,i=i<255?i:255;var o=1==r.toString(16).length?"0"+r.toString(16):r.toString(16),a=1==n.toString(16).length?"0"+n.toString(16):n.toString(16),s=1==i.toString(16).length?"0"+i.toString(16):i.toString(16);return"#"+o+a+s},a=function(t){function e(t){return("0"+parseInt(t).toString(16)).slice(-2)}return t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+e(t[1])+e(t[2])+e(t[3])};$(".filter__color-el").mouseover(function(){if($(this).hasClass("filter__color-el--white"))$(this).css("boxShadow","0 9px 13px #d4c8c8");else{var t=$(this).css("backgroundColor"),e=o(a(t),-40);$(this).css("boxShadow","0 9px 13px"+e)}}),$(".filter__color-el").mouseout(function(){$(this).css("boxShadow","none")}),$(".filter__color-el").click(function(){$(this).toggleClass("filter__color-el--active")});var s=function(){$(".filter__color-el").removeClass("filter__color-el--active")};$(".filter__size-el").click(function(){$(this).toggleClass("filter__size-el--active")});var c=function(){$(".filter__size-el").removeClass("filter__size-el--active")};$(".filter__head").click(function(){$(this).find(".filter__open").toggleClass("filter__open--active"),$(this).closest(".filter__el").find(".filter__content").slideToggle()}),$(".filter-clear").click(function(){s(),c()}),console.log(t()),t()<=14&&t()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()});var e=!0,r=function(t,r){$(window).resize(function(){return $(window).width()<t&&e?(r.apply({},[]),e=!1):$(window).width()>t?e=!0:void 0})},n=function(){console.log("i am foo")};r(768,n),$(window).resize(function(){i()})}),function(t,e){"use strict";var r="img/pack.html",n=1;if(!e.createElementNS||!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var i,o,a="localStorage"in t&&null!==t.localStorage,s=function(){e.body.insertAdjacentHTML("afterbegin",o)},c=function(){e.body?s():e.addEventListener("DOMContentLoaded",s)};if(a&&localStorage.getItem("inlineSVGrev")==n&&(o=localStorage.getItem("inlineSVGdata")))return c(),!0;try{i=new XMLHttpRequest,i.open("GET",r,!0),i.onload=function(){i.status>=200&&i.status<400&&(o=i.responseText,c(),a&&(localStorage.setItem("inlineSVGdata",o),localStorage.setItem("inlineSVGrev",n)))},i.send()}catch(l){}}(window,document);