import { odd, even } from "./var.mjs";
import checkNumber from "./func.mjs";

function checkStringOddEven(str) {
  if (str.length % 2) {
    return odd;
  }

  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddEven("hello"));
