console.log("Connected")
// single-line comment
/* 
This is a 
multi-line
comment
*/
// Variables
/*
    * let - mutable (changeable); block-scope
    * var - mutable (changeable); global-scope
    * const - unmutable (unchangeable); 
*/
let firstName = "Barbie";
console.log("First Name:", firstName)
// updating variables
firstName = "Catherine"
console.log("First Name:", firstName)
var lastName = "Quirante"
// updating variables
lastName = "Calalang"
console.log("Last Name:", lastName)
const christmas = '12-25'
console.log("Christmas Day:", christmas)
// christmas = '01-01'
if (true) {
    let color = 'red'
    var fruit = 'apple'
    console.log("Color: ", color)
    console.log("Fruit: ", fruit)
}
//if the whole function needs to be visible var is good but let is less error-prone

// Basic Syntax
let x = 5;
let y = 10;
let sum = x + y
console.log("Sum:", sum)
