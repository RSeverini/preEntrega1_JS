function login() {
    let usuario = prompt("Ingresa tu nombre de usuario:");
    let password = prompt("Ingresa tu contraseña:");
  
    let intentos = 3;
  
    while (intentos > 0) {
      if (usuario === "Ricardo" && password === "blinkRojas") {
        alert("Bienvenido!. Inicio de sesión exitoso.\n"+"Comience su compra en Blink 3D Rojas");
        compra();
        return;
      } else {
        alert(`Usuario o contraseña incorrectos. Te quedan ${intentos} intentos.`);
        intentos--;
        password = prompt("Ingresa tu contraseña nuevamente:");
      }
    }
    alert("Has agotado todos tus intentos de inicio de sesión. Por favor, inténtalo más tarde.");
  }

login();

function compra() {
  let listaProductos = "";
  let totalCompra = 0;

  let nombreProducto = prompt("Ingrese el nombre del producto:");
  let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto:"));
  let precioProducto = parseFloat(prompt("Ingrese el precio unitario del producto:"));

  let totalProducto = cantidadProducto * precioProducto;
  totalCompra += totalProducto;
  
  listaProductos += "Cantidad: " + cantidadProducto + " Producto: " + nombreProducto + " Precio Unit.: $" + precioProducto.toFixed(2) + " Total: $" + totalProducto.toFixed(2) + "\n";
  
  let seguirComprando = confirm("¿Desea ingresar más productos?");
  
  while (seguirComprando) {
      nombreProducto = prompt("Ingrese el nombre del producto:");
      cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto:"));
      precioProducto = parseFloat(prompt("Ingrese el precio unitario del producto:"));
      totalProducto = cantidadProducto * precioProducto;
      totalCompra += totalProducto;
      listaProductos += "Cantidad: " + cantidadProducto + " Producto: " + nombreProducto + " Precio Unit.: $" + precioProducto.toFixed(2) + " Total: $" + totalProducto.toFixed(2) + "\n";
      seguirComprando = confirm("¿Desea ingresar más productos?");
  }
  alert("Su compra se registró correctamente. Muchas gracias por confiar!")
  console.log("Lista de productos:");
  console.log(listaProductos);
  console.log("Total de la compra: $" + totalCompra.toFixed(2));

}