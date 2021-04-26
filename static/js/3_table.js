<<<<<<< HEAD
// var data = JSON.parse("/events.json")
// // 'api_events'

// console.log(data)
const tbody = d3.select("tbody");

function BuildTable() {
    
    tbody.html("");

    d3.json('/api_events').then((data) => {
        // console.log(data);
        var event_name = data.map(elem => elem.title);
        // console.log(event_name);
        var event_desc = data.map(elem => elem.description);
        // console.log(event_desc);
        var event_addy = data.map(elem => elem.formatted_address);
        // console.log(event_addy);
        var event_venue = data.map(elem => elem.venue_name);
        console.log(event_venue);
        
        

    });
};

BuildTable();
=======

function BuildTable() {
    
    d3.json('/api_events').then((data) => {
        //console.log(data);
    });

};

BuildTable();

>>>>>>> 51887ebee7f43e68f92c14d44555691d2f8cc4a7
