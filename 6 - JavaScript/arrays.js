// Create an array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
console.log(fruits);

// Accessing array elements
console.log(fruits[3]);
console.log(fruits[4]);


// Modifying array elements
fruits[3] = "Grapes";
console.log(fruits);

let numbers = [1, 2, 3, 4, 5]
// indexof() - gets index of a certain element
console.log(numbers.indexOf(5));

// includes() - checks if the element is in the array
console.log(numbers.includes(5));
console.log(numbers.includes(0));

// join() - joins the elements into the single string of output
console.log(numbers.join("-"));

// slice(start, end) - extract a portion of the array but does not modify the original array
// start - index where it starts slicing
// end - index where it end slicing (WARNING: element corresponding to index not included)
let slicedArray = numbers.slice(0, 2)
console.log(slicedArray);

// splice(start, # of elements) - like slice but modifies the original array and removes the sliced elements
let removedElements = numbers.splice(1, 4);
console.log("Removed Elements: " + removedElements);
console.log("Updated array: " + numbers);