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
  console.log("Hello everyone");
})();

let added = (a, b) => {
  console.log(a + b);
};
added(2, 3);

(() => {
  console.log("hi");
})();

let multiply = (() => 2 * 3)();
console.log(multiply);

let arr1 = [2, 4, 6, 8];

let ne = arr1.map((a) => a * 2);

console.log(ne);

let price = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

// let userInput = document.getElementById("myRange")
// let rangeDisplay = document.getElementById("rangeValue")
// let arrDisplay = document.getElementById("arr")

// userInput.addEventListener("input", () => {

// rangeDisplay.textContent = userInput.value;
// arrDisplay.textContent = price.filter(a => a<=userInput.value)

// } )

// let cart = [5, 20, 10, 10, 25, 50, 30, 5, 30];
// let discount = document.getElementById("discount");
// let totalPrice = document.getElementById("totalPrice");
// let finalPrice = document.getElementById("finalPrice");

// discount.addEventListener("input", () => {
//   let result = cart.reduce((a, cr) => a + cr);
//   totalPrice.textContent = result;
//   let finalResutl = result - (result * discount.value) / 100;
//   finalPrice.textContent = finalResutl;
// });

let arr2 = [2, 3, 6, 4, 5, 1, 1, 20, 3, 0, 5];
let res = arr2.reduce((a, cr) => (cr > a ? cr : a));
console.log(res);

let sor = arr2.sort((a, b) => a - b);
console.log("sort: " + sor);

let names = ["a", "b", "c", "d", "e", "f"];

let sortNames = names.sort((a, b) => a.localeCompare(b));
console.log(sortNames);
