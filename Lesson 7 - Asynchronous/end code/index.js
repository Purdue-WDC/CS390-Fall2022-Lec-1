// 1. CALLBACKS

// A built-in example: setTimeout(function, timeout)

// // a basic use-case
// console.log("ding!");
// const func = () => {
//     console.log("dong!");
// };
// setTimeout(func, 1000);

// // a layered use-case
// console.log(0);
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 1000);
//     }, 1000);
// }, 1000);

// // custom callback
// const funcToCallBack = () => {
//     console.log("callback function is called");
// }
// const func = (callback) => {
//     console.log("func is called");
//     callback();
// }
// func(funcToCallBack);


// 2. CREATING PROMISES

// // The constructor (this code is just an example and will not run)
// const promise = new Promise((resolve, reject) => {
//     const result = doSomething();
//     if (result == good) {
//         resolve(result)
//     } else { // result == bad
//         reject(result)
//     }
// });

// // Some other ways to create Promises
// // (not that you are likely to use these, but just so you know they exist)
// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject(2);
// console.log(promise1)
// console.log(promise2)

// // Applying Background tasks.
// const promise = new Promise((resolve, reject) => {
//     // mimic a background task taking 500ms (0.5s)
//     setTimeout(() => { 
//         if (false) {
//             resolve("I RESOLVED!")
//         } else {
//             reject("I REJECTED.")
//         }
//     }, 500)
// });
// // call it immediately
// console.log(promise)
// // wait a second (promise will resolve by then)
// setTimeout(() => {
//     console.log(promise)
// }, 1000)


// 3. OBTAINING PROMISE RESULTS. 

// // Using .then() *uncomment previous promise to run*
// // obtaining the resolve value
// const onResolve = (resolveValue) => {
//     console.log(resolveValue)
//     return resolveValue
// }
// promise.then(onResolve)
// // obtaining the resolve and the reject
// const onReject = (rejectValue) => {
//     console.log(rejectValue)
//     return rejectValue
// }
// promise.then(onResolve, onReject)

// // .then() returns a new Promise
// const newPromise = promise.then(onResolve, onReject);
// console.log("newPromise: ", newPromise)

// // this means we can continuously call .then
// promise.then(onResolve, onReject)
//        .then(onResolve, onReject)

// // Using .catch()
// promise.then(onResolve).catch(onReject)

// // Using .finally()
// promise.then(onResolve).catch(onReject).finally(() => {
//     // runs after the promise resolve or rejected
//     console.log("promise finished resolving or rejecting")
// })


// 4. RESOLVING MULTIPLE PROMISES AT ONCE

// // function to create promises that resolve in 0.5s
// const getPromise = (resolve) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (resolve === 1) {
//                 res(1)
//             } else {
//                 rej(0)
//             }
//         }, 500)
//     })
// }

// // Using Promise.all
// const groupedPromise = Promise.all([
//     getPromise(1),
//     getPromise(1),
//     getPromise(1)
// ])
// groupedPromise.then(results => console.log(results))
// // if we changed one to be getPromise(0), then fail-fast behavior would take over

// // Using Promise.allSettled
// const groupedPromise = Promise.allSettled([
//     getPromise(1),
//     getPromise(1),
//     getPromise(1)
// ])
// groupedPromise.then(results => console.log(results))
// // note that the output is not just plain results


// 5. Callback HELL.

// // What if we needed the result of a promise before running another?
// getPromise(1).then(a => {
//     console.log("we got a")
//     getPromise(a).then((b) => {
//         console.log("we got b")
//         getPromise(b).then((c) => {
//             console.log("we got c")
//         })
//     })
// })

// For each additional promise, our code becomes less and less manageable.
// What is the solution?
// ASYNC/AWAIT