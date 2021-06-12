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

/*
 *Padding
 */
// Agregar cadenas al inicio de un string
const string = "hello";
console.log(string.padStart(7, "hi"));
// Agregar cadenas al final de un string
console.log(string.padEnd(12, "----"));
// Para que nos podria servir:
// Lista de un menu para la impresion

/*
 *Trailing comma
 */
// Ahora para no cometer errores colocar
// una , al final del ultimo objeto.
const obj = {
  name : "Cris",
};

/*
 *ASYNC AWAIT
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve("Hello World"), 3000)
         : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();
// TRABAJAR DE FORMA CORRECTA
const anotherFuction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFuction();
