function insertMap(latitude, longitude, divID, allFish) {
	
function initialize() {
  var myLatlng = new google.maps.LatLng(latitude, longitude);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById(divID), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!',
      animation: google.maps.Animation.DROP
  });
  dropPins(allFish, map);
}

google.maps.event.addDomListener(window, 'load', initialize);


}

  function dropPins(allFish, map){
  for (var i = 0; i < allFish.length; i++){
    var myLatlng = new google.maps.LatLng(allFish[i].latitude, allFish[i].longitude);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
         animation: google.maps.Animation.DROP,
        title: allFish[i].species
    });
  }
}
