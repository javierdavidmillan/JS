$(document).ready(function () {
  // cart();
  // function cart() {
  let carrito = [];
  let carritoLS = localStorage.getItem("carrito");
  if (carritoLS) {
    carrito = JSON.parse(carritoLS);
    mostrarTitulo();
  }
  // string
  stringify();
  function stringify() {
    let precioTotal = 0;
    let htmlString;
    let contenedor = $("#carrito");
    htmlString = `<div class="row">`;
    for (const producto of carrito) {
      htmlString += `
  <div class=col-3>${producto.nombre}</div> 
  <div class=col-3> $${producto.precio}</div>
  <div class="col-3"></div>
  <button class="col-3 btnErase" id="${producto.id}">
   Eliminar del carrito</button>
  `;
      precioTotal += parseInt(producto.precio);
    }
    htmlString += "</div>";
    contenedor.html(`${htmlString}`);
  }

  // botón de eliminar del carrito
  let btnErase = $(".btnErase");
  btnErase.click(function () {
    let id = $(this).attr("id");
    let index = carrito.filter((producto) => producto.id != id);
    carrito = index;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    stringify();
    mostrarCarrito();
    console.log(carrito);
  });

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
      contenedorPrecios.html(`$${precioTotal}`);
    }
  }

  console.log("El DOM esta listo");
});
