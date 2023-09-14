
console.log("Task 1:")
const temperatureConverter = (value:number,output:string):string =>{
if(output == "F"){
return `${value * (9/5) + 32} Fahrenheit`
}
else{
    return `${value * (9.0/5.0) + 32.0} celsius`
}
}
console.log(temperatureConverter(42,"F"))
console.log("=========")


console.log("Task 2:")
const calculatePercentage = (value:number,totalNumber:number):string =>{
return `${value/totalNumber*100}%`
}
console.log(calculatePercentage(350,500))
console.log("=========")


console.log("Task 3:")
const calculateNumberOfWeeksAndDays = (days:number):string =>{
let numberOfWeeks = Math.floor(days/7)
let numberOfDays = days - (numberOfWeeks*7)
return `${numberOfWeeks} weeks and ${numberOfDays} days`
}
console.log(calculateNumberOfWeeksAndDays(17))
console.log("=========")


console.log("Task 4:")
const calculateDiscount = (price:number):string =>{
    if(price > 100){
    const discountedPrice = price * 10 / 100
    const totalPriceAfterDiscount = price - discountedPrice
    return `New Price with 10% discount :${totalPriceAfterDiscount}$`
    }else{
    const discountedPrice = price * 5 / 100
    const totalPriceAfterDiscount = price - discountedPrice
    return `New Price with 5% discount :${totalPriceAfterDiscount}$`
    }
}
console.log(calculateDiscount(90))
console.log("=========")



console.log("Task 5:")
const userProvidedAge = (age:number):string =>{
   if(age>=0 && age<=12){
    return `User is a : Child`
   }
   else if(age>=13 && age<=19){
    return `User is a : Teenager`
   }
   else{
    return `User is a : Adult`
   }
}
console.log(userProvidedAge(20))
console.log("=========")



console.log("Task 6:")
const tempCheck = (temp:number):string =>{
   if(temp <= 20){
    return `You should wear Warm clothes because it is very cold outside`
   }
   else{
    return `You should wear summer clothes because it is very hot outside`
   }
}
console.log(tempCheck(20))
console.log("=========")


console.log("Task 7:")
const checkDivisibility = (num:number):string =>{
   if(num%5 == 0 && num%3 == 0){
    return `It is divisible by 3 and 5 Both`
   }
   else if(num%5 == 0){
    return `It is divisible by 5`
   }
   else if(num%3 == 0){
    return `It is divisible by 3`
   }
   else{
    return `It is not divisible by anyone`
   }
}
console.log(checkDivisibility(30))
console.log("=========")


console.log("Task 8:")
const isLeapYear = (year:number):string =>{
   if(year%4==0  ||  year%400==0   &&   year%1000!=0){
    return `Yes Its a leap Year`
   }
   else{
    return `No It is not a leap Year`
   }
}
console.log(isLeapYear(2000))
console.log("=========")


console.log("Task 9:")
const dayOfTheWeek = (day:number):string =>{
   if(day == 1){
    return `It is Monday Today`
   }
   else if(day == 2){
    return `It is Tuesday Today`
   }
   else if(day == 3){
    return `It is Wednesday Today`
   }
   else if(day == 4){
    return `It is Thursday Today`
   }
   else if(day == 5){
    return `It is Friday Today`
   }
   else if(day == 6){
    return `It is Saturday Today`
   }
   else if(day == 7){
    return `It is Sunday Today`
   }
   else{
    return `It is not a correct day number`
   }
}
console.log(dayOfTheWeek(6))
console.log("=========")


console.log("Task 10:")
<<<<<<< HEAD
const taxImplemented = (units:number,):string =>{
=======
const taxImplemented = (units:number):string =>{
>>>>>>> main
   const amountOfBill = units * 5
   if(units > 100){
    const taxCalculated = amountOfBill * 10 / 100
    return `Total bill after 10% tax: ${amountOfBill+taxCalculated}`
   }
   else if(units > 300){
    const taxCalculated = amountOfBill * 15 / 100
    return `Total bill after 10% tax: ${amountOfBill+taxCalculated}`
   }
   else if(units > 500){
    const taxCalculated = amountOfBill * 25 / 100
    return `Total bill after 10% tax: ${amountOfBill+taxCalculated}`
   }
<<<<<<< HEAD
=======
   else{
      return `Total Bill: amountOfBill: ${amountOfBill}` 
   }
>>>>>>> main
}
console.log(taxImplemented(105))
console.log("=========")


