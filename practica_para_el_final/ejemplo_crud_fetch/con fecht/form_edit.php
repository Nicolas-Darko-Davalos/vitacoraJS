<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include("conexion.php");
    $id=$_GET['id'];
    $sql="SELECT id,nombre,celular,email FROM persona WHERE id=$id";
    $resultado=$con->query($sql);
    $row = $resultado->fetch_assoc();
    ?>
    <form action="javascript:editar()"method="post" id="form_editar">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value="<?php echo $row['nombre'];?>">
        <br>
        <label for="celular">celular:</label>
        <input type="number" name="celular" value="<?php echo $row['celular'];?>">
        <br>
        <label for="email">email:</label>
        <input type="email" name="email" value="<?php echo $row['email'];?>">
        <br>
        <input type="hidden" name="id" value="<?php echo $row['id'];?>">
        <input type="submit" value="Guardar">

    </form>
    
</body>
</html>