let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

function clickConsole() {
  console.log("El boton fue clickeado");
}

function clickPrompt() {
  let ciudadBrasileña = prompt("Dame el nombre de una ciudad de Brasil");
  alert(`Estuve en ${ciudadBrasileña} y me acordé de ti.`);
}

function clickAlert() {
  alert("Yo amo JS");
}

function clickSuma() {
  let number1 = parseInt(prompt("Elige un primer numero"));
  let number2 = parseInt(prompt("Elige el segundo numero"));
  alert(`El resultado de la suma de ambos numeros es: ${number1 + number2}`);
}
