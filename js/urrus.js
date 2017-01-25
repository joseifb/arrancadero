$(document).ready(function(){
    
  $(".close").click(function(){
    $(".modalContenedor").fadeOut();
  });
  $("#selPromociones").click(function(){
      $("#modPromociones").fadeIn();
  });
  $("#selEventos").click(function(){
      $("#modEventos").fadeIn();
  });
  $("#selDesayunos").click(function(){
      $("#modDesayunos").fadeIn();
  });
  $("#selGaleria").click(function(){
      $("#modGaleria").fadeIn();
  });
   $("#gal").click(function(){
      $("#modGaleria").fadeIn();
  });
   $("#galmenu").click(function(){
      $("#modGaleria").fadeIn();
  });
   $("#selBebidas").click(function(){
      $("#modBebidas").fadeIn();
  });
  $(".sig").click(function(evt){
    evt.preventDefault();
    var mod=$(this).parent().attr('id');
    var objeto = mod.replace("mod","");
    var objeto = objeto.toLowerCase();
    var img = $("#"+mod+" .modImagen").css("background-image");
    img = img.replace('url("http://www.elarrancadero.com/img/'+objeto+'/',"");
    img = img.replace('.png")',"");
    posicion= parseInt(img);
    sig(posicion,objeto);
  });
  $(".ant").click(function(evt){
    evt.preventDefault();
    var mod=$(this).parent().attr('id');
    var objeto = mod.replace("mod","");
    var objeto = objeto.toLowerCase();
    var img = $("#"+mod+" .modImagen").css("background-image");
    img = img.replace("..","");
    img = img.replace('url("http://www.elarrancadero.com/img/'+objeto+'/',"");
    img = img.replace('.png")',"");
    posicion= parseInt(img);
    ant(posicion,objeto);
  });
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

    var referrer = document.referrer;
    console.log(""+referrer);
  
});
function sig(posicion,objeto){
  console.log("objeto "+objeto+" posicion "+posicion);
  var data={
    carpeta:objeto,
  }
  $.ajax({
    type:"POST",
    url:"contar.php",
    dataType:"text",
    data:data,
    success:function(respuesta){
      console.log("respues: "+respuesta);
      var cantidad=respuesta;
      console.log(cantidad);
      if(posicion < cantidad){
        posicion++;
      }else{
        posicion = 1;
      }
      objeto2=objeto.charAt(0).toUpperCase() + objeto.slice(1);
      $("#mod"+objeto2+" .modImagen").css("background-image","url(./img/"+objeto+"/"+posicion+".png)");
    }
  });
  
}
function ant(posicion,objeto){
  var cantidad=0;
  var data={
    carpeta:objeto,
  }
  $.ajax({
    type:"POST",
    url:"contar.php",
    dataType:"text",
    data:data,
    success:function(respuesta){
      console.log("respues: "+respuesta);
      cantidad=respuesta;
      if(posicion > 1){
        posicion--;
      }else{
        posicion = cantidad;
      }
      objeto2=objeto.charAt(0).toUpperCase() + objeto.slice(1);
      $("#mod"+objeto2+" .modImagen").css("background-image","url(./img/"+objeto+"/"+posicion+".png)");
    }
  });
}

