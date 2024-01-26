/* 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros. */

function IMC(altura, peso) {
  return peso / Math.pow(altura, 2);
}

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function toDollar(dollars) {
  return "R$" + dollars * 4.8;
}

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function AreaPerimeterRectangle(altura, ancho) {
  console.log(
    `El ancho es: ${altura * ancho} y el perimetro es: ${(altura + ancho) * 2}`
  );
}

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function AreaPerimeterCircle(radio) {
  const PI = 3.14;
  console.log(
    `El área es: ${PI * Math.pow(radio, 2)} y el perimetro es: ${
      2 * PI * radio
    }`
  );
}

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
}
