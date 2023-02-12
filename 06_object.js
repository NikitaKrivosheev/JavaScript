// const person = {
//   name: "Nikita",
//   age: 24,
//   isProgrammer: true,
//   languages: ["ru", "en", "de"],
//   //   "complex key": "complex Value",
//   //   ["key_" + (1 + 3)]: "Computed Key", // key_4
//   greet() {
//     console.log("greet from person");
//   },
//   info() {
//     console.log("this:", this);
//     console.info("Информация про человека по имени:", this.name);
//   },
// };

//-------------------------------------------------------------------------------

// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]);
// console.log(person);
// person.greet();

//-------------------------------------------------------------------------------

// person.age++;
// person.languages.push("by");
// // person["key_4"] = undefined;
// delete person["key_4"];
// console.log(person);
// console.log(person["key_4"]);

//-------------------------------------------------------------------------------

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

//-------------------------------------------------------------------------------

// const { name, age: personAge, languages } = person;
// console.log(name, personAge, languages);

//-------------------------------------------------------------------------------

// for (let Key in person) {
//   if (person.hasOwnProperty(Key)) {
//     console.log("Key:", Key);
//     console.log("value:", person[Key]);
//   }
// }

//-------------------------------------------------------------------------------

// const keys = Object.keys(person);
// keys.forEach((Key) => {
//   console.log("Key:", Key);
//   console.log("value:", person[Key]);
// });

// Object.keys(person).forEach((Key) => {
//   console.log("Key:", Key);
//   console.log("value:", person[Key]);
// });

//-------------------------------------------------------------------------------

// Context
// person.info();

// const logger = {
//   keys() {
//     console.log("Object Keys", Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log(`'${this[key]}'`);
//     });
//   },
// };
// const bound = logger.keys.bind(person);
// bound();

// logger.keys.call(person);

// logger.keysAndValues.call({ a: 1, c: { b: 2 } });

//-------------------------------------------------------------------------------

// const logger = {
//   keys() {
//     console.log("Object Keys", Object.keys(this));
//   },
//   keysAndValues() {
//     const self = this;
//     Object.keys(this).forEach(function (key) {
//       console.log(`'${key}': ${self[key]}`);
//     });
//   },
// };

// logger.keysAndValues.call(person);

//-------------------------------------------------------------------------------

// const logger = {
//   keys() {
//     console.log("Object Keys", Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach(
//       function (key) {
//         console.log(`'${key}': ${this[key]}`);
//       }.bind(this)
//     );
//   },
// };

// logger.keysAndValues.call(person);

//-------------------------------------------------------------------------------

// const logger = {
//   keys() {
//     console.log("Object Keys", Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach(
//       function (key) {
//         console.log(`'${key}': ${this[key]}`);
//       }.bind(this)
//     );
//   },
//   withParams(top = false, between = false, bottom = false) {
//     if (top) {
//       console.log("--------------- start --------------");
//     }
//     Object.keys(this).forEach((key) => {
//       console.log(`'${this[key]}'`);
//       if (between) {
//         console.log("-----------------------------");
//       }
//     });
//     if (bottom) {
//       console.log("---------------end--------------");
//     }
//   },
// };

// logger.withParams.call(person, true, true, true);

//-------------------------------------------------------------------------------

// const logger = {
//   keys() {
//     console.log("Object Keys", Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach(
//       function (key) {
//         console.log(`'${key}': ${this[key]}`);
//       }.bind(this)
//     );
//   },
//   withParams(top = false, between = false, bottom = false) {
//     if (top) {
//       console.log("--------------- start --------------");
//     }
//     Object.keys(this).forEach((key, index, array) => {
//       console.log(`'${this[key]}'`);
//       if (between && index !== array.length - 1) {
//         console.log("-----------------------------");
//       }
//     });
//     if (bottom) {
//       console.log("---------------end--------------");
//     }
//   },
// };

// logger.withParams.call(person, true, true, true);
// logger.withParams.apply(person, [true, true, true]);
