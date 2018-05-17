 
$("#professions").change(architectsOutput);

function architectsOutput () {
 
 var professionSalary = $("#professions").val();
 $("#output").append(professionSalary);
 $(".show-info").show("slower");

}

$("#professions").click(changes);

function changes (){

 $("#output").empty();
 $("#output").animate({
    "font-size":"20px",
  }, 5500) 
$(".groceries").animate({
    "font-size":"50px",
  }, 5500) 
$("body").css("background-color", "white");
$("body").css("color", "black");
$(".percentage").removeClass("grey");
$(".percentage").addClass("yellow");
$("#professions").removeClass("grey");
$("#professions").addClass("yellow");

}


//*As a user, when a get a result the background img changes (Maybe depending on the results)


