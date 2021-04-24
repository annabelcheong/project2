function BuildBubbleChart() {
    d3.json("/api_events").then((data) => {
        console.log(data);
    });
}

BuildBubbleChart();

