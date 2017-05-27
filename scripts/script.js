$(document).ready(function(){
    
    var latitude;
    var longitude;
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(geoposition) {
            latitude = geoposition.coords.latitude;
            longitude = geoposition.coords.longitude;
            $("#data").html("latitude: " + latitude + " longitude: " + longitude);
        
            
        var API_KEY = "9d1a5d7fd040aed65637d4dd56c39eeb";
        var api = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+API_KEY;
        console.log(api);    
            
            $.getJSON(api, function(data) {
                var celciusSelected=true;
                var celciusTemperature = (data.main.temp - 273.15).toFixed(1);
                var fahrenheitTemperature = (data.main.temp * 9/5 - 459.67).toFixed(1);	
                
                
                $("#location").html(data.name); $("#weathertype").html(data.weather[0].description);
                
                $("#temperature").html(celciusTemperature + " &#8451");                

                $("#temperature").click(function() {
                    if(celciusSelected===false) { 
                       $("#temperature").html(celciusTemperature + " &#8451");
                    celciusSelected=true;
                    } else{
                    $("#temperature").html(fahrenheitTemperature + " &#8457");
                    celciusSelectede=false;
                }
                });
                
                
                $("#humidity").html(data.main.humidity + " %");
                $("#airpressure").html(data.main.pressure + " hPa");
                $("#windspeed").html(data.wind.speed + " m/s");
                
            });
            });
      }
});
