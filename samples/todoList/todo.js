var todoItems;
//api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}
//CRUD methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
//business Logic
function logFirstTodo() {
    //할 일 목록에서 첫 번째 출력
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) { return item.done; }); //return 값이 true인 done만 남는다
}
function log() {
    console.log(todoItems);
}
function addTwoTodoItems() {
    var item1 = {
        id: 4,
        title: "아이템 4",
        done: false,
    };
    addTodo(item1);
    addTodo({
        id: 5,
        title: "아이템 5",
        done: true,
    });
}
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
completeTodo(1, todoItems[1]);
log();
var completedTodoList = showCompleted();
console.log(completedTodoList);
deleteTodo(3);
log();
