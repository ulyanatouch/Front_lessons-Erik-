// // Если не используем функции
// // 1 Создать две переменны, в первой хранить значение 5 в дрогуй 3.
// // // После этого создать еще одну переменную которая ровна их сумме
// // const num1 = 5;
// // const num2 = 3;
// // const sum1 = num1 + num2; // 8
// // console.log({ sum1 });

// // // 2 Создать две переменны, в первой хранить значение 15 в дрогуй 23.
// // // После этого создать еще одну переменную которая ровна их сумме
// // const num3 = 15;
// // const num4 = 23;
// // const sum2 = num3 + num4; // 38
// // console.log({ sum2 });

// // Если использовать функцию
// function calcSum(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
//   //   return num1 + num2;
// }

// // // 1 Создать две переменны, в первой хранить значение 5 в дрогуй 3.
// // // После этого создать еще одну переменную которая ровна их сумме
// const result1 = calcSum(5, 3); // 8
// // // 2 Создать две переменны, в первой хранить значение 15 в дрогуй 23.
// // // После этого создать еще одну переменную которая ровна их сумме
// const result2 = calcSum(15, 23); //48
// console.log({ result1, result2 });

// FUNCTION DECLORATION VS FUNCTION EXPRESSION VS ARROW FUNCTION

// FUNCTION DECLORATION
// на 35 строчки я создаю фунцкцию helloWorld без параметров, и в теле функции говорю что она должна мне возвращать текст
// function helloWorld() {
//   return `Hello everybody`;
// }
// // на 39 строке я создаю переменную которая ровна результату выполнения фунцкии helloWorld.
// // Поскольку фунцкия нам возвращает "Hello everybody" значение переменной "result" ровно "Hello everybody"
// const result = helloWorld(); //Hello everybody
// console.log({ result });

// FUNCTION EXPRESSION
// На 45 строке я создаю переменную helloWorld(это будет именем моей фунцкии) и говорим ей в теле фунцкии что она должна возвращать строку
// const helloWorld = function () {
//   // возвращаем строку
//   return `Hello Everybody`;
// };

// const result = helloWorld(); //Hello everybody
// console.log({ result });

// ARROW FUNCTION

// const helloWorld = () => {
//   return `Hello Everybody`;
// };

// то что написали на стоке 55 по 57 это у нас тоже верно
// только если тело стрелочной функции состоит из одной строки мы можем не пистаь {}  и не писать клюучеове слово "return"
// const helloWorld = () => `Hello Eveybody`;

// const result = helloWorld(); // Hello Eveybody
// console.log({ result });

// FUNCTION DECLORATION VS FUNCTION EXPRESSION VS ARROW FUNCTION

// function printInfoAboutUser(name, surname, age, extraparametr) {
//   // extraparametr  у нас undefined посколькы во время вызова вызвоа функции мы передали 3 параметра а внтру тела функции мы хотим взят 4ый но его нет
//   // extraparametr: undefined;
//   console.log({ name, surname, age, extraparametr });
// }

// const personName = "Vazgen";
// const personSurname = "Davtyan";
// const personAge = 23;

// // функция которая вызвана на 217 строке получает правильную очередность параметров
// printInfoAboutUser(personName, personSurname, personAge, "а", "б", "c", "d");
// // Функция которая вызвана на 219 получает неправильную очередность поэтому в косноль логе // name: 'Vazgen', surname: 23, age: 'Davtyan'
// printInfoAboutUser(personName, personAge, personSurname, "а");

// Дефолтные параметры

// const printInfoAboutUser = (name = "Vazgen", age = 22) => {
//     console.log(`${name} is ${age} years old`);
//   };
  
//   console.log(printInfoAboutUser()); // Vazgen is 22 years old
//   console.log(printInfoAboutUser("Alexei", 35)); // Alexei is 35 years old

//===========================tasks======================
// а) Написать функцию которая принемает 3 параметра - имя пассажира, номер места в самалете, пол пассажира. И вывисти результат как строку учитывая пол то есть если Мужчина то "мужчина Иван сидит на месте A33", если пол женский то "женщина Анна сидит на месте B55"
// б) Если пол не указан то возвращать текст "Данный пассажир не может пользоватся данной компанией"
// в) Если у нас не указан номер билтеа но его дефолтное значение пусть будет "кабина"


// function createPassengers(name, seatNumber, gender) {
//   let pronoun = gender === 'male' ? 'мужчина' : 'женщина';
//   let result = pronoun + ' ' + name + ' сидит на месте ' + seatNumber;
//   return result;
// }

// // Пример использования функции
// let passenger1 = createPassengers('Иван', 'A33', 'male');
// console.log(passenger1); // Вывод: мужчина Иван сидит на месте A33

// let passenger2 = createPassengers('Анна', 'B55', 'female');
// console.log(passenger2); // Вывод: женщина Анна сидит на месте B55


//===========================
function createPassengers(name, ticketNumber = 'кабина', gender) {
  let result;

  if (gender === 'male') {
    result = 'мужчина ' + name + ' сидит на месте ' + ticketNumber;
  } else if (gender === 'female') {
    result = 'женщина ' + name + ' сидит на месте ' + ticketNumber;
  } else if (gender === 'unknown') {
    result = 'неизвестный пол ' + name + ' сидит на месте ' + ticketNumber;
  } 
    return 'Данный пассажир не может пользоваться данной компанией';

}

let passenger1 = createPassengers('Иван', 'A33', 'male');
console.log(passenger1); 

let passenger2 = createPassengers('Анна', 'B55', 'female');
console.log(passenger2); 

let passenger3 = createPassengers('Женя', "C77", 'unknown');
console.log(passenger3); 

//=======================================================

// решение Саши
// const passanger = (name, gender = '', tiketNumber = 'кабина') => {
//   if (gender.toLowerCase() !== 'мужчина' && gender.toLowerCase() !== 'женщина') {
//       tiketNumber = gender
//       gender = ''
//   }

//   console.log([name, gender, tiketNumber])

//   if (gender === '') {
//       return `Данный пассажир не может пользоваться данной компанией`
//   }

//   return `${gender} ${name} сидит на месте ${tiketNumber}`
// }

// console.log(passanger('Александр', 'мужчина', 'А123', ))
// console.log(passanger('Александр', 'А123'))
// console.log(passanger('Александр', 'мужчина' ))