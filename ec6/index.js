/*
 *DEFAULT PARAMS
 */
//ES5
function newFunction(name, age, country) {
  var name = name || "cris";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}
//ES6
function newFunction2(name = "cris", age = 32, country = "EC") {
  console.log(name, age, country);
}

newFunction();
newFunction2();
newFunction2("jen", 23, "EC");
/*
 *CONCATENATE
 */
//ES5
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//ES6 TEMPLATE LITERALS
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/*
 *MULTILINEA EN STRINGS
 */
//ES5
let lorem =
  "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
  "otra frase epica que necesitamos.";
console.log(lorem);

//ES6 no es necesario el caracter "\n" ni "+"
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem2);

/*
 *DESTRUCTURACION DE ELEMENTOS
 */

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};
//ES5
console.log(person.name, person.age);
//ES6
//Ahora podemos acceder a las propiedades
//de los elementos con let
let { name, age, country } = person;
console.log(name, age, country);

/*
 *OPERADOR DE PROPAGACION
 */
//ES6 "..." Para poder unir los elementos de
//un array en otro
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

/*
 *LET
 */
{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

/*
 *CONST
 */
const a = "b";
a = "a";
console.log(a);

/*
 *OBJETOS MEJORADOS
 */

let name = "Cris";
let age = 32;

//es5
obj = { name: name, age: age };
console.log(obj);
//es6
obj2 = { name, age };
console.log(obj2);

/*
 *ARROW FUNCTIONS
 */
const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  ... 
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;




