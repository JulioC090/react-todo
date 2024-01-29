import TodoList from "./components/TodoList";

const todos = [
  {id: 1, description: "ToDo1", done: false},
  {id: 2, description: "ToDo2", done: false},
  {id: 3, description: "ToDo3", done: false}
];

function App() {
  return (
    <TodoList intialTodoItens={todos}/>
  );
}

export default App;
