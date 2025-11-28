<?php
$con=new mysqli("localhost","root","","prueba3");
if ($con->connect_error)
    {
        die ("conexion fallada".$con->connect_error);
    }
?>