type Todo = { id: number; title: string; done: boolean };
let todoItems: Todo[];

//api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

//CRUD methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

//business Logic
function logFirstTodo(): Todo {
  //할 일 목록에서 첫 번째 출력
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item) => item.done); //return 값이 true인 done만 남는다
}

function log(): void {
  console.log(todoItems);
}

function addTwoTodoItems(): void {
  const item1 = {
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
let completedTodoList = showCompleted();
console.log(completedTodoList);
deleteTodo(3);
log();
