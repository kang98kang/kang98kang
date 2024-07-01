console.log("Let's begin.");

setTimeout(() => {
  //3초 뒤 console.log("I waited and I'm done now")
  console.log("I waited and I'm done now");
}, 3000);

console.log("Did I finish yet?");

//실행 순서
//console.log("Let's begin.");
//console.log("Did I finish yet?");
//3초 뒤
// setTimeout(() => {
//     console.log("I waited and I'm done now");
// }, 3000);
