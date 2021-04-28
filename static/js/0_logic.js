/////////////////
// Date Picker //
/////////////////
// Litepicker developed by Rinat G. 
// https://litepicker.com/docs/options

function datesFunc(){

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
          d3.json('/api_events').then((data) => {
            console.log(data);
            var allData = data;
            console.log(allData);

            var datesData = allData.filter(elem => (elem.start_date >= st_date) && (elem.end_date <= fin_date));
            console.log(datesData);
          });
          ///////////////////////

        });
      },

    });


};

