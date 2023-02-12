// 1 Массивы

// const cars = ["mazda", "ford", "bmw", "mercedes"];
// const fib = [1, 1, 2, 3, 5, 8, 13];
// const people = [
//   { name: "Nikita", budget: 4200 },
//   { name: "Elena", budget: 3500 },
//   { name: "Victoria", budget: 1700 },
// ];

//-------------------------------------------------------------------------------

// ~(function)

// function addItemToEnd() {
// }

//-------------------------------------------------------------------------------

// 1.(Method)

// cars.push("reno");
// cars.unshift("posrche");
// const firstItem = cars.shift();
// const lastCar = cars.pop();
// console.log(lastCar);
// console.log(firstItem);
// console.log(cars);

//-------------------------------------------------------------------------------

// console.log(cars.reverse());
// console.log(cars);

//-------------------------------------------------------------------------------

// const index = cars.indexOf("bmw");
// cars[index] = "porsche";
// console.log(cars);

//-------------------------------------------------------------------------------

// const index = people.findIndex(function (person) {
//   return person.budget === 3500;
// });
// console.log(people[index]);

//-------------------------------------------------------------------------------

// const person = people.find(function (person) {
//   return person.budget === 3500;
// });
// console.log(person);

//-------------------------------------------------------------------------------

// const person = people.find((person) => {
//   return person.budget === 3500;
// });
// console.log(person);

//-------------------------------------------------------------------------------

// const person = people.find((person) => person.budget === 3500);
// console.log(person);

//-------------------------------------------------------------------------------

// let findedPerson;
// for (const person of people) {
// //   console.log(person);
//   if (person.budget === 3500) {
//     findedPerson = person;
//   }
// }
// console.log(findedPerson);

//-------------------------------------------------------------------------------

// console.log(cars.includes("mazda"));

//-------------------------------------------------------------------------------

// const upperCaseCars = cars.map((car) => {
//   return car.toUpperCase();
// });
// console.log(upperCaseCars);
// console.log(cars);

//-------------------------------------------------------------------------------

// const pow2 = (num) => num ** 2;
// const sqrt = (num) => Math.sqrt(num);
// const pow2Fib = fib.map(pow2).map(sqrt);
// console.log(pow2Fib);

//-------------------------------------------------------------------------------

// const pow2Fib = fib.map((num) => num ** 2);
// console.log(pow2Fib);

//-------------------------------------------------------------------------------

// const pow2 = (num) => num ** 2;
// const pow2Fib = fib.map(pow2);
// const filteredNumbers = pow2Fib.filter((num) => num > 20);
// console.log(pow2Fib);
// console.log(filteredNumbers);

//-------------------------------------------------------------------------------

// const allBudget = people.reduce((acc, person) => {                //
//   if (person.budget > 2000) {                                     //
//     acc += person.budget;                                         //
//   }                                                               //takoe sebe
//   return acc;                                                     //
// }, 0);                                                            //
// console.log(allBudget);                                           //

//-------------------------------------------------------------------------------

// const allBudget = people
//   .filter((person) => person.budget > 2000)
//   .reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
//   }, 0);
// console.log(allBudget);

//-------------------------------------------------------------------------------

// Задача 1
// const text = "hello, we learn JavaScript";
// const reverseText = text.split("").reverse().join("");
// console.log(reverseText);
