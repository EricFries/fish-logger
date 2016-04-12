$(function(){
    $("#reset-location-time").click(function(e){
    	$("#time-log").val("");
    	$("#date-log").val("");
    	$("#latitude-log").val(""); 
    $("#longitude-log").val("");
    	getLocation();
    	setDateTime(new Date());
    });
});

function getLocation() {
    // code here
    navigator.geolocation.getCurrentPosition(
    	function(position){
    	var latitude = position.coords.latitude;
    	var longitude = position.coords.longitude;
    	$("#latitude-log").val(latitude); 
    	$("#longitude-log").val(longitude);
    }, handleLocationError, {enableHighAccuracy: true, maximumAge: 2500}
    );
}

function handleLocationError(err){
	if (err.code === 1){
		return alert("You need to allow the device to access your current location.");
	}
	else {
		return alert("Your location could not be determined.");
	}
}

function setDateTime(date){
    string_date = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
    string_time = date.getHours().toString() + ":" + date.getMinutes().toString();
    $("#time-log").val(string_time);
    $("#date-log").val(string_date);
}