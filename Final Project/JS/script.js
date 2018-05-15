 
$("#professions").change(architectsOutput);



function architectsOutput () {
 
 var architectsSalary = "29"
 $("#output").append(architectsSalary);

}
console.log(architectsOutput)

$("#professions").click(removeSalary);

function removeSalary () {
 $("#output").empty();

}



//*As a user, when a get a result the background img changes (Maybe depending on the results)


