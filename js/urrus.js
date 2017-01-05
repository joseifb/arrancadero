$(document).ready(function(){

	$("#submit-message").click(function(evt){
  evt.preventDefault();
  var data = {
   nombre:$("#nombre").val(),
   telefono:$("#telefono").val(),
   correo:$("#correo").val(),
   mensaje:$("#mensaje").val()
  }
  $.ajax({
   type:"post",
   dataType:"text",
   url:"enviarcorreo.php",
   data:data,
   success:function(respuesta){

   	console.log(respuesta);
    if(respuesta==="enviado"){
    //$("#solicitudEnviada").fadeIn();
    $("#contact-form").html(respuesta);
     $("#nombre").val("");
     $("#telefono").val("");
     $("#correo").val("");
     $("#mensaje").val("");
    }else{
     alert("¡faltan datos!");
    }

     }
  })
 });
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