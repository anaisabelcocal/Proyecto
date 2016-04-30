var Agenda = function($lista, $nombre, $telefono, $email, $direccion) {
    var filaSeleccionada;

    var seleccionarFila = function(fila) {
      for (var i=1; i<$lista.rows.length; i++){
        $lista.rows[i].style.background = "white";
      };
      filaSeleccionada = fila.rowIndex;
      fila.style.background = "#e6e6ff";
    };

    var editarFila = function(fila) {
      seleccionarFila(fila);
      $nombre.value = $lista.rows[filaSeleccionada].cells.item(1).innerHTML;
      $telefono.value = $lista.rows[filaSeleccionada].cells.item(2).innerHTML;
      $email.value = $lista.rows[filaSeleccionada].cells.item(3).innerHTML;
      $direccion.value = $lista.rows[filaSeleccionada].cells.item(4).innerHTML;
    };

    var convertirLista = function($lista){
      var array = [];
      var headers = [];
      $('.table th').each(function(index, item) {
        headers[index] = $(item).html();
      });
      $('.table tr').has('td').each(function() {
          var arrayItem = {};
          $('td', $(this)).each(function(index, item) {
          arrayItem[headers[index]] = $(item).html();
      });
      array.push(arrayItem);
      sessionStorage.setItem("lista", JSON.stringify(array));
});
    };
    return {
        agregarItem: function(nombre, telefono, email, direccion) {
          var id = sessionStorage.getItem("idFila")
          var index = sessionStorage.getItem("index")

          if (id == null || id == "undefined"){
            id = 1;
          };
          if (index == null || index == "undefined"){
            index = 1;
          };

          var fila = $lista.insertRow(index);
          var col1 = fila.insertCell(0);
          var col2 = fila.insertCell(1);
          var col3 = fila.insertCell(2);
          var col4 = fila.insertCell(3);
          var col5 = fila.insertCell(4);

          col1.innerHTML = id;
          col2.innerHTML = nombre;
          col3.innerHTML = telefono;
          col4.innerHTML = email;
          col5.innerHTML = direccion;

          sessionStorage.setItem("idFila", parseInt(id)+1);
          sessionStorage.setItem("index", parseInt(index)+1);
          fila.addEventListener('click', function(){seleccionarFila(this)});
          fila.addEventListener('dblclick', function(){editarFila(this)});
          convertirLista();
        },
        eliminarItem: function() {
          var index = sessionStorage.getItem("index")

          if (!filaSeleccionada == 0 || !filaSeleccionada == null || !filaSeleccionada == "undefined"){
            $lista.deleteRow(filaSeleccionada);
            sessionStorage.setItem("index", parseInt(index)-1);
            convertirLista();
            filaSeleccionada = undefined;
          }else {
            alert("Seleccione el contacto a eliminar");
          };
        },
        refrescarItem: function(nombre, telefono, email, direccion) {

          if (!filaSeleccionada == 0 || !filaSeleccionada == null || !filaSeleccionada == "undefined"){
            $lista.rows[filaSeleccionada].cells.item(1).innerHTML = nombre;
            $lista.rows[filaSeleccionada].cells.item(2).innerHTML = telefono;
            $lista.rows[filaSeleccionada].cells.item(3).innerHTML = email;
            $lista.rows[filaSeleccionada].cells.item(4).innerHTML = direccion;

            convertirLista();
            filaSeleccionada = undefined;
          }else {
            alert("Seleccione el contacto a editar");
          };
        }
    }
};
