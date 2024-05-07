<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre_contacto'];
    $email = $_POST['email_contacto'];
    $mensaje = $_POST['mensaje_contacto'];

    $para = "tu@email.com"; // Cambia esto por tu dirección de correo electrónico
    $asunto = "Mensaje de contacto desde el sitio web";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $headers = "From: $nombre <$email>";

    if (mail($para, $asunto, $contenido, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
