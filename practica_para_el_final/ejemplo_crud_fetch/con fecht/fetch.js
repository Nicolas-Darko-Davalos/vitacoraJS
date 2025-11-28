function cargarContenido(abrir) {//funcion para cargar contenido en el div con id "contenido"
	var contenedor;
	contenedor = document.getElementById('contenido');//selecciona el div con id contenido
	fetch(abrir)
		.then(response => response.text())//Se ejecuta cuando la petición termina, la respuesta la convierte en texto
		.then(data => contenedor.innerHTML=data); //contiene la respuesta y la inserta en el div
}


function crear()
{
    var datos=new FormData(document.querySelector('#form_insertar')); //depende del formulario con id form_insertar
	contenedor = document.getElementById('contenido'); //obtiene referencia al contenedor
    fetch("create.php",
        {method:"POST",
		body:datos})
		.then(response => response.text())
		.then(data => {contenedor.innerHTML=data
            setTimeout(function(){
                cargarContenido('read.php');
            }, 5000);
        });
}

function formEditar(id) {
	contenedor = document.getElementById('contenido');
    fetch(`form_edit.php?id=${id}`)
		.then(response => response.text())
		.then(data => {contenedor.innerHTML=data
        });
}

function editar()
{
    var datos=new FormData(document.querySelector('#form_editar'));
	contenedor = document.getElementById('contenido');
    fetch("edit.php",
        {method:"POST",
		body:datos})
        .then(response => response.text())
		.then(data => {contenedor.innerHTML=data
            setTimeout(function(){
                cargarContenido('read.php');
            }, 5000);
            });
}
function eliminar(id) {
    if (confirm("Estas seguro que quieres eliminar")) {
	contenedor = document.getElementById('contenido');
    fetch(`delete.php?id=${id}`)
		.then(response => response.text())
		.then(data => {contenedor.innerHTML=data
            setTimeout(function(){
                cargarContenido('read.php');
            }, 5000);
        });
    }
}