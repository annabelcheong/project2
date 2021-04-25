
// var obj = JSON.parse("/api_events")
// 'api_events'

// event_data = "events.json"
function BuildBubbleChart() {
    
    d3.json('api_events').then((data) => {
        // console.log(data);
        
        // console.log(data.map(elem => elem.id));
        // id = data.map(elem => elem.id);

        // console.log(data.map(elem => elem.title));
        title = data.map(elem => elem.title);

        // coords = data.map(elem => elem.coords);

        category = data.map(elem => elem.category);

        // venue_name = data.map(elem => elem.venue_name);

        // Parse to numeric value
        rank = data.map((elem) => elem.rank = +elem.rank);
        // console.log(rank);

        start_date = data.map((elem) => elem.start_date = new Date(elem.start_date));
            console.log(start_date);



        var trace = {
            x: title,
            y: rank,
            text: category,
            mode: 'markers',
            marker: {
                size: rank, 
                color: rank, // Colours grouped by rank i.e. In this instance, grouped by size
                colorscale: 'Portland'
            }
            
        };
    
        var data = [trace];

        var layout = {
            xaxis:{title:"Event Date"},
            yaxis:{title:"Ranking"},
            showlegend: false,
            height: 600,
            width: 1200
        };
    
        Plotly.newPlot("bubble", data, layout);



     
    });

}

BuildBubbleChart();

