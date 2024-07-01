function getEmployeeWorkInfo(id) {
  return [id, "123 st", "US"];
}

let [id1, officeAddress] = getEmployeeWorkInfo(404);
console.log("employee", id1, officeAddress);

let [id2, , count] = getEmployeeWorkInfo(102);
console.log("employee", id2, count);
