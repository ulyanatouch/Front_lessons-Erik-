// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// const functionThatReturnsMinimal = (num1, num2) => {
//   if (num1 > num2) {
//     return num2;
//   } else if (num1 < num2) {
//     return num1;
//   } else {
//     return "Оба чисал равны";
//   }
// };

// console.log(functionThatReturnsMinimal(1, 2));
// console.log(functionThatReturnsMinimal(2, 1));
// console.log(functionThatReturnsMinimal(2, 2));

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// const getRange = (from, to) => {
//   for (let i = from; i <= to; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     } else {
//       console.log("Нечетное", i);
//     }
//   }
// };

// getRange(10, 20);

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
const pow = (baseNumber, times = 2) => {
  return baseNumber ** times;
};

const result1 = pow(10); // 100 -> не указал в какой степени и по дефолту получилос 10 во 2ой степени
const result2 = pow(2, 5); // 32
const result3 = pow(3, 3); // 27
console.log({ result1, result2, result3 });

// 4
// const startLoop = (number) => {
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     sum += i;
//   }
//   return sum;
// };
// const result = startLoop(10);
// console.log(result);

// 5

// const countOfNumbers = (from, to) => {
//   let chotniye = 0;
//   let nechotnie = 0;

//   for (let i = from; i < to; i++) {
//     if (i % 2 === 0) {
//       chotniye += 1;
//     } else {
//       nechotnie += 1;
//     }
//   }

//   console.log({ chotniye, nechotnie });
// };

// countOfNumbers(0, 87);

//6 task
// const arr = ["two", "seven", "five"];
// const getLongestText = (arrayOfStrings) => {
//     let longest = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arrayOfStrings[i].length > longest.length) {
//             longest = arrayOfStrings[i];
//         }
//     }
//     console.log(longest);
// };
// getLongestText(arr);