
function initMap() {

  var mapa = document.getElementById("map");
  var ny = {lat: 40.7128, lng: -74.0060};

  var map = new google.maps.Map(mapa, {
    zoom: 11,
    center: ny
  });

  var marker = new google.maps.Marker({
    position: ny,
    map: map,
    title: "New York, NY"
  });
}

// As a User
// When I view the site
// I see a map

// As a User
// When I view the site
// I expect to only see NYC

// As a User
// When I view the site
// I want to see a marker on NYC


// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc