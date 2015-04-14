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



/* Cargar Caja TXT PRincipal Insert QSomos_NuestraCongregacion */

$(document).ready(function() {

    $("#CajaTxtPrincipalContainer").load('QSomos_NuestraCongregacion.html');


});

/* Cargar  Caja TXT PRincipal Insert QSomos_NuestraCongregacion */




function cklink_funcion(chcklink){
	
	
	if(chcklink=="LanaLnk1"){
			/* Cargar Caja TXT PRincipal Insert QSomos_NuestraCongregacion */
			$(document).ready(function() {
				$("#CajaTxtPrincipalContainer").load('QSomos_NuestraCongregacion.html');
			});
			/* Cargar  Caja TXT PRincipal Insert QSomos_NuestraCongregacion */
	}
	
	
	if(chcklink=="LanaLnk4"){
			/* Cargar Caja TXT PRincipal Insert QSomos_MadreFundadora */
			$(document).ready(function() {
				$("#CajaTxtPrincipalContainer").load('QSomos_MadreFundadora.html');
			});
			/* Cargar  Caja TXT PRincipal Insert QSomos_MadreFundadora */
	}
	

	}

