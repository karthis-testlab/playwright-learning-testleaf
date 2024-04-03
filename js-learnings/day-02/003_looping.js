/*
*
* for loop, while loop, do-while loop
*
* for loop
* used to execute a block of code repeatedly, until condition satisfied
* 
* Syntax:
* for (Initilization; Condition; Increment) { // block of code to run } 
*
* while loop
* used to execute the block as long as a specified condition is true
*
* Syntax:
* while(condtion) { // block of code to run }
*
* Do-while loop    
* 
* Syntax:
* do { // block of code to run } while(condtion)
* 
*/

for (let index = 0; index < 5; index++) {    
    console.log(index);
}

// logical operator
for (let index = 1; index <= 10; index++) {    
    if(index > 5 && index % 2 == 0) {
        console.log("Number is even: ", index);
    }
}

let counter = 10;
while(counter > 0) {
    console.log(counter);
    counter--;
}

do {
    console.log(counter);
    counter--;
} while (counter > 0);