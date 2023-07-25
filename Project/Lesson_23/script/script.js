// const usernameInput = document.querySelector(".username_input")
// const btn = document.querySelector("button")
// usernameInput.value = "Hello"
// btn.addEventListener("click", function () {
//     console.log(usernameInput.value) // значение исчезнет из консоли через ~1мс из-за обновления страницы
// })

//============================task1==============================
// Создать форму, при submit которой данные из формы выводятся в консоль.

// const usernameInput = document.querySelector(".username_input")
// const formElem = document.querySelector("form")
// formElem.addEventListener("submit", function () {
//     event.preventDefault()
//     console.log(usernameInput.value)
// })

//=======================task2=====================
// 1. Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.
// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.

// {
//     name: "Notebook",
//     price: 4500 
// }

const formElem = document.querySelector("#product_form")
const productPrice = document.querySelector(".product_price")
const productName = document.querySelector(".product_name")
const products = []

formElem.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log(productName.value)
    // console.log(productPrice.value)
    const productObject = {
        name: productName.value, // .value используется только с полями ввода
        price: productPrice.value
    }
    products.push(productObject)
    rerender()
    formElem.reset()
    productName.focus()
})

// 3. Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.

function createProductCard(name, price) {
    const divElem = document.createElement("div")
    divElem.classList.add("product-item")
    const pName = document.createElement("p")
    pName.innerText = name
    const pPrice = document.createElement("p")
    pPrice.innerText = price
    divElem.append(pName, pPrice)

    return divElem
}

// 4. Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.
// {
//     name: "Notebook",
//     price: 4500
// }
const productsContainer = document.querySelector(".products_container")
function rerender() {
    productsContainer.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        const {name, price} = products[i]
        const productElem = createProductCard(name, price)
        productsContainer.append(productElem)
    }
}