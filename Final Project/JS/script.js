
var professions = ["Architects", "Lawyers", "Doctors", "Professors"]
 var coderDude = {
  firstName: "Bobby", 
  favDog: "Cody"
 }

function calculateEggs() {

  console.log("HEY")
	var eggsPrice = 900000;

	var salaryInput = $("#salary").val();

	var numberEggs = (salaryInput / eggsPrice);
console.log(numberEggs)
	$("#total-num-of-eggs-output").html(numberEggs);

}

$("#click-me").click(calculateEggs)




//*As a user, when a get a result the background img changes (Maybe depending on the results)


