

function calculateEggs() {

	var eggsPrice = 600.000;

	var salaryInput = $("#salary").value();

	var numberEggs = (salaryInput / eggsPrice);

	$("#total-num-of-eggs-output").innerHTML = numberEggs;

}

$('#click-me').onclick(CalculateEggs);

//*As a user, when a get a result the background img changes (Maybe depending on the results)


