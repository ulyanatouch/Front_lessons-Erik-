// console.log("Hello world!")

// ================= //

// let text = "Hello world!"
/* comment */
// const text = "Hello world!"
// console.log(text)

// ================= //

// model name car 
// let model_name_car = "BMW" // snake_case
// let modelNameCar = "BMW" // camelCase
// let model-name-car = "BMW" // kebab case // error

// let if = "for"
// A-Z a-z 0-9 $ _
// let 0a = "0a" // error
// let _test = "test"
// let $test = "test"

// ================= //

// const greeting = "Hello"
// greeting = "World" // error
// console.log(greeting)

// const stringValue = "text"
// const stringValue = 'text'
// console.log(stringValue)

// const numberValue = 30
// const numberValue = 30.56
// const numberValue = -30.56
// console.log(numberValue)

// ================= //

// const name = "John"
// const lastName = "Doe"
// concatenation
// const fullName = name + " " + lastName
// "John" + "Doe" = "JohnDoe" // "John" + " " + "Doe" = "John Doe"

// interpolation
// Hello John Doe
// const fullName = `Hello ${name} ${lastName}`
// console.log(fullName)

// number
// const numFirst = 5
// const numSecond = 10
// const sum = numFirst + numSecond
// console.log(sum)

// ================= //
// const numFirst = 5
// const numSecond = 12
// console.log(numFirst + numSecond) // сложение
// console.log(numFirst - numSecond) // вычитание
// console.log(numFirst * numSecond) // умножение
// console.log(numSecond / numFirst) // деление
// console.log(numSecond % numFirst) // остаток от деления // 12 / 5 = 2 (2) | 2 * 5 + 2 = 12
// console.log(numFirst ** numSecond) // возведение в степень

// ================= //
// const userName = prompt("Введите своё имя")
// console.log(`Hello ${userName}`)

// ================= //
// const numFirst = 12
// const numSecond = 5
// if (numFirst < numSecond) {
//     console.log("numFirst меньше numSecond")
// } else if (numFirst > numSecond) {
//     console.log("numSecond меньше numFirst")
// } else {
//     console.log("равны")
// }

// const r = 12
// const g = 34
// const b = 14

// интерполяция
// console.log(`“rgb(${r}, ${g}, ${b})”`)
// конкатенация
// console.log("“rgb(" + r + ", " + g + ", " + b + ")”")

//===================//
// преобразование типов

// const numValue = 49
// // typeof
// console.log(typeof numValue) // number
// console.log(typeof String(numValue)) //string

// const strValueNum = "56"
// console.log(typeof strValueNum) // string
// console.log(typeof Number(strValueNum)) // number
 
// const strValue = "text"
// console.log(Number(strValue)) // NaN = Not a Number

//====================//
// console.log(4+"2") // "4" + "2" ="42"
// console.log(4-"2")

// Предположите, что получится в результате ‘b’ + ‘a’ + +’c’
// console.log('b'+"a"+ +'c')

//===================//

// Считываем число с помощью prompt
// const numValue = prompt("Введите число:");
// console.log(numValue ** 2);

// ================= //
// Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забыть преобразовать полученные значения в число.
// const firstNum = +prompt("Write a first number")
// const secondNum = +prompt("Write a second number")
// console.log(+firstNum + +secondNum)
// console.log(firstNum + secondNum)

// let numValue = 7
// if (numValue ==="7") {
//     console.log("Равно")
// } else {
//     console.log("Не равно")
// }

// == -> сравнение
// === -> строгое сравнение 
// != -> не равно
// !== строгое не равно
// > больше
// < меньше
// >= больше или равно
// <= меньше или равно

// let numValue = 6
// if (numValue > 0 && numValue < 10) {
//     console.log("меньше 10 больше 0")
// } else {
//     console.log("else")
// }
// if (numValue > 0 || numValue < 5) {
//     console.log("число либо меньше 5 либо больше 0")
// } else {
//     console.log("else")
// }

// let str = "hello"
// console.log(isNaN(str)) // true
// str = "566"
// console.log(isNaN(str)) // false

//===========================//

// Написать программу, которая получает два числа и выводит наибольшее.
// const firstNum = +prompt("Write a first number")
// const secondNum = +prompt("Write a second number")
// if (firstNum > secondNum) {
//     console.log(firstNum)
// } else {
//     console.log(secondNum)
// }

//=================================//

// Написать программу, которая считывает через prompt одно число и выводит одну из строк “число положительное”, “число отрицательное”, “число равно нулю”.
const firstNum = +prompt("Write a first number")
if (firstNum > 0) {
    console.log("число положительное")
} else if(firstNum < 0) {
    console.log("число отрицательное")
} else {
    console.log("число равно нулю")
}