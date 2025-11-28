<?php
$con=new mysqli("localhost","root","","prueba4");
if ($con->connect_error)
    {
        die ("conexion fallada".$con->connect_error);
    }
?>