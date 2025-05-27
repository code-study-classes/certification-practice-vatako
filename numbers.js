
//задача 1
const calculateDistance = (x1, x2) => x1 >= x2 ? x1 - x2 : x2 - x1;
//задача2
const calculateSegmentProduct = (a, b, c) => (c - a) * (b - c);
//задача 3
const calculateKilobytes = (bytes) => Math.round(bytes / 1024);
//задача 4
const calculateSegments = (a, b) => Math.floor (a / b);
//задача 5
const calculateDigitSum = (twoDigitNumber) => Math.floor(twoDigitNumber / 10) + twoDigitNumber % 10;
//задача 6 
const swapHundredsAndTens = (thDNum) => {
    const toString = thDNum.toString();
    return parseInt(`${toString[1]}``${toString[0]}``${toString[2]}`);
}
//задача 7
const getHundredsDigit = (num) => num <= 999 ? 0 : num.toString().at(-3);
//задача 8
function extractFileName(fullFileName) {
    const fileNameWithExtension = fullFileName.split('\\').pop().split('/').pop();
    const fileName = fileNameWithExtension.split('.')[0];
    return fileName;
}
//задача 9 
function encryptSentence(sentence) {
    let evenChars = '';
    let oddChars = '';

    for (let i = 0; i < sentence.length; i++) {
        if (i % 2 === 0) {
            evenChars += sentence[i];
        } else {
            oddChars += sentence[i];
        }
    }

    return evenChars + oddChars.split('').reverse().join('');
}
//задача 10
function checkBrackets(expression) {
    let stack = [];
  
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            stack.push(i);
        } else if (expression[i] === ')') {
            if (stack.length === 0) {
                return i; 
            }
            stack.pop(); 
        }
    }

    if (stack.length > 0) {
        return -1; 
    }

    return 0; 
}




