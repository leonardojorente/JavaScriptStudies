//arrays
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2, 6, 7, 8, 9];
console.log(arr1); --> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//objects:
const obj1 = { foo: "bar", x: 42 }
const obj2 = { bar: "baz", y: 13 }
const extraValue = 2

const mergedObj = { ...obj1, ...obj2 , value: extraValue};
console.log(`the merged object: ${JSON.stringify(mergedObj)}`)

//Note: the '...' indicates the content inside of an array or inside an object, we can add the data together to create a new object.