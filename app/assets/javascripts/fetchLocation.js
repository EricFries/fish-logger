$(function(){
	$("#mark-location").click(function(e){getLocation()})


});

  function getLocation() {
    // code here
    navigator.geolocation.getCurrentPosition(function(position){
    	var latitude = position.coords.latitude;
    	var longitude = position.coords.longitude;
    	$("#latitude").val(latitude); 
    	$("#longitude").val(longitude);
    });
}