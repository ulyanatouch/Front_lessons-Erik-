// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }
  
  //---------------------------------//
  // Напишите цикл for, который выводит в консоль  все числа от 55 до 20

  // for (let i = 55; i >= 20; i--) {
  //   console.log(i);
  // }
  

  // ---------------- самостоятельная работа ----------//

  // const products = [
  //   { name: 'Товар 1', price: 100 },
  //   { name: 'Товар 2', price: 200 },
  //   { name: 'Товар 3', price: 300 },
  // ];

  // function printProducts(products, discount) {
  //   products.forEach(({ name, price }) => {
  //     const discountedPrice = price * (100 - discount) / 100;
  //     console.log(`${name}: ${discountedPrice.toFixed(2)} usd.`);
  //   });
  // }
  
  // printProducts(products, 10);

//--------------------- ДРУГОЙ ВАРИАНТ ЭТОГО ЖЕ КОДА --------//
const products = [
  { name: 'Товар 1', price: 100 },
  { name: 'Товар 2', price: 200 },
  { name: 'Товар 3', price: 300 },
];

const printProducts = (products, discount) =>
  products.forEach(({ name, price }) => {
    const discountedPrice = price * (100 - discount) / 100;
    console.log(`${name}: ${discountedPrice.toFixed(2)} usd.`);
  });

printProducts(products, 10);




