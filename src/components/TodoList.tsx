import { useState } from "react";
import { Todo } from "../Todo";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  intialTodoItens?: Array<Todo>
}

let lastId = 3;

function TodoList({intialTodoItens}: TodoListProps){
  const [todosList, setTodosList] = useState<Array<Todo>>(intialTodoItens || []);

  function toggleDone(todoId: number){
    setTodosList(
      todosList.map(todo => {
        if(todo.id !== todoId){
          return todo;
        }
        return {...todo, done: !todo.done};
      })
    );
  }

  function addTodoItem(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === "Enter"){
      setTodosList(
        [
          ...todosList, 
          {
            id: lastId+1, 
            description: event.currentTarget.value, 
            done: false
          }
        ]
      );
      lastId++;
    }
  }

  function deleteTodoItem(todoId: number){
    setTodosList(
      todosList.filter((todo)=>
        todo.id !== todoId
      )
    );
  }

  function editTodoItem(todoId: number, text: string){
    setTodosList(
      todosList.map(todo => {
        if(todo.id !== todoId){
          return todo;
        }
        return {...todo, description: text};
      })
    );
  }

  return (
    <div>
      <input type="text" onKeyDown={(event) => addTodoItem(event)}/>
      {todosList.map((todo) => {
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