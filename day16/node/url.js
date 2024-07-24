const url = require("url");

const { URL } = url;
const myURL = new URL(
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=nodejs"
);

console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
