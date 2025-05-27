//задача 2
const combineStrings = (n1, n2, s1, s2) => {
    const firstPart = s1.slice(0, n1); 
    const secondPart = s2.slice(s2.lenght - n2);
    return `${firstPart}${secondPart}`;
}
//задача 3
const containsSubstring = (s, s0) => s.includes(s0);
//задача 4
function replaceSubstring(S, S1, S2) {
    return S.replace(S1, S2);
}
//задача 5 
function countWordsWithSameLetters(sentence) {
    const words = sentence.split(' ');
    let count = 0;

    for (const word of words) {
        if (word.length > 0 && word.toLowerCase().charAt(0) === word.toLowerCase().charAt(word.length - 1)) {
            count++;
        }
    }
    
    return count;
}
//задача 6 
function countWordsWithA(sentence) {
    const words = sentence.split(' ');
    let count = 0;

    for (const word of words) {
        if (word.toLowerCase().includes('a')) {
            count++;
        }
    }
    



    
    return count;
}
//задача 7 
function normalizeSpaces(sentence) {
    return sentence.trim().replace(/\s+/g, ' ');
}
//задача 8 
function extractFileName(fullFileName) {
    const fileNameWithExtension = fullFileName.split('/').pop();
    const fileName = fileNameWithExtension.split('.').shift(); 
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
            oddChars = sentence[i] + oddChars; 
        }
    }

    return evenChars + oddChars; 
}
//задача 10 
function checkBrackets(expression) {
    let balance = 0;

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            balance++;
        } else if (expression[i] === ')') {
            balance--;

            if (balance < 0) {
                return i + 1; 
            }
        }
    }

    return balance === 0 ? 0 : -1; 
