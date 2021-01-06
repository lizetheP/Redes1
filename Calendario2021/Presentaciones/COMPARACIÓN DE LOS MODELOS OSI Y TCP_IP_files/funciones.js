// JavaScript Document

//Aplica el efecto de abrir y cerrar el menu lateral del menu top
$('.sidemenu-bar').on('click', function(){
	$('.conten-all').toggleClass('abrirSideBar');
});

/*Aplica el efecto de abrir y cerrar el menu lateral del menu top
$('#btn-centro-exp').on('click', function(){
	$('.showmenu').toggleClass('ocultapanel');
});*/

//Aplica animacion a boton que despliega menu  "icono hamburguesa"
document.querySelector( "#btn1" )
  .addEventListener( "click", function() {
    this.classList.toggle( "btn-gira" );
  });
//


var aleatorio=Math.random();
$('#bussca').load('buscador.html?'+aleatorio);


//Fix para eviar cierre de dropdown yamm al usar forms
$(document).on('click', '.yamm .dropdown-menu', function(e) {
   e.stopPropagation()
})

//boton de idioma  fa fa-times fa fa-times-circle
function CambiarEstilo() {
    if ($('#btn-idioma').hasClass('fa fa-globe fa-inverse')){
      $('#btn-idioma').removeClass('fa fa-globe fa-inverse');
	  $('#btn-idioma').addClass('fa fa-times fa-inverse');
    }else {
      $('#btn-idioma').removeClass('fa fa-times fa-inverse');
      $('#btn-idioma').addClass('fa fa-globe fa-inverse');
    }
	
	if ($('#btn-idioma2').hasClass('fa fa-globe fa-inverse fa-lg')){
      $('#btn-idioma2').removeClass('fa fa-globe fa-inverse fa-lg');
	  $('#btn-idioma2').addClass('fa fa-times fa-inverse fa-lg');
    }else {
      $('#btn-idioma2').removeClass('fa fa-times fa-inverse fa-lg');
      $('#btn-idioma2').addClass('fa fa-globe fa-inverse fa-lg');
    }
}

//boton de búsqueda fa fa-times fa fa-times-circle
function CambiarEstilo2() {
    if ($('#btn-busqueda').hasClass('fa fa-search fa-inverse')){
      $('#btn-busqueda').removeClass('fa fa-search fa-inverse');
	  $('#btn-busqueda').addClass('fa fa-times fa-inverse');
    }else {
      $('#btn-busqueda').removeClass('fa fa-times fa-inverse');
      $('#btn-busqueda').addClass('fa fa-search fa-inverse');
    }
	
	if ($('#btn-busqueda2').hasClass('fa fa-search fa-inverse fa-lg')){
      $('#btn-busqueda2').removeClass('fa fa-search fa-inverse fa-lg');
	  $('#btn-busqueda2').addClass('fa fa-times fa-inverse fa-lg');
    }else {
      $('#btn-busqueda2').removeClass('fa fa-times fa-inverse fa-lg');
      $('#btn-busqueda2').addClass('fa fa-search fa-inverse fa-lg');
    }
}






//Slider  FWSlider
var mouseEnteredSlider = false;

$(document).ready(function(){

	/*$( '#cbp-fwslider' ).cbpFWSlider({
		// default transition speed (ms)
		speed : 500,
		// default transition easing
		fadein : 'fade'
	}).mouseenter(function() {
		mouseEnteredSlider = true;
	}).mouseleave(function() {
		mouseEnteredSlider = false;
	});

	setInterval(function() {
		if(!mouseEnteredSlider) {
			if($('.cbp-fwnext').css('display') != 'none'){
				$('.cbp-fwnext').click();
			} else {
				$('.cbp-fwdots span:first-child').click();
			}
		}
	}, 10000);*/
});


//MOSTRAR - OCULTAR TEXTO
	$('.btn-textchange').click(function(){
		if($(this).text()!="Ocultar"){
			$(this).text('Ocultar').button("refresh");
		}else{
			$(this).text('Mostrar').button("refresh");
		}
	
	});

 //
 //MOSTRAR - OCULTAR TEXTO
//	$('.btn-vermas').click(function(){
//		if($(this).text()!="Ocultar"){
//			$(this).text('Ocultar').button("refresh");
//		}else{
//			$(this).text('Ver más').button("refresh");
//		}
	
//	});

// USO <a href="javascript:abrirGalM('6','/images/');">

function abrirGalM(nfotos,ruta){
	var nfotos= nfotos;
	var ruta= ruta;
	CB_Gallery=new Array(); // creating the array
	CB_Gallery[0]=''; // name of the gallery
	for(var i = 1; i <= nfotos; i++){
		CB_Gallery[i]=new Array(); // array of first item:
		CB_Gallery[i][0]=ruta+i+'.jpg'; // url
		CB_Gallery[i][1]='image'; // type
		CB_Gallery[i][5]=ruta+i+'.jpg'; 
		}
	CB_Open('gallery=,,href='+ruta+'1.jpg,,autoslideshow,,slideshowtime=10');
}