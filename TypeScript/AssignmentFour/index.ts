// Function to insert a value at a specified index in an array
const initialArray: string[] = ['Bilal', 'Usman', 'Ali', 'Asad'];
const insertionIndex: number = 1;
const insertedValue: string = 'NewValue';

console.log("Array before inserting:");
console.log(initialArray);

function insertValueAtIndex(array: string[], index: number, value: string): string[] {
    array.splice(index, 0, value);
    return array;
}

const modifiedArrayAfterInsertion: string[] = insertValueAtIndex(initialArray, insertionIndex, insertedValue);

console.log("Array after insertion:");
console.log(modifiedArrayAfterInsertion);
console.log(`Value is inserted at index ${insertionIndex}`);

// Printing the first 25 integers using a while loop
let integerCounter = 1;
while (integerCounter <= 25) {
    console.log(integerCounter);
    integerCounter++;
}

// Printing the first 10 even numbers using a while loop
let evenCounter = 1;
while (evenCounter <= 20) {
    if (evenCounter % 2 === 0) {
        console.log(evenCounter);
    }
    evenCounter++;
}

// Function to calculate the factorial of a positive integer using a while loop
const numForFactorial: number = 5;

function calculateFactorial(num: number): number {
    let factorial: number = 1;
    let i: number = 1;
    while (i <= num) {
        factorial *= i;
        i++;
    }
    return factorial;
}

console.log("Factorial of", numForFactorial, "is", calculateFactorial(numForFactorial));

// Removing negative numbers from an array
const numbersWithNegatives: number[] = [-33, 44, -66, 32, 34, 5, 2];

function removeNegativeNumbersFromArray(array: number[]): number[] {
    return array.filter((number) => number >= 0);
}

console.log("Array after removing negative numbers:");
console.log(removeNegativeNumbersFromArray(numbersWithNegatives));

// Function to calculate the sum of an array of numbers using a while loop
const arrayToSum: number[] = [44, 55, 65, 789, 23, 22, 45];

function calculateArraySum(array: number[]): number {
    let sum: number = 0;
    let i: number = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
}

console.log("Sum of array elements:", calculateArraySum(arrayToSum));

// Converting Celsius temperatures to Fahrenheit using a while loop
const celsiusTemperatures: number[] = [35, 37, 40, 44, 48, 62, 80, 90, 100];

console.log('Array of Celsius Temperatures:');

function copyArrayElements(array: number[]): number[] {
    return array.slice();
}

console.log("Copied Celsius Temperatures Array:", copyArrayElements(celsiusTemperatures));

function convertCelsiusToFahrenheitArray(array: number[]): number[] {
    let i: number = 0;

    while (i < array.length) {
        array[i] = (array[i] * 9 / 5) + 32;
        i++;
    }
    return array;
}

console.log("Fahrenheit Equivalent of Celsius Temperatures:");
console.log(convertCelsiusToFahrenheitArray(celsiusTemperatures));

// Implementing a simple shopping cart program using an array
function addItemToCart(cart: Array<string>, itemName: string) {
    cart.push(itemName);
}

function removeItemFromCart(cart: Array<string>, itemName: string) {
    const indexToRemove = cart.indexOf(itemName);
    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1);
    }
}

function updateCartItemQuantity(cart: string[], itemName: string, newQuantity: string) {
    const itemIndex = cart.indexOf(itemName);
    if (itemIndex !== -1) {
        cart[itemIndex] = newQuantity;
    }
}

const shoppingCart: string[] = [];

addItemToCart(shoppingCart, "Apple");
addItemToCart(shoppingCart, "Banana");
addItemToCart(shoppingCart, "Orange");

console.log("Cart contents after adding items:");
console.log(shoppingCart);

removeItemFromCart(shoppingCart, "Banana");

console.log("Cart contents after removing Banana:");
console.log(shoppingCart);

updateCartItemQuantity(shoppingCart, "Apple", "2");

console.log("Cart contents after updating the quantity of Apple to 2:");
console.log(shoppingCart);
