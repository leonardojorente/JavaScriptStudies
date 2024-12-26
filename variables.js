
//var: the value can be changed
var myName = 'leonardo'
myName = 'leonardo new'

//let: the value can be changed
let myAge = 20
myAge = 36

//Difference between var and let:
//VAR can be accessed anywhere within the current function or global scope
//LET can only be accessed within the block it was declared
if(10>9){
    let letInsideIFBlock = "let is inside IF block"
    console.log(`let is inside IF block: ${letInsideIFBlock}`)
}
//console.log(`let is outside IF block: ${letInsideIFBlock}`) --> uncomment to see the error
if(10>9){
    var varInsideIFBlock = "var is inside IF block"
    console.log(`var is inside IF block: ${varInsideIFBlock}`)
}
console.log(`var is outside IF block: ${varInsideIFBlock}`)

//Note: let and var has hte same purpose for automation, normally 'let' is used

//const: the value CANT be changed
const city = 'Mococa'

//bool
let isAgeOver30 = true

//array
const countries = ['Canada', 'Brazil', 'Chile']

//object
let devices = {
    deviceName: 'iphone 16',
    price: 500,
    colors: {
        color1: 'blue',
        color2: 'black'
    }

}

console.log(`myName: ${myName}`)
console.log(`myAge: ${myAge}`)
console.log(`city: ${city}`)
console.log(`isAgeOver30: ${isAgeOver30}`)
console.log(`countries: ${countries}`)
console.log(`devices: ${JSON.stringify(devices)}`)

//Note2: command to execute javascritpt: node filePath. ex: node variables.js
//note3: types of value for variable: string/number/bool/array/object
//note4: javascript is not string typed, you can set anything in the variable, it makes flexible but dangerous
//typescript was created to set the variable type that the variable will use