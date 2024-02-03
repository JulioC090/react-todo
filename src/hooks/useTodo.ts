import { useState } from "react";
import Todo  from "../entities/Todo";

function useTodo(intialTodoItens?: Array<Todo>){
  const [todos, setTodos] = useState<Array<Todo>>(intialTodoItens || []);

  function toggleDone(todo: Todo){
    todo.toggleDone();
    const newTodo = Todo.clone(todo);

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
    if(text.length < 1) return;
    const newTodo = Todo.create(text);

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
    if(text.length < 1) return;
    todo.setDescription(text);
    const editedTodo = Todo.clone(todo);

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