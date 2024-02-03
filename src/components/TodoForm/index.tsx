import Todo from "../../models/Todo";
import useTodo from "../../hooks/useTodo";
import styles from "./todo.module.css";
import TodoList from "../TodoList";
import TodoInput from "../TodoInput";

interface TodoFormProps {
  intialTodoItens?: Array<Todo>
}


function TodoForm({intialTodoItens}: TodoFormProps){
  const {todos, addTodoItem, deleteTodoItem, editTodoItem, toggleDone} = useTodo(intialTodoItens);

  return (
    <div className={styles["todo"]}>
      <TodoInput addTodoItem={addTodoItem}/>
      <TodoList 
        todos={todos}
        deleteTodoItem={deleteTodoItem}
        editTodoItem={editTodoItem}
        toggleDone={toggleDone}
      />
    </div>
  );
}


export default TodoForm;