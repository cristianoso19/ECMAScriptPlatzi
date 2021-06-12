/*
 *Object.Entries
 */
// Devuelve la clave y valores de una matriz
const data = {
  frontend : "Cris",
  backend : "Jen",
  design : "Ana",
};

const entries = Object.entries(data);
console.log(entries);
// Ahora podemos hacer de .lenght para
// acceder a cuantos elementos tiene el objeto
console.log(entries.length);
/*
 *Object values
 */
// Devuelve los valores de un objeto a un arreglo
const data = {
  frontend : "Cris",
  backend : "Jen",
  design : "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);
