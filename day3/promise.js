const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I completed successfully");
    // reject("I failed");
  }, 1000);
});

myPromise
  .then((done) => {
    console.log("Done: ", done);
  })
  .catch((err) => {
    console.log("Err: ", err);
  });
