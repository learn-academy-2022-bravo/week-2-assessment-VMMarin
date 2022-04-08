// ASSESSMENT 2: Coding Practical Questions with Jest

const { assertTaggedTemplateExpression } = require("@babel/types")
const { string } = require("yargs")



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.



// describe("divisibleBy3", () => {
//     it("decides if the number is evenly divisible by three or not", () => {
//       expect(divisibleBy3(num)).toEqual("is divisisible by three")
//       expect(!divisibleBy3(num)).toEqual("is not divisible by three")
//     })
// })

// FAIL  week-2-assessment-VMMarin/code-challenges.test.js
// divisibleBy3
//   ✕ decides if the number is evenly divisible by three or not (1 ms)

// ● divisibleBy3 › decides if the number is evenly divisible by three or not

//   ReferenceError: divisibleBy3 is not defined

//     33 | describe("divisibleBy3", () => {
//     34 |     it("decides if the number is evenly divisible by three or not", () => {
//   > 35 |       expect(divisibleBy3(num)).toEqual("is divisisible by three")
//        |       ^
//     36 |       expect(!divisibleBy3(num)).toEqual("is not divisible by three")
//     37 |     })
//     38 | })






// const num1 = 15
// // Expected output: "15 is divisible by three"
// const num2 = 0
// // Expected output: "0 is divisible by three"
// const num3 = -7
// // Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

//PSEUDOCODE:
//Input will be num variable
//use modulo to determine if numbers are evenly divisible by three
//if statement
//return num is or is not divisible by three

let divByThree = (array) => {
return array.map(value => {
    if(value % 3 === 0) {
        return "Is divisible by three"
    } else {
        return "is not divisible by three"
        }
        })
    }
divByThree(num1)
divByThree(num2)
divByThree(num3)



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.



// describe("capitalizedArray", () => {
//     it("returns an array with all the words capitalized", () => {
//         expect(randomNouns1.map.toUpperCase).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(randomNouns2.map.toUpperCase).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])

//     })
// })

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// FAIL  week-2-assessment-VMMarin/code-challenges.test.js
// capitalizedArray
//   ✕ returns an array with all the words capitalized (2 ms)

// ● capitalizedArray › returns an array with all the words capitalized

//   expect(received).toEqual(expected) // deep equality

//   Expected: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//   Received: undefined

//      98 | describe("capitalizedArray", () => {
//      99 |     it("returns an array with all the words capitalized", () => {
//   > 100 |         expect(randomNouns1.map.toUpperCase).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         |                                              ^
//     101 |         expect(randomNouns2.map.toUpperCase).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     102 |
//     103 |     })

//     at Object.<anonymous> (week-2-assessment-VMMarin/code-challenges.test.js:100:46)



// b) Create the function that makes the test pass.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Pseudocode
// Create a function that takes in an array of words and returns an array with all the words capitalized.
// create a function that takes in an array and returns each word capitalized
// declare a function that takes in an array
// create a local variable that maps through the array
// with each value access the first index and capitalize the letter then concatenate the remainder of the word
// return the local variable joined into a string

const capitalNouns = (array) => {
  let eachItem = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
   return eachItem.join(", ")
}

console.log(capitalNouns(randomNouns1))
console.log(capitalNouns(randomNouns2))

//

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.


describe("indexeddArray", () => {
    it("logs the index of the first vowel.", () => {
        expect().toEqual(
    })
})





const vowelTester1 = "learn"
// Expected output: 1
//const vowelTester2 = "academy"
// Expected output: 0
//const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.

//input will be string
///output will be index of first vowel of string
//utilizing string.search(vowels) to identify vowels

//Had a lot of trouble with this one - roughly 2 hours of creating and erasing code, googling, etc. My mind tells me it should be very simple, but every output was an error. 


function firstV(vowelTester1) {
    let vowelTest = str.search (/[a, e, i, o, u, A, E, I, O,U]/g)
}

console.log(vowelTest) 

