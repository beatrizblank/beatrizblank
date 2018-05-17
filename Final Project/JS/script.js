 
$("#professions").change(architectsOutput);



function architectsOutput () {
 
 var professionSalary = $("#professions").val();
 $("#output").append(professionSalary);

}


$("#professions").click(removeSalary);

function removeSalary () {
 $("#output").empty();

}

$("#output").animate({
    "font-size":"30px",
  }, 5000)



//*As a user, when a get a result the background img changes (Maybe depending on the results)


