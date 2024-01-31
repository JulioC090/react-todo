import CenteringWrapper from "../components/CenteringWrapper";
import TodoList from "../components/TodoList";
import Todo from "../models/Todo";

const todos = [
  new Todo("Todo1"),
  new Todo("Todo2"),
  new Todo("Todo3")
];


function TodoPage(){
  return (
    <CenteringWrapper>
      <TodoList intialTodoItens={todos}/>
    </CenteringWrapper>
  );
}


export default TodoPage;