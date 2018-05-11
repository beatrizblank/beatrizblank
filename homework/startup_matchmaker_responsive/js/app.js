function showBurger() {

	var width = $(window).width();
	if (width < 1000) {

		$("#burger").show();
	}
}

	console.log(showBurger);



function toggleNav() {

$("nav").toggle(); 

}

$("#burger").click(toggleNav);