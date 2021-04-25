// Logic for the map containing markers of events 

// Logic for calendar dropdown
// var picker = new Lightpick({
//   field: document.getElementById('dropdown-calendar'),
//   singleDate: false,
//   minDate: moment().startOf('month').add(7, 'day'),
//   maxDate: moment().endOf('month').subtract(7, 'day'),
//   onSelect: function(start, end){
//       var str = '';
//       str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
//       str += end ? end.format('Do MMMM YYYY') : '...';
//       document.getElementById('result-6').innerHTML = str;
//   }
// });


// Creating map object
// * Co-ordinates and zoom show Australia
var myMap = L.map("map", {
  center: [-25.58, 134.50],
  zoom: 4
  });

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


//////////////////////////////////////////////////
// NEED TO EDIT THIS NEXT SECTION FOR PROJECT 2 //
//////////////////////////////////////////////////

// 1. Pull out co-ordinates from PostGRES (in list or dictionary form)
// 2. Store co-ordinates into location via for loop

// Load in coordinates data from @app.route("/api_events")
var appRoute = 'api_events';

//Grab data with d3
d3.json(appRoute).then((data) => {

  // CHECK data is loaded
  console.log(data);

  // Pull data for locations

  // Create markers for cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < data.length; i++) {

    // Set the data location property to a variable
    var location = data[i].location;

    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coords[1], location.coords[0]])
        .bindPopup(data[i].description));
    }
  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});


// // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < cities.length; i++) {
//   L.circle(cities[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: "purple",
//     // Setting our circle's radius equal to the output of our markerSize function
//     // This will make our marker's size proportionate to its population
//     radius: markerSize(cities[i].population)
//   }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
// }

// });