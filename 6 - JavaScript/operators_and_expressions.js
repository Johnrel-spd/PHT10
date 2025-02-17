// Operators and Expressions
// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log("First Number:", num1)
console.log("Second Number:", num2)

console.log("Addition(+):", num1 + num2)
console.log("Subtraction(-):", num1 - num2)
console.log("Multiplication(*):", num1 * num2)
console.log("Divition(/):", num1 / num2)
console.log("Exponent(**):", num1 ** num2)
console.log("Remainder(%):", num1 % num2)

// Order of Operators
// PEMDAS (parenthesis, exponents, multiplication, division, addition, subtraction)
// BOMDAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction.)
let answer = 3 + 4 * 5 * (5 - 2)** 2 / 2;
console.log("Answer:", answer)

// 2. String Expressions or Concatenation
console.log("Hello"+ " " + "World")
let greeting = 'Hi';
let name = 'Sebastian';
console.log(greeting + " " + name + "!")

// 3. Comparison Operators

// equal to "==": check if the values are equal
console.log("Equal to (==):", 5 == 6)

// type coercion - check the two values regardless of data type
console.log("Equal to (==): with coercion", 5 == '5')

// not equal to (!=)
console.log("Not Equal to (!=):", 5 != '5')

// Strict Equal to (===): will check if the values are equal AND if the data type is similar
console.log("Strict Equal to (===):", 5 === '5')

// strict not equal to (!==)
console.log("Strict Not Equal to (!==):", 5 !== '5')

// >, <, >= , <=
console.log("Greater than (>):", 5 > 7);
console.log("Less than (<):", 5 < 7);
console.log("Greater than or Equal to (>=):", 5 >= 7);
console.log("Less than or Equal to (<=):", 5 <= 7);

// 4. Logical Operators

let sunny = true
let warm = false

// AND - TRUE if both conditions are true
console.log("Is it sunny AND warm?:", sunny && warm);

// OR - TRUE if at least one condition is true
console.log("Is it sunny OR warm?:", sunny || warm);

// NOT - invert the boolean value
console.log("NOT sunny?:", !sunny);

// 5. Assignment Operator
// assign value to a variable (=)
let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
num3 += num4;
// num3 = num3 + num4
console.log("The new value of num3 is:", num3)

// Subtraction Assignment (-=)
num3 -= num4;
console.log("The new value of num3 is:", num3)

// Multiplication Assignment (*=)
num3 *= num4;
console.log("The new value of num3 is:", num3)

// Division Assignment (/=)
num3 /= num4;
console.log("The new value of num3 is:", num3)

// Exponent Assignment (**=)
num3 **= num4;
console.log("The new value of num3 is:", num3)

// Remainder Assignment (%=)
num3 %= num4;
console.log("The new value of num3 is:", num3)

