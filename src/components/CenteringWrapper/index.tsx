import styles from "./centering-wrapper.module.css";

interface CenteringWrapperProps{
  children: React.ReactNode
}

function CenteringWrapper({children}: CenteringWrapperProps){
  return (
    <div className={styles["centering-wrapper"]}>
      {children}
    </div>
  );
}

export default CenteringWrapper;

