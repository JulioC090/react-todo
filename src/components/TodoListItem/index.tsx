import { Trash } from "@phosphor-icons/react";
import Todo from "../../entities/Todo";
import EditableText from "../EditableText";
import styles from "./todo-item.module.css";
import classNames from "classnames";

interface TodoListItemProps{
  todo: Todo
  toggleDone(): void
  deleteTodoItem(): void
  editTodoItem(text: string): void
}

function TodoListItem({todo, toggleDone, deleteTodoItem, editTodoItem}: TodoListItemProps){
  return (
    <div className={styles["todo__item"]}>
      <div className={styles["todo__content"]}>
        <input 
          type="checkbox"
          className={styles["todo__checkbox"]}
          onClick={toggleDone} 
        />
        <EditableText
          className={
            classNames(
              styles["todo__description"], 
              {[styles["todo__description--done"]]: todo.done}
            )}
          initialText={todo.description} 
          onFinishEdit={editTodoItem}
        />
      </div>
      <button 
        className={styles["todo__delete-button"]}
        onClick={deleteTodoItem}
      >
        <Trash />
      </button>
    </div>
  );
}

export default TodoListItem;