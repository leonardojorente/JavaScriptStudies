const countries = ['Canada', 'Brazil', 'Chile']

//different logs with concat of string and values
console.log("-------string functions-------") 
console.log(`all array values: ${countries}`) // print all array values
console.log('the first element of the array with different concat: ' + countries[0]) // prints the first element of the array
console.log(`the number of elements of the array: ${countries.length}`) // print the number of elements of the array
console.log(`the last element of the array: ${countries[countries.length-1]}`) // print the last element of the array

/******************************************************************************************************************/

//operations
console.log("-------operations-------") 
countries.push('USA')
console.log(`Add element to the last array position: ${countries}`) 
countries.pop()
console.log(`remove element from the last array position: ${countries}`) 
countries.unshift('USA')
console.log(`Add element to the first array position: ${countries}`) 
countries.shift()
console.log(`remove element from the first array position: ${countries}`) 

/******************************************************************************************************************/

//filter arrays - creates a new array with the filtered elements
console.log("-------filter arrays-------") 
const people = [{name:'igor', age: 10}, {name:'lucas', age: 15}, {name:'Denis', age: 30}, {name:'Jhon', age: 10} ];

const result = people.filter((person) => person.age > 10);

console.log(`Return the result for the FILTER function: ${JSON.stringify(result)}`);

/******************************************************************************************************************/
//find - returns the first element that reach the condition
console.log("-------find-------") 

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(`Return the result for the FIND function: ${found}`);

/******************************************************************************************************************/
//map for object array into arrays
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
// Mapping over the array to create a new array with just the names
const names = users.map(user => user.name);
  
console.log(names);
// Output: ['Alice', 'Bob', 'Charlie']
  