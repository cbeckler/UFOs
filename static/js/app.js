// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
//      d3.select is telling js to look for <tbody> tags in html--standard table tag
var tbody = d3.select("tbody");

// create function to build table for UFO data
function buildTable(data) {
    
    // first clear old data
    tbody.html("");

    // use forEach to iterate through data array
    //   use fat arrow function to write forEach cleaner
    //      for each row in data:
    data.forEach((dataRow) => {
        // find tbody tag and append row to table
        let row = tbody.append("tr");
        
        // use arrow function to iterate through objects in each data row
        //      Object.values() means one object per row and forEach(val) means one value per cell
        //          ie, each sighting on its own row of data and each value in its own cell
        Object.values(dataRow).forEach((val) => {
            // add data to cell in td (table data) tag
            let cell = row.append("td");
            // extracting ONLY the value, not the key
            cell.text(val);
        });
    });
}