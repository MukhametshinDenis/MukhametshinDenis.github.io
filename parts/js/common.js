$(function() {

	//прелодер
	$(window).load(function() { 
		$(".loaderInner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});

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

	//Запуск прелодер
	var form = $('#test_form');
	form.preloader('start');
	$.post('/backend/', form.serialize())
	.done(function() { /*...*/ })
	.fail(function() { /*...*/ })
	.always(function() {
			form.preloader('stop');
	});

});

	//плагин прелодер
(function($) {
    var actions = {
        start: function() {
            var $preloader = $("<div id='jpreloader' class='preloader-overlay'><div class='loader' style='position:absolute;left:50%;top:50%;margin-left:-24px;margin-top:-24px;'><svg width='48px' height='48px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-default'>...</svg></div></div>");
            $preloader.css({
                'background-color': '#4c4c4c',
                'width': '100%',
                'height': '100%',
                'left': '0',
                'top': '0',
                'opacity': '0.3',
                'z-index': '100',
                'position': 'absolute'
            });
            this.append($preloader);
        },

        stop: function() {
            this.find('.preloader-overlay').remove();
        }
    };
    
    $.fn.preloader = function(action) {        
        actions[action].apply(this);
        return this;
    };
}(jQuery));