$(window).scroll(changeHeader);

function changeHeader () {
	var userPosition = $(window).scrollTop();
	if(userPosition>150) {
		$("header").addClass("red")
	} else {
		$("header").removeClass("red")
		
	}
	 }