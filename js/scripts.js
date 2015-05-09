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





$(document).ready(function() {
// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
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







	
/* script scrol up */	
    $(document).ready(function(){
  
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        
	
		});
  
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
  
 
    });
	
	/* script scrol up */












/* Cargar Caja TXT PRincipal Insert QSomos_NuestraCongregacion */
/*
$(document).ready(function() {

    $("#CajaTxtPrincipalContainer").load('QSomos_NuestraCongregacion.html');


});
*/

/* Cargar  Caja TXT PRincipal Insert QSomos_NuestraCongregacion */



/*
function cklink_funcion(chcklink){
	
	
	if(chcklink=="LanaLnk1"){
		
			$(document).ready(function() {
				$("#CajaTxtPrincipalContainer").load('QSomos_NuestraCongregacion.html');
			});
			
	}
	
	
	
	if(chcklink=="LanaLnk4"){
		
			$(document).ready(function() {
				$("#CajaTxtPrincipalContainer").load('QSomos_MadreFundadora.html');
			});
		
	}
	

	}
*/
