import useTodo from "../../hooks/useTodo";
import styles from "./todo.module.css";
import TodoList from "../TodoList";
import TodoInput from "../TodoInput";
import TodoGateway from "../../gateways/TodoGateway";

interface TodoFormProps {
  todoGateway: TodoGateway
}


function TodoForm({todoGateway}: TodoFormProps){
  const {todos, addTodoItem, deleteTodoItem, editTodoItem, toggleDone} = useTodo(todoGateway);

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