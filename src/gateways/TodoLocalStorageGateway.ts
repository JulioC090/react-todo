import Todo from "../entities/Todo";
import TodoGateway from "./TodoGateway";

export default class TodoLocalStorageGateway implements TodoGateway {
  private readonly localStorageKey: string = "todos";
  private todos: Array<Todo>;

  constructor() {
    const storedTodos = localStorage.getItem(this.localStorageKey);
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.todos));
  }

  getAllTodos(): Array<Todo> {
    return new Array(...this.todos);
  }

  addTodo(todo: Todo): boolean {
    this.todos.push(todo);
    this.saveToLocalStorage();
    return true;
  }

  editTodo(editedTodo: Todo): boolean {
    const index = this.todos.findIndex((todo) => todo.id === editedTodo.id);
    if (index === -1) return false;

    this.todos[index] = editedTodo;
    this.saveToLocalStorage();
    return true;
  }

  removeTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if(index === -1) return false;

    this.todos.splice(index, 1);
    this.saveToLocalStorage();
    return true;
  }
}
