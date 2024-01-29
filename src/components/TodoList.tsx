import { useState } from "react";
import EditableText from "./EditableText";

type Todo = {
  id: number,
  description: string,
  done: boolean
}

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

  function handleFinishEdit(todoId: number){
    return (text: string)=>{
      editTodoItem(todoId, text);
    }
  }

  return (
    <div>
      <input type="text" onKeyDown={(event) => addTodoItem(event)}/>
      {todosList.map((todo) => {
        return (
        <div key={todo.id}>
          <input type="checkbox" onClick={() => toggleDone(todo.id)} />
          <EditableText initialText={todo.description} onFinishEdit={handleFinishEdit(todo.id)}/>
          <span>{todo.done ? " V " : " F "}</span>
          <button onClick={() => deleteTodoItem(todo.id)}>Deletar</button>
        </div>); 
      })}
    </div>
  );
  
}


export default TodoList;