$(function() {


	//carousel in section marks
	$(".marks-carousel").owlCarousel({
		loop : true,
		margin : 25,
		responsiveClass : true,
		nav : false,
		mouseDrag: false,
		touchDrag: false,
		autoplay : true,
		autoplayTimeout : 2000,
		smartSpeed : 250,
		animateIn: true,
		responsive : {
			0 : {
				items : 1,
				nav : false,
			},
			600 : {
				items : 1,
				nav : false,
			},
			1000 : {
				items : 1,
				nav : false,
			},
		},
	});

	//carousel in section reviews
	$(".reviews-carousel").owlCarousel({
		loop : true,
		margin : 25,
		responsiveClass : true,
		nav : true,
		navText : ['<i class="material-icons">arrow_left</i>', '<i class="material-icons">arrow_right</i>'],
		autoplay : true,
		autoplayTimeout : 5000,
		smartSpeed : 500,
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
				items : 1,
				nav : true,
			},
		},
	});

});
