const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("3초 후 중단되어 4초 타이머는 실행되지 않습니다.");
}, 4000);

setTimeout(() => {
  console.log("3초 후 타이머 실행 중지");
  clearTimeout(timeout2);
  clearInterval(interval);
}, 3100);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("즉시 삭제되어 실행되지 않습니다.");
});

clearImmediate(immediate2);
