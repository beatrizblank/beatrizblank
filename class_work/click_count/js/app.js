// As a user
// When I click anywhere on the page
// I expect the click counter to increase by 1


// As a user
// When the click counter reaches 5
// I expect the background of the body to be red


// As a user
// When the click counter reaches 10
// I expect the background of the body to be green


// As a user
// When the click counter reaches 15
// I expect the background of the body to be blue
var clicks = 0;

$("#clickme").click(clickCount);


function clickCount() {
   
 clicks += 1; 

$("#click-num").html(clicks);

if(clicks >= 5) {
	$("body").css("background-color", "red")}

if(clicks >= 10) {
	$("body").css("background-color", "green");
}
if(clicks >= 15) {
	$("body").css("background-color", "blue");
}
}
