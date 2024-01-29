import { useState } from "react";
import EditableText from "./components/EditableText";

type Todo = {
  id: number,
  description: string,
  done: boolean
}

const todos: Array<Todo> = [
  {id: 1, description: "ToDo1", done: false},
  {id: 2, description: "ToDo2", done: false},
  {id: 3, description: "ToDo3", done: false}
];

let lastId = 3;

function App() {
  const [todosList, setTodosList] = useState<Array<Todo>>(todos);

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
    <>
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
    </>
  );
}

export default App;
