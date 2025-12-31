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
  console.log("----------------------------------");
  console.log(a + b);
};

add(3);

function test(n) {
  return n % 2 === 0;
}
console.log("----------------------------------");
console.log(test(23));

let addd = (a, b) => a + b;
console.log("----------------------------------");
console.log(addd(3, 2));

// IIFE Immediately Invoked Function Expression
(() => {
  console.log("Hello everyone");
})();

let added = (a, b) => {
  console.log("----------------------------------");
  console.log(a + b);
};
added(2, 3);

(() => {
  console.log("----------------------------------");
  console.log("hi");
})();

let multiply = (() => 2 * 3)();
console.log("----------------------------------");
console.log(multiply);

let arr1 = [2, 4, 6, 8];

let ne = arr1.map((a) => a * 2);
console.log("----------------------------------");
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
console.log("----------------------------------");
console.log(res);

let sor = arr2.sort((a, b) => a - b);
console.log("----------------------------------");
console.log("sort: " + sor);

let names = ["a", "b", "c", "d", "e", "f"];

let sortNames = names.sort((a, b) => a.localeCompare(b));
console.log("----------------------------------");
console.log(sortNames);

let users = [
  { id: 1, name: "Nasir", age: 30 },
  { id: 2, name: "Mukul", age: 30 },
];

let find = users.find((a) => a.id == 1);
console.log("----------------------------------");
console.log(find);

const students = [
  { id: 1, name: "Rahim", marks: 85, class: "Ten" },
  { id: 2, name: "Karim", marks: 78, class: "Nine" },
  { id: 3, name: "Sumaiya", marks: 92, class: "Ten" },
  { id: 4, name: "Nishat", marks: 74, class: "Eight" },
  { id: 5, name: "Hasan", marks: 88, class: "Nine" },
  { id: 6, name: "Rafi", marks: 81, class: "Ten" },
];

let rs = students.find((a) => a.marks > 80);
console.log("----------------------------------");
console.log(rs);

// Destructuring:
const usr = {
  namee: "Nasir",
  age: 31,
};

let { namee: usrName, age } = usr;
console.log("----------------------------------");
console.log(usrName, age);

const user1 = {
  u1Name: "Babu",
  age: 31,
};
let { city = "Dhaka" } = user1;
console.log("----------------------------------");
console.log(city);

let arrr = [2, "+", 3, "-", 2];

// ইউটিউভ ভিডিও দেখে অনুশীলন শুরু: https://youtu.be/EerdGm-ehJQ 22 ঘণ্টা ভিডিও।

let na = "Nasir";
let str = `Hello! ${na} how are you?`;
console.log("----------------------------------");
console.log(str);

let btns = document.querySelectorAll(".key");

let cartItems = [];
let item = "T-Shirt";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Show Quantity") {
      console.log("ShowQuantity: " + cartItems.length);
      console.log(cartItems);
    } else if (btn.textContent === "Add to Cart") {
      addItems(item, 1);
    } else if (btn.textContent === "+2") {
      addItems(item, 2);
    } else if (btn.textContent === "+3") {
      addItems(item, 3);
    } else {
      cartItems = [];
      console.log("ShowQuantity: " + cartItems.length);
      console.log(cartItems);
    }
  });
});

// all Functions ----------------
function addItems(item, quantity) {
  for (let i = 0; i < quantity; i++) {
    cartItems.push(item);
  }
  console.log("ShowQuantity: " + cartItems.length);
  console.log(cartItems);
}
