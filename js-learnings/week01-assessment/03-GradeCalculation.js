

function getGrade(mark) {
    let grade = mark / 20;
    switch (true) {
        case grade < 5 && grade >= 4:
            return 'A'
        case grade < 3.9 && grade >= 3:
            return 'B'
        case grade < 2.9 && grade >= 2:
            return 'C'
        case grade < 1.9 && grade >= 1.5:
            return 'D'
        default:
            return 'F';
    }
}

console.log(getGrade(90));