<?php
$ban=0;
 if(isset($_POST['nombre'])){
  $nombre = $_POST['nombre'];
 }else{
  $ban=1;
  echo "faltaNombre";
 }
 if(isset($_POST['telefono'])){
  $telefono = $_POST['telefono'];
 }else{
  $ban=1;
  echo "Falta telefono";
 }
 if(isset($_POST['correo'])){
  $correo = $_POST['correo'];
 }else{
  $ban=1;
  echo "Falta correo";
 }
 if(isset($_POST['mensaje'])){
  $mensaje = $_POST['mensaje'];
 }else{
  $ban=1;
  echo "falta Mensaje";
 }
 if($ban === 0){
  $to = 'jose@belmares.me';
  $subject = "Mensaje de elarrancadero.com";
  $txt = '<html><body>telefono: '.$telefono.'<br>'.$nombre.'<br>'.$mensaje.'</body></html>';
  $headers ='MIME-Version: 1.0'."\r\n";
  $headers .='Content-Type: text/html; charset=UTF-8'."\r\n";
  $headers .= "From: ".$correo.'\r\n';
  if(mail($to,$subject,$txt,$headers)){
   echo "enviado";
   $to=$correo;
   $headers ='MIME-Version: 1.0'."\r\n";
   $headers .='Content-Type: text/html; charset=UTF-8'."\r\n";
   $headers .= "From:Optica Poder Visual <contacto@opticapodervisual.com.mx>".'\r\n';
   $subject="Mensaje Recibido";
   $txt='<!DOCTYPE html><html><body><div style="font-size:2.5em;color: rgb(206,57,114);text-align:center;">¡Gracias '.$nombre.'!</div><div style="color:#333;font-size:1.5em;text-align:center;">Hemos recibido tu mensaje, en breve nos pondremos en contacto contigo.</div></body></html>';
   mail($to,$subject,$txt,$headers);
  }
 }

?>