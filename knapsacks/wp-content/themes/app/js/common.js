$(function() {

	// Custom JS

	$("#modal").iziModal({
		width: 400,
	});
	$(document).on('click', '.trigger', function (event) {
		event.preventDefault();
		$('#modal').iziModal('open');
	});
	$("#btn_send").click(function() {$('#modal').iziModal('close');})
	$('.close').click(function(e){
		$(this).parents('.iziModal').iziModal('close');
	});

	jQuery(function($){
		$("#phone").mask("+7 (999) 999-99-99");
	});

/*	var products = $(".product");
	for (var i = 4; i < products.length; i++) {
		products[i].style.display = "none";
	}
	$(".show_btn").click(function() {
		for (var i = 4; i < products.length; i++) {
			products[i].classList.toggle("hide");
			if(products[i].classList.contains('hide')) {
				products[i].style.display = "none";
			} else {
				products[i].style.display = "block";
			}
		}
	});*/
$('.show_btn').click(function(){
    $('.product:nth-child(n+5)').slideToggle(500);
    $(this).toggleClass('toggle');
    $(this).text($(this).hasClass('toggle') ? 'Скрыть' : 'Показать еще');
  });
});

$(document).ready(function() {


	$("a.ancLinks").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});

	$("#form").submit(function() {
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