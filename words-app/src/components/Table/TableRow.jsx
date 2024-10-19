import styles from "./TableRow.module.css";
import Button from "../Button/Button";

function TableRow({ id, english, transcription, russian }) {
  return (
    <tr className={styles.table_rows}>
      <td>{id}</td>
      <td>{english}</td>
      <td>{transcription}</td>
      <td>{russian}</td>
      <td>
        <Button text="Edit" colorVar="edit"></Button>
        <Button text="Delete" colorVar="delete"></Button>
      </td>
    </tr>
  );
}

export default TableRow;
