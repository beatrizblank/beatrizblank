$("#professions option[value="architects"]").change(architectsOutput);

console.log(.change)

function architectsOutput () {
 
 var architectsSalary = "29"
 $("#output").append(architectsSalary);

}


$("#professions").click(removeSalary);

function removeSalary () {
 $("#output").empty();

}



//*As a user, when a get a result the background img changes (Maybe depending on the results)


