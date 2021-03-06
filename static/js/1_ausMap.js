// Logic for the map containing markers of events 

// Creating map object
// * Co-ordinates and zoom show Australia
// Australia LatLong: [-26.853387500000004, 133.27515449999999]

var myMap = L.map("map", {
    center: [-28, 135], // Array[1], Array[0]
    zoom: 4
    });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    // accessToken: API_KEY
    accessToken: "pk.eyJ1Ijoidmp1bGlhbmEiLCJhIjoiY2tuZnZ6eXFtMDY2dTJ2czNueGtnZjRqYyJ9.hrTcUSyz6g7XrmGlra6CCQ"
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
    //console.log(data);
  
    // The map will show coordinates and pop up showing: (1) title; (2) start date; (3) category type
    var coords = data.map(d => d.coords);
    console.log(coords);
  
    var title = data.map(t => t.title);
    var startdate = data.map(sd => sd.start_date = new Date(sd.start_date));
    var category = data.map(cat => cat.category);
    
    // Pull data for locations
    // Coordinates are in one string, requiring to be split
    var splitCoords = coords.map(coordinates =>  coordinates.split(","));
    //console.log(splitCoords);
  
    // Create markers for cluster group
    var markers = L.markerClusterGroup();
  
    // Loop through data
    for (var i = 0; i < splitCoords.length; i++) {
  
      // Set the data location property to a variable
      var location = splitCoords[i];
      // console.log(location[1])
  
    //   // Check for location property
      if (location) {
  
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.marker([location[1], location[0]])
          .bindPopup(title[i] + "<hr> Start Date: " + startdate[i] + "<hr> Event Type: " + category[i]));
      }
    };
  
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  
  });
  