import Todo from "../entities/Todo";

export default interface TodoGateway{
  getAllTodos(): Todo[]
  addTodo(todo: Todo): boolean
  editTodo(todo: Todo): boolean
  removeTodo(todo: Todo): boolean
}