import EnterActionInput from "../EnterActionInput";

import styles from "./todo-input.module.css";

interface TodoInputProps{
  addTodoItem(text: string): void
}

function TodoInput({addTodoItem}: TodoInputProps){
  function handlePressEnter(event: React.KeyboardEvent<HTMLInputElement>){
    addTodoItem(event.currentTarget.value);
    event.currentTarget.value = "";
  }

  return (
    <div className={styles["todo__input-container"]}>
      <EnterActionInput
        className={styles["todo__input"]}
        placeholder="Crie um novo ToDo"
        onPressEnter={handlePressEnter}
      />
    </div>
  );
}

export default TodoInput;