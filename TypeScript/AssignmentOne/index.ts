
console.log("Task 2:")
const personName: string = "Basit";
console.log(`Hello ${personName}`)
console.log("=========")

console.log("Task 3:")
const personNameTwo: string = "abdul basit";
console.log("toLowerCase=>",personNameTwo.toLowerCase())
console.log("toUpperCase=>",personNameTwo.toUpperCase())
console.log("toTitlecase=>",personNameTwo.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" "))
console.log("=========")

console.log("Task 4:")
console.log(`Albert Einstein once said, "If you can't explain it simply, you don't understand it well enough."`)
console.log("=========")

console.log("Task 5:")
const famous_person: string = "Albert Einstein";
const message: string = "It's not that I'm so smart, it's just that I stay with problems longer."
console.log(`${famous_person} once said, "${message}"`)
console.log("=========")


console.log("Task 6:")
const strippingNames: string = `\tAlbert\nEinstein\t`;
console.log(strippingNames.trim())
console.log("=========")

console.log("Task 7:")
console.log("Addition=>",4+4)
console.log("Subtraction=>",10-2)
console.log("Multiplication=>",2*4)
console.log("Division=>",16/2)
console.log("=========")


console.log("Task 8:")
console.log("_____________________________________________")
console.log(5 + 3)
console.log("_____________________________________________")
console.log("=========")


console.log("Task 9:")
const fvtNumberOne: number = 18;
console.log(`My Favorite number is: ${fvtNumberOne}`)
console.log("=========")


console.log("Task 10:")
const fvtNumber: number = 18; // a variable created in the memory and 18 stored in it as its value
console.log(`My Favorite number is: ${fvtNumber}`) // this message will be displayed in the console
console.log("=========")


console.log("Task 11:")
const namesOne:Array<string> = ["Ali","Ahmad","Abdul"]
for(let i:number = 0; i < namesOne.length; i++){
    console.log(namesOne[i])
}
console.log("=========")


console.log("Task 12:")
const names:Array<string> = ["Ali","Ahmad","Abdul"]
for(let i:number = 0; i < names.length; i++){
    console.log(`Hello ${names[i]}`)
}
console.log("=========")


console.log("Task 13:")
const transport:Array<string> = ["Honda 125","Range Rover"]
for(let i:number = 0; i < transport.length; i++){
    console.log(`I would like to own a ${transport[i]}`)
}
console.log("=========")


console.log("Task 14:")
const guestsListOne:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
for(let i:number = 0; i < guestsListOne.length; i++){
    console.log(`${guestsListOne[i]} Sir, I would like to invite you on a dinner.`)
}
console.log("=========")


console.log("Task 15:")
const guestsListTwo:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
for(let i:number = 0; i < guestsListTwo.length; i++){
    if(guestsListTwo[i] == "Virat Kohli"){
        console.log(`${guestsListTwo[i]} Sir, No worries if you are unable to attend.`)
        guestsListTwo[i] = "Misbah ul haq"
        console.log(`${guestsListTwo[i]}  Sir, I would like to invite you on a dinner.`)
    }else{
        console.log(`${guestsListTwo[i]} Sir, I would like to invite you on a dinner.`)
    }
}
console.log(`Total guestsList: ${guestsListTwo.length}`)
console.log("=========")


console.log("Task 16:")
const guestListFour:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
guestListFour.push("Nawaz Sharif")
guestListFour.unshift("Shoaib Malik")
guestListFour.splice(guestListFour.length/2, 0, "Shahrukh Khan");
console.log("Sir I got a bigger dinner table I invited 3 more personalities")
for(let i:number = 0; i < guestListFour.length; i++){
    if(guestListFour[i] == "Virat Kohli"){
        console.log(`${guestListFour[i]} Sir, No worries if you are unable to attend.`)
        guestListFour[i] = "Misbah ul haq"
        console.log(`${guestListFour[i]}  Sir, I would like to invite you on a dinner.`)
    }else{
        console.log(`${guestListFour[i]} Sir, I would like to invite you on a dinner.`)
    }
}
console.log(`Total guestsList: ${guestListFour.length}`)
console.log("=========")


console.log("Task 17:")
let guestsListThree:Array<string> = ["Imran Khan","Shahid Afridi","Virat Kohli","Babar Azam"]
console.log("Sorry Guests I have just capacity of 2 guest only so i have to reduce my list")

let newArray = [...guestsListThree]

for(let i:number = 0; i < guestsListThree.length; i++){
      if(i <= 1){
        console.log(`${guestsListThree[i]}  Sir, I would like to invite you on a dinner.`)
    }
    else{
        console.log(`${guestsListThree[i]} Sorry sir I don't have space`)
        newArray.pop()
    }
}
guestsListThree = newArray
console.log(`Total guestsList: ${guestsListThree.length}`)
console.log(`Now Clearing the Array`)
guestsListThree.length = 0
console.log(`Total guestsList: ${guestsListThree.length}`)
console.log("=========")


console.log("Task 18:")
const locations:Array<string> = ["Canada","USA","Brazil","Russia","UK"]
console.log("array is not in alphabetical order",locations)
const clonedArrayForAlphabeticalSort:Array<string> = [...locations]
const sortedArrayAlphabetical:Array<string> = clonedArrayForAlphabeticalSort.sort()
console.log("alphabetical order sorted",sortedArrayAlphabetical)
console.log("array in its original order",locations)
const clonedArrayForReverseAlphabeticalSort:Array<string> = [...locations]
const sortedArrayReverseAlphabetical:Array<string> = clonedArrayForReverseAlphabeticalSort.sort((a, b) => a > b ? -1 : 1)
console.log("reverse alphabetical order sorted",sortedArrayReverseAlphabetical)
console.log("array in its original order",locations)
console.log("=========")


console.log("Task 19:")
let finalGuestsList:Array<string> = [...guestsListOne,...guestsListTwo,...guestsListThree,...guestListFour].filter((value, index, self) => self.indexOf(value) === index);
console.log("Final Guests who are invited",finalGuestsList)
console.log("=========")


console.log("Task 20:")
const addThingsToArrayOne = (...a:any) =>{
let thingsArray:Array<string> = a
console.log("ThingsArray =>",thingsArray)
}
addThingsToArrayOne("Mountains", "rivers","countries","cities")
console.log("=========")

console.log("Task 21:")
const addThingsToArray = (...a:any) =>{
let thingsArrayTwo:Array<string> = a
const thingsObject: { [key: string]: string } = {};
for (let i = 0; i < thingsArrayTwo.length; i++){
    let thing = thingsArrayTwo[i]
    let value = thingsArrayTwo[i]
    thingsObject[thing] = value
}
console.log("thingsObject =>",thingsObject)
}
addThingsToArray("Mountains", "rivers","countries","cities")
console.log("=========")



console.log("Task 22:")
const cars:Array<string> = ["Buggati","Ferrari","RangRover"]
let indexToFind:number = 3
console.log("array index error",cars[indexToFind])
indexToFind = 2
console.log("Corrected array index error",cars[indexToFind])
console.log("=========")



console.log("Task 23:")
let car:string = "subaru"
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let bike:string = "honda70"
console.log("Is bike == 'honda70'? I predict True.")
console.log(bike == 'honda70')

let laptop:string = "macbook"
console.log("Is laptop == 'macbook'? I predict True.")
console.log(laptop == 'macbook')

let phone:string = "iphone"
console.log("Is phone == 'iphone'? I predict True.")
console.log(phone == 'iphone')

let cycle:string = "phoneix"
console.log("Is cycle == 'phoneix'? I predict True.")
console.log(cycle == 'phoneix')

let myName:string = "hamza"
console.log("Is myName == 'Ali'? I predict False.")
console.log(myName == 'Ali')

let myAge:number = 26
console.log("Is myAge == 28? I predict False.")
console.log(myAge == 28)

let isAdmin:string = "No" 
console.log("Is isAdmin == 'Yes'? I predict False.")
console.log(isAdmin == "Yes")

let myFavouriteColor:string = "Black" 
console.log("Is myFavouriteColor == 'Green'? I predict False.")
console.log(myFavouriteColor == "Green")

let myFavouriteFood:string = "Biryani" 
console.log("Is myFavouriteFood == 'Shawarma'? I predict False.")
console.log(myFavouriteFood == "Shawarma")

console.log("=========")

console.log("Task 24:")
let num:number = 1
console.log("Value of num == 2",num == 2)
let numTwo:number = 1
console.log("Value of num != 1",numTwo != 1)
let myNameCheck:string = "Hamza"
console.log("lower case string",myNameCheck == "hamza")
let num1:number = 10;
let num2:number = 5
console.log(">=&&||",num1 >= 5 && num1 <= 5 || num2 >= 5 && num2 <= 5)
let myNewArrayOne:Array<number> = [1,2,5,6]
let numberToCheck:number = 5;
let isNumberAvailable:boolean = false
for(let i:number = 0; i < myNewArrayOne.length; i++){
    if(myNewArrayOne[i] == numberToCheck){
        isNumberAvailable = true
        break;
    }
}
console.log("Check for the number available in the array: ",isNumberAvailable)
console.log("=========")


console.log("Task 25:")
const alien_color:string = "green"
const colorCheckerOne = (clr:string) =>{
    if(alien_color == clr){
    console.log("You earned 5 points")
        }
    else{
    console.log("no OutPut")
        }
}
colorCheckerOne("green")
colorCheckerOne("red")
console.log("=========")


console.log("Task 26:")
const alien_color_Two:string = "green"
const colorCheckerTwo = (clr:string) =>{
    if(clr == alien_color_Two){
    console.log("You earned 5 points")
        }
   else if(clr ==  "red"){
    console.log("You earned 10 points")
        }
    else{
    console.log("no OutPut")
        }
}
colorCheckerTwo("green")
colorCheckerTwo("red")
colorCheckerTwo("blue")
console.log("=========")


console.log("Task 27:")
const alien_color_Three:string = "green"
const colorCheckerThree = (clr:string) =>{
    if(clr == alien_color_Three){
    console.log("You earned 5 points")
        }
   else if(clr ==  "yellow"){
    console.log("You earned 10 points")
        }
   else if(clr ==  "red"){
    console.log("You earned 15 points")
        }
    else{
    console.log("no OutPut")
        }
}
colorCheckerThree("green")
colorCheckerThree("yellow")
colorCheckerThree("red")
console.log("=========")



console.log("Task 28:")
const personAgeCalculator = (age:number) =>{
    if(age < 2){
    console.log("person is a baby")
        }
    else if(age >= 2 && age < 4){
    console.log("person is a toddler")
        }
    else if(age >= 4 && age < 13){
    console.log("person is a kid")
        }
    else if(age >= 13 && age < 20){
    console.log("person is a teenager")
        }    
   else if(age >= 20 && age < 65){
    console.log("person is a adult")
        }
   else if(age >= 65){
    console.log("person is a elder")
        }    
    else{
    console.log("no OutPut")
        }
}
personAgeCalculator(1)
personAgeCalculator(3)
personAgeCalculator(7)
personAgeCalculator(15)
personAgeCalculator(22)
personAgeCalculator(70)
console.log("=========")



console.log("Task 29:")
const favorite_fruits:Array<string> = ["apple", "orange", "mango","bananas","peach"]
for(let i:number = 0; i < favorite_fruits.length; i++){

    if(favorite_fruits[i] == "orange"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else if(favorite_fruits[i] == "bananas"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else if(favorite_fruits[i] == "apple"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else if(favorite_fruits[i] == "mango"){
        console.log(`${favorite_fruits[i]} is in my favorite fruits list`)
    }
    else{
        console.log("I d'nt like this fruit")
    }

}
console.log("=========")


console.log("Task 30:")
const userOnWebsite:Array<string> = ["Ahmad", "Ali", "Abdullah","Hamza","Akbar"]
for(let i:number = 0; i < userOnWebsite.length; i++){

    if(userOnWebsite[i] == "Ahmad"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else if(userOnWebsite[i] == "Hamza"){
        console.log(`Hello admin ${userOnWebsite[i]} thank you for logging in`)
    }
    else if(userOnWebsite[i] == "Ali"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else if(userOnWebsite[i] == "Abdullah"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else if(userOnWebsite[i] == "Akbar"){
        console.log(`Hello ${userOnWebsite[i]}, thank you for logging in again`)
    }
    else{
        console.log("No user exists with that name")
    }

}
console.log("=========")



console.log("Task 31:")
const userOnWebsiteTwo:Array<string> = ["Ahmad", "Ali", "Abdullah","Hamza","Akbar"]
    if(userOnWebsite.length == 0){
        console.log("We need to find some users!")
    }
    else{
        while (userOnWebsite.length > 0) {
            userOnWebsite.pop()
          }
         console.log("No users found!",userOnWebsite.length)
    }
console.log("=========")


console.log("Task 32:")
const current_users:Array<string> = ["Bob11", "John12", "william13","Emily14","Martin15"]
const new_users:Array<string> = ["Andy11","Robert12","John12","Emmy13","Scot12"]
const findingUserNames = (user:string) =>{
    const findingUserIndex = current_users.indexOf(user)
    if(findingUserIndex != -1){
     return `${user} needs a new username because its already exist`
    }
    else{
     return `${user} the username is available`
    }
}

for(let i=0;i < new_users.length;i++){
    console.log(findingUserNames(new_users[i]))
}
console.log("=========")


console.log("Task 33:")
const ordinalNumbers:Array<number> = [1,2,3,4,5,6,7,8,9]
for(let i=0;i < ordinalNumbers.length;i++){
    if(ordinalNumbers[i] == 1 || ordinalNumbers[i] == 2 || ordinalNumbers[i] == 3){
    }
    else{
        console.log(`${ordinalNumbers[i]}th`)
    }
}
console.log("=========")


console.log("Task 34:")
const pizzas:Array<string> = ["tandori","pepporani","tikka"]
for(let i=0;i < pizzas.length;i++){
  console.log(`I Like ${pizzas[i]} pizza`)
}
console.log(`Pizzas are my favorite meal \nI really like to eat them \nI really love pizza!`)
console.log("=========")


console.log("Task 35:")
const animals:Array<string> = ["dog","cat","rabbit"]
for(let i=0;i < animals.length;i++){
    console.log(`A ${animals[i]} would make a great pet.`)
}
console.log("These animals would make a great pet!")
console.log("=========")

console.log("Task 36:")
const makingTShirt = (size:string,textToPrint:string) =>{
return `Size: ${size}, TextToPrint on it: ${textToPrint}`
}
console.log(makingTShirt("medium","Pakistan Zindabad"))
console.log("=========")


console.log("Task 37:")
const makingTShirtTwo = (textToPrint?:string,size:string = "large",) =>{
return `Size: ${size}, TextToPrint on it: ${textToPrint}`
}
console.log(makingTShirtTwo("I love TypeScript"))
console.log("=========")


console.log("Task 38:")
const describe_city = (city?:string,country:string = "Pakistan",) =>{
return `${city} is in ${country}`
}
console.log(describe_city("Karachi"))
console.log(describe_city("Faisalabad"))
console.log(describe_city("Mumbai"))
console.log("=========")

console.log("Task 39:")
const city_country = (city?:string,country:string = "Pakistan",) =>{
return `"${city}, ${country}"`
}
console.log(city_country("Karachi","Pakistan"))
console.log(city_country("Faisalabad","Pakistan"))
console.log(city_country("Mumbai","India"))
console.log("=========")


console.log("Task 40:")
const make_album = (artist:string,albumName:string,track:number = 1) =>{
return {
    artist,
    albumName,
    track
}
}
console.log(make_album("Atif Aslam","Doorie"))
console.log(make_album("Arijit Singh","Tum hi ho"))
console.log(make_album("Jubin Nautiyal","Zindagi tu bta"))
console.log("=========")


console.log("Task 41:")
const magicians:Array<string> = ["Albert","Michael","Steve"];
const show_magicians = (arr:Array<string>) =>{
for(let i = 0; i < arr.length; i++){
 console.log(`Hello Mr, ${arr[i]} Magician`)
}
}
show_magicians(magicians)
console.log("=========")


console.log("Task 42:")
const make_great = (arr:Array<string>) =>{
return arr.map((item)=>(`Great ${item}`))
}
show_magicians(make_great(magicians))
console.log("=========")


console.log("Task 43:")
let copyArrayMagicians = [...magicians]
show_magicians(make_great(copyArrayMagicians))
console.log(magicians)
console.log("=========")

console.log("Task 44:")
const prepareSandwiches = (...items:Array<string>) =>{
let summaryOfSandwich:any = {}  
let countOfDishes = 1
for(let i = 0; i < items.length; i++){
    summaryOfSandwich[`item ${countOfDishes}`] = items[i]
    countOfDishes = ++countOfDishes

}
return summaryOfSandwich
}
console.log(prepareSandwiches("sauce","corn","black pepper"))
console.log(prepareSandwiches("pickle","corn","capsicum"))
console.log(prepareSandwiches("green chilli","corn","lentils"))
console.log("=========")


console.log("Task 45:")
const storeInformationAboutCar = (manufacturer:string,model:string,color:string) =>{
return {
    manufacturer,
    model,
    color
}
}
console.log(storeInformationAboutCar("Honda","Civic","Grey"))
console.log("=========")