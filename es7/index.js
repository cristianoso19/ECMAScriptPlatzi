// En junio de cada año sale una version nueva
// de ecmascript.
// Version 7

/*
 *Valor de include
 */
// Trabaja sobre un arreglo o un string
// Nos permite saber si hay un elemento
// dentro de este valor
let numbers = [ 1, 2, 3, 4, 5, 7, 8 ];
if (numbers.includes(7)) {
  // Si encuentra un elemento de valor 7
  console.log("Si se encuentra el valor 7");
} else {
  console.log("No se encuentra");
}

/*
 *Operaciones en forma Exponencial
 */
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);
