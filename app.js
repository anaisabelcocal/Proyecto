var App = function() {
    var $listaContactos = document.querySelector('.table'),
        $campoNombre = document.querySelector('#txtNombre'),
        $campoTelefono = document.querySelector('#txtTelefono'),
        $campoEmail = document.querySelector('#txtEmail'),
        $campoDireccion = document.querySelector('#txtDireccion'),
        $botonAgregar = document.querySelector('#btnAgregar'),
        $botonRefrescar = document.querySelector('#btnRefrescar'),
        $botonEliminar = document.querySelector('#btnEliminar');

    var agenda = new Agenda($listaContactos, $campoNombre, $campoTelefono, $campoEmail, $campoDireccion);

    var agregarItem = function(objetoEvento) {
        if(!$campoNombre.value || !$campoTelefono.value || !$campoEmail.value || !$campoDireccion.value) {
            objetoEvento.preventDefault();
            alert("Favor ingresar el detalle del contacto");
            return;
        }

        agenda.agregarItem($campoNombre.value, $campoTelefono.value, $campoEmail.value, $campoDireccion.value);
        $campoNombre.focus();
        $campoNombre.value = '';
        $campoTelefono.value = '';
        $campoEmail.value = '';
        $campoDireccion.value = '';
        objetoEvento.preventDefault();
    };

    var eliminarItem = function(objetoEvento) {
      agenda.eliminarItem();
      $campoNombre.focus();
      $campoNombre.value = '';
      $campoTelefono.value = '';
      $campoEmail.value = '';
      $campoDireccion.value = '';
      objetoEvento.preventDefault();
   };

   var refrescarItem = function(objetoEvento) {
     if(!$campoNombre.value || !$campoTelefono.value || !$campoEmail.value || !$campoDireccion.value) {
         objetoEvento.preventDefault();
         alert("Seleccione el contacto a editar");
         return;
     }

     agenda.refrescarItem($campoNombre.value, $campoTelefono.value, $campoEmail.value, $campoDireccion.value);
     $campoNombre.focus();
     $campoNombre.value = '';
     $campoTelefono.value = '';
     $campoEmail.value = '';
     $campoDireccion.value = '';
     objetoEvento.preventDefault();
  };

    $botonAgregar.addEventListener('click', agregarItem);
    $botonRefrescar.addEventListener('click', refrescarItem);
    $botonEliminar.addEventListener('click', eliminarItem);

    return {
        cargarLista: function() {
        //  var lista = JSON.parse(sessionStorage.getItem("lista"));

          //array.foreach(){};

        }
    }
};
