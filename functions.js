//simple function
function calcRectArea(width, height) {
    return width * height;
  }

console.log(calcRectArea(5, 6));// Expected output: 30

//Note: a function must be called to be executed
/*******************************************************************************************/
//returning only specific parameters of an object

function calcRectAreaObject(width, height) {
    resultObject = { 
        total: width * height,
        message: 'congratulations for the result',
        message2: 'this is a test'
    }

    return resultObject;
  }

const {total: totalFromObject, message2: message2FromObject} = calcRectAreaObject(2, 2)
console.log(`total: ${totalFromObject}, message2: ${message2FromObject}`)

/*******************************************************************************************/
//Function using default values
function showAdress({rua = 'unknown street', city=  'unknown city', state }) {
    console.log(`rua: ${rua}, city: ${city}, state: ${state}`)
}

showAdress({city: 'Mococa', state: 'SP'})