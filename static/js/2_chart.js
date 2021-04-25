
// var obj = JSON.parse("/api_events")
// 'api_events'

// event_data = "events.json"
function BuildBubbleChart() {
    



    d3.json('api_events').then((data) => {
        // console.log(data);
        
        console.log(data.map(elem => elem.id));
        
        // Filter data by
    
        // var mappingArray = data.map((elem)=>elem.id);
        // console.log(mappingArray);
    
    });

    // d3.json('/api_events'), function(data) {

    //     console.log(data);

    // }




}

BuildBubbleChart();

