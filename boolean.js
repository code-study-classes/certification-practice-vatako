//задача 1
export const isPositive = (A) => {
    return A > 0 ? true : false;
}
//задача 2
export const isOdd = (A) => {
    return A % 2 !== 0 ? true : false;
}
//задача 3 
export const  checkInequality = (A, B) => {
    return A > 2 && B <= 3;
}
//задача 4 
export const  checkInequality2 = (A, B) => {
    return A >= 0 || B < -2;
}
//задача 5 
export const checkBetweenNumbers = (A, B, C) => {
    return (A < C) ? (A < B && B < C) : (C < B && B < A);
}
//задача 6
export const checkOddThreeDigitNumber = (number) => {
    const absNumber = Math.abs(number);
    return absNumber >= 100 && absNumber <= 999 && number % 2 !== 0;
}
//задача 7
export const checkUniqueDigits = (number) => {
        const numStr = Math.abs(number).toString();
        return numStr.length !== 3 
            ? false 
            : new Set(numStr.split('')).size === numStr.length;
    }
//задача 8
export const isSecondQuadrant = (x, y) => {
    return x < 0 && y > 0;
}
//задача 9
export const isIsoscelesTriangle = (a, b, c) => {
    if (a + b <= c || a + c <= b || b + c <= a){
        return false 
    }
    return a === b || a === c || b === c 
}
//задача 10
export const areSameColorFields = (x1, x2, y1, y2) => {
    const color1 = (x1 +x2) % 2;
    const color2 = (y1 + y2) % 2;
    return color1 === color2;
}
