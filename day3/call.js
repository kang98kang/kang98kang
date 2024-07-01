const callerObj = {
  name: "john",
  //   checkMyThis.call(callerObj, 25);로 인해 age: 25가 요소로 늘어남
};

function checkMyThis(age) {
  console.log(`what is this ${this}`);
  console.log(`Do I have a name? ${this.name}`);
  this.age = age;
  console.log(`How old am I? ${this.age}`);
}

checkMyThis();
checkMyThis.call(callerObj, 25);
