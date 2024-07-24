setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => console.log("promise"));

//Tick -> Promise -> (다른 이벤트 루프에서 대기하는 콜백 함수보다도 먼저 실행)
// -> timeout -> immediate
