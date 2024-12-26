// Creating a new Promise
const getSomething = () => {
    setTimeout(() => {
        console.log('async example executing without promise')
    },1000)
}
//example without primise -> The result related to getSomething appears after the both console logs because of the async execution
console.log('example without PROMISE - BEFORE execute')
getSomething()
console.log('example without PROMISE - AFTER execute')

//resolving the async problem using promise and then. On cypress, the commands like click they are creating using promise
// waiting for a result, so, the arqutecture was created to be used that way and avoid async and wait because it cause problems
const getSomethingPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
            console.log('async example executing for PROMISE')
        },1000)
    })
}

console.log('example with PROMISE - BEFORE execute promise')
getSomethingPromise().then(() =>{
    console.log('example with PROMISE - AFTER execute promise')
})

//resolving the async problem using promise with async and wait. Its the modern way to deal with promise, its implemented on playwright
// and testcafe
//note: when create a promise, it needs an await on return, and in order to use it on the scope, you need to have the await inside of 
// the async function
const getSomethingPromiseAsyncAwait = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(13)
            console.log('async example executing for PROMISE ASYNC WAIT')
        },1000)
    })
}
const printValuesAsyncAwait = async () => {
    console.log('example with PROMISE ASYNC WAIT - BEFORE execute promise')
    await getSomethingPromiseAsyncAwait()
    console.log('example with PROMISE ASYNC WAIT- AFTER execute promise')
}

printValuesAsyncAwait()
