// const user = {
//     userName: "John",
//     lastName: "Doe",
//     age:35,
//     "car name": "BMW",
//     // carName: "BMW"
// }
// // 1
// console.log(user)
// console.log(user["lastName"])
// console.log(user["age"])
// console.log(user["userName"])
// // 2
// console.log(user.lastName)
// console.log(user.age)
// console.log(user.userName)
// console.log(user["car name"])

// user.lastName = "Smith"
// user.profession = "developer"
// console.log(user)

// //===============//
// // создать объект с названием и ценой продукта и вывести даннфе в консоль.
// const product = {
//     name: "Macbook",
//     price: 4000
// }

// console.log('Product name: ${product.name}')
// console.log('Product price: ${product.name}')

// Создать массив из объектов продуктов (свойства title, price, type) и, пройдясь циклом по массиву, сформировать строки. Вывести их в консоль.

const products = [
    {
        title: "Macbook",
        price: 4000,
        type: "Laptop",
        discount: 5
    },
    {
        title: "Blender",
        price: 1000,
        type: "Kitchen",
        discount: 10
    },
    {
        title: "Bicycle",
        price: 1500,
        type: "Sport",
        discount: 15
    }
]

//     let totalPrice = 0
//     for(let i = 0; i < products.length; i++) {
//     const {title,price,type} = products[i]
//     console.log('Title of product: ${products[i].title}')
//     console.log('Price of product: ${products[i].price}')
//         console.log('Type of product: ${products[i].type}')
//         console.log("====================")
//         totalPrice = totalPrice + price

// }

// console.log('Total price: ${totalPrice}')

// for(let i = 0; i < products.length; i++) {
//     const {title, price, type, discount} = products[i]
//     console.log(`Title of product: ${title}`)
//     console.log(`Price of product: ${price}`)
//     console.log(`Type of product: ${type}`)
//     // const priceWithDiscount = price - price * discount / 100
//     console.log(`Price with discount: ${price - price * discount / 100}`)
//     console.log("==================")
//     totalPrice = totalPrice + price
// }
// console.log('Total price: ${totalPrice}')

//===================================================//

// Вывести названия товаров и цену со скидкой. В процессе решения задачи используйте деструктурирующее присваивание
// Создать новый пустой массив.Пройтись циклом по массиву с продуктами и в новый массив добавить те продукты, которые дешевле определенной суммы.


let totalPrice = 0
const newProducts = []
for(let i = 0; i < products.length; i++) {
    const {title, price, type, discount} = products[i]
    console.log(`Title of product: ${title}`)
    console.log(`Price of product: ${price}`)
    console.log(`Type of product: ${type}`)
    // const priceWithDiscount = price - price * discount / 100
    console.log(`Price with discount: ${price - price * discount / 100}`)
    console.log("==================")
    totalPrice = totalPrice + price
    if (price < 1600) {
        newProducts.push(products[i])
    }
}

console.log('Total price: ${totalPrice}')
console.log(newProducts)

    //====================================//

// const user = {
//     'first name': 'John',
//     lastName: 'Dow',
//     profession: 'Programmer',
//     salary: 4000,
//     age: 30,
//     active: true,
//     address: {
//         country: "Germany",
//         city: "Berlin"
//     }
// }
// // desctructurization
// const {salary, age, lastName} = user
// console.log(age)
// console.log(active)

// // ссылочное храниение
// // arrays
// const arr = [2, 5, 9]
// const secondArr = arr
// secondArr[1] = 10
// console.log(secondArr) // [2, 10, 9]
// console.log(arr) // [2, 10, 9]
// // objects
// const obj = {a: 1, b: 2}
// const secondObj = obj
// secondObj.b = 5
// console.log(secondObj) // {a: 1, b: 5}
// console.log(obj) // {a: 1, b: 5}