const aleatorio = (min, max) => parseInt(Math.random() * (max - min) + min);

let numeroSecreto;
let intentos;

function asignarTextoElemento(selector, texto) {
  let elementoHTML = document.querySelector(selector);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos > 1 ? "intentos" : "intento"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroUsuario > numeroSecreto) {
    asignarTextoElemento("p", "El número secreto es menor 🫵🏼😂");
    intentos++;
    limpiarCaja();
  } else {
    asignarTextoElemento("p", "El número secreto es mayor 🫵🏼😂");
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  numeroSecreto = aleatorio(1, 10);
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
