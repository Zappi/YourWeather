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

            $.getJSON(api, function(data) {
                var celciusSelected=true;
                var celciusTemperature = (data.main.temp - 273.15).toFixed(1);
                var fahrenheitTemperature = (data.main.temp * 9/5 - 459.67).toFixed(1);	
                var weatherType = data.weather[0].description;


                $("#location").html(data.name); $("#weathertype").html(weatherType);

                $("#temperature").html(celciusTemperature + " &#8451");                

                $("#temperature").click(function() {
                    if(celciusSelected===false) { 
                        $("#temperature").html(celciusTemperature + " &#8451");
                        celciusSelected=true;
                    } else{
                        $("#temperature").html(fahrenheitTemperature + " &#8457");
                        celciusSelected=false;
                    }
                });


                $("#humidity").html(data.main.humidity + " %");
                $("#airpressure").html(data.main.pressure + " hPa");
                $("#windspeed").html(data.wind.speed + " m/s");

                if(weatherType.includes("clear")) {
                    $("#icon").html("&#9728");
                } else if(weatherType.includes("rain")) {
                    $("#icon").html("&#9748");
                } else if(weatherType.includes("cloud")) {
                    $("#icon").html("&#9729");
                } else if(weatherType.includes("lightning")) {
                    $("#icon").html("&#9735");
                } else if(weatherType.includes("snow")) {
                    $("#icon").html("&#9731");
                }
                    
            });
        });

    } else {
        $("#icon").html("Could not find the weather!");
    }   

});



