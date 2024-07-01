function myFunction() {
  console.log(this);
}

myFunction();

// let test = new myFunction();
// <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Function: structuredClone],
//     atob: [Getter/Setter],
//     btoa: [Getter/Setter],
//     performance: [Getter/Setter],
//     fetch: [Function: value],
//     crypto: [Getter]
//   }
//   myFunction {}
