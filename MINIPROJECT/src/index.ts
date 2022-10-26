// read the README for learn about typescript and the DOM types.
interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = loadTodos(); // array of Todo objects

const btn = <HTMLButtonElement>document.querySelector("#btn"); // Type: HTMLButtonElement
const btnClear = <HTMLButtonElement>document.querySelector("#btn-clear"); // Type: HTMLButtonElement
const input = document.querySelector("#todoinput") as HTMLInputElement; // Type: HTMLInputElement
const form = document.querySelector("form")!; // Type: HTMLFormElement
const list = document.querySelector("#todolist") as HTMLUListElement; // Type: HTMLUListElement

// <HTML...> this assertion does not work with jsx element, in this case we need to use the "as" keyword to cast the type.

// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// }); // no error

// MINI PROJECT TODO LIST

function loadTodos(): Todo[] {
  const todosJson = localStorage.getItem("todos");

  if (todosJson === null) return [];

  const todosList = JSON.parse(todosJson) as Todo[];
  return todosList;
}

function renderTodos(todosList: Todo[]): void {
  todosList.forEach((todo) => createTodo(todo));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);

  saveTodos();
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  todo.completed && (checkbox.checked = true);

  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    console.log(checkbox.checked);
    saveTodos();
  }); // no error

  newLi.append(todo.text);
  newLi.append(checkbox);
  list.appendChild(newLi);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function clearTodos() {
  localStorage.clear();
  list.innerHTML = "";
}

form.addEventListener("submit", handleSubmit); // no error
btnClear.addEventListener("click", clearTodos); // no error

renderTodos(todos);
