function login() {
    let usuario = prompt("Ingresa tu nombre de usuario:");
    let password = prompt("Ingresa tu contraseña:");
  
    let intentos = 3;
  
    while (intentos > 0) {
      if (usuario === "Ricardo" && password === "blinkRojas") {
        alert("Bienvenido!. Inicio de sesión exitoso.\n"+"Comience su compra en Blink 3D Rojas");
        carritoCompras();
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

function carritoCompras() {
  // Creamos un objeto con los productos y sus precios
  let productos = {
    "cortantes": 300,
    "mates": 2000,
    "macetas": 5600,
    "posavasos": 800,
    "soportes": 4500,
  };

  // Creamos un array para almacenar los productos que el usuario va a agregar al carrito
  let carrito = [];

  // Pedimos al usuario que ingrese los productos que quiere comprar hasta que escriba "fin"
  let producto = "";
  while (producto !== "fin") {
    producto = prompt("Ingrese el nombre del producto que desea comprar (o escriba 'fin' para terminar):");
    if (producto !== "fin") {
      carrito.push(producto);
    }
  }

  // Mostramos al usuario los productos que agregó al carrito y calculamos el total a pagar
  let total = 0;
  console.log("Productos en el carrito:");
  for (let i = 0; i < carrito.length; i++) {
    let precio = productos[carrito[i]];
    total += precio;
    console.log(carrito[i] + " - $" + precio);
  }

  console.log("Total a pagar: $" + total.toFixed(2));
}