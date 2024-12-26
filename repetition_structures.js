const countries = ['Canada', 'Brazil', 'Chile']
let iteration = 0

//for each
countries.forEach( (countries, index) => {
    console.log(`country number ${index}: ${countries}`)
})

/*******************************************************************************************/
//commun for
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(`concat of the numbers in the loop: ${str}`);// Expected output: "012345678"
/*******************************************************************************************/

// While
let n = 0;

while (n < 3) {
  n++;
}

console.log('Result number after while loop: ' + n); // Expected output: 3

//node repetition_structures.js