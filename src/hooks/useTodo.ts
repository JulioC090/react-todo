import { useState } from "react";
import Todo  from "../entities/Todo";
import TodoGateway from "../gateways/TodoGateway";

function useTodo(todogateway: TodoGateway){
  const [todos, setTodos] = useState<Array<Todo>>(() => todogateway.getAllTodos());

  function toggleDone(todo: Todo){
    const newTodo = Todo.clone(todo);
    newTodo.toggleDone();
    if(!newTodo.isValid()) return;
    if(!todogateway.editTodo(newTodo)) return;

    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if(todo.id !== newTodo.id){
          return todo;
        }
        
        return newTodo;
      })
    );
  }

  function addTodoItem(text: string){
    const newTodo = Todo.create(text);
    if(!newTodo.isValid()) return;
    if(!todogateway.addTodo(newTodo)) return;

    setTodos(prevTodos =>
      [
        ...prevTodos,
        newTodo
      ]
    );
  }

  function deleteTodoItem(deletedTodo: Todo){
    if(!todogateway.removeTodo(deletedTodo)) return;
    setTodos(prevTodos => 
      prevTodos.filter(todo =>
        todo.id !== deletedTodo.id
      )
    );
  }

  function editTodoItem(todo: Todo, text: string){
    const editedTodo = Todo.clone(todo);
    editedTodo.description = text;
    if(!editedTodo.isValid()) return;
    if(!todogateway.editTodo(editedTodo)) return;

    setTodos(prevTodos => 
      prevTodos.map(todo => {
        if(todo.id !== editedTodo.id){
          return todo;
        }

        return editedTodo;
      })
    );
  }

  return {todos, toggleDone, addTodoItem, deleteTodoItem, editTodoItem}
}

export default useTodo;