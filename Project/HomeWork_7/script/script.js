//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function printEvenNumbers(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    for (let i = max; i >= min; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// Или, если использовать новый оператор ** для возведения в степень:
function power(base, exponent = 2) {
    return base ** exponent;
}
//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Или, если использовать формулу для суммы арифметической прогрессии:
function sumTo(n) {
    return n * (n + 1) / 2;
}

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function sumOddEven(n, m) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }

    console.log("Sum of even numbers:", sumEven);
    console.log("Sum of odd numbers:", sumOdd);
}

// Использование функции:
sumOddEven(1, 10); // Выведет в консоль сумму четных и нечетных чисел от 1 до 10
//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
function getLongestString(array) {
    if (array.length === 0) {
        return null;
    }

    let longestString = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i];
        }
    }

    return longestString;
}
// Использование функции:
console.log(getLongestString(['one', 'two', 'three'])); // Вернет 'three'