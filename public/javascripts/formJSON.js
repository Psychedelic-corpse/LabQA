function capturar(){

    //  console.log("capturando");
      function Producto(id,nombre,descripcion,fecha,tipo,cantidad){
          this.id=id;
          this.nombre=nombre;
          this.descripcion=descripcion;
          this.fecha=fecha;
          this.tipo=tipo;
          this.cantidad=cantidad;
      }
      var idCapturar=  document.getElementById("id").value;
      //console.log(idCapturar);
      var nombreCapturar= document.getElementById("nombre").value;
      //console.log(nombreCapturar);
      var descripcionCapturar= document.getElementById("descripcion").value;
      //console.log(descripcionCapturar);
      var fechaCapturar= document.getElementById("fecha").value;
      //console.log(fechaCapturar);
      var tipoCapturar= document.getElementById("tipo").value;
      //console.log(tipoCapturar);
      var cantidadCapturar= document.getElementById("cantidad").value;
      //console.log(cantidadCapturar);
      nuevoProducto = new Producto(idCapturar,nombreCapturar,descripcionCapturar,fechaCapturar,tipoCapturar,cantidadCapturar);
      console.log(nuevoProducto);
      agregar();
  }

  var BaseDatos=[];
  function agregar(){
      BaseDatos.push(nuevoProducto);
      console.log(BaseDatos);
      console.log("esta vivo xdxd");
      document.getElementById("tabla").innerHTML += '<tbody> <th>'+nuevoProducto.id+'</th><td>'+nuevoProducto.nombre+'</td><td>'+nuevoProducto.descripcion+'</td><td>'+nuevoProducto.fecha+'</td><td>'+nuevoProducto.tipo+'</td><td>'+nuevoProducto.cantidad+'</td></tbody>';
  };