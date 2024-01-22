const aleatorio = (min, max) => parseInt(Math.random() * (max - min) + min);

let numeroSecreto = aleatorio(1, 10);

function asignarTextoElemento(selector, texto) {
  let elementoHTML = document.querySelector(selector);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroUsuario);
  console.log(numeroSecreto);
  console.log(numeroUsuario === numeroSecreto);
  return;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");
