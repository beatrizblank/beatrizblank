// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$("#first").click(displayFirst)
$("#second").click(displaySecond)
$("#third").click(displayThird)
$("#fourth").click(displayFourth)


function displayFirst() {

	$("#bigimage").attr("src", "img/1.jpg")


}

function displaySecond() {

	$("#bigimage").slideDown("slow");

	$("#bigimage").attr("src", "img/2.jpg");



}

function displayThird() {

	$("#bigimage").attr("src", "img/3.jpg");


}

function displayFourth() {

	$("#bigimage").attr("src", "img/4.jpg");


}