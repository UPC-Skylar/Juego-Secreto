let holaMundo = () => alert("Hola mundo");
holaMundo();

let nombreUsuario = prompt("¿Cual es tu nombre?");
let holaUser = (user) => alert(`¡Hola, ${user}!`);
holaUser(nombreUsuario);

let numeroUsuario = prompt("Elige un numero");
let dobleNumero = (num) => num * 2;
dobleNumero(numeroUsuario);

function promedioTres() {
  let num1 = parseInt(prompt("Elige el primer número"));
  let num2 = parseInt(prompt("Elige el segundo número"));
  let num3 = parseInt(prompt("Elige el tercer número"));
  return (num1 + num2 + num3) / 3;
}
promedioTres();

function numeroMayor() {
  let num1 = parseInt(prompt("Elige el primer número"));
  let num2 = parseInt(prompt("Elige el segundo número"));
  return Math.max(num1, num2);
}
numeroMayor();

let numero_multiplicable = parseInt(prompt("Elige un número"));
let multiplicacionPorSiMismo = (num) => num * num;
multiplicacionPorSiMismo(numero_multiplicable);
