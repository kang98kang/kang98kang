const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  //   const oldDBSize = DB.length + 1;
  DB.push(user);
  console.log(oldDBSize, DB.length);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("save DB Error!"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => console.log("완료"));

  console.log(result);
  return result;
}

const myUser = { email: "andy@email.com", password: 1234, name: "andy" };
// const result = registerByPromise(myUser);
// result.then(console.log);

allResult = Promise.all([
  saveDB(myUser),
  sendEmail(myUser),
  getResult(myUser),
  registerByPromise(myUser),
]);
allResult.then(console.log);
