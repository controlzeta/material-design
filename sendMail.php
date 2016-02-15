
<?php 

$destinatario = "francisco.arroyo@x1mexico.com";
$asunto = "Contacto Mezzopane"; 
$cuerpo = '<html><head><title>Mensaje desde Mezopanne.com</title></head><body><h1>Este correo llego a traves de mezzopane.com</h1><p>';
$cuerpo .= "Asunto: " . $_POST['subject'] . " </ br>";
$cuerpo .= "Comentarios: " . $_POST['comments'] . "</ br>";
$cuerpo .='</p></body></html>'; 


//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 

//dirección del remitente 
$headers .= "From: Mezzopane <contacto@dmezzopane.com>\r\n"; 

//dirección de respuesta, si queremos que sea distinta que la del remitente 
$headers .= "Reply-To: contacto@dmezzopane.com \r\n"; 

//ruta del mensaje desde origen a destino 
$headers .= "Return-path: contacto@dmezzopane.com \r\n"; 

//direcciones que recibián copia 
$headers .= "Cc: francisco.arroyo@x1mexico.com\r\n"; 

//direcciones que recibirán copia oculta 
$headers .= "Bcc: francisco.arroyo@x1mexico.com\r\n"; 

mail($destinatario,$asunto,$cuerpo,$headers) 

?>