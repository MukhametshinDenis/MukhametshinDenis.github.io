$(function() {

	// Custom JS

	// moment.js
	var now = moment.tz("Europe/London").format('HH:mm:ss');
	// вывод значения объекта moment в #displayMoment div
	var eDisplayMoment = document.getElementById('displayMoment');
	eDisplayMoment.innerHTML = now;

	// burger menu
		$('.burger').click(function() {
			$(this).toggleClass('show');		
			if($(this).hasClass('show')){
				$('.nav').slideDown();
			} else {
				$('.nav').slideUp();
			}
		});
		$('.nav > li').click(function() {
			if ($(window).width() <= '768') {
			$('.nav').slideUp();
			$('.burger').removeClass('show');
		}
		});
		$(window).resize(function() {
			if ($(window).width() > '768') {
				$('.nav').css('display' , 'block');
			} else {
				$('.nav').css('display' , 'none');
			}
		});

	//select style
	$('select, #radio').styler(); //http://dimox.name/jquery-form-styler/

	//animate
	new WOW().init();
	
	$('.time, .address, .certificate, header .menu, .litecoin, .dash, .amount, .soc-icons, footer .info').addClass('wow slideInRight');
	$(' .bg-log, .bitcoin, .ethereun, .plan, footer .menu').addClass('wow slideInLeft');
	$(' .statistics, footer .logo-footer').addClass('wow slideInDown');
	$('.content-text, .button').addClass('wow fadeIn');
	$('.description, .table').addClass('wow rubberBand');
	$('.h2').addClass('wow flash');
	$('.calculate .block').addClass('wow shake');
	$('.advantages .block').addClass('wow bounce');
	$('.title-pay, .pay-icons').addClass('wow jello');


	//modal-popup for .modal-enter
	$(".modal-enter").iziModal({
		backgound : 'transparent',
		padding : 30,
	});
	$(document).on('click', '.trigger-ent', function (event) {
	    $('.modal-enter').iziModal('open');
	});
	$("#btn-send-ent").click(function() {$('.modal-enter').iziModal('close');})

	//modal-popup for .modal-registration
	$(".modal-registration").iziModal({
		width : 1000
	});
	$(document).on('click', '.trigger-reg', function (event) {
	    $('.modal-registration').iziModal('open');
	});
	$("#btn-send-reg").click(function() {$('.modal-registration').iziModal('close');})


});
$(document).ready(function() {
	
});