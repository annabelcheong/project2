function BuildBubbleChart() {
    
    d3.json('/api_events').then((data) => {
        // console.log(data);
        var allData = data;

        ///////////////////////////
        // DROP DOWN FOR CATEGORY
        ///////////////////////////

        var catOptions = ["community","concerts","conferences","expos","festivals","performing-arts","sports"]

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
            console.log(selectedOption); 
          
            filtData = allData.filter(allData => allData.category == selectedOption);
            console.log(filtData);

            // RUN FUNCTIONS // 
            updateBubbleChart(selectedOption); 
            updateTable(); // The code for this function is located in 3_table.js file

        });
        
        ///////////////////////////
        // function UPDATEBUBBLECHART
        ///////////////////////////

        function updateBubbleChart(selectedGroup){
            // console.log(selectedGroup); //  Prints out the selectedGroup, which is selectedOption
            
            //// Filtered array for category 'selectedGroup' (expos, community, performing-arts, sports etc)
            //console.log(filtData); // Prints array of info with categories filtered by selectedGroup
                        
            // x-axis variable for category
            cat_date = filtData.map(elem => elem.start_date = new Date(elem.start_date));
            //console.log(cat_date); //Print array of dates based on filtered selectedGroup array

            // y-axis variable for category
            cat_venue_name = filtData.map(elem => elem.venue_name);

            // pop-up text (title required)
            cat_title_name = filtData.map(elem => elem.title);

            // Marker size
            // Parse to numeric value '+'
            // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
            // Multiplied values by 1000 to get it to a reasonable size on chart.
            var rank_size = data.map((elem) => elem.rank = 1/(+elem.rank)*1000);
            //console.log(rank_size);
                
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
                    size: rank_size,
                    color: "#119dff" // blue
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
                width: 1200,
                
            };

            // Plot graph with plotly 
            Plotly.newPlot("bubble", data, layout); //'bubble' is the id reference in the html

        }; // End of function updateBubbleChart

        ///////////////////////////
        // within function BuildBubbleChart().
        // * Code for when page loads. 
        ///////////////////////////

        // SAVE VARIABLES FOR USE IN PLOTLY CHART'S X-AXIS, Y-AXIS, POP-UP //
        
        //////////////////////////////////
        // DATA - EXPOS //
        //////////////////////////////////
        //// Filtered array for category 'expos'
        expo_data = data.filter(data => data.category == "expos");
        //console.log(expo_data);

        // x-axis variable for category
        expo_date = expo_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        expo_venue_name = expo_data.map(elem => elem.venue_name);

        // pop-up for category
        expo_title_name = expo_data.map(elem => elem.title);

        // Marker size
        // Parse to numeric value
        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var expo_rank_size = expo_data.map((elem) => elem.rank = 1/(+elem.rank)*1500);
        //console.log(rank_size);

        ///////////////////////////////////
        // DATA - CONFERENCES //
        //////////////////////////////////
        //// Filtered array for category 'conferences'
        conf_data = data.filter(data => data.category == "conferences");
    
        // x-axis variable for category
        conf_date = conf_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        conf_venue_name = conf_data.map(elem => elem.venue_name);

        // pop-up for category
        conf_title_name = conf_data.map(elem => elem.title);

        // Marker size
        // Parse to numeric value
        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var conf_rank_size = conf_data.map((elem) => elem.rank = 1/(+elem.rank)*1000);


        //////////////////////////////////
        // DATA - COMMUNITY //
        //////////////////////////////////
        //// Filtered array for category 'community'
        comm_data = data.filter(data => data.category == "community");

        // x-axis variable for category
        comm_date = comm_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        comm_venue_name = comm_data.map(elem => elem.venue_name);

        // pop-up for category
        comm_title_name = comm_data.map(elem => elem.title);

        // Marker size
        // Parse to numeric value
        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var comm_rank = comm_data.map((elem) => elem.rank = +elem.rank);
        console.log(comm_rank);
        var comm_rank_size = comm_data.map((elem) => elem.rank = 1/(+elem.rank)*1000);



        //////////////////////////////////
        // DATA - SPORTS //
        //////////////////////////////////
        //// Filtered array for category 'sports'
        var sports_data = data.filter(data => data.category == "sports");

        // x-axis variable for category
        var sports_date = sports_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        var sports_venue_name = sports_data.map(elem => elem.venue_name);

        // pop-up for category
        var sports_title_name = sports_data.map(elem => elem.title);

        // Marker size
        // Parse to numeric value
        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var sports_rank_size = sports_data.map((elem) => elem.rank = 1/(+elem.rank)*1000);


        //////////////////////////////////
        // DATA - PERFORMING ARTS //
        //////////////////////////////////
        //// Filtered array for category 'performing-arts'
        perf_data = data.filter(data => data.category == "sports");

        // x-axis variable for category
        perf_date = perf_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        perf_venue_name = perf_data.map(elem => elem.venue_name);

        // pop-up for category
        perf_title_name = perf_data.map(elem => elem.title);

        // Marker size
        // Parse to numeric value
        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var perf_rank_size = perf_data.map((elem) => elem.rank = 1/(+elem.rank)*1000);
        

        //////////////////////////////////
        // DATA - FESTIVALS //
        //////////////////////////////////
        //// Filtered array for category 'festivals'
        fest_data = data.filter(data => data.category == "festivals");

        // x-axis variable for category
        fest_date = fest_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        fest_venue_name = fest_data.map(elem => elem.venue_name);

        // pop-up for category
        fest_title_name = fest_data.map(elem => elem.title);

        // Marker size
        // Parse to numeric value
        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var fest_rank_size = fest_data.map((elem) => elem.rank = 1/(+elem.rank)*1000);


        //////////////////////////////////
        // DATA - CONCERTS //
        //////////////////////////////////
        //// Filtered array for category 'concerts'
        conc_data = data.filter(data => data.category == "concerts");

        // x-axis variable for category
        conc_date = conc_data.map(elem => elem.start_date = new Date(elem.start_date))
        
        // y-axis variable for category
        conc_venue_name = conc_data.map(elem => elem.venue_name);

        // pop-up for category
        conc_title_name = conc_data.map(elem => elem.title);

        // Marker size
        // Parse to numeric value
        // Inversed the values to allow rank of 1 to be biggest in marker size, 100 to be smallest. 
        // Multiplied values by 1000 to get it to a reasonable size on chart.
        var conc_rank_size = conc_data.map((elem) => elem.rank = 1/(+elem.rank)*1000);



        //////////////
        // TRACES //
        //////////////
        
        var trace1 = {
            x: expo_date,
            y: expo_venue_name,
            text: expo_title_name,  
            mode: 'markers',
            marker: {
                size: expo_rank_size, 
                opacity: 0.7,
                color: "#119dff" // blue
            },
            name: 'expos'
        };

        var trace2 = {
            x: conf_date,
            y: conf_venue_name,            
            text: conf_title_name,  
            mode: 'markers',
            marker: {
                size: conf_rank_size, 
                opacity: 0.7,
                color: "#ff870f" // orange
            },
            name: 'conferences'
        };
    
        var trace3 = {
            x: comm_date,
            y: comm_venue_name,
            text: comm_title_name,  
            mode: 'markers',
            marker: {
                size: comm_rank_size, 
                opacity: 0.7,
                color: "#33cc33" // green
            },
            name: 'community'
        };

        var trace4 = {
            x: sports_date,
            y: sports_venue_name,
            text: sports_title_name,  
            mode: 'markers',
            marker: {
                size: sports_rank_size, 
                opacity: 0.7,
                color: "#cc0099" // fuscia
            },
            name: 'sports'
        };

        var trace5 = {
            x: perf_date,
            y: perf_venue_name,
            text: perf_title_name,  
            mode: 'markers',
            marker: {
                size: perf_rank_size, 
                opacity: 0.7,
                color: "#ffff1a" // yellow
            },
            name: 'performing arts'
        };

        var trace6 = {
            x: fest_date,
            y: fest_venue_name,
            text: fest_title_name,  
            mode: 'markers',
            marker: {
                size: fest_rank_size, 
                opacity: 0.7,
                color: "#99ffff" // baby blue
            },
            name: 'festivals'
        };

        var trace7 = {
            x: conc_date,
            y: conc_venue_name,
            text: conc_title_name,  
            mode: 'markers',
            marker: {
                size: conc_rank_size, 
                opacity: 0.7,
                color: "#ffccff" // baby pink
            },
            name: 'concerts'
        };

        var data = [trace1, trace2, trace3, trace4, trace5, trace7];

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