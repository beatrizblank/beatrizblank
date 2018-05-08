// As a User
// When I visit the site
// I expect to see the names of the all the stations

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function (stations) {
    var stationFree = stations.filter(function(station) {
      return station.free > 0;
    });

    var fifty = stationFree.splice(0, 50);

    fifty.forEach(function(station) {
      var stationName = station.name;
      var numberFree = station.free;

      $(".bikes").append("<li>" + stationName + ": " + numberFree + "</li>")
    });
  },
});

// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection



//i dont have access to citi bike here
