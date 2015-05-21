function insertMap(latitude, longitude) {
	
function initialize() {
  var myLatlng = new google.maps.LatLng(latitude, longitude);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById('fish-map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!',
      animation: google.maps.Animation.DROP
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


}