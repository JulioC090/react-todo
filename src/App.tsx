import { useState } from "react";

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

  return (
    <>
      {todosList.map((todo) => {
        return (
        <div key={todo.id}>
          <input type="checkbox" onClick={() => toggleDone(todo.id)} />
          <span>{todo.description}</span>
          <span>{todo.done ? " V" : " F"}</span>
        </div>); 
      })}
    </>
  );
}

export default App;
