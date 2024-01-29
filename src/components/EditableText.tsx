import { useState } from "react";

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

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === "Enter"){
      setIsEditing(false);
      if(onFinishEdit) onFinishEdit(text);
    }
  }

  return (
    <span onDoubleClick={handleDoubleClick}>
      {
        isEditing ? (
          <input 
            type="text" 
            value={text} 
            autoFocus
            onChange={(event) => handleChange(event)}
            onBlur={handleBlur}
            onKeyDown={(event) => handleKeyDown(event)}
          />
        ) : (
          <span>{text}</span>
        )
      }
    </span>
  )
}

export default EditableText;