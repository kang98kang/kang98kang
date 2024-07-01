async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I completed successfully");
    }, 1000);
  });
}

//await로 delayedResult()값이 나올때까지 기다렸다가 console.log(result)실행
(async function execAsyncFunc() {
  const result = await delayedResult();
  console.log(result);
})();
