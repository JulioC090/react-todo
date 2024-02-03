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
    let edited = false;
    this.todos.forEach((todo, index) => {
      if(todo.id === editedTodo.id){
        this.todos[index] = editedTodo;
        edited = true;
      }
    });
    return edited;
  }

  removeTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if(index < 0) return false;
    this.todos.splice(index, 1);
    return true;
  }
}