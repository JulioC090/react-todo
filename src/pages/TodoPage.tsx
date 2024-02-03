import CenteringWrapper from "../components/CenteringWrapper";
import TodoForm from "../components/TodoForm";
import TodoMemoryGateway from "../gateways/TodoMemoryGateway";

const todoMemoryGateway = new TodoMemoryGateway();

function TodoPage(){
  return (
    <CenteringWrapper>
      <TodoForm todoGateway={todoMemoryGateway}/>
    </CenteringWrapper>
  );
}


export default TodoPage;