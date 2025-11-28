<?php include("conexion.php");

$nombre=$_POST['nombre'];
$celular=$_POST['celular'];
$email=$_POST['email'];

//$sql="INSERT INTO personas(nombres,apellidos,fecha_nacimiento,sexo,correo) VALUES('$nombres','$apellidos','$fecha_nacimiento','$sexo','$correo')";


$stmt=$con->prepare('INSERT INTO persona (nombre,celular,email) VALUES(?,?,?)');

// Vincular parámetros
$stmt->bind_param("sss",$nombre,$celular,$email);



// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Nuevo registro creado con éxito";
} else {
    echo "Error: " . $stmt->error;
}

$con->close();
?>