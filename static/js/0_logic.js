/////////////////
// Date Picker //
/////////////////

// Initialise date range picker on input field 
// index.html contains input element, in id="demo"
const myPicker = new lightPick({
    field: document.getElementById('demo'),
    field: document.getElementById('start'),
    secondField: document.getElementById('end'),
    singleDate: false,
    lang: 'en',
    format: 'DD/MM/YYYY', // date format
    numberOfMonths: 1, // number of months to display
    startDate: null,
    endDate: null,
    // hideonBodyClick: true,

    dropdowns: {
        years: {
            min: 2021,
            max: null,
        },
        months: true,
    },

    // localization
    locale: {
        buttons: {
          prev: '←',
          next: '→',
          close: '×',
          reset: 'Reset',
          apply: 'Apply'
        },
    },

    // callbacks
    onSelect: null,
    onOpen: null,
    onClose: null,

});

// // Initialise library as single date picker
// const myPicker = new lightPick({
//     field: document.getElementById('demo'),
//     singleDate: true // default: true (set to true)
// });

// Display date range using 2 input fields
// index.html contains input element, in id="start", id="end"
// const myPicker = new lightPick({
//     field: document.getElementById('start'),
//     secondField: document.getElementById('end')
// });