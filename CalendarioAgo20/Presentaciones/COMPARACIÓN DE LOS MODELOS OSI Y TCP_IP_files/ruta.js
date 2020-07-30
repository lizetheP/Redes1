function obtenerRuta(pagina){
	//$("#navegacion").html("hao");
	jQuery(function($){
		$.getJSON("/library/componentes/menu/menu.php?jsoncallback=?"+"&pagina="+pagina,
				function(data){
					$("#navegacion").html(data);
				});
		}
	);
}
