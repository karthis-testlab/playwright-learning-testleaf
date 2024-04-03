
function numberTypeIs(number) {
    switch (number) {
        case 0:
            console.log("The number is netural.");
            break;
        case 1:
            console.log("The given number is greater than 0, it is a positive number.");
            break;
        default:
            console.log("The given number is less than 0, it is a negative number.");
            break;
    }
}

function isNumber(givenNumber) {
    if (givenNumber === 0) {
        return 0;
    } else if(givenNumber > 0){
        return 1;
    } else {
        return -1;
    }
}

numberTypeIs(isNumber(0));
numberTypeIs(isNumber(1));
numberTypeIs(isNumber(-1));