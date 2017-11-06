function initialize() {
	var mapOptions = {
		zoom: 17,
		mapTypeControl: false,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControl: false,
		scrollwheel: false,
		center: new google.maps.LatLng(47.217126, 39.715945)
	}
	var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
	google.maps.event.trigger(map, 'resize');  
	var mapType = new google.maps.StyledMapType([
		{
			featureType: "all",
			stylers: [
				{ hue: "#0000ff" },
				{ saturation: -95 }
			]
		},
		{
			featureType: "poi",
			elementType: "label",
			stylers: [
				{ visibility: "off" }
			]
		}
	], { name:"Grayscale" });
	map.mapTypes.set('tehgrayz', mapType);
	map.setMapTypeId('tehgrayz');
	setMarkers(map, points[0]);
}

var points = [
	[
		[0, 47.217126, 39.715945, 'г. Ростов-на-Дону, ул. Береговая, 27а']
	]
];

var marker = [];
function setMarkers(map, locations) {
	for(var i=0; i<locations.length; i++) {
		var point = locations[i];
		var myLatLng = new google.maps.LatLng(point[1], point[2]);
		marker[i] = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: point[3],
			zIndex: point[0],
			visible: true
		});
	}
}

google.maps.event.addDomListener(window, 'load', initialize);
initialize();