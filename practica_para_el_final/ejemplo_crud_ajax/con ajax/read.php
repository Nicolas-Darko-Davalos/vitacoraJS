    <?php include("conexion.php");

    $sql="SELECT id,nombre,celular,email FROM persona";

    $resultado=$con->query($sql);

    ?>
    <table style="border-collapse: collapse" border="1" >
        <thead>
            <tr>
                <th width="100px">Nombre</th>
                <th width="60px">celular</th>
                <th width="10px">email</th>
                <th>Operaciones</th>
            </tr>
        </thead>
        
        <?php
        while($row=mysqli_fetch_array($resultado)){
        ?>
        <tr>
            <td><?php echo $row['nombre'];?></td>
            <td><?php echo $row['celular'];?></td>
            <td><?php echo $row['email'];?></td>
            <td><a href="javascript:formEditar(<?php echo $row['id'];?>)">Editar</a>  <a href="javascript:eliminar(<?php echo $row['id'];?>)">Eliminar</a> </td>
        </tr>
        <?php } ?>
    </table>

    <a href="javascript:cargarContenido('form_insertar.html')"> Insertar</a>