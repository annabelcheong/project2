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
    one: 'night',
    other: 'nights'
  },
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  }
})

console.log(picker.DateTime(new Date()) ); 
picker.show();

