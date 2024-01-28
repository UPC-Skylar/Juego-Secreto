let listaGenerica = [];

let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("Golang");

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
let logProgrammingLanguages = () =>
  lenguajesDeProgramacion.forEach((element) => console.log(element));

logProgrammingLanguages();

let logProgrammingLanguagesInverse = () =>
  lenguajesDeProgramacion.reverse().forEach((element) => console.log(element));

logProgrammingLanguagesInverse();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function PromedioLista(array) {
  let sumaNumeros = array.reduce((a, b) => a + b);
  let cantidadNumeros = array.length;
  return sumaNumeros / cantidadNumeros;
}

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function BigShortNumber(array) {
  console.log(`El número más grande es ${Math.max(...array)} y el más pequeño es ${Math.min(...array)}`);
}

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
let sumaArray = (array) => array.reduce((a,b) => a + b);

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function arrayPosition (element, array) {
    if(!array.includes(element)) return -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] == element) return i;
    }
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaTwoArray (arr1, arr2){
    let arrSumaTwoArray = arr1.map((element, index) => element + arr2[index]);
    return arrSumaTwoArray;
}

// 11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function elevarCuadrado(arr){
    return arr.map(element => Math.pow(element, 2))
}