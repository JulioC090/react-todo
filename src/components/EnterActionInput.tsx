interface EnterActionInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  onPressEnter(event: React.KeyboardEvent<HTMLInputElement>): void
}

function EnterActionInput ({onPressEnter, ...rest}: EnterActionInputProps){
  function handlePressEnter(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === "Enter"){
      onPressEnter(event);
    }
  }

  return (
    <input
      {...rest} 
      type="text" 
      onKeyDown={(event) => handlePressEnter(event)}
    />
  );
}

export default EnterActionInput;