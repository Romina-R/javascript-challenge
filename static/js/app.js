// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var table = d3.select("ufo-table");

function showData(tableData){ 
    //tbody.text("")

    tableData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
showData(tableData);

var button = d3.select("#filter-btn");

button.on("click",function() {

   // d3.event.preventDefault();
    var inputElement =  d3.select('#datetime');
    
    var inputValue = inputElement.property('value');
    
    console.log(inputValue);

    var filteredData = data.filter(UFOsighting => UFOsighting.datetime === inputValue);
    tbody.html("");

    showData(filteredData);

});
