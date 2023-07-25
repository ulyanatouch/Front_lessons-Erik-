// // const newDiv = document.createElement("div") // <div></div>
// // // console.log(newDiv) // <div></div>
// // newDiv.innerText = "Hello world!"
// // console.log(newDiv) // <div>Hello world!</div>

// // document.body.append(newDiv)

// // //используется только для этих элементов
// // // element body
// // // document.body = document.querySelector("body")
// // // element head
// // // document.head = document.querySelector("head")
// // // element html
// // // document.documentElement = document.querySelector("html")

// // // для остальных как обычно пишем
// // // const document.querySelector p div...div.. и тд чтобы забрать какой-то элемент

// // const pElem = document.createElement("p") // <p></p>
// // pElem.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
// // newDiv.append(pElem)

// // document.body.append(newDiv)
// // // document.body.appendChild(newDiv)

// // ======================Задачи======================

// //Создать параграф, задать ему текст и добавить в HTML-документ в div с #root

// // Создаем новый параграф
// const pElem = document.createElement("p");

// // Задаем текст параграфа
// const text = "Take your dress off";
// pElem.innerText = text;

// // Находим div с идентификатором "root"
// const rootDiv = document.querySelector("#root");

// // Добавляем параграф в div
// rootDiv.append(pElem);


// //Создать множество параграфов с числами от 0 до 19.

// for (let i = 0; i <= 19; i++) {
//     const pElem = document.createElement("p");
//     pElem.innerText = "Число " + i + " является числом от 0 до 19.";
//     document.body.append(pElem);
// }

// //Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root

// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']

// const rootDiv = document.querySelector("#root");

// for (let i = 0; i < words.length; i++) {
//     const pElem = document.createElement("p");
//     pElem.innerText = words[i];
//     rootDiv.append(pElem);
// }

// Написать программу, которая запрашивает у пользователя картинку и ссылку на статью (любую) и формирует в интерфейсе картинку и внизу ссылку, указанную пользователем.

/* <div>
<img src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2.png" alt="Link">
<a href="#">Link to post</a>
</div> */

// const imgSrc = prompt("Set img url")
// const postHref = prompt("Set post link")

// const imgElem = document.createElement("img")
// imgElem.setAttribute("src", imgSrc)
// imgElem.setAttribute("alt", "post image")

// const aElem = document.createElement("a")
// aElem.setAttribute("href", postHref)
// aElem.innerText = "Link to post"

// const divElem = document.createElement("div")
// divElem.append(imgElem, aElem)

// const mainDiv = document.querySelector(".main")
// mainDiv.append(divElem)

// // Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root.

// const links = [
//     {
//         link: "https://google.com",
//         title: "Google"
//     },
//     {
//         link: "https://facebook.com",
//         title: "Facebook"
//     },
//     {
//         link: "https://github.com",
//         title: "GitHub"
//     },
//     {
//         link: "https://youtube.com",
//         title: "YouTube"
//     }
// ]
// const rootDiv = document.querySelector("#root")
// for (let i = 0; i < links.length; i++) {
//     const {link, title} = links[i]
//     const aElem = document.createElement("a") // <a></a>
//     aElem.setAttribute("href", link) // <a href="{link}"></a>
//     aElem.innerText = title // <a href="{link}">{title}</a>
//     rootDiv.append(aElem)
// }


// craetePostCard
/*
<div>
    <img src="https://decode.kz/images/blog/6470af36c0551ca9a79ae1ce.png" alt="javascript">
    <a href="#">Link to post</a> то что находится между открывающимся и закрывающимся тегом это все innerText
</div> 
*/

// function craetePostCard(imgSrc, postHref) {
//     const imgElem = document.createElement("img") // <img>
//     imgElem.setAttribute("src", imgSrc) // <img src="{imgSrc}">
//     imgElem.setAttribute("alt", "post image") // <img src="{imgSrc}" alt="post image">
//     const aElem = document.createElement("a") // <a></a>
//     aElem.setAttribute("href", postHref) // <a href="{postHref}"></a>
//     aElem.innerText = "Link to post" // <a href="{postHref}">Link to post</a>

//     const divElem = document.createElement("div") // <div></div>
//     divElem.append(imgElem, aElem)
//     return divElem
// }

// const imgSrc = prompt("Set img url")
// const postHref = prompt("Set post link")

// const postCard = craetePostCard(imgSrc, postHref)

// const mainDiv = document.querySelector(".main")
// mainDiv.append(postCard)

//====================Tasks==============================

// Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count) 

const products = [
    {
        id: 1,
        title: "bicycle",
        unit_price: 45000,
        discount: 10,
        count: 15
    },
    {
        id: 2,
        title: "roller-skates",
        unit_price: 15000,
        discount: 5,
        count: 4
    },
    {
        id: 3,
        title: "kick scooter",
        unit_price: 10000,
        discount: 30,
        count: 5
    },
    {
        id: 4,
        title: "skis",
        unit_price: 25000,
        discount: 10,
        count: 12
    },
    {
        id: 5,
        title: "skate",
        unit_price: 10000,
        discount: 0,
        count: 1
    }
]

// Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество.

const productsContainer = document.querySelector(".products_container")
let totalPrice = 0
let totalCount = 0
for (let i = 0; i < products.length; i++) {
    const { title, unit_price, count } = products[i]
    const productCard = document.createElement("div")

    const pTitle = document.createElement("p")
    pTitle.innerText = 'Product title: ${title)'
    const pPrice = document.createElement("p")
    pTitle.innerText = 'Product title: ${unit_price)'
    const pCount = document.createElement("p")
    pTitle.innerText = 'Product title: ${count)'

    productCard.append(pTitle, pPrice, pCount)
    productsContainer.append(productCard)
    
    totalPrice = totalPrice + (unit_price * count)
    totalCount = totalCount + count
}

const totalStats = document.createElement("div")
const pTotalPrice = document.createElement("p")
pTotalPrice.innerText = `Total price: ${totalPrice}`
const pTotalCount = document.createElement("p")
pTotalCount.innerText = `Total count: ${totalCount}`
totalStats.append(pTotalPrice, pTotalCount)
productsContainer.append(totalStats)