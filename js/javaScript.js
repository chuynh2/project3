var map;

function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
	center: { lat: 41.978113, lng: -87.6269799},
	zoom: 11.5
	});
	
	const boba = {
		url: "media/bobaIcon.png",
		scaledSize: new google.maps.Size(40,40),
	};
	
	const school = {
		url: "media/schoolIcon.png",
		scaledSize: new google.maps.Size(40,40),
	};
	
	const teaRex = new google.maps.Marker({
		animation: google.maps.Animation.DROP,
		position: {lat: 42.04634085824906, lng: -87.83102714629896},
		map,
		icon: boba,
		title: "TeaRex Bubble Tea Cafe",
	});
	
	const loyola = new google.maps.Marker({
		animation: google.maps.Animation.DROP,
		position: {lat: 41.99815452432496, lng: -87.65634275213937},
		map,
		icon: school,
		title: "Loyla University Chicago",
	});
	
	const lincolnParkHighSchool = new google.maps.Marker({
		animation: google.maps.Animation.DROP,
		position: {lat: 41.91875082841806, lng: -87.64601162349965},
		map,
		icon: school,
		title: "Lincoln Park High School",
	});
	
}

$(document).ready(function(){
	$('.slider').bxSlider({
		captions:true
	});
});
google.maps.events.addDomListener(window, 'load', initMap);
