var employees = [
    { name: "john", id: 1 },
    { name: "linda", id: 2 },
    { name: "peter", id: 3 },
    { name: "john", id: 4 },
];
var elements = employees.map(function (item, index) {
    console.log(index);
    return "<div>".concat(item.id, " - ").concat(item.name, "</div>");
});
console.log(elements);
