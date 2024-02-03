import { useState } from "react";
import Todo  from "../entities/Todo";

function useTodo(intialTodoItens?: Array<Todo>){
  const [todos, setTodos] = useState<Array<Todo>>(intialTodoItens || []);

  function toggleDone(todo: Todo){
    const newTodo = Todo.clone(todo);
    newTodo.toggleDone();
    if(!newTodo.isValid()) return;

    setTodos(
      todos.map(todo => {
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

    setTodos(
      [
        ...todos, 
        newTodo
      ]
    );
  }

  function deleteTodoItem(deletedTodo: Todo){
    setTodos(
      todos.filter((todo)=>
        todo.id !== deletedTodo.id
      )
    );
  }

  function editTodoItem(todo: Todo, text: string){
    const editedTodo = Todo.clone(todo);
    editedTodo.description = text;
    if(!editedTodo.isValid()) return;

    setTodos(
      todos.map(todo => {
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