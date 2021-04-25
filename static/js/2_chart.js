
// var obj = JSON.parse("/api_events")
// 'api_events'

// event_data = "events.json"
function BuildBubbleChart() {
    
    d3.json('api_events').then((data) => {
        // console.log(data);
        
        // console.log(data.map(elem => elem.id));
        // id = data.map(elem => elem.id);

        // console.log(data.map(elem => elem.title));
        title_name = data.map(elem => elem.title);

        // coords = data.map(elem => elem.coords);

        category = data.map(elem => elem.category);
        console.log(category);

        venue_name = data.map(elem => elem.venue_name);

        // Parse to numeric value
        rank = data.map((elem) => elem.rank = +elem.rank);
        console.log(rank);

        var inverse_rank = 100 - rank;
        console.log(inverse_rank);

        start_date = data.map((elem) => elem.start_date = new Date(elem.start_date));
            console.log(start_date);


        var inverse_size = 100-rank;
        // inverse_size = +inverse_size;
        console.log(inverse_size);
        console.log(rank+100);

        var trace = {
            x: start_date,
            y: rank,
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
            xaxis:{title:"Date"},
            yaxis:{title:"Ranking"},
            showlegend: false,
            height: 600,
            width: 1200
        };
    
        Plotly.newPlot("bubble", data, layout);

    });

}

BuildBubbleChart();

