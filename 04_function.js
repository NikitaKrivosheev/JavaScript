// 1 Функции

//-------------------------------------------------------------------------------

// 1.1Function Declaration
// function greet(name) {
//   console.log("Привет -", name);
// }
// greet("Elena");

//-------------------------------------------------------------------------------

// 1.2function Expression
// const greet2 = function greet2(name) {
//   console.log("hello2 -", name);
// };
// greet2("Elena");

// console.log(typeof greet);
// console.dir(greet);

//-------------------------------------------------------------------------------

// 2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     ++counter;
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

//-------------------------------------------------------------------------------

// 3 Стрелочные функции

// function greet(name) {
//   console.log("hello", name);             // пример на function declaration
// }
// greet("Nikita");

// const arrow = (name) => {
//   console.log("hello", name);
// };
// arrow("Nikita");

// const arrow2 = (name) => console.log("hello", name);
// arrow2("Nikita");

// const pow2 = (num) => {
//   return num ** 2;
// };
// console.log(pow2(5));

// const pow = (num) => num ** 2;
// console.log(pow2(5));

//-------------------------------------------------------------------------------

// 4 Параметры по умолчанию

// const sum = (a = 40, b = a * 2) => a + b;
// console.log(sum(41, 4));
// console.log(sum());

// function sumAll(...all) {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }
// const res = sumAll(1, 2, 3, 4, 5);
// console.log(res);

//-------------------------------------------------------------------------------

// 5 Замыкания

// function createMember(name) {
//   return function (lastName) {
//     console.log(name + lastName);
//   };
// }
// const logWithLastName = createMember("nikita");
// console.log(logWithLastName("Romanov"));
// console.log(logWithLastName("Krivosheev"));
