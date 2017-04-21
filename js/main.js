$(document).ready(function() {
	// ANIMACIONES
	new WOW().init();	

	// CARROUSEL
  $('#Carousel').carousel({
      interval: 5000
  })
  $('#Carousel2').carousel({
      interval: 5000
  })

  // ICONO DE VALOR PERCIBIDO

  $("#valorPercibido").hover(function() {
		$(this).attr("src","img/graficos/valor-percibido_G.png");
			}, function() {
		$(this).attr("src","img/graficos/valor-percibido.png");
	});

	// ICONO DE FUERTE VINCULO

	$("#fuerteVinculo").hover(function() {
		$(this).attr("src","img/graficos/vinculo_G.png");
			}, function() {
		$(this).attr("src","img/graficos/vinculo.png");
	});

	// ICONO TARGETS

	$("#targets").hover(function() {
		$(this).attr("src","img/graficos/targets_G.png");
			}, function() {
		$(this).attr("src","img/graficos/targets.png");
	});

	// ICONO REPORTES	

	$(".reportes").hover(function() {
		$(this).attr("src","img/graficos/reportes_G.png");
			}, function() {
		$(this).attr("src","img/graficos/reportes.png");
	});

	// ICONO BRANDING	

	$("#branding").hover(function() {
		$(this).attr("src","img/graficos/branding_G.png");
			}, function() {
		$(this).attr("src","img/graficos/branding.png");
	});

	// ICONO RECORDACION	

	$("#recordacion").hover(function() {
		$(this).attr("src","img/graficos/recordacion_G.png");
			}, function() {
		$(this).attr("src","img/graficos/recordacion.png");
	});


});

$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});
$(document).ready(function(){
	$("#box-retornos").hide( );
    $("#box-inversion").hide( );
    $("#fondos").click(function(){
        $("#box-fondos").fadeIn("slow");
        $("#box-retornos").fadeOut("slow");
        $("#box-inversion").fadeOut("slow");
    });
    $("#retornos").click(function(){
    	$("#box-retornos").fadeIn("slow");
    	$("#box-inversion").fadeOut("slow");
    	$("#box-fondos").fadeOut("slow");  
    });
    $("#inversion").click(function(){
    	$("#box-inversion").fadeIn("slow");
        $("#box-retornos").fadeOut("slow");
 		$("#box-fondos").fadeOut("slow");
    });
});

