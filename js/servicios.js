class Servicio {
  constructor(data) {
    this.precio = data.precio;
    this.descuento = data.descuento;
    this.serviciosTipos = data.serviciosTipos;
    this.horas = data.horas;
    this.precioIva = data.precioIva;
    this.precioHoras = data.precioHoras;
    this.precioDescuento = data.precioDescuento;
  }
  calcularPrecioServicio() {
    this.precioHoras = this.horas * this.precio;
  }
  calcularDescuento() {
    this.precioDescuento =
      this.precioHoras - (this.precioHoras * this.descuento) / 100;
  }
  calcularIva() {
    this.precioIva = this.precioDescuento * 1.21;
  }
}

let inputNombre = document.getElementById("yourName");
let inputHoras = document.getElementById("horas");
let inputServicios = document.getElementById("serviciosTipos");
let inputDescuento = document.getElementById("descuento");
// let serviciosPrecios = [2500, 2000, 1000];
let precio =2500;
/*
let precio;

function servicioValue () {
  if (inputServicios.value === "Sesión de fotos familiar.") {
    precio = serviciosPrecios[0];
  }
  if (inputServicios.value === "Fotografía de bodas.") {
    precio = serviciosPrecios[1];
  }
  if (inputServicios.value === "Fotografía de productos.") {
    precio = serviciosPrecios[2];
  }
  return precio;
}
servicioValue();
*/

let calcular = document.getElementById("btnCalc");
calcular.onclick = function () {
  servicio = new Servicio({
  horas : inputHoras.value,
  serviciosTipos : inputServicios.value,
  descuento : inputDescuento.value,
  precio: precio,
  });
  // metodos
  servicio.calcularPrecioServicio();
  servicio.calcularDescuento();
  servicio.calcularIva();

  // mensaje a imprimir
  let message = `Hola ${inputNombre.value} el precio de la hora del servicio: ${servicio.serviciosTipos} es $${servicio.precioHoras}. y el precio total con descuento e IVA incluido es $${servicio.precioIva}`;
  console.log(message);
  // crea un div en el id form
  let finalService = document.createElement("div");
  finalService.innerHTML = `${message}`;
  // imprime el div en el id form
  document.getElementById("form").appendChild(finalService);
};
