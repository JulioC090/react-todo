import { Todo } from "../models/Todo";
import EditableText from "./EditableText";

interface TodoListItemProps{
  todo: Todo
  toggleDone(): void
  deleteTodoItem(): void
  editTodoItem(text: string): void
}

function TodoListItem({todo, toggleDone, deleteTodoItem, editTodoItem}: TodoListItemProps){
  return (
    <div>
      <input type="checkbox" onClick={toggleDone} />
      <EditableText initialText={todo.description} onFinishEdit={editTodoItem}/>
      <span>{todo.done ? " V " : " F "}</span>
      <button onClick={deleteTodoItem}>Deletar</button>
    </div>
  );
}

export default TodoListItem;