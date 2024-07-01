const widgets = [
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
  { id: 3, color: "green" },
  { id: 4, color: "yellow" },
  { id: 5, color: "blue" },
];

//하나라도 blue일 때 true
console.log(
  "some are blue?",
  widgets.some((item) => {
    return item.color === "blue";
  })
);

const widgets1 = [
  { id: 1, color: "blue" },
  { id: 2, color: "blue" },
  { id: 3, color: "blue" },
  { id: 4, color: "blue" },
  { id: 5, color: "blue" },
];
//모두 blue일 때 true
console.log(
  "everyone is blue?",
  widgets1.every((item) => {
    return item.color === "blue";
  })
);
