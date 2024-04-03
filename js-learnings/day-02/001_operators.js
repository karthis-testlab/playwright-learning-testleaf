/*
*
* Arithmetic Operators
* 1. Addition --> +
* 2. Subtraction --> -
* 3. Multiplication --> *
* 4. Division --> /
* 5. Modulus --> %
*
* Increment Operator --> ++
* i++ ==> i=i+1
* 1. Pre Increment
* 2. Post Increment
*
* Decrement Operator --> --
* i-- ==> i=i-1
* 1. Pre Decrement
* 2. Post Decrement
* 
* Equality Operators
* 1. Strict Equality (===)
*    - First compare the datatyp and then compare the values   
* 2. Non-strict Equality (==)
*    - Compare only the values and not the data type
* 
*/

let a = 10.456;
let b = 789.9
let str1 = "Hi!";
let str2 = " JS World.";

console.log("Addition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);
console.log("Modulus: ", a % b);
console.log("Concatenation: ", str1+str2);

let index = 0;
// Post Increment Operator
// Post Increment by 1
console.log(index++);
console.log(index);
// Pre Increment Operator
// Pre Increment by 1
console.log(++index);

// Post Decrement Operator
// Post Decrement by 1
console.log(index--);
console.log(index);
// Pre Decrement Operator
// Pre Decrement by 1
console.log(--index);

// Stirct Equality
console.log(1===1);
console.log(1===5);
console.log(1==='1');
console.log('chrome'==="Chrome");

// Non-Strict Equality
console.log(1==1);
console.log(1==5);
console.log(1=='1');
console.log(1=='01');
console.log('chrome'=="Chrome");
console.log(true=="true");