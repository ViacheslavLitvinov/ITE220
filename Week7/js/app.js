//Viacheslav Litvinov :)
$(function(){
	$("a").on("click", function(e){
		
		$("#content-weather").hide();
		$("#main-box").removeClass("box-start");
		$("#main-box").addClass("box-weather");

		e.preventDefault();
		var city = this.text.toLowerCase();
       
		$.ajax({
			type: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=2de143494c0b295cca9337e1e96b00e0',
			success: function(data){
				//icon depends on the weather
				var weatherIcon;
				if (data.weather[0].main === "Rain") {
					weatherIcon = "<i class='wi wi-rain img-responsive'  style='font-size:20em'></i>";
				}
				else if (data.weather[0].main === "Snow") {
					weatherIcon = "<i class='wi wi-snow img-responsive' style='font-size:20em'></i>";
				}
				else if (data.weather[0].main === "Clouds") {
					weatherIcon = "<i class='wi wi-cloud img-responsive' style='font-size:20em'></i>";
				}
				else if (data.weather[0].main === "Extreme") {
					weatherIcon = "<i class='wi wi-tsunami img-responsive' style='font-size:20em'></i>";
				}
				else {
					weatherIcon = "<br><br><i class='wi wi-day-sunny img-responsive' style='font-size:20em'></i>";
				};
				
				
				function convertCelsius(temp) {
					temp = Math.round(temp - 273.15);
					return (temp  + " &deg;C");
				};
				function convertFarenheit(temp) {
					temp = Math.round((temp * 9 / 5) - 459.67);
					return (temp  + " &deg;F");
				};

				//past all the HTML content
				$("#content-weather").html(
					"<hr>" + 
					"<h2 class='intro-text text-center' style='font-size:2em'>The Weather in " + 
                    "<strong>" + data.name + "</strong>" + 
                    "</h2>" + 
                    "<hr>" + 
                    weatherIcon	+
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<hr class='visible-xs'>" +
                    "<p>Temperature: " + 
                    	"<br>" +
                    	"<strong><span style='font-size:3em' id='temperature'>" + convertCelsius(data.main.temp) + "</span></strong>" + 
                    	"<br>" +
                    	"<button id='cels'>" + "<h2 class='intro-text text-center'>Celsius<h2>" + "</button>" + 
                    	"   " + 
                    	"<button id='faren'>" + "<h2 class='intro-text text-center'>Farenheit</h2>" + "</button>" +
                    "</p>" + 
                    "<br>" +
                    
                    "<p>Wind Speed: " + 
                    	"<br>" +
                    	"<strong><span style='font-size:3em'>" + data.wind.speed + 
                   		" m/s" + 
                    	"</span></strong>" + 
                    "</p>" + 
                    "<br>" +
                    
                    "<p>Pressure: " + 
                    	"<br>" +
                    	"<strong><span style='font-size:3em'>" + data.main.pressure +
                    	" hpa" +  
                    	"</span></strong>" + 
                    "</p>" 
				).fadeIn(700);
				
				//buttons for temperature
				$("#cels").click(function(){
					$("#temperature").html(convertCelsius(data.main.temp));
				});
				$("#faren").click(function(){
					$("#temperature").html(convertFarenheit(data.main.temp));
				});
			}
		});
	});
});