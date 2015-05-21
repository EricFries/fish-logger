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
    navigator.geolocation.getCurrentPosition(function(position){
    	var latitude = position.coords.latitude;
    	var longitude = position.coords.longitude;
    	$("#latitude-log").val(latitude); 
    	$("#longitude-log").val(longitude);
    });
}

	function setDateTime(date){
		string_date = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
		string_time = date.getHours().toString() + ":" + date.getMinutes().toString();
		$("#time-log").val(string_time);
		$("#date-log").val(string_date);
}