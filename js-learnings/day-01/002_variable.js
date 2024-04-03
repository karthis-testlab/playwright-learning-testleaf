/*
* Variables
* 
* Best Practice for variable naming conventions
* - meaningful name
* - a to z, A to Z, 0 to 9, _(underscore)
* - ex: first_name
* - don't start with number or _
* - lower camelcase for readability
* - ex: firstNameWithIntial, browserName, browser_name
*
* Variable declaration
* var, let & const
* var & let - you can change the value of var and let
* const - constant - you can't change the value. Value remains same
*  
* difference between var and let
* before ES6, we only had var
* ES6 - let was introduced
*
* 1. Re-assignment
* 2. Block level scoping
* 3. Hoisting
* 
* Variable Scoping --> level of accessbility of the varibles
* 
* 1. Global
* 2. Function
* 3. Block
*
*/

// string
var firstName = "Karthi";
console.log(firstName);
console.log(typeof firstName);

// number
var num = 7;
console.log(num);
console.log(typeof num);

// boolean
var bol = true;
console.log(bol);
console.log(typeof bol);

// undefined
var companyName;
console.log(typeof companyName);
companyName = "Qeagle";
console.log(typeof companyName);

// null
var surName = null
console.log(typeof surName);

var name_a = "name_a";
console.log(name_a);
var name_a = "name_b";
console.log(name_a);

//Cannot redeclare block-scoped variable 'name_c'.
/*let name_c = "name_c";
console.log(name_c);
let name_c = "name_d";
console.log(name_c);*/

let name_c = "name_c";
console.log(name_c);
let name_d = "name_d";
console.log(name_d);

const browserName = "firefox";
console.log(browserName);
// TypeError: Assignment to constant variable.
// browserName = "chrome";
// console.log(browserName);

let gender = "Female"; // global variable
function prinfGender() {
    let age = 25 // fuction scope --> var & let
    if(gender.startsWith("F")) {
        var color = "blue"; // Block scope --> let
        console.log("This is the color from the block level: "+color); // --> let
        console.log("She/Her");
    } else {
        console.log("He/His");
    }
    console.log("This is the color from the block level: "+color); // --> var
    console.log(age);
}

prinfGender();

// Hoisting --> Move variable declaration to the top
console.log(browserVersion);
var browserVersion = "123.0.1"
console.log(browserVersion);

console.log(browserVersion1); //ReferenceError: Cannot access 'browserVersion1' before initialization
let browserVersion1 = "123.0.1"