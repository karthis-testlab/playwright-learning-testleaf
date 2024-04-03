
let string = "mom";

function reverseString(name) {
    let arr = name.split("");
    let newString = "";
    for (let index = arr.length - 1; index >= 0; index--) {
        newString += arr[index];
    }
    return newString;
}

function isPalindrome(reverseOne) {
    if (reverseOne === string) {
        return true;
    }
    return false;
}

console.log(isPalindrome(reverseString(string)));