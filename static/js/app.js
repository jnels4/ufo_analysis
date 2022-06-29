// import the data from data.js

const tableData = data;

var tbody = d3.select("tbody");

function buildTable (data) {
    // clear prevous tables
    tbody.html('');

    // retrieve all the data in a particular row
    data.forEach((dataRow) => {
        // append row data to the table row
        let row = tbody.append("tr");

        //retrive all the values in the row and save them to a cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);


        });
    });
};

// function handleClick() {
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData
//     if (date) {
//         filteredData = filteredData.filter(row => row.datetime === date );
//     };
//     buildTable(filteredData);
// };


// 1. Create a variable to keep track of all the filters as an object.
var filters = {};
// var date = d3.select("#datetime").property("value");
// var city = d3.select("#city").property("value");
// var state = d3.select("#state").property("value");
// var country = d3.select("#country").property("value");
// var shape = d3.select("shape").property("value");
// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var changed = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    var valchanged = changed.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    var idchanged = changed.attr('id');
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (valchanged) {
        filters[idchanged]= valchanged;
    }
    else{
        delete filters[idchanged];
    };
    
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    console.log(filters)
    Object.entries(filters).forEach(([key, value])=>{
        filteredData = filteredData.filter(row => row[key] === value);

    });
    
    
    // filters.forEach(function(filterTerm) {
    //     console.log(filterTerm);

    //     function filterSelect (filterTerm) {
    //         return tableData.filterTerm === filterTerm;
    //     };

    //     filteredData = [filterSelect(filterTerm)];
    //     //filteredData = filteredData.filter((filterTerm) => );
    //     console.log(filteredData)
    // });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // 2. Attach an event to listen for changes to each filter

d3.selectAll("input").on("change", updateFilters);







//d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);