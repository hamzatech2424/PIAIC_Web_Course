// 1. Remove negative numbers from an array using filter
const numbersArray: number[] = [33, -44, -56, -66, 32, 99];

const positiveNumbers: number[] = numbersArray.filter((num) => num >= 0);

console.log("Array After Filtering Positive Numbers:");
console.log(positiveNumbers);

// 2. Multiply each number in an array by 2 using map
const originalArray: number[] = [1, 2, 3, 4, 5];

console.log("Array Before Doubling Using Map:");
console.log(originalArray);

const doubledArray: number[] = originalArray.map((num) => num * 2);

console.log("Array After Doubling Using Map:");
console.log(doubledArray);

// 3. Filter fruits with more than 5 characters
const fruitsArray: string[] = ["apple", "banana", "cherry", "date", "grape"];

console.log("Array Before Filtering Fruits with More Than 5 Characters:");
console.log(fruitsArray);

const filteredFruitsArray: string[] = fruitsArray.filter((fruit) => fruit.length > 5);

console.log("Array After Filtering Fruits with More Than 5 Characters:");
console.log(filteredFruitsArray);

// 4. Square even numbers using map and filter
const numbersArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Array Before Filtering and Squaring Even Numbers:");
console.log(numbersArray2);

const squaredEvenNumbers: number[] = numbersArray2
  .filter((num) => num % 2 === 0)
  .map((evenNumber) => evenNumber ** 2);

console.log("Array After Filtering and Squaring Even Numbers:");
console.log(squaredEvenNumbers);

// 5. Convert temperatures from Celsius to Fahrenheit using map
const celsiusTemperature: any[] = [0, 10, 20, 30, 40];

const fahrenheitTemperatures: number[] = celsiusTemperature.map((celsius) => (celsius * 9 / 5) + 32);

console.log("Fahrenheit Equivalent of Celsius Temperatures:");
console.log(fahrenheitTemperatures);

// 6. Double odd numbers using map and filter
const numbersArray3: number[] = [3, 6, 9, 12, 15, 18];

console.log("Array Before Filtering and Doubling Odd Numbers:");
console.log(numbersArray3);

const doubledOddNumbers: number[] = numbersArray3
  .filter((num) => num % 2 !== 0)
  .map((oddNumber) => oddNumber * 2);

console.log("Array After Filtering and Doubling Odd Numbers:");
console.log(doubledOddNumbers);

// 7. Log names with exclamation marks using forEach
const namesArray: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];

console.log("Names with Exclamation Marks:");

const namesWithExclamation: string[] = [];

namesArray.forEach((name) => {
  const nameWithExclamation = name + "!";
  console.log(nameWithExclamation);
  namesWithExclamation.push(nameWithExclamation);
});

console.log(namesWithExclamation);
