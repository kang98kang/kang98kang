const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  Outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("전체시간");

console.table([
  { name: "제로", birth: 1994 },
  { name: "hero", birth: 1988 },
]);

console.dir(obj, { colors: true, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간측정");

function traceError() {
  console.trace("에러 위치 추적");
}

function e() {
  traceError();
}
e();

console.timeEnd("전체시간");
