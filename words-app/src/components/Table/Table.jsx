import styles from "../Table/Table.module.css";
import TableRow from "./TableRow";
import myWords from "../../wordsData";

function Table() {
  return (
    <table className={styles.table_container}>
      <thead className={styles.table}>
        <tr>
          <th>№</th>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {myWords.map((newWord) => (
          <TableRow key={newWord.id} {...newWord} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
