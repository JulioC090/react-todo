import Todo from "../../models/Todo";
import TodoListItem from "../TodoListItem";
import EnterActionInput from "../EnterActionInput";
import useTodo from "../../hooks/useTodo";
import styles from "./todo.module.css";

interface TodoListProps {
  intialTodoItens?: Array<Todo>
}


function TodoList({intialTodoItens}: TodoListProps){
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
    </div>
  );
}


export default TodoList;