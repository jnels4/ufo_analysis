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

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date );
    };
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);