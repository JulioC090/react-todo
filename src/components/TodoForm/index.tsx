import Todo from "../../models/Todo";
import EnterActionInput from "../EnterActionInput";
import useTodo from "../../hooks/useTodo";
import styles from "./todo.module.css";
import TodoList from "../TodoList";

interface TodoFormProps {
  intialTodoItens?: Array<Todo>
}


function TodoForm({intialTodoItens}: TodoFormProps){
  const {todos, addTodoItem, deleteTodoItem, editTodoItem, toggleDone} = useTodo(intialTodoItens);

  function handlePressEnter(event: React.KeyboardEvent<HTMLInputElement>){
    addTodoItem(event.currentTarget.value);
    event.currentTarget.value = "";
  }

  return (
    <div className={styles["todo"]}>
      <div className={styles["todo__input-container"]}>
        <EnterActionInput
          className={styles["todo__input"]}
          placeholder="Crie um novo ToDo"
          onPressEnter={handlePressEnter}
        />
      </div>
      <TodoList 
        className={styles["todo__list"]}
        todos={todos}
        deleteTodoItem={deleteTodoItem}
        editTodoItem={editTodoItem}
        toggleDone={toggleDone}
      />
    </div>
  );
}


export default TodoForm;