//배열에 공통된 작업을 할 때 매우 유용하다.

const employees = [
  { name: "john", id: 1 },
  { name: "linda", id: 2 },
  { name: "peter", id: 3 },
  { name: "john", id: 4 },
];

const elements = employees.map((item, index) => {
  console.log(index);
  return `<div>${item.id} - ${item.name}</div>`;
});

console.log(elements);
