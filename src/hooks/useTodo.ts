import { useState } from "react";
import Todo  from "../models/Todo";

function useTodo(intialTodoItens?: Array<Todo>){
  const [todos, setTodos] = useState<Array<Todo>>(intialTodoItens || []);

  function toggleDone(todoId: string){
    setTodos(
      todos.map(todo => {
        if(todo.id !== todoId){
          return todo;
        }
        return {...todo, done: !todo.done};
      })
    );
  }

  function addTodoItem(text: string){
    setTodos(
      [
        ...todos, 
        new Todo(text)
      ]
    );
  }

  function deleteTodoItem(todoId: string){
    setTodos(
      todos.filter((todo)=>
        todo.id !== todoId
      )
    );
  }

  function editTodoItem(todoId: string, text: string){
    setTodos(
      todos.map(todo => {
        if(todo.id !== todoId){
          return todo;
        }
        return {...todo, description: text};
      })
    );
  }

  return {todos, toggleDone, addTodoItem, deleteTodoItem, editTodoItem}
}

export default useTodo;