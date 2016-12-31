$(function() {

	var a_time = 400;
	var a_type = "easeInOutExpo";
	var a_type_2 = "easeOutBack";
	var $window = $("window");

	var $header = $(".header");
	var $filters = $("#filters");
	var $listings = $("#listings");
	var $notification = $("#notification");
	var $iphone_design = $(".iphone-design");

	var header_h = $header.height();
	var listings_start = parseInt($listings.css("top"));
	var filters_start = parseInt($filters.css("top"));

	// $listings.css({"top":header_h});
	// $filters.css({"top":header_h});

	// Animate in iphones at start
	// $window.ready(function() {
	// 	$listings.animate({"top":listings_start}, a_time*3, a_type);
	// 	setTimeout(function() {
	// 		$filters.animate({"top": filters_start}, a_time * 3, a_type);
	// 	}, a_time);
	// });

	// Loop animation of iphone
	// var index = 0;
	// var loop_design = setInterval(function() {
	// 	if (index == 0) {
	// 		$notification.animate({"opacity":"1"}, a_time*2, a_type);
	// 		index = 1;
	// 	} else {
	// 		$notification.animate({"opacity":"0"}, a_time*2, a_type);
	// 		index = 0;
	// 	}
	// }, a_time * 13);

	// smooth scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html, body').animate({
	      scrollTop: target.offset().top
	    }, 800, a_type);
	    return false;
	  }
	}
	});
});