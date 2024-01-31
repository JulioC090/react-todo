import { HTMLAttributes, useState } from "react";
import EnterActionInput from "../EnterActionInput";
import styles from "./editableText.module.css";

interface EditableTextProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialText?: string
  onFinishEdit?(text: string): void
}

function EditableText({initialText, onFinishEdit, ...rest}: EditableTextProps){
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
    <div 
      {...rest}
      className={`${rest.className} ${styles["editable-text"]}`}
      onDoubleClick={handleDoubleClick}
    >
      {
        isEditing ? (
          <EnterActionInput
            type="text"
            className={styles["editable-text__input"]}
            value={text} 
            autoFocus
            onPressEnter={handlePressEnter}
            onChange={(event) => handleChange(event)}
            onBlur={handleBlur}
          />
        ) : (
          <>{text}</>
        )
      }
    </div>
  )
}

export default EditableText;