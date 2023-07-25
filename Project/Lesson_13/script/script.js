// const arr = [5, 2, -9, "hello", 0, true, false]
// console.log(arr[59]) // undefined
// console.log(arr[3]) // "hello"

// arr[3] = 156
// arr[2] = arr ===== бесконечный аррррр
// arr[7] = "World"

// arr.push("World")
// arr.push(9989)

// const lastElem = arr.pop() // get last elem from array and delete it
// console.log(arr)
// console.log(lastElem)

//===================//
// Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]

// const arr = [1, 4, 2, 5, 3]
// const emptyArr = []
// emptyArr.push(arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2)
// console.log(emptyArr)

//===================//

// let array = [1, 4, 2, 5, 3];
// let squaresArray = [];

// for (let i = 0; i < array.length; i++) {
//   squaresArray.push(Math.pow(array[i], 2));   --------   тоже самое -------   emptyArr.push(arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2)
// }

// console.log(squaresArray);

//===================//
// 1) i = 0; 0 < 10; i = 0 + 1
// 2) i = 1; 1 < 10; i = 1 + 1
// ...
// 9) i = 9; 9 < 10; i = 9 + 1
// 10) i = 10; 10 < 10; i = 10 + 1 // else
// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i)
// }

// Разобрать пример вывода всех элементов массива при помощи цикла for.
// const arr = [1, 4, 2, 5, 3, 7, 9, 32, 30, true, "hello", false]
// i = 0
// i = 1
// i = 2
// ...
// i = 4
// console.log(arr)
// for (let i = 0; i < arr.length; i = i + 1) {
//     console.log(arr[i])
// }

// Написать цикл, который выводит только четные числа.
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// ================= //

// const arr = [1, 4, 42, 15, 3, 7, 9, 32, 30]
// for (let i = 0; i < arr.length; i = i + 1) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

// Разобрать синтаксис цикла с изменением i на два, три и так далее.
// for (let i = 0; i < 21; i = i +2) {
//     console.log(i)
// }

// Разбор синтаксиса цикла от большего к меньшему.
// for (let i = 20; i >=0; i = i - 2) {
//     console.log(i)
// }

// Разбор задачи на поиск агрегации по массиву. На примере суммы всех элементов массива.
const arr = [1, 4, 42, 15, 3, 7, 9, 32, 30]
let sum = 0 // sum = 1; sum = 5;
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    sum = sum + arr[i] // 0 + 1 = 1; 1 + 4 = 5
}

// console.log(sum)

//========================//
let i = 2
// i = 1 + 1
// i += 1
// i++

// i =  i - 1
// i -= 1
// i--

// i = i * 3
// i *= 3

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
// const arr = [1, 4, 42, 15, 3, 7, 9, 32, 30]

let sumEven = 0
let sumOdd = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEven = sumEven + arr[i]
    } else {
        sumOdd = sumOdd + arr[i]
    }
}

const difference = (sumEven - sumOdd); 

console.log("Сумма четных чисел: " + sumEven);
console.log("Сумма нечетных чисел: " + sumOdd);
console.log("Разница между суммами: " + difference);

