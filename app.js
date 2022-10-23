// 1. Переменные
// variable - переменные
// camelCase - имена переменных принято записывать без тире и подчёркиваний
var name = 'Amily' //string
const lastName = 'Gemba'
let age = 13 //number
//name = 'Melya' //string
//age = 15 //переопределение переменной age
const isProgrammer = true //boolean
let firstName = 'Amily' //string

const _ = 'right' //string
const $ = 'well'  //string


//const if = 'something' // err
//const 5fgfif = 'something' // err

// 2. Мутирование
console.log('Возраст Мели: ' + age + ', а фамилия: ' + lastName)
console.log(age.toString())

//const poBatkovi = prompt('введите отчество') // ввод данных из всплывающего окна
//console.log(poBatkovi) // проверка ввода данных в консоли браузера

// 3. Операторы

const a = 10
const b = 5
let c = 32
c = a + b 
console.log(c)

c += a // c = c + a
c -= a // c = c - a
c *= a // c = c * a
console.log(c)

c /= b // c = c / b
console.log(c)

// 4. Типы данных
let s //undefined
let q = true //boolean
null
console.log(typeof c)
console.log(typeof q)
console.log(typeof s)
console.log(typeof $)
console.log(typeof null)  //object
console.log(null)
// console.log(table) //Uncaught ReferenceError: table is not defined at app.js:50:13

// 5. Приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 6. Условные операторы
