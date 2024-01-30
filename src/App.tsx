import TodoList from "./components/TodoList";
import Todo from "./models/Todo";

const todos = [
  new Todo("Todo1"),
  new Todo("Todo2"),
  new Todo("Todo3")
];

function App() {
  return (
    <TodoList intialTodoItens={todos}/>
  );
}

export default App;
