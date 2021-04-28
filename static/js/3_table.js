// var data = JSON.parse("/events.json")
// 'api_events'

// console.log(data)
const tbody = d3.select("tbody");

function BuildTable() {
  ///////////////////// 
  // Show table on load
  ///////////////////// 

  // Clear everything in table
  tbody.html("");

      d3.json('/api_events').then((data) => {
          // console.log(data);
          var allData = data;

          var event_stDate = allData.map(elem => new Date(elem.start_date) );//Test row
          console.log(event_stDate); // This works

          var event_name = allData.map(elem => elem.title);
          console.log(event_name); // This works

          var event_desc = allData.map(elem => elem.description);
          // console.log(event_desc);

          var event_venue = allData.map(elem => elem.venue_name);
          // console.log(event_venue);

          var event_addy = allData.map(elem => elem.formatted_address);
          // console.log(event_addy);

          var event_cat = allData.map(elem => elem.category);
          console.log(event_cat); //this works

          var columns = [event_name, event_desc, event_venue, event_addy];
          // console.log(columns);

          // Loop through each field in the dataRow and add each value as a table cell (td)
          for (var i = 0; i < 10; i++) {
              trow = tbody.append("tr");
              trow.append("td").text(event_stDate[i]);// test row
              trow.append("td").text(event_cat[i]); // test row
              trow.append("td").text(event_name[i]);
              trow.append("td").text(event_desc[i]);
              trow.append("td").text(event_venue[i]);
              trow.append("td").text(event_addy[i]);
          };
          // });

          // category dropdown event listener
          d3.select("#selCategory").on("change", function(selectedOption) {
              
              var selectedOption = d3.select(this).property("value")
              console.log(selectedOption); 
              filtData = datesData.filter(obj => (obj.category == selectedOption) );
              console.log(filtData);
              updateTable(selectedOption);
          });
      });

       ///////////////////// 
      // END OF: Show table on load
      ///////////////////// 




  ///////////////////////////////////////////
  // EVENT LISTENER FOR THE DATE SELECTION //
  ///////////////////////////////////////////

  // This filters based on the calendar user dates selection (2 date clicks for the range)
  const picker = new Litepicker({
    element: document.getElementById('datepicker'),
    singleMode: false,
    format: 'DD MMM YYYY',
    tooltipText: {
      one: 'day',
      other: 'days'
    },

    tooltipNumber: (totalDays) => {
      return totalDays;
    },

    setup: (picker) => {
      picker.on('selected', (date1, date2) => {
        // Gets the user click start date and fin date
        console.log("test string first");
        let st_date = new Date(date1.getTime()); //prints out the date
        let fin_date = new Date(date2.getTime()); //prints out the date
        console.log(st_date);
        console.log(fin_date);
        
        ///////////////////////
        // This section filters for the data depending on user selection
        // d3.json('/api_events').then((data) => {
        //   console.log(data);
        //   var allData = data;
        //   console.log(allData);

        //   var datesData = allData.filter(elem => (elem.start_date >= st_date) && (elem.end_date <= fin_date));
        //   console.log(datesData);
        // });
        ///////////////////////

      tbody.html("");

      d3.json('/api_events').then((data) => {
          // console.log(data);
          var allData = data;

        datesData = allData.filter(elem => (elem.start_date >= st_date) && (elem.end_date <= fin_date));
        console.log(datesData); //this works

          var event_stDate = datesData.map(elem => new Date(elem.start_date) );//Test row
          console.log(event_stDate); // This works

          var event_name = datesData.map(elem => elem.title);
          console.log(event_name); // This works

          var event_desc = datesData.map(elem => elem.description);
          // console.log(event_desc);

          var event_venue = datesData.map(elem => elem.venue_name);
          // console.log(event_venue);

          var event_addy = datesData.map(elem => elem.formatted_address);
          // console.log(event_addy);

          var event_cat = datesData.map(elem => elem.category);
          console.log(event_cat); //this works

          var columns = [event_name, event_desc, event_venue, event_addy];
          // console.log(columns);

          // Loop through each field in the dataRow and add each value as a table cell (td)
          for (var i = 0; i < 10; i++) {
              trow = tbody.append("tr");
              trow.append("td").text(event_stDate[i]);// test row
              trow.append("td").text(event_cat[i]); // test row 
              trow.append("td").text(event_name[i]);
              trow.append("td").text(event_desc[i]);
              trow.append("td").text(event_venue[i]);
              trow.append("td").text(event_addy[i]);
          };
       


      });//d3 close brackets for allData


        }); //Picker.on brackets (Litepicker plugin)
    },  //setup brackets *end of Calendar Event Listener (Litepicker plugin) 
  }); // picker brackets (Litepicker plugin)



} //BuildTable brackets

    /////////////////////////////////////
    // EVENT LISTENER FOR SEARCH TITLE //
    /////////////////////////////////////

    // Select the id show 
    var show_entered = d3.select("#show");
          
    // Create event handlers
    show_entered.on("keypress",runEnter);

    function runEnter(e) {

        // Prevent the page from refreshing
        d3.event.preventDefault();

        // console.log("hello")
        // key code = 32 (ENTER), key code = 13 (SPACE)
        if(d3.event.keyCode === 32) {
            console.log("Congrats, you pressed enter")
            }
    };



// testing
// function searchTitle() {
//     var input, filter, table, tr, td, txtValue;
//     input = document.getElementById("FilTitle");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("events-table");
//     tr = table.getElementsByTagName("tr");
//     for (var i = 0; i < 10; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = event_name;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }       
//     }
//   }
// not working


function updateTable(){
    console.log(filtData);
  
    d3.json('/api_events').then((data) => {

        var event_date = filtData.map(elem => elem.start_date);
        // console.log(data);
        var event_cat = filtData.map(elem => elem.category);
        // console.log(data);
        var event_name = filtData.map(elem => elem.title);
        console.log(event_name);
        var event_desc = filtData.map(elem => elem.description);
        // console.log(event_desc);
        var event_venue = filtData.map(elem => elem.venue_name);
        // console.log(event_venue);
        var event_addy = filtData.map(elem => elem.formatted_address);
        // console.log(event_addy);
        
        var columns = [event_name, event_desc, event_venue, event_addy];
        //console.log(columns);

        // Clear out what was in body before
        const tbody = d3.select("tbody");
        tbody.html("");
        
        
        // Loop through each field in the dataRow and add each value as a table cell (td)
        // Object.values(dataRow)
        for (var i = 0; i < 10; i++) {
            trow = tbody.append("tr");
            trow.append("td").text(event_date[i]);// test row
            trow.append("td").text(event_cat[i]); 
            trow.append("td").text(event_name[i]);
            trow.append("td").text(event_desc[i]);
            trow.append("td").text(event_venue[i]);
            trow.append("td").text(event_addy[i]);
        };
    });
};

BuildTable();