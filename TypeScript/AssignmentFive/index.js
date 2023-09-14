// 1. Remove negative numbers from an array using filter
var numbersArray = [33, -44, -56, -66, 32, 99];
var positiveNumbers = numbersArray.filter(function (num) { return num >= 0; });
console.log("Array After Filtering Positive Numbers:");
console.log(positiveNumbers);
// 2. Multiply each number in an array by 2 using map
var originalArray = [1, 2, 3, 4, 5];
console.log("Array Before Doubling Using Map:");
console.log(originalArray);
var doubledArray = originalArray.map(function (num) { return num * 2; });
console.log("Array After Doubling Using Map:");
console.log(doubledArray);
// 3. Filter fruits with more than 5 characters
var fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
console.log("Array Before Filtering Fruits with More Than 5 Characters:");
console.log(fruitsArray);
var filteredFruitsArray = fruitsArray.filter(function (fruit) { return fruit.length > 5; });
console.log("Array After Filtering Fruits with More Than 5 Characters:");
console.log(filteredFruitsArray);
// 4. Square even numbers using map and filter
var numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array Before Filtering and Squaring Even Numbers:");
console.log(numbersArray2);
var squaredEvenNumbers = numbersArray2
    .filter(function (num) { return num % 2 === 0; })
    .map(function (evenNumber) { return Math.pow(evenNumber, 2); });
console.log("Array After Filtering and Squaring Even Numbers:");
console.log(squaredEvenNumbers);
// 5. Convert temperatures from Celsius to Fahrenheit using map
var celsiusTemperature = [0, 10, 20, 30, 40];
var fahrenheitTemperatures = celsiusTemperature.map(function (celsius) { return (celsius * 9 / 5) + 32; });
console.log("Fahrenheit Equivalent of Celsius Temperatures:");
console.log(fahrenheitTemperatures);
// 6. Double odd numbers using map and filter
var numbersArray3 = [3, 6, 9, 12, 15, 18];
console.log("Array Before Filtering and Doubling Odd Numbers:");
console.log(numbersArray3);
var doubledOddNumbers = numbersArray3
    .filter(function (num) { return num % 2 !== 0; })
    .map(function (oddNumber) { return oddNumber * 2; });
console.log("Array After Filtering and Doubling Odd Numbers:");
console.log(doubledOddNumbers);
// 7. Log names with exclamation marks using forEach
var namesArray = ["Alice", "Bob", "Charlie", "David", "Emily"];
console.log("Names with Exclamation Marks:");
var namesWithExclamation = [];
namesArray.forEach(function (name) {
    var nameWithExclamation = name + "!";
    console.log(nameWithExclamation);
    namesWithExclamation.push(nameWithExclamation);
});
console.log(namesWithExclamation);
