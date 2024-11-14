/*
1.- referencia ----------------
2.agrego evento a la referencia y obtener datos-------------------

3.- creo mi modal y la tabla -------------------
4.- creo filas y columnas con los datps de referencia (tiyulo y precio)----
5.- meto los datos en mi elemnto creado
*/
var agregarBtns = document.querySelectorAll('.producto');

agregarBtns.forEach(function (agregarBtn) {
    agregarBtn.addEventListener('click', function () {
        var precio = agregarBtn.getAttribute('precio');
        var titulo = agregarBtn.getAttribute('titulo');
        var modal = document.getElementById('modal');
        var contenido = document.getElementById('contenido');
        /*  var modal = document.createElement('div');
          modal.setAttribute('id', 'modal');
          modal.className = 'modal';*/
        
        var tabla = document.createElement('table');
        var tbody = document.createElement('tbody');
        
        var filaPrecio = document.createElement('tr');
        var celdaPrecioTitulo = document.createElement('td');
        celdaPrecioTitulo.textContent = 'Precio:';
        var celdaPrecioValor = document.createElement('td');
        celdaPrecioValor.textContent = precio;
        console.log(celdaPrecioValor);

        filaPrecio.appendChild(celdaPrecioTitulo);
        filaPrecio.appendChild(celdaPrecioValor);

        tbody.appendChild(filaPrecio);

        // Agregar fila para el título
        var filaTitulo = document.createElement('tr');
        var celdaTituloTitulo = document.createElement('td');
        celdaTituloTitulo.textContent = 'Título:';
        var celdaTituloValor = document.createElement('td');
        celdaTituloValor.textContent = titulo;
        console.log(celdaTituloValor);

        filaTitulo.appendChild(celdaTituloTitulo);
        filaTitulo.appendChild(celdaTituloValor);

        tbody.appendChild(filaTitulo);

        tabla.appendChild(tbody);
        /* modal.style.display='block';*/
       modal.style.display = 'block';
        contenido.appendChild(tabla);


        // Agregar la ventana modal a la página
        /*document.body.appendChild();*/
    });
});

var btncerrar = document.getElementById('cerrar');
var modal = document.getElementById('modal');
btncerrar.addEventListener('click' , function(){
    modal.style.display= 'none';
});

