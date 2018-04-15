$(function() {

	// Custom JS

	// moment.js
	var NowMoment = moment().format('hh:mm:ss');
	// вывод значения объекта moment в #displayMoment div
	var eDisplayMoment = document.getElementById('displayMoment');
	eDisplayMoment.innerHTML = NowMoment;

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
			if ($(window).width() <= '768'){
			$('.nav').slideUp();
			$('.burger').removeClass('show');
		} else {
			$('.nav').css('display' , 'block');
		}
		});

	//select style
	$('select').styler(); //http://dimox.name/jquery-form-styler/

	$('.trigger').click(function() {
		$('modal-enter').css('left', '50%');
	})

});
/*//modal-popup
$(".modal-enter").iziModal({
	width : 339,
	height : 500
	background: 'transparent',
});
$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('input.cake').val($(this).parents('.product').find('h6').text());
    $('.modal-enter').iziModal('open');
});
$("#btn_send").click(function() {$('#modal').iziModal('close');})
$('.close').click(function(e){
  $(this).parents('.iziModal').iziModal('close');
});*/