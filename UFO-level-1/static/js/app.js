// from data.js
var tableData = data;
//console.log(tableData);

// YOUR CODE HERE!
//see information once entered
// grab references to the input element and the output div
var input_data = d3.select("#datetime");
//var output = d3.select(".output");

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputText = d3.event.target.value;

  // test output
    console.log(`Change command input: ${inputText}`)

       //Check the log
   //    console.log(tableData);
  // Set the output text to the reversed input string
  //output.text(reversedInput);
}

//testing to make sure that the data is shown after entry
input_data.on("change", handleChange);

// Select the button
var button = d3.select("#filter-btn");

//find the beginning of the table
var tbody = d3.select("tbody");




 //create action when button clicked 
  button.on("click", function() {

    // Select the input element and get the raw HTML node
 //   var inputElement = d3.select("#example-form-input");
  
    // Get the value property of the input element
    var inputValue = input_data.property("value");

    //Testing to see if we can see that information after the button is selected
    console.log(`Button command input: ${inputValue}`);
  
    //Check the log
    console.log(tableData);

    var filteredData_date = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData_date);


    //Add an attribute so that it will clear the page as the tbody did not work
    tbody.attr("class", "UFO_info_list")

          // Then, select the unordered list element by class name
    var list = d3.select(".UFO_info_list");
     // remove any children from the list to
    list.html("");
    //add class attribute

 //loop through the data set into a table
    filteredData_date.forEach((UFOinfo) => {
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  });

