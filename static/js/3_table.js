
function BuildTable() {
    
    d3.json('/api_events').then((data) => {
        console.log(data);
    });

};

BuildTable();

