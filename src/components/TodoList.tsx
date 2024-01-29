import { Todo } from "../Todo";
import TodoListItem from "./TodoListItem";
import EnterActionInput from "./EnterActionInput";
import useTodo from "../hooks/useTodo";

interface TodoListProps {
  intialTodoItens?: Array<Todo>
}


function TodoList({intialTodoItens}: TodoListProps){
  const {todos, addTodoItem, deleteTodoItem, editTodoItem, toggleDone} = useTodo(intialTodoItens);

  return (
    <div>
      <EnterActionInput onPressEnter={(event) => addTodoItem(event.currentTarget.value)}/>
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