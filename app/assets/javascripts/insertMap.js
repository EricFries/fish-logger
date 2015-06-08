function insertMap(divID, allFish) {
	
function initialize() {
  var mapOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById(divID), mapOptions);

  dropPins(allFish, map);
}

google.maps.event.addDomListener(window, 'load', initialize);
}

function dropPins(allFish, map){
  var bounds = new google.maps.LatLngBounds();
  var infowindow = new google.maps.InfoWindow(); 
  for (var i = 0; i < allFish.length; i++){
    var myLatlng = new google.maps.LatLng(allFish[i].latitude, allFish[i].longitude);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
         animation: google.maps.Animation.DROP,
        title: allFish[i].species
    });
    bounds.extend(marker.position);
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(allFish[i].species);
      infowindow.open(map, marker);
    };
  })(marker, i));  
  }

  // Don't zoom in too far on only one marker
  if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
      var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.03, bounds.getNorthEast().lng() + 0.03);
       var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.03, bounds.getNorthEast().lng() - 0.03);
       bounds.extend(extendPoint1);
       bounds.extend(extendPoint2);
    }
  map.fitBounds(bounds);
  
}
