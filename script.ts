// ----------------------------- Tallest Mountain --------------------------------

/*
// outline of an object
// declare an interface called Mountain that contains the following properties:         name-string
    height-number
*/
interface Mountain {
  name: string;
  height: number;
}

/*
// creates a variable equal to an array of objects using the interface
Declare an array called mountains which is an array of type Mountain.
*/
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

/*
// Declare a function called findNameOfTallestMountain. It takes one parameter, an array of Mountain objects. It returns a string, the name of the tallest mountain in the given array.
// Call findNameOfTallestMountain, passing it your mountains array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log the variable. (Hint: It will print “Everest”.)
*/
function findNameOfTallestMountain(mountains: Mountain[]): string {
  let currentTallestHeight: number = 0; // used as placeholders
  let tallestMountainName: string = ""; // will get reinitialized
  mountains.forEach(mountain => {
    if (mountain.height > currentTallestHeight) {
      currentTallestHeight = mountain.height;
      tallestMountainName = mountain.name;
    }
  });
  return tallestMountainName;
}

let nameOfTallestMountain = findNameOfTallestMountain(mountains);

console.log(nameOfTallestMountain);

// ----------------------------- Products --------------------------------

/*
// Declare an interface called Product that contains the following properties: ○        name-string
    height-number
*/
interface Product {
  name: string;
  price: number;
}

/*
// Declare an array called products which is an array of type Product.
// Fill the array with a few products of your own choosing.
*/
let products: Product[] = [
  { name: "hamburger", price: 5 },
  { name: "cheeseburger", price: 7 },
  { name: "fries", price: 2 }
];

/*
// Declare a function called calcAverageProductPrice. It takes one parameter, an array of Product objects. It returns a number, the average price of all the products provided as an argument.
*/

function calcAverageProductPrice(products: Product[]): number {
  let totalPrice: number = 0;
  for (const product of products) {
    totalPrice += product.price;
  }
  return totalPrice / products.length;
}

// or can be written this way
// function calcAverageProductPrice(products: Product[]): number {
//   let totalPrice: number = 0;
//   products.foreach(product => {
//     totalPrice += product.price; // total = total + product.price
//   }):
//   return totalPrice / products.length;
// }

/*
// Call calcAverageProductPrice, passing it your products array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log the variable.
*/
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);

// ----------------------------- Inventory --------------------------------

/*
// Declare an interface called InventoryItem that contains the following properties:
    product-Product(fromabove)
    quantity-number
*/
interface InventoryItem {
  product: Product;
  quantity: number;
}

/*
// Declare an array called inventory which is an array of type InventoryItem.
// Fill the array with the following information:
// product.name: motor, sensor, LED
// product.price: 10.00, 12.50, 1.00
// quantity: 10, 4, 20
*/
const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

/*
// Declare a function called calcInventoryValue. It takes one parameter, an array of InventoryItem objects. It returns a number, the total value of all the products in the inventory array provided as an argument.
  This is calculated as follows: For each InventoryItem take the product price times the quantity. Add these together for all the items. For the above data, the total will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
// 
*/
function calcInventoryValue(inventoryItems: InventoryItem[]): number {
  let value: number = 0;
  inventoryItems.forEach(item => {
    value += item.product.price * item.quantity;
  });
  return value;
}

/*
// Call calcInventoryValue, passing it your products array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log
the variable. (Hint: It prints 170).

*/
let valuePrice = calcInventoryValue(inventory);
console.log(valuePrice);
