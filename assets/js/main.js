/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');


	});

})(jQuery);

const getRemainTime= deadline=>{/*getRemainTime significa obtener el tiempo faltante*/
    let now= new Date(),/*new Date() nos devuelve la fecha actual*/
     remainTime=(new Date(deadline)-now+1000)/1000,/*remaiTime=new Date(deadline)-now tiempo que falta para 
     llegar está fecha limite nos devuelve en milisegundo y lo dividimos en 1000 para que pasé a segundos*/
     remainSeconds=('0'+Math.floor(remainTime % 60)).slice(-2),/*En segundos, Math.floor pasar 
     numero entero, y slice(-2) hace seleccionar los 2 ultimos digitos*/
     remainMinutes=('0'+Math.floor(remainTime /60 % 60)).slice(-2),
     remainHours=('0'+Math.floor(remainTime /3600 % 24)).slice(-2),/*Cuantos segundos hay 
    en un hora (3600) y cuantas horas hay en un día (24)*/
    remainDays=Math.floor(remainTime / (3600 * 24));/*3600 que tiene una hora y 24 horas que
    tiene un día*/
     return{
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays
     }
};
//console.log(getRemainTime('Oct 17 2019 15:26:43 GMT-0600'));
const countdown=(deadline,elem,finalMessage)=>{/*finalMessage mensaje que se va a imprimir
cuano¿to termine el tiempo*/

const el=document.getElementById(elem);/**Identificar el elemento*/
const timerUpdate=setInterval(()=>{/*Crear la función que se va actualizar cada segundo*/
    let t=getRemainTime(deadline);
    el.innerHTML=`${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
    if(t.remainTime<=1){/*Cuando se cumple va a dejar de contar hacia atras*/
    clearInterval(timerUpdate);
    el.innerHTML=finalMessage;
    }
},1000);/*1000 cada segundo se actualice*/
};
countdown("Jun 14 2020 23:59:59 GMT-0500","clock","La oportunidad ha terminado");


