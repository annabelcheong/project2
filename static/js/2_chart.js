
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

        var trace = {
            x: start_date,
            y: venue_name,
            text: title_name,  
            mode: 'markers',
            marker: {
                size: rank, 
                color: rank, // Colours grouped by rank i.e. In this instance, grouped by size
                colorscale: 'Portland'
            }
            
        };
    
        var data = [trace];

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

