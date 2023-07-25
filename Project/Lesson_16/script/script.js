// console.log("Hello John!")
// console.log("Hello Mary!")
// console.log("Hello Jack!")

// ====== functions ======
// function greet(name) {
//     // console.log("Hello John!")
//     // console.log("Hello Mary!")
//     // console.log("Hello Jack!")
//     console.log(`Hello ${name}!`)
// }

// greet("John")
// greet("Mary")
// const result = greet("Jack")
// console.log(result) // undefined

// ====== return ====== 

// function sum(a, b) {
//     const result = a + b
//     console.log(result)

//     return result
// }

// const sumResult = sum(10, 5)
// console.log(sumResult)

// ====== tasks ======
// Разобрать простой пример функции, которая считывает значение числа через prompt и выводит квадрат этого числа в консоль. 
function printPow() {
    const number = +prompt("Введите число")
    console.log(number ** 2)
}
// printPow()

// Рассмотреть пример функции power, которая получает два аргумента (первый это основание степени, а второй сама степень) и выводит в консоль результат вычислений. 
// function power(a, b = 2) {
//     console.log(a ** b)
// }
// power(5)
// power(10)
// power(3, 3)

// Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее. printMax
function printMax(a, b) {
    if (a < b) {
        console.log(b);
    } else if (a > b) {
        console.log(a);
    } else {
        console.log("equal")
    }
}
// printMax(4, 9)
// printMax(50, 40)
// printMax(5, 5)

// Переписать функцию power таким образом, чтобы она возвращала результат вычислений
function power(a, b = 2) {
    // console.log(a ** b)
    return a ** b // return a ** 2 // return 81
}
// const result = power(9) // const result = 81
// console.log(result) // 81

// Описать процесс, используя функцию power, который находит гипотенузу по длине двух катетов c размерами 3 и 4 (теорема Пифагора).
// c**2 = a**2 + b**2
// const a = 3
// const b = 4
// const sum = power(a) + power(b) // 3**2 + 4**2 = 25
// const c = power(sum, 0.5) // 25**1/2 = 5
// console.log(c)
// console.log(power(power(a) + power(b), 0.5))

// Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае. isEven
function isEven(a) {
    // if(a % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }

    // if(a % 2 === 0) {
    //     return true
    // }
    // return false

    return a % 2 === 0
}

// console.log(isEven(8));
// console.log(isEven(11));

// function declaration
// function greet(name) {
//     console.log(`Hello ${name}!`)
// }
// function expression
const greet = function(name) {
    console.log(`Hello ${name}!`)
    return 5
}
const num = greet("John")
console.log(num)

//================================//

if (1 === 1) {
    var text = "Hello"
    console.log(text)
}
console.log(text) // "Hello"

console.log(hello) // undefined (not error)
var hello = "Hello"

var name = "John"
var name = "Mary"