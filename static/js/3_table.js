// var data = JSON.parse("/events.json")
// 'api_events'

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
        var event_venue = data.map(elem => elem.venue_name);
        // console.log(event_venue);
        var event_addy = data.map(elem => elem.formatted_address);
        // console.log(event_addy);
        
        var columns = [event_name, event_desc, event_venue, event_addy];
        console.log(columns);

        data.forEach((dataRow) => {
            // Append a row to the table body
            const row = tbody.append("tr");
        
            // Loop through each field in the dataRow and add
            // each value as a table cell (td)
            Object.values(dataRow)
            for (var i = 0; i < 12; i++) {
                trow = tbody.append("tr");
                trow.append("td").text(event_name[i]);
                trow.append("td").text(event_desc[i]);
                trow.append("td").text(event_venue[i]);
                trow.append("td").text(event_addy[i]);
        }
            
          });

        });
}

BuildTable();