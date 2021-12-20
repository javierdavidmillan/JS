$(document).ready(function () {
  // JSON
  const url =
    "http://127.0.0.1:5500/clase%2014/jsJavierMillanDesafio/js/productos.json";

let productos = [];
  getUrl();
  function getUrl() {
    $.get(url, function (data) {
      productos = data;} );
      console.log(productos);
  }

  let carrito = [];
  let carritoLS = localStorage.getItem("carrito");
  if (carritoLS) {
    carrito = JSON.parse(carritoLS);
  }

  let precioTotal;

  // botones de agregar al carrito
  let btn1 = $("#product1");
  btn1.click(function () {
    agregarElemnto(1);
  });

  let btn2 = $("#product2");
  btn2.click(function () {
    agregarElemnto(2);
  });

  let btn3 = $("#product3");
  btn3.on("click", function () {
    agregarElemnto(3);
  });

  let btn4 = $("#product4");
  btn4.on("click", function () {
    agregarElemnto(4);
  });

  // alerta cuando se agrega un producto al carrito
  function agregarElemnto(productoID) {
    let producto = productos.find((p) => p.id === productoID);
    carrito.push(producto);
    swal(producto.nombre, "se ha añadido al carrito.", "success");
    saveCarrito();
    mostrarCarrito();
    console.log(carrito);
  }

  function saveCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
