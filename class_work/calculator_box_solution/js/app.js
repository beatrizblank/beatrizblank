var total = 0;

// +10

var plusTen = $("#a10");

plusTen.click(addTen)

function addTen() {

	total = total + 10;

	$("#out").html(total)


}

// +20

var plusTwenty = $("#a20");

plusTwenty.click(addTwenty)

function addTwenty() {

	total = total + 20;

	$("#out").html(total)
}

// +30

var plusThirtyButton = $("#a30");

plusThirtyButton.click(addThirty)

function addThirty() {
	total = total + 30;

	$("#out").html(total)
}

// -10

var minusTenButton = $("#n10");

minusTenButton.click(subtractTen)

function subtractTen() {
	total = total - 10;

	$("#out").html(total)
}


// -20

var minusTwentyButton = $("#n20");

minusTwentyButton.click(subtractTwenty)

function subtractTwenty() {
	total = total - 20;

	$("#out").html(total)
}

// -30

var minusThirtyButton = $("#n30");

minusThirtyButton.click(subtractThirty)

function subtractThirty() {
	total = total - 30;

	$("#out").hmtl(total)
}

// red

var redButton = $("#red");

redButton.click(turnRed)

function turnRed() {
	$("#out").css("background-color", "red");
}

// blue

var blueButton = $("#blue");

blueButton.click(turnBlue)

function turnBlue() {

	$("#out").css("background-color", "blue");
}

// reset

var outputButton = $("#out");

outputButton.click(reset)

function reset() {
	total = 0;

	$("#out").html(total)
	$("#out").css("background-color", "white")
}
