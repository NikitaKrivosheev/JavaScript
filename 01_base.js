// 1 переменные

// CamelCase
// Snake_case
// var name = 'Nikita' // variable
// const firstName = 'Nikita'
// const lastName='Krivosheev' // string
// let age = 24 // number
// const isProgrammer = true // boolean

// const private='private'  // const ~ = 'privat'
// const $='some value'
// const if = 'mkef' // error
// const witNum5 = '5'
// const 5witNum5 = '5' // error

//-------------------------------------------------------------------------------

// 2 Мутирование

// console.log('Имя человека:'+firstName+', а возраст человека:'+age toString)
// console.log('Имя человека:'+firstName+', а возраст человека:'+age)
// console.log(age)

// alert('Имя человека:'+firstName+', а возраст человека:'+age)
// const lastName=prompt('ВВедите фамилию')
// alert(firstName+ ' ' +lastName)

//-------------------------------------------------------------------------------

// 3 Операторы

// let currentYear = 2022
// const birthYear = 1998

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32

// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c =+ a
// c =- a
// c =* a
// c =/ a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear) (инкриминтация)
// console.log(--currentYear)
// console.log(c)

//-------------------------------------------------------------------------------

// 4 Основные виды данных (примитивы данных)

// const isProgrammer = true
// const name = 'Nikita'
// const age = 26
// let X
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof X)
// console.log(typeof null)

//-------------------------------------------------------------------------------

// 5 приоритет операторов

// const fullAge = 24
// const birthYear = 1998
// const currentYear = 2022

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27 >= true
// console.log(isFullAge)

//-------------------------------------------------------------------------------

// 6 Условные операторы

// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('курс готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('курс пока находится в стадии разработки')
// } else {
//     console.log('курс не получился')
// }

// const isReady = false

// if (isReady) {
//     console.log('всё готово!')
// } else {
//     console.log('всё не готово!')
// }

// Тернарное выражение
// isReady ? console.log('всё готово!') : console.log('всё не готово!')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

//-------------------------------------------------------------------------------

// 7 Булевая логика

// Как работают логические операторы

// && 'И'

// true && true
// true

// false && true
// false

// true && false
// false

// false && false
// false

// || 'Или'

// false || false
// false

// true || false
// true

// false || true
// true

// true || true
// true

// ! 'Не'

// true
// true

// !true
// false

// !!true
// true

//-------------------------------------------------------------------------------

// 8 Функции

// function calculateAge(year) {
//     return 2022 - year
// }

// const myAge = calculateAge(1998)
// console.log(myAge)

// console.log(calculateAge(1998))
// console.log(calculateAge(2021))
// console.log(calculateAge(2000))

// function logInfoAbout(name, year) {                             // композия функций
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени' + name + 'сейчас имеет возраст' + age)
//     } else {
//         console.log('Вообще-то это уже будущее')
//     }
// }

// logInfoAbout('Никита', '1998')
// logInfoAbout('Елена', '1993')
// logInfoAbout('Артём', '2023')

//-------------------------------------------------------------------------------

// 9 Массивы

// const cars = ['Mazda', 'BMW', 'Ford']    // const cars = new Array ('Mazda', 'BMW', 'Ford')
// console.log (cars.length)
// console.log (cars[1])
// console.log (cars[0])
// console.log (cars[2])

// cars [0] = 'Porsche'
// cars [cars.length] = 'Mazda'     // cars [3] = 'Mazda'
// console.log (cars)

//-------------------------------------------------------------------------------

// 10 Циклы

// const cars = ['Mazda', 'BMW', 'Ford', 'porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

//-------------------------------------------------------------------------------

// 11 Объекты

// const persone = {
//     firstName: 'Nikita',
//     lastName: 'Krivosheev',
//     year: 1998,
//     languages: ['RU', 'EN', 'DE'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from persone')
//     }
// }
// console.log(persone.firstName)
// console.log(persone['lastName'])
// const key = 'year'
// console.log(persone[key])
// persone.hasWife = true
// persone.isProgrammer = true
// console.log(persone)
// persone.greet()
