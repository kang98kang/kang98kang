//import 는 최상위 스코프에서만 사용 가능.

const a = false;

if (a) {
  require("./func");
}

console.log("성공");
