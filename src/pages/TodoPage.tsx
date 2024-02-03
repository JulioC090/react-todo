import CenteringWrapper from "../components/CenteringWrapper";
import TodoForm from "../components/TodoForm";
import Todo from "../entities/Todo";

const todos = [
  Todo.create("Todo1"),
  Todo.create("Todo2"),
  Todo.create("Todo3")
];


function TodoPage(){
  return (
    <CenteringWrapper>
      <TodoForm intialTodoItens={todos}/>
    </CenteringWrapper>
  );
}


export default TodoPage;