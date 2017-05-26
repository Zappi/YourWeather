$(document).ready(function(){
    
    var lat;
    var lon;
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            $("#data").html("latitude: " + lat + " longitude: " + lon);
        console.log("la" + lat);
        
  });
      }
          
    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=9d1a5d7fd040aed65637d4dd56c39eeb";
    console.log("la2" + lat);
    console.log(api);
    
});
