/////////////////
// Date Picker //
/////////////////
console.log("hello")
// Litepicker developed by Rinat G. 
// https://litepicker.com/docs/options

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

    // setup: (picker) => {
    //         picker.on('show', () => {
    //           let date = picker.getDate();
    //           if (date) {
    //             date.setMonth(date.getMonth());
    //             picker.gotoDate(date);
    //           };
    //         });
    // }

    setup: (picker) => {
      picker.on('selected', (date1, date2) => {
        // some action
        console.log("test string first");
        let st_date = new Date(date1.getTime()); //prints out the date
        let fin_date = new Date(date2.getTime()); //prints out the date
        console.log(st_date);
        console.log(fin_date);
        
        d3.json('/api_events').then((data) => {
          console.log(data);
          var allData = data;
          console.log(allData);

          // var datesData = allData.filter(function (a)
          // {return (a.title) > st_date && (a.title) < fin_date;
          // });
          // console.log(datesData);



          datesData = allData.filter(data => (data.start_date >= st_date) && (data.end_date <= fin_date));
          console.log(datesData);
        });

        






      
      });
    },




  });



// console.log(picker.DateTime(new Date()) ); 
// picker.show();



// const picker = Litepicker({
//     element: document.getElementById('datepicker'),
//     singleMode: false,
//     // startDate: new Date();
//     setup: (picker) => {
//       picker.on('show', () => {
//         let date = picker.getDate();
//         if (date) {
//           date.setMonth(date.getMonth() - 1);
//           picker.gotoDate(date);
//         }
//       });
  
//     }
//   })












//   setup: (picker) => {
//      picker.on('show', () => {
//        // some action after show
//      });
  
//      picker.on('render', (ui) => {
//        // some action after render
//        // ui is root element of picker
//      });
//   }


    // picker.on('selected', (date1, date2) => {
    //   // some action 
    //   console.log("hello this is selected date 1 and 2");
    //   console.log(date1 + date2);
    // });

// picker.show()