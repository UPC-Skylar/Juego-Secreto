let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function aleatorio(min, max) {
  let numeroGenerado = parseInt(Math.random() * max + min);
  //Si el numeroGenerado está incluido en la lista
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  console.log(intentos);
  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento(
      ".texto__parrafo",
      "Ya se sortearon todos los números posibles"
    );
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return aleatorio(1, numeroMaximo);
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function asignarTextoElemento(selector, texto) {
  let elementoHTML = document.querySelector(selector);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  if (intentos > 3) {
    alert("Superaste el número de intentos, Perdiste 😥");
    let userDecision = parseInt(
      prompt("Desear volver a jugar? \n1. Sí\n2. No")
    );
    if (userDecision == 1) {
      reiniciarJuego();
    } else {
      document.getElementById("container").setAttribute("disabled", true);
    }
  }
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      ".texto__parrafo",
      `Acertaste el número en ${intentos} ${
        intentos > 1 ? "intentos" : "intento"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento(
        ".texto__parrafo",
        "El número secreto es menor 🫵🏼😂"
      );
    } else {
      asignarTextoElemento(
        ".texto__parrafo",
        "El número secreto es mayor 🫵🏼😂"
      );
    }
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
  asignarTextoElemento(
    ".texto__parrafo",
    `Indica un número del 1 al ${numeroMaximo}`
  );
  numeroSecreto = aleatorio(1, numeroMaximo);
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
