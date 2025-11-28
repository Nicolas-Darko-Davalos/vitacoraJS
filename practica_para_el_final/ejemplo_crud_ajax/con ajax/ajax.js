function cargarContenido(abrir) {// funcion que mandara o mostrar los de mas archivos en el div con id "contenido" gracias a el podemos observar los fomularios, vistas, etc

    var ajax = new XMLHttpRequest(); //crea el objeto ajax
    ajax.open("get", abrir, true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {//verifica si la peticion se realizo correctamente
            document.querySelector('#contenido').innerHTML = ajax.responseText; //muestra el contenido en el div con id "contenido"
        }
    }
    ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
    ajax.send();
    
}
////todo esto es en base a los id de cada elemento
function crear()
{
    var ajax = new XMLHttpRequest(); //crea el objeto ajax
    var datos=new FormData(document.querySelector('#form_insertar'));//depende del formulario con id form_insertar
    ajax.open("post", "create.php", true); //manda los datos a create.php
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector('#contenido').innerHTML = ajax.responseText;
            
            setTimeout(function(){
                cargarContenido('read.php');
            }, 5000);
            
        }
    }
    ajax.send(datos);
}

function formEditar(id) {
    var ajax = new XMLHttpRequest(); //crea el objeto ajax
    ajax.open("GET", `form_edit.php?id=${id}`, true); //manda el id a form_edit.php
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector('#contenido').innerHTML = ajax.responseText; //manda el contenido al div con id contenido
            
        }
    }
    ajax.send();

}

function editar()
{
    var ajax = new XMLHttpRequest();
    var datos=new FormData(document.querySelector('#form_editar'));
    ajax.open("POST", "edit.php", true) //manda los datos a edit.php
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector('#contenido').innerHTML = ajax.responseText;
            
            setTimeout(function(){
                cargarContenido('read.php'); //despues de 5 segundos carga el contenido de read.php
            }, 5000);
        }
    }
    ajax.send(datos);
}
function eliminar(id) {
    if (confirm("Estas seguro que quieres eliminar")) {//mensaje de confirmacion
        var ajax = new XMLHttpRequest();
        ajax.open("GET", `delete.php?id=${id}`, true); //manda el id a delete.php
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                document.querySelector('#contenido').innerHTML = ajax.responseText;
                
                setTimeout(function(){
                cargarContenido('read.php');
                }, 5000);
            }
        }
        ajax.send();
    
    }
}