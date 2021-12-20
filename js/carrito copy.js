$(document).ready(function () {
  let carrito = [];
  let carritoLS = localStorage.getItem("carrito");
  if (carritoLS) {
    carrito = JSON.parse(carritoLS);
    mostrarTitulo()
  }
// carrito = JSON.parse(carritoLS);
let precioTotal = 0;
let htmlString;
let contenedor = $("#carrito");
htmlString = `<div class="row">`;
for (const producto of carrito) {
  htmlString +=`
  <div class=col-3>${producto.nombre}</div> 
  <div class=col-3> $${producto.precio}</div>
  <div class="col-3"></div>
  <button class="col-3"">  
  <i class="fas fa-trash col-3"></i>
   Eliminar del carrito</button>
  `;
  precioTotal += parseInt(producto.precio);
}
htmlString += "</div>";
contenedor.html (`${htmlString}`) ;

// Escribe el titulo del carrito en el html solo cuando se agrega el primer producto
function mostrarTitulo() {
  let titulo = document.getElementById("titulo");
  titulo.innerHTML = `
  <div class="col-3">Producto</div><div class="col-3">Precio</div>
  <div class="col-6"></div>
  `;
}
// muestra el precio total del carrito en el icono
mostrarCarrito();
function mostrarCarrito() {
  let contenedor = $("#totalCarrito");
  contenedor.html(``);
  precioTotal = 0;
  for (const producto of carrito) {
    precioTotal += parseInt(producto.precio);
  }
  if (precioTotal > 0) {
  let contenedorPrecios = $("#totalCarrito");
  contenedorPrecios.html(`$${precioTotal}`);}
}

console.log("El DOM esta listo");
});


/*

// Codigo para eliminar un producto del carrito NO FUNCIONA

let botonBorrar = document.getElementsByClassName("button");
botonBorrar.addEventListener("click", errase);

function errase() {
  // Obtenemos el producto ID que hay en el boton pulsado
  const productoBorrar = productos.find((p) => p.id === productoID);
  // const id = producto.id;
  // const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
      return carritoId !== productoBorrar;
  });
  // volvemos a renderizar
  mostrarCarrito();
  // Calculamos de nuevo el precio
}
*/
