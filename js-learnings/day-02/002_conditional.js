/*
* if - statement 
*
* Performs different actions based on the conditions
* 
* syntax: if else
* if(condition) {
*  // code is executed if the condtion is true
* } else {
*  // code is executed if the condtion is false
* } 
*
* syntax: if else if
* if(condition1) { 
*    // code is executed if the condtion1 is true
* } else if(condition2) {
*   // code is executed if the condtion2 is true 
* } else {
*    // code is executed both condtion1 and condtion2 is false
* }
*
* Switch - statement
*
*/

let browserName = "Chrome"
function getBrowser() {
    if (browserName === "Chrome") {
        return "Supported browser";
    } else {
        return "Unsupportes browser";
    }
}

console.log(getBrowser());

function getBrowserVersion() {
    if (browserName === "Chrome") {
        return 120.0;
    } else  if (browserName === "Firefox") {
        return 20;
    } else  if (browserName === "Safari") {
        return 116;
    } else {
        return "Unsupportes browser";
    }
}

console.log(getBrowserVersion());

function getBrowserVersionOptimized() {
    switch (browserName) {
        case "Chrome":
            return 121.01;
        case "Firefox":
            return 129.1;          
        case "Edge":
            return 112; 
        default:
            return "Unsupportes browser";
    }
}

console.log(getBrowserVersionOptimized());