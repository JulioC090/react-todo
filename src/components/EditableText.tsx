import { useState } from "react";
import EnterActionInput from "./EnterActionInput";

interface EditableTextProps  {
  initialText?: string
  onFinishEdit?(text: string): void
}

function EditableText({initialText, onFinishEdit}: EditableTextProps){
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText ? initialText : "");

  function handleDoubleClick(){
    setIsEditing(true)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setText(event.currentTarget.value);
  }

  function handleBlur(){
    setIsEditing(false);
    if(onFinishEdit) onFinishEdit(text);
  }

  function handlePressEnter(){
    setIsEditing(false);
    if(onFinishEdit) onFinishEdit(text);
  }

  return (
    <span onDoubleClick={handleDoubleClick}>
      {
        isEditing ? (
          <EnterActionInput
            type="text" 
            value={text} 
            autoFocus
            onPressEnter={handlePressEnter}
            onChange={(event) => handleChange(event)}
            onBlur={handleBlur}
          />
        ) : (
          <span>{text}</span>
        )
      }
    </span>
  )
}

export default EditableText;