export function getMyName() {
    return "hello shlomo";
}

export function getHelloWithFirstName(firstName) {
    return `hello ${firstName}`;
}

export function getTwoNumberAndReturnMax(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    }
    else {
        return numberTwo;
    }

}
export function getTwoNumberAndReturnFirstNumberPartialSecondNumber(numberOne, numberTwo) {
    return (numberOne / numberTwo)
}

export function getThreeNumberMin(num1, num2, num3) {
    return Math.min(num1, num2, num3)
}

export function getAvr(...numRest) {
    let sum = 0;
    let avr = 0;
    for (let i = 0; i < numRest.length; i++) {
        sum += numRest[i]

    }
    avr = (sum / numRest.length)
    return avr;
}

export function getAvrInteger(integerNumber) {
    let sum = 0;

    while (integerNumber != 0) {
        sum += integerNumber % 10;
        integerNumber = parseInt(integerNumber / 10);
    }
    return sum;

}

export function sortArray(array) {
    let newArray= array.sort((a, b) =>  a - b );
    return newArray
}