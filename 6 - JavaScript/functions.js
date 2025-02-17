// Functions - allow us to write a block of code that we can execute whenever we need it

// Define functions
function greet(){
    console.log("Hello, welcome to world of functions!");
    console.log("Yehey!")
}
// Calling a function
greet();

// parameters - placeholder that will hold the values that we will pass
// arguments - values that we pass to the parameter
function sum(num1, num2){
    console.log("Calculating the value...");
    return num1 + num2;
    console.log("Calculation done!");
}
// Calling functions with parameters
console.log("Sum:", sum(8, 5));