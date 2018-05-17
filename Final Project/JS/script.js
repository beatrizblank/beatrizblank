 
$("#professions").change(architectsOutput);

function architectsOutput () {
 
 var professionSalary = $("#professions").val();
 $("#output").append(professionSalary);
 $(".show-info").show("slow");

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
    "font-size":"30px",
  }, 5000) 



//*As a user, when a get a result the background img changes (Maybe depending on the results)


