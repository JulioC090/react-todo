import Todo from "../../models/Todo";
import TodoListItem from "../TodoListItem";

import styles from "./todo-list.module.css";

interface TodoListProps{
  todos: Array<Todo>
  toggleDone(todoId: string): void
  editTodoItem(todoId: string, text: string): void
  deleteTodoItem(todoId: string): void
}

function TodoList(
  {
    todos,
    toggleDone,
    editTodoItem,
    deleteTodoItem,
  }: TodoListProps
){
  return (
    <div className={styles["todo__list"]}>
      {todos.map((todo) => {
        return (
        <TodoListItem 
          key={todo.id}
          todo={todo}
          toggleDone={() => toggleDone(todo.id)}
          editTodoItem={(text) => editTodoItem(todo.id, text)}
          deleteTodoItem={() => deleteTodoItem(todo.id)}
        />
      )})}
    </div>
  );
}

export default TodoList;