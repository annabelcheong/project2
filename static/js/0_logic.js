/////////////////
// Date Picker //
/////////////////
console.log("hello")
// Litepicker developed by Rinat G. 
// https://litepicker.com/docs/options

  const picker = new Litepicker({
    element: document.getElementById('datepicker'),
    singleMode: false,
    tooltipText: {
      one: 'day',
      other: 'days'
    },

    tooltipNumber: (totalDays) => {
      return totalDays;
    },

    setup: (picker) => {
            picker.on('show', () => {
              let date = picker.getDate();
              if (date) {
                date.setMonth(date.getMonth());
                picker.gotoDate(date);
              };
            });
    }

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