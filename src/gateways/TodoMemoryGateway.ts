import Todo from "../entities/Todo";
import TodoGateway from "./TodoGateway";

export default class TodoMemoryGateway implements TodoGateway{
  private todos: Array<Todo>;

  constructor(){
    this.todos = [
      Todo.create("Todo1"),
      Todo.create("Todo2"),
      Todo.create("Todo3")
    ];
  }

  getAllTodos(): Array<Todo> {
    return new Array(...this.todos);
  }

  addTodo(todo: Todo): boolean {
    this.todos.push(todo);
    return true;
  }

  editTodo(editedTodo: Todo): boolean {
    const index = this.todos.findIndex((todo) => todo.id === editedTodo.id);
    if (index === -1) return false;

    this.todos[index] = editedTodo;
    return true;
  }

  removeTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if(index === -1) return false;
    
    this.todos.splice(index, 1);
    return true;
  }
}