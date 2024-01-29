import { useState } from "react";
import { Todo } from "../models/Todo";


let lastId = 3;

function useTodo(intialTodoItens?: Array<Todo>){
  const [todos, setTodos] = useState<Array<Todo>>(intialTodoItens || []);

  function toggleDone(todoId: number){
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
        {
          id: lastId+1, 
          description: text, 
          done: false
        }
      ]
    );
    lastId++;
  }

  function deleteTodoItem(todoId: number){
    setTodos(
      todos.filter((todo)=>
        todo.id !== todoId
      )
    );
  }

  function editTodoItem(todoId: number, text: string){
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