//구조분해
function getEmployee(id) {
  return {
    name: "john",
    age: 35,
    address: "123 st",
    count: "US",
  };
}

const { name: fullName, age } = getEmployee(22);
// const { name: fullName, age} = {
//     name: 'john',
//     age: 35,
//     address:'123 st',
//     count: "US"
// };

console.log("employee", fullName, age);
