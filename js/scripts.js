$(function(){
	$('#menu li a').click(function(event){
		var elem = $(this).next();
		if(elem.is('ul')){
			event.preventDefault();
			$('#menu ul:visible').not(elem).slideUp();
			elem.slideToggle();
		}
	});
});






// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});



/* Cargar Menu left  Home*/

$(document).ready(function() {

    $("#MenuLeftContainer").load('menu_left_principal.html');


});

/* Cargar Menu left  Home*/



/* Cargar Menu Right  Home*/

$(document).ready(function() {

    $("#MenuRightContainer").load('menu_right_principal.html');


});

/* Cargar Menu Right  Home*/



