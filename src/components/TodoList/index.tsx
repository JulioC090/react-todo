import Todo from "../../entities/Todo";
import TodoListItem from "../TodoListItem";

import styles from "./todo-list.module.css";

interface TodoListProps{
  todos: Array<Todo>
  toggleDone(todo: Todo): void
  editTodoItem(todo: Todo, text: string): void
  deleteTodoItem(todo: Todo): void
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
          toggleDone={() => toggleDone(todo)}
          editTodoItem={(text) => editTodoItem(todo, text)}
          deleteTodoItem={() => deleteTodoItem(todo)}
        />
      )})}
    </div>
  );
}

export default TodoList;