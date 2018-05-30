$(function() {

	// tabs
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	//iziModal
	$("#modal1, #modal2").iziModal({
		padding: 60,
		overlayColor: 'rgba(0, 0, 0, .7)',
	});
	$(document).on('click', '.trigger1', function (event) {
		event.preventDefault();
		$('#modal1').iziModal('open');
	});
	$(document).on('click', '.trigger2', function (event) {
		event.preventDefault();
		$('#modal2').iziModal('open');
	});

	//header-down -scroll down
	$("a.header-down").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1000 );
		return false;
	});

	//form
	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});


});
