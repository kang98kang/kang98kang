const { odd, even } = require("./var");
const checkNumber = require("./func");
const thisTest = require("./this");

function checkStringOddEven(str) {
  if (str.length % 2) {
    return odd;
  }

  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddEven("hello"));
console.log(require.cache);
console.log(require.main === module);
console.log(this);
thisTest();
