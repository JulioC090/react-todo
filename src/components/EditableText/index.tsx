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

  function handleFinishEdit(text: string){
    setIsEditing(false);
    setText(text);
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
            defaultValue={text}
            type="text"
            className={styles["editable-text__input"]}
            autoFocus
            onPressEnter={(event) => handleFinishEdit(event.currentTarget.value)}
            onBlur={(event) => handleFinishEdit(event.currentTarget.value)}
          />
        ) : (
          <>{text}</>
        )
      }
    </div>
  )
}

export default EditableText;