$(function() {

	// Маска на input
	jQuery(function($){
   $(".phone").mask("+7 (999) 999-99-99");
	});

	//карусель
	$(".owl-carousel").owlCarousel({
		loop : true,
		margin : 25,
		responsiveClass : true,
		nav : true,
		autoplay : true,
		autoplayTimeout : 5000,
		smartSpeed : 250,
		responsive : {
			0 : {
				items : 1,
				nav : false,
			},
			600 : {
				items : 1,
				nav : true,
			},
			1000 : {
				items : 2,
				nav : true,
			},
		},
	});

		// Создает обработчик события window.onLoad
	YMaps.jQuery(function () {
		// Создает экземпляр карты и привязывает его к созданному контейнеру
		var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
		    
		// Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
		map.setCenter(new YMaps.GeoPoint(71.4801, 51.1488), 17);
		//Создает метку
		var placemark = new YMaps.Placemark(new YMaps.GeoPoint(71.4817, 51.1488), {style: "default#redPoint"});
		placemark.name = "г.Астана, ул. Куйши Дина 28";
		map.addOverlay(placemark); 

	})

	//Форма обатной формы
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