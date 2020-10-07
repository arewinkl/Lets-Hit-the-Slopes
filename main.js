// 1 epic js
//vail
//breckenridge
//beaver creek
//keystone
//crested butte
//telluride
//snowmass

//1 icon js
//steamboat
//winter park
//copper mountain
//summit county
//aspen
//durango

// Pseudo-coding to begin 

//2 function, 
// 1 for resort
// 1 for weather conditions 

//variables to create from API
//resorts
//Report Date
// Percentage open
// Date of Last Significant snowfall
// Amount of last significant snowfall
// Consolidated snow depth on lower slopes
// Consolidated snow depth on upper slopes
// Surface condition description
// possibly!!! contact for resorts, address etc
//weather
// cloud
// precipitation (rain, hail, snow, sleet)
// humidity
// visibility
// weather code, icon and description
// fresh snow
// temperature
// feels like temperature
// wind direction
// wind speed
// wind gust


$(document).ready(function () {

  var currWeatherPila = "https://api.weatherunlocked.com/api/resortforecast/666020?app_id=8ef92fdb&app_key=f1a993da508ddcdd9c8459ab494bbc83"
  $.ajax({
    url: currWeatherPila,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    // BASE SNOW STATS

    var baseSnow = (response.forecast[0].base.freshsnow_in)
    var baseWind = (response.forecast[0].base.windspd_mph)
    var baseTemp = (response.forecast[0].base.temp_f)
    var baseFeel= (response.forecast[0].base.feelslike_f)
    var baseVis= (response.forecast[0].base.wx_desc)


    console.log(response.forecast[0].base.freshsnow_in)
    console.log(response.forecast[0].base.windspd_mph)
    console.log(response.forecast[0].base.temp_f)
    console.log(response.forecast[0].base.feelslike_f)
    console.log(response.forecast[0].base.wx_desc)

    $("#snow").append(baseSnow + " inches")
    $("#wind").append(baseWind + " MPH")
    $("#temp").append(baseTemp + " Fahrenheit")
    $("#feels-like").append(baseFeel + " Fahrenheit")
    $("#visibility").append(baseVis)


    // PEAK SNOW STATS

    console.log(response.forecast[0].upper.freshsnow_in)
    console.log(response.forecast[0].upper.windspd_mph)
    console.log(response.forecast[0].upper.temp_f)
    console.log(response.forecast[0].upper.feelslike_f)
    console.log(response.forecast[0].upper.wx_desc)

    var peakSnow = (response.forecast[0].upper.freshsnow_in)
    var peakWind = (response.forecast[0].upper.windspd_mph)
    var peakTemp = (response.forecast[0].upper.temp_f)
    var peakFeel= (response.forecast[0].upper.feelslike_f)
    var peakVis= (response.forecast[0].upper.wx_desc)



    $("#snow-peak").append(peakSnow + " inches")
    $("#wind-peak").append(peakWind + " MPH")
    $("#temp-peak").append(peakTemp + " Fahrenheit")
    $("#feels-like-peak").append(peakFeel + " Fahrenheit")
    $("#visibility-peak").append(peakVis)




  });


  var from = "EUR";
  var to = "USD";
  var amount = "10";
  var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://currency26.p.rapidapi.com/convert/" + from + "/" + to + "/" + amount,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency26.p.rapidapi.com",
		"x-rapidapi-key": "a32a78eeadmsh2e228973a5b48fbp189947jsn7abd11e355ff"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


})


