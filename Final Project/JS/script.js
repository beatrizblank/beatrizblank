 
$("#professions").change(architectsOutput);



function architectsOutput () {
 
 var professionSalary = $("#professions").val();
 $("#output").append(professionSalary);

}



$("#professions").click(removeSalary);

function removeSalary () {
 $("#output").empty();

}



//*As a user, when a get a result the background img changes (Maybe depending on the results)


