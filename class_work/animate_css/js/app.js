$("#animate-me").click(function(){
 $("h1").addClass("animated bounce infinite");
})
// As a User
// When I click on the button
// I want the header to bounce


$("#shrink").click(shrinkGlobe);

function shrinkGlobe () {

	$("img").animate({
		"width": "50px"
		"hight": "10px"
	}, 5000)
}
// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button

// As a User
// When I click the button
// I want to see the globe move to the right of the screen

// As a User
// When I click the button again
// I want the globe to return