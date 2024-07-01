const items = [
    { name: "john", age: 20 },
    { name: "linda", age: 15 },
    { name: "kevin", age: 10 },
];
const john = items.find((item) => {
    return item.name === "john";
});
console.log(john);
