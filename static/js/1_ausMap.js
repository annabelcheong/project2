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

// Load in GeoJson data 
var geoData = "./data/interest.geojson";

//Grab d3 data
d3.json(geoData, function(response) {

  response1 = response.features;

  console.log(response1);

  // Define markers
  var markers = L.markerClusterGroup();

  for (var i = 0; i < response1.length; i++) {

    var location = response1[i].geometry;
    console.log(location);
    
    if (location) {
     
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]]) // long, lat
      .bindPopup(response1[i].descriptor));
    }

  }

// Add our marker cluster layer to the map
myMap.addLayer(markers);

});