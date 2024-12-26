// normal function
function sum(a, b){
    return a + b
}

console.log(`normal function -> sum of 1 + 4: ${sum(1, 4)}`)

//different arrow function
const sum1 = (a , b) => a + b
console.log(`arrow function reduced form-> sum of 1 + 4: ${sum1(1, 4)}`)

const sum2 = (a , b) => {
    return a + b
}
console.log(`arrow function -> sum of 4 + 4: ${sum2(1, 4)}`)

const sum3 = a => a + a
console.log(`arrow function -> sum of 4 + 4: ${sum3(4)}`)

const sum4 = () => 1 + 4
console.log(`arrow function -> sum of 1 + 4: ${sum4()}`)

//difference arrow function and function
//1- Arrow functions are Shorter and more concise syntax.
//2- Arrow Function: THIS takes this from the surrounding context (where the arrow function was created).
//Regular Function: THIS depends on how the function is called (the context in which it is invoked).
const person = {
    name: 'Alice',
    greet: function() {
        console.log(this.name);  // 'this' refers to the object calling the method (person)
    }
};

person.greet();  // Output: Alice

const personArrowFunction = {
    name: 'Alice',
    greet: () => {
        console.log(this.name);  // 'this' does NOT refer to the object, but to the surrounding scope (global or parent context)
    }
};

personArrowFunction.greet();  // Output: undefined (or throws error in strict mode, as 'this' is not bound to 'person')