import CenteringWrapper from "../components/CenteringWrapper";
import TodoForm from "../components/TodoForm";
import TodoLocalStorageGateway from "../gateways/TodoLocalStorageGateway";

const todoLocalStorageGateway = new TodoLocalStorageGateway();

function TodoPage(){
  return (
    <CenteringWrapper>
      <TodoForm todoGateway={todoLocalStorageGateway}/>
    </CenteringWrapper>
  );
}


export default TodoPage;