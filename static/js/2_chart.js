function BuildBubbleChart() {
    d3.json("/api_events").then((data) => {
        // console.log(data);
        console.log(data.map(elem => elem.title));
        // console.log(data[0].title);
    });
}

BuildBubbleChart();

