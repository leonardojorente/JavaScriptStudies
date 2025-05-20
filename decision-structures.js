//ifs, else, switch, conditional (ternary) operator

//if example
const hour = 10
if (hour < 12) {
    console.log("morning")
}
else if(18 >= hour >= 12){
console.log("afternoon")
}
else{
    console.log("afternoon")
}

//Note: comparative operators: '=='(equals); '!='(different); '>,<,>=,<=';
//Note2: difference '==' and '==='
//'==': compare for equality after doing any necessary type conversions
//'===': operator will not do the conversion, so if two values are not the same type === will simply return false

/*********************************************************************/

//Switch example
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.')
    break
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.')
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break
  default:
    console.log(`Sorry, we are out of ${expr}.`)
}

/*********************************************************************/

//conditional (ternary) operator
const age = 26;
//an if condition before ?; returns the first element for true(beer) and returns the second element for false(juice)
const agetToDrink = age >= 21 ? "Beer" : "Juice";
console.log(`ternary operator example result: ${agetToDrink}`); // "Beer"

/*********************************************************************/
let value1 = 0;
let value2 = "Hello";

console.log(value1 ?? value2);  // Output: 0  (since value1 is not null or undefined)
console.log(value1 || value2);  // Output: "Hello" (since value1 is false)
//In the first case with ??, value1 is 0, so the result is 0 because 0 is not null or undefined.
//In the second case with ||, value1 is 0, which is a false value, so the result is "Hello".

//node decision_structures.js
