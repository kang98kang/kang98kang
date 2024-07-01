const filterItems = [
    { name: "john", age: 22 },
    { name: "linda", age: 18 },
    { name: "peter", age: 14 },
    { name: "john", age: 26 },
];
const results = filterItems.filter((item, index) => {
    console.log(index);
    return item.name === "john";
});
console.log(results);
