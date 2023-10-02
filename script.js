// --------- Задание 1 --------- //
// Создать массив «Список покупок». Каждый элемент массива 
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала 
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении 
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
// а не добавлять новую. 
// 3. Покупка продукта. Функция принимает название продукта 
// и отмечает его как купленный.
let listShop = [
  { nameProduct: "pear", count: "10", isBuy: true },
  { nameProduct: "peach", count: "6", isBuy: true },
  { nameProduct: "tomato", count: "8", isBuy: false },
  { nameProduct: "potato", count: "20", isBuy: true },
  { nameProduct: "apple", count: "3", isBuy: false }
];

let showProducts = function() {
  listShop.sort(function(a, b) {
    return b.isBuy - a.isBuy;
  });
  let i = 0;
  for (let product of listShop) {
    console.log(
      `Product#${i} ${product.nameProduct}, ${product.count}, ${product.isBuy}`
    );
    ++i;
  }
  console.log("\n");
};

let addProduct = function(Product) {
  let count = 0;
  for (let i = 0; i < listShop.length; ++i) {
    if (listShop[i].nameProduct === Product) {
      count = i;
    }
  }

  if (count === 0) {
    listShop[listShop.length - 1] = {
      nameProduct: Product,
      count: "1",
      isBuy: true
    };
    console.log("count === 0");
  } else {
    listShop[count].count = Number(listShop[count].count);
    listShop[count].count += 1;
  }
};

let buyProduct = function(myProduct) {
  let count = 0;
  myProduct = String(myProduct);
  for (let i = 0; i < listShop.length; ++i) {
    if (listShop[i].nameProduct === myProduct) {
      count = i;
    }
  }

  if (count === 0) {
    console.log(`Don't have this product: ${myProduct}`);
  } else {
    listShop[count].isBuy = true;
  }
};

showProducts(listShop);
addProduct("peach");
showProducts(listShop);
buyProduct("tomato");
showProducts(listShop);

// --------- Задание 2 --------- //
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за 
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 2
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.
// let chequeShop = [
//   { productName: "bread", count: "3", price: "5" },
//   { productName: "milk", count: "2", price: "3" },
//   { productName: "sausage", count: "4", price: "7" },
//   { productName: "fish", count: "5", price: "12" },
//   { productName: "yoghurt", count: "5", price: "4" }
// ];

// let showCheque = function() {
//   for (let info of chequeShop) {
//     console.log(
//       `Name: ${info.productName}, Count: ${info.count}, Price: ${info.price}`
//     );
//   }
//   console.log("\n");
// };

// let sumOfPurchase = function() {
//   let sum = 0;
//   for (let info of chequeShop) {
//     info.price = Number(info.price);
//     sum += info.price;
//   }
//   return sum;
// };

// let getExpensivePurchase = function() {
//   let minPrice = 0;
//   for (let info of chequeShop) {
//     info.price = Number(info.price);
//     if (info.price > minPrice) {
//       minPrice = info.price;
//     }
//   }
//   return minPrice;
// };

// let averagePriceOfProduct = function() {
//   let averagePrice = 0;
//   let count = 0;
//   for (let i = 0; i < chequeShop.length; ++i) {
//     chequeShop[i].price = Number(chequeShop[i].price);
//     averagePrice += chequeShop[i].price;
//     count++;
//   }
//   averagePrice /= count;
//   return averagePrice;
// };

// showCheque();
// let sum = sumOfPurchase();
// console.log(`Sum of purchase is: ${sum}`);

// let maxPrice = getExpensivePurchase();
// console.log(`Max price is: ${maxPrice}`);

// let averagePrise = averagePriceOfProduct();
// console.log(`Averagge price is: ${averagePrise}`);
