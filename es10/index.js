/*
 *Array.flat
 */
// Devuelve una matriz con cualquier
// submatriz aplanada
let array = [ 1, 2, 3, [ 1, 2, 3, [ 1, 2, 3 ] ] ];
// array.flat recibe como parametro
// la profundidad si no se la coloca
// sera de profundidad 1
console.log(array.flat());  // Profundidad 1
console.log(array.flat(2)); // Profundidad 2

/*
 *Flat.map
 */
// Permite mapear cualquier elemento,
// despues pasarle una funcion y
// aplanarlo segun sea el resultado
let array = [ 1, 2, 3, 4, 5 ];

console.log(array.flatMap((value) => [value, value * 2]));

/*
 *TrimStart
 */
// Elimina los espacion en blanco de un string
let hello = "   hello World";
console.log(hello);
console.log(hello.trimStart());

/*
 *TrimEnd
 */
let hello = "hello world     ";
console.log(hello);
console.log(hello.trimEnd());

/*
 *Optional catch binding
 */
// Pasar de forma opcional el parametro de
// error al valor de catch
try {
} catch {
  error;
}

/*
 *From entries
 */
// Tranforma clave valor en un objeto
// Util cuando se trabaja con arrays
let entries = [
  [ "name", "cris" ],
  [ "age", 32 ],
];
console.log(Object.fromEntries(entries));

/*
 *Objeto de tipo simbolo
 */
// Nos permite acceder a una descripcion
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
