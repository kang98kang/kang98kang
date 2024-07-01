//set은 value 값만 모여있고 그 값들이 unique하지않다.
/* 중복값을 알아서 제거해줌.
    ex>)사용자가 어떤 행동을 했는지 logFile 
        에서 한 번이라도 접속한 유저를 찾을때 */

const userIds = [1, 2, 1, 3];
const uniqueIds = new Set(userIds);
console.log(uniqueIds);

uniqueIds.add(10);

console.log("add 10", uniqueIds);

console.log("has", uniqueIds.has(3));

console.log("size", uniqueIds.size);

for (let item of uniqueIds) {
  console.log("iterate", item);
}

for (let item of userIds) {
  console.log("array iterate", item);
}
