const mappedEmp = new Map();
mappedEmp.set("linda", { fullName: "Linda Park", id: 1 });
mappedEmp.set("jim", { fullName: "Jim Rayner", id: 2 });
mappedEmp.set("pam", { fullName: "Pam Hanni", id: 3 });
mappedEmp.set("kevin", { fullName: "Kevin Kang", id: 4 });

console.log(mappedEmp);
console.log("get", mappedEmp.get("jim"));
console.log("size", mappedEmp.size);

for (let [key, val] of mappedEmp) {
  console.log("iterate", key, val);
}
