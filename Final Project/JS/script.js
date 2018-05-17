 
$("#professions").change(architectsOutput);

function architectsOutput () {
 
 var professionSalary = $("#professions").val();
 $("#output").append(professionSalary);
 $(".show-info").show("slower");

}


$("#professions").click(changeBackground);

function changeBackground() {

	$("body").css("background-color", "white");
	$("body").css("color", "black");
	$(".percentage").removeClass("grey");
	$(".percentage").addClass("yellow");
	$("#professions").removeClass("grey");
	$("#professions").addClass("yellow");

}


$("#professions").click(removeSalary);

function removeSalary () {
 $("#output").empty();
}


$("#output").animate({
    "font-size":"20px",
  }, 5500) 

$(".groceries").animate({
    "font-size":"50px",
  }, 5500) 



//*As a user, when a get a result the background img changes (Maybe depending on the results)


