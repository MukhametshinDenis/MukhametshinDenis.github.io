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
	$('.time, .address, .certificate, header .menu, .litecoin, .dash, .amount, .soc-icons, footer .info').addClass('animated slideInRight');
	$(' .bg-log, .bitcoin, .ethereun, .plan, footer .menu').addClass('animated slideInLeft');
	$(' .statistics, footer .logo-footer').addClass('animated slideInDown');
	$('.content-text, .button').addClass('animated fadeIn');
	$('.description, .table').addClass('animated rubberBand');
	$('.h2').addClass('animated flash');
	$('.calculate .block').addClass('animated shake');
	$('.advantages .block').addClass('animated bounce');
	$('.title-pay, .pay-icons').addClass('animated jello');
});
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