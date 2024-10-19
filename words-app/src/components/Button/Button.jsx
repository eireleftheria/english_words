import styles from "../Button/Button.module.css";

function Button({ text, colorVar }) {
  return colorVar === "edit" ? (
    <button className={styles.edit}>{text}</button>
  ) : (
    <button className={styles.delete}>{text}</button>
  );
}

export default Button;
