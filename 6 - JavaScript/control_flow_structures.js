// Control Flow Structures

// 1. Conditional Statements

// Conditionals: if, else if, else
// () - condition block
// {} - code block

// Usage: complex condition
let temperature = 40;
if (temperature < 0){
    // range = below 0
    console.log("It's freezing!")
} else if(temperature > 0 && temperature < 20) {
    // range: 1 - 19
    console.log("It's cool outside!")
} else if(temperature >= 20 && temperature < 30){
    // range: 20 - 29
    console.log("It's warm outside.")
} else {
    // range: 30 and above
    console.log("It's hot outside!")
}

// Conditionals: switch-case statements
//  Usage: Checking for exact values
let day = "Wednesday";
switch(day){
    case "Monday":
        console.log("It is the start of the week!");
        break;
    case "Friday":
        console.log("It is the end of the week!");
        break;
    default:
        // default value will only run if the previous conditions are not met.
        console.log("It is a regular day.");
}

// 2. Looping Statements 
// Loops : for loop
/**
 * 1st argument: variable initialization
 * 2nd argument: condition expression (loop will continue or terminate)
 * 3rd argument: increment / decrement
 */
for(let i=1; i<=3; i++){
    console.log("for loop count:", i)
}

// Loops: while loop
let counter = 1
while(counter<=3){
    counter++;
    console.log("while loop count:", counter)
}

// Loops: do-while
let count = 1
do{
    console.log("Do-while loop count:", count);
    count++;
}while (count<=3);