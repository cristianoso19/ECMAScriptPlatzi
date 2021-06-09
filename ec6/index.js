//DEFAULT PARAMS
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
