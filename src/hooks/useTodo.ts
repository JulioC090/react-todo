import { useState } from "react";
import Todo  from "../entities/Todo";

function useTodo(intialTodoItens?: Array<Todo>){
  const [todos, setTodos] = useState<Array<Todo>>(intialTodoItens || []);

  function toggleDone(todoId: string){
    setTodos(
      todos.map(todo => {
        if(todo.id !== todoId){
          return todo;
        }
        todo.toggleDone();
        return Todo.clone(todo);
      })
    );
  }

  function addTodoItem(text: string){
    if(text.length < 1) return;
    const newTodo = Todo.create(text);
    setTodos(
      [
        ...todos, 
        newTodo
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
    if(text.length < 1) return;
    setTodos(
      todos.map(todo => {
        if(todo.id !== todoId){
          return todo;
        }
        todo.setDescription(text);
        return Todo.clone(todo);
      })
    );
  }

  return {todos, toggleDone, addTodoItem, deleteTodoItem, editTodoItem}
}

export default useTodo;