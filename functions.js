// Functions in JavaScript
// The normal way of writing function (ES5)
// function nameOfFunction () {

// }

// // Arrow function method (ES6)
// const nameOfFunction = () => {

// }

function getName (name) {
    return name
}
  

let myName = "Kalu Goodnews"
// console.log(getName(myName))

function anyThing () {
    // console.log("How are you")
    // return "We are coming to see you"
}

// console.log(anyThing())

// const anyThing1 = () => {
    // console.log("whatever")

    anyThing()


function oneToTen () {
    let numbers = []
    for (let i = 1; i < 11; i++) {
        numbers.push(i)
    }
    numbers[0] = "*"
    // return numbers.slice(1, 5)      (// Note: Return affects console.log, so for your console.log to work you have to comment out the return here)
}

// console.log(oneToTen())

// Write an algorithm that adds all the numbers from 1 to 100

function sumOneToHundred () {
    let sum = 0
    for (let i = 1; i < 101; i++) {
        sum += i
    }
    return sum
}

// console.log(sumOneToHundred())

// Function that appends element to an array using concat method
function appendElement (array, element) {
    return array.concat(element)
}

// Function that appends element to an array using push method
function appendElement (array, element) {
    array.push(element)
    return array
}
// console.log(appendElement([3, "he is coming", true, 0, 9, 8, null], "We are learning function"))

// Adding numbers from one to hundred using array.reduce 
function sumAnArray (array) {
    return array.reduce((total, item) => total + item, 0)   // The Zero here signifies the number or the amount we have from the begining before the addition, its                                                                usually good to start from Zero.
}

// console.log(sumAnArray([1, 2, 3, 2, 3, 2, 4, 2]))

// Counting the number of letters in a word
function characterCount (string) {
    let table = {}
    for (let character of string.replace(/\W/g, "").toLowerCase()) {        // /\W/g is a regular expression used in removing spaces in sentences.
        table[character] = table[character] + 1 || 1                        // || means or while && means and.
    }
    return table
}
// console.log(characterCount("IMmeDiatEly"))    // Its always good to include .toLowerCase() or .toUpperCase so that the result can be harmoniZed, .toLowerCase is                                                    more preferable

// Function for writing an anagram (testing if two different sentences are the same)
function anagram (string1, string2) {
    let countA = characterCount(string1)
    let countB = characterCount(string2)

 // !== means not equal to, while === means equal to both in type and value, == means equal to only in value.
    if (Object.keys(countA).length !== Object.keys(countB).length) {
        return false
    }

    for (let character in countA) {
        console.log(countA[character])
        if (countA[character] !== countB[character]) {
            return false
        }
    }
    return true
    console.log(typeof countA)
    console.log(typeof countB)
}

console.log(anagram("He is learning", "heislearning"))