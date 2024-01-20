//Estas son las variables
function juego(min, max) {
  let numeroSecreto = Math.floor(Math.random() * (max - min) + min);
  console.log(numeroSecreto); //Sirve para ver el número en consola
  let intentos = 1;
  let numeroUsuario = 0;
  let maximosIntentos = 3;
  //Realizar la comparación
  while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(
      prompt(`Escribe un numero entre ${min} y ${max}, por favor:`)
    );
    if (numeroUsuario === numeroSecreto) {
      alert(
        `Acertaste, el número es ${numeroSecreto}, felicitaciones! 🎖️\nTu número de intentos fue: ${intentos}`
      );
    } else if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    intentos++;
    if (intentos > maximosIntentos) {
      alert(
        `Llegaste al número máximo de ${maximosIntentos} intentos, perdiste! 🫵🏼😂\n
        El número secreto era ${numeroSecreto}`
      );
      break;
    }
  }
}

alert(
  "Este juego se basa en adivinar un número secreto, el cual se encontrará en el rango de dos números"
);
let minimo = parseInt(
  prompt("Elige el número minimo que puede tomar el número secreto")
);
let maximo = parseInt(
  prompt("Elige el número máximo que puede tomar el número secreto")
);

juego(minimo, maximo);
