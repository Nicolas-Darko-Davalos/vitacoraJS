<?php include("conexion.php");

$nombre=$_POST['nombre'];
$celular=$_POST['celular'];
$email=$_POST['email'];
$id=$_POST['id'];

//$sql="UPDATE personas SET nombres='$nombres',apellidos='$apellidos',fecha_nacimiento='$fecha_nacimiento',sexo='$sexo',correo='$correo' WHERE id=$id";


$stmt=$con->prepare('UPDATE persona SET nombre=?,celular=?,email=? WHERE id=?');


// Vincular parámetros
$stmt->bind_param("sssi",$nombre, $celular,$email, $id);



// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Registro Actualizado";
} else {
    echo "Error: " . $stmt->error;
}

$con->close();
?>