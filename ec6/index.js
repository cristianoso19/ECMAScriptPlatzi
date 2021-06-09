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

let lorem =
  "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
  "otra frase epica que necesitamos.";
console.log(lorem);

//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem2);
