
function isOddOrEven(number) {
    let remainder = number % 2;
    if(remainder === 0) {
        return 'Even';
    }    
    return 'Odd';
}

console.log(isOddOrEven(3));
console.log(isOddOrEven(10));