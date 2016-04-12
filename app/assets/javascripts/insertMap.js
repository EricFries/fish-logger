function insertMap(divID, allFish) {
  function initialize() {
    var mapOptions = {
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROAD
    };
    var map = new google.maps.Map(document.getElementById(divID), mapOptions);

  //Navionics SonarChart
  var navionics_sonarchart_layer = new JNC.Views.gNavionicsOverlay({
      navKey: "Navionics_webapi_00976",
      chartType: JNC.Views.gNavionicsOverlay.CHARTS.SONAR,
      depthUnit: JNC.DEPTH_UNIT.FEET
  });

  map.overlayMapTypes.insertAt(0, navionics_sonarchart_layer);
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

function initialize() {
  markerCounter = 0;
  markerTime = null;
  infowindow = new google.maps.InfoWindow();
    function watchLocation() {
        var mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROAD,
        center: new google.maps.LatLng(41.2939413, -72.3131606)
        };
        var map = new google.maps.Map(document.getElementById('watch-map'), mapOptions);

      navigator.geolocation.watchPosition(
        function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude); 
        console.log(longitude);
        markerCounter ++;
        markerTime = new Date();
        dropPin(latitude, longitude, map);
      }, 

      handleLocationError, 

      {enableHighAccuracy: true, maximumAge: 1000});
    }

    function dropPin(latitude, longitude, map){ 
      var myLatlng = new google.maps.LatLng(latitude, longitude);
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: google.maps.Animation.DROP,
          infoContent: '<ul><li>Marker No. ' + markerCounter + '</li><li> ' + markerTime.getHours() + ':' + markerTime.getMinutes() + ':' + markerTime.getSeconds() + '</li>' + '<li>Latitude: ' + latitude + '</li><li>Longitude: ' + longitude
        });

      google.maps.event.addListener(marker, 'click', (function(marker) { 
        return function() {
          infowindow.setContent(marker.infoContent);
          infowindow.open(map, marker);
        };
      })(marker)); 
    };
      
    watchLocation();
};
