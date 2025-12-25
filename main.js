console.log("Js is connected");

let userName = "Nasir";
const greeting = "Welcome";

function sayHello(name) {
  console.log(greeting + " " + name);
}
sayHello(userName);

const obj = {
  name: "Nasir",
  age: 26,
};

obj.name = "Babu";
obj.Passion = "Drawing";
delete obj.name;
console.log(obj);
let key = "color";
let person = {
  color: "Yellow",
};

console.log(person.key);

let person1 = {
  "first name": "Nasirullah",
  "last name": "Babu",
};
console.log(person1["first name"], person1["last name"]);

let add = function (b, a = 4) {
  console.log(a + b);
};

add(3);

function test(n) {
  return n % 2 === 0;
}
console.log(test(23));

let addd = (a, b) => a + b;

console.log(addd(3, 2));

// IIFE Immediately Invoked Function Expression
(() => {
  console.log("Hellow everyone");
})();
