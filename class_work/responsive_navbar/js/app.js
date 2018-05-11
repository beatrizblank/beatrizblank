// As a User
// When I see the nav bar on desktop
// There is no burger (only Home/About/Contact/Blog)

// As a User
// When I see the nav bar on mobile
// I see a burger

// As a User
// When I click the burger
// I see the nav appear below the header

function toggleItems() {

$("#mobile-nav-items").toggle(); 

}

$("#burger").click(toggleItems);


$(window).resize(hideNav);

function hideNav() {

	var width = $(window).width();
	if (width > 1024) {

		$("#mobile-nav-items").hide();
	}
	console.log(toggleItems)
}

// As a User
// When I click the burger again
// I see the nav hide
