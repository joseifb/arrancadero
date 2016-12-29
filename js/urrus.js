$(document).ready(function(){
	$(".menucillo li").click(function(evt){
		var id = evt.target.id;
		$(".menucillo li").removeClass("seleccionado");
		$("#"+id).addClass("seleccionado");
		id = id.replace("li","");
		$(".platillos").removeClass("platillosSeleccionado");
		$("#"+id).addClass("platillosSeleccionado");
		$(".imagen2").css("background-image","url(img/"+id+".png)");
		$(".imagen1").fadeOut(800,function(){
			$(".imagen1").css("background-image","url(img/"+id+".png)");
			$(".imagen1").show();
		});
	});
});