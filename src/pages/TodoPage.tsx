import CenteringWrapper from "../components/CenteringWrapper";
import TodoForm from "../components/TodoForm";
import Todo from "../models/Todo";

const todos = [
  new Todo("Todo1"),
  new Todo("Todo2"),
  new Todo("Todo3")
];


function TodoPage(){
  return (
    <CenteringWrapper>
      <TodoForm intialTodoItens={todos}/>
    </CenteringWrapper>
  );
}


export default TodoPage;