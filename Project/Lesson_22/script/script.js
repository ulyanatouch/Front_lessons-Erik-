// const pElem = document.querySelector("p")
// console.log(pElem.classList) //print all classes
// pElem.classList.remove("second_class") // remove second_class
// pElem.classList.add("third_class") // add new class third_class
// console.log(pElem.classList.contains("first_class")) //check if class exist
// pElem.classList.toggle("test_class") // if exists remove class, not exists and class

//=============================================//
// const pElem = document.createElement("p") // <p></p>
// pElem.classList.add("first_class") // <p class="first_class"></p>
// document.body.append(pElem)

//==========================task1=====================//
// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.

// const numberCardsDiv = document.querySelector(".number_cards")
// for (let i = 0; i < 10; i++) {
//     const cardDiv = document.createElement("div")

//     cardDiv.innerText = i // <div>[i]</div>
//     cardDiv.classList.add("card")
//     numberCardsDiv.append(cardDiv)
//     cardDiv.addEventListener("click", function () {
//         // cardDiv.classList.add("active")
//         cardDiv.classList.toggle("active")

//     })
// }


// ============== style ==============
const divElem = document.createElement("div") // <div></div>
divElem.style.width = "150px" // <div style="width: 150px;"></div>
divElem.style.height = "150px"
divElem.style.backgroundColor = "green"
divElem.style.border = "5px solid black"
document.body.append(divElem)

//===============================================//

// Создать квадратный div и при наведении курсора на него цвет div-а рандомно меняется
// const divElem = document.createElement("div") // <div></div>
// divElem.style.width = "150px" // <div style="width: 150px;"></div>
// divElem.style.height = "150px"
// divElem.style.border = "1px solid black"
// divElem.style.margin = "5px"
// document.body.append(divElem)
// red green blue
// #ffffff
// rgb(255, 100, 250) [0-255]
// Math.random() [0 1)
// Math.random() * 255 [0-255) float
// Math.ceil(Math.random() * 255) [0-255] int
// divElem.addEventListener("mouseover", function () {
//     // console.log("i am here")
//     const red = Math.ceil(Math.random() * 255)
//     const green = Math.ceil(Math.random() * 255)
//     const blue = Math.ceil(Math.random() * 255)
//     console.log(red, green, blue)
//     const backgroundColor = `rgb(${red}, ${green}, ${blue})`
//     console.log(backgroundColor)
//     divElem.style.backgroundColor = backgroundColor
// })

//================================task3======================//
// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

const colorContainer = document.getElementById('colorContainer');
const startColor = [128, 128, 0];
const endColor = [128, 128, 255];
const step = 5;

// Создаем множество div-ов с различными цветами
for (let i = startColor[2]; i <= endColor[2]; i += step) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = `rgb(${startColor[0]}, ${startColor[1]}, ${i})`;
    colorDiv.className = 'colorDiv';

    colorContainer.appendChild(colorDiv);
}

//================Решение учителя==================

// for (let i = 0; i <= 255; i += 5) {
//     const divElem = document.createElement("div")
//     divElem.style.width = "100%"
//     divElem.style.height = "150px"
//     const rgbString = `rgb(128, 128, ${i})`
//     divElem.style.backgroundColor = rgbString
//     document.body.append(divElem)
// }