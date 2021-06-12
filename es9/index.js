/*
 *Operador de reposo
 */
// Puede extraer las propiedades de
// un objeto que aun no se a construido
const obj = {
  name : "Cris",
  age : "32",
  country : "MX",
};
// Utilizar el operador de reposo para
// separar los elementos
// de esta manera tenemos los objetos
// separados, ya nos devuelve un objeto
// con las propiedades que se excluyen
let {name, ...all} = obj;
console.log(name, all);

/*
 *Unir uno o mas objeto a un objeto
 */
const obj = {
  name : "Cris",
  age : 32,
};
const obj1 = {
  ...obj,
  country : "MX",
};
console.log(obj1);

/*
 *Promise.Finally
 */
// Cuando ha terminado el llamado y
// ejecutar una funcion o logica de
// codigo
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve("Hello World"), 3000)
         : reject(new Error("Test error"));
  });
};

helloWorld()
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finalizado"));
/*
 *Rejex: Mejoras
 */
// Agrupar bloques de rejects y acceder a cada
// uno de estos.
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
