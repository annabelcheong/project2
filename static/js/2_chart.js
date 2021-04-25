
// var obj = JSON.parse("/api_events")
// 'api_events'

// event_data = "events.json"
function BuildBubbleChart() {
    
    d3.json('api_events').then((data) => {
        // console.log(data);
        
        // console.log(data.map(elem => elem.id));
        // id = data.map(elem => elem.id);

        // console.log(data.map(elem => elem.title));
        var title_name = data.map(elem => elem.title);

        // coords = data.map(elem => elem.coords);

        var category = data.map(elem => elem.category);
        console.log(category);


        //////////////////////////////////
        //// Filtered array for category 'expos'
        expo_data = data.filter(data => data.category == "expos");
        console.log(expo_data);

        // x-axis variable for category
        expo_date = expo_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        expo_venue_name = expo_data.map(elem => elem.venue_name);


        ///////////////////////////////////

        //////////////////////////////////
        //// Filtered array for category 'conferences'
        conf_data = data.filter(data => data.category == "conferences");
    
        // x-axis variable for category
        conf_date = conf_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        conf_venue_name = conf_data.map(elem => elem.venue_name);

        //////////////////////////////////
        //// Filtered array for category 'community'
        comm_data = data.filter(data => data.category == "community");

        // x-axis variable for category
        comm_date = comm_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        comm_venue_name = comm_data.map(elem => elem.venue_name);

        //////////////////////////////////
        //// Filtered array for category 'sports'
        sports_data = data.filter(data => data.category == "sports");

        // x-axis variable for category
        sports_date = sports_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        sports_venue_name = sports_data.map(elem => elem.venue_name);

        //////////////////////////////////
        //// Filtered array for category 'performing-arts'
        perf_data = data.filter(data => data.category == "sports");

        // x-axis variable for category
        perf_date = perf_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        perf_venue_name = perf_data.map(elem => elem.venue_name);
        
        //////////////////////////////////
        //// Filtered array for category 'festivals'
        fest_data = data.filter(data => data.category == "festivals");

        // x-axis variable for category
        fest_date = fest_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        fest_venue_name = fest_data.map(elem => elem.venue_name);

        //////////////////////////////////
        //// Filtered array for category 'concerts'
        conc_data = data.filter(data => data.category == "concerts");

        // x-axis variable for category
        conc_date = conc_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        conc_venue_name = conc_data.map(elem => elem.venue_name);












        
        var venue_name = data.map(elem => elem.venue_name);

        // Parse to numeric value
        var rank = data.map((elem) => elem.rank = +elem.rank);
        console.log(rank);

        var inverse_rank = 100 - rank;
        console.log(inverse_rank);

        var start_date = data.map((elem) => elem.start_date = new Date(elem.start_date));
            console.log(start_date);


        var inverse_size = 100-rank;
        // inverse_size = +inverse_size;
        console.log(inverse_size);

        var trace1 = {
            x: expo_date,
            y: expo_venue_name,
            text: title_name,  
            mode: 'markers',
            marker: {
                size: rank, 
                color: "#119dff" // blue
                //rank, // Colours grouped by rank i.e. In this instance, grouped by size
                // colorscale: 'Portland'
            },
            name: 'expos'
        };

        var trace2 = {
            x: conf_date,
            y: title_name,            
            text: title_name,  
            mode: 'markers',
            marker: {
                size: rank, 
                color: "#ff870f" // orange
                //'rgb(17, 157, 255)'//,rank, // Colours grouped by rank i.e. In this instance, grouped by size
                // colorscale: 'Portland'
            },
            name: 'conferences'
        };
    
        var trace3 = {
            x: comm_date,
            y: comm_venue_name,
            text: title_name,  
            mode: 'markers',
            marker: {
                size: rank, 
                color: "#33cc33" // green
                //rank, // Colours grouped by rank i.e. In this instance, grouped by size
                // colorscale: 'Portland'
            },
            name: 'community'
        };

        var data = [trace1, trace2, trace3];


        // LAYOUT //
        var layout = {
            xaxis:{title:"Date", automargin: true},
            yaxis:{title:"", automargin: true},
            showlegend: true,
            height: 600,
            width: 1200
        };
    
        Plotly.newPlot("bubble", data, layout);

    });

}

BuildBubbleChart();