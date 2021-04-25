
// var obj = JSON.parse("/api_events")

function BuildBubbleChart() {
    d3.json("/api_events").then((data) => {
       
        console.log(data);
        // console.log(hello.title);
        console.log(data[16]);
        console.log(data[17]);
        console.log(data[18]);
        console.log(data[19]);

       
        // console.log(data.title);

        // console.log(data.map(elem => elem.id));
        
        // Filter data by
    
        // var mappingArray = data.map((elem)=>elem.id);
        // console.log(mappingArray);
    
    });

    // d3.json('/api_events'), function(data) {

    //     console.log(data);

    // }




}

BuildBubbleChart();

