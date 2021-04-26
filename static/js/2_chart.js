
function BuildBubbleChart() {
    
    d3.json('/api_events').then((data) => {
        // console.log(data);
        var allData = data;
        
        // id = data.map(elem => elem.id);
        // coords = data.map(elem => elem.coords);

        var title_name = data.map(elem => elem.title);

        var category = data.map(elem => elem.category);
        // console.log(category);

        ///////////////////////////
        // DROP DOWN FOR CATEGORY
        ///////////////////////////

        var catOptions = ["expos","conferences","community","sports","performing-arts","festivals","concerts"]

        d3.select("#selCategory")
        .selectAll('myOptions') //create class 
        .data(catOptions)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the dropdown
        .attr("value", function (d) {return d;})


        ///////////////////////////
        // EVENT LISTENER FOR CATEGORY DROPDOWN
        ///////////////////////////

        d3.select("#selCategory").on("change", function(selectedOption) {
            
            var selectedOption = d3.select(this).property("value")
            console.log(selectedOption); //This works
            //console.log(data); // This works but unexpected data returned
    
            //console.log(title_name); // it reads
            filtData = allData.filter(allData => allData.category == selectedOption);
            //console.log(filtData);

            // Run function updateBubbleChart with selectedOption
            updateBubbleChart(selectedOption);


        });
        

        ///////////////////////////
        // function UPDATEBUBBLECHART
        ///////////////////////////

        function updateBubbleChart(selectedGroup){
            // console.log(selectedGroup); // This works. Prints out the selectedGroup, which is selectedOption
            
            //// Filtered array for category 'selectedGroup' (expos, community, performing-arts, sports etc)
            //console.log(filtData); // This works. Prints array of info with categories filtered by selectedGroup
            
            // Add in bubble chart code
            
            // x-axis variable for category
            cat_date = filtData.map(elem => elem.start_date = new Date(elem.start_date));
            //console.log(cat_date); //Print array of dates based on filtered selectedGroup array

            // y-axis variable for category
            cat_venue_name = filtData.map(elem => elem.venue_name);
            //console.log(cat_venue_name); //Print array of venue names  based on filtered selectedGroup array

            // pop-up text (title_name required)
            cat_title_name = filtData.map(elem => elem.title);
            
            ///////////
            // DATA
            ///////////

            // TRACE (details of bubblechart)
            var trace_cat = {
                x: cat_date,
                y: cat_venue_name,
                text: cat_title_name,
                mode: 'markers',
                marker: {
                    size: rank,
                    color: "#119dff" // blue
                    //rank, // Colours grouped by rank i.e. In this instance, grouped by size
                    // colorscale: 'Portland'
                },
                name: selectedGroup // Legend
            };

            // DATA (data variable holding the trace)
            var data = [trace_cat];

            ///////////
            // LAYOUT //
            ///////////

            var layout = {
                xaxis: { title: "Date", automargin: true },
                yaxis: { title: "", automargin: true },
                showlegend: true,
                height: 600,
                width: 1200
            };

            // Plot graph with plotly 
            Plotly.newPlot("bubble", data, layout); //'bubble' is the id reference in the html

        };


        //////////////////////////////////
        //// Filtered array for category 'expos'
        expo_data = data.filter(data => data.category == "expos");
        //console.log(expo_data);

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
        console.log(rank); //This works and gives back an array of numerical values

        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var rank_size = data.map((elem) => elem.rank = 1/(+elem.rank)*1000);
        console.log(rank_size);
        


        var start_date = data.map((elem) => elem.start_date = new Date(elem.start_date));
        //    console.log(start_date);


        // var inverse_size = 100-rank;
        // // inverse_size = +inverse_size;
        // console.log(inverse_size);

        //////////////
        // TRACES //
        //////////////
        
        var trace1 = {
            x: expo_date,
            y: expo_venue_name,
            text: rank,//title_name,  
            mode: 'markers',
            marker: {
                size: rank_size, 
                color: "#119dff" // blue
                //rank, // Colours grouped by rank i.e. In this instance, grouped by size
                // colorscale: 'Portland'
            },
            name: 'expos'
        };

        var trace2 = {
            x: conf_date,
            y: conf_venue_name,            
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

        //////////////
        // LAYOUT //
        //////////////

        var layout = {
            xaxis:{title:"Date", automargin: true},
            yaxis:{title:"", automargin: true},
            showlegend: true,
            height: 600,
            width: 1200
        };
    
        Plotly.newPlot("bubble", data, layout);

    });

};

BuildBubbleChart();