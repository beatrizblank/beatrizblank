// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

$("#total").submit(newEntry);

function newEntry (event) {

	var valueEntered = $("#entry").val();

	console.log(valueEntered)
    
    event.preventDefault();

	$("#total").html("valueEntered");
}

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared
