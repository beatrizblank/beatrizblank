

function calculateEggs {

	var eggsPrice = 300.000;

	var salary = $("#salary").value;

	var numberEggs = salary / eggsPrice;

}

$('#click-me').onclick = calculateEggs;