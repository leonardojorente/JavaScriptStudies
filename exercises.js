//create a caculator

const arrowCalculator = (a, b, signal) =>{
    switch (signal) {
        case '+':
          return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':  
            return a - b
        default:
          console.log(`This signal doesnt exist: ${signal}.`)
      }
}

console.log(`The result for calculator execrise is: ${arrowCalculator(6, 3, '*')}`)

//************************************************************************************//
// is the word a palindrome?
const isPalindrome = (wordToCheckPalindrome) => {
    var len = wordToCheckPalindrome.length;
    for (var i = 0; i < len/2; i++) { // check until half of the string
        if (wordToCheckPalindrome[i] !== wordToCheckPalindrome[len - 1 - i]) { // compare the first and last element i nthe first iteration
            return false; // 
        }
    }
    return true // if all the letters are equal, then return true
}

console.log(`The result for is a palindrome is: ${isPalindrome('leonardo')}`)
console.log(`The result for is a palindrome is: ${isPalindrome('salas')}`)

//************************************************************************************//
// reverse string
const reverseString = (stringToReverse) => {
    const len = stringToReverse.length
    let aux = ''
    for (var i = 0; i < len; i++) { 
        aux = aux + stringToReverse[len-1-i]
    }
    return aux
}

console.log(`The result for reverse string is: ${reverseString('leo')}`)
console.log(`The result for reverse string is: ${reverseString('aeiou')}`)

//************************************************************************************//
// order string
function orderString(str) {
    // Convert string to array of char
    let arr = str.split('');
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          i = 0
        }
      }
    
    // Convert array to string
    return arr.join('');
  }

console.log(`The result for order string is: ${orderString('bac')}`)
console.log(`The result for order string is: ${orderString('cabd')}`)

//************************************************************************************//
// order aray of strings
let fruits = ["banana", "apple", "orange", "mango"]
fruits.sort()
console.log(`ordered fruits: ${fruits}`)