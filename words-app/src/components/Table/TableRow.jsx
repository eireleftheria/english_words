import React, { useState } from "react";
import styles from "./TableRow.module.css";

function TableRow({ id, english, transcription, russian }) {
  const [isSelected, setSelected] = useState(false);
  const [value, setValue] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
  });

  function handleSave() {
    setValue({ ...value });
    setSelected((prevValue) => !prevValue);
  }

  function handleClose() {
    setSelected((prevValue) => !prevValue);
    setValue({ id, english, transcription, russian });
  }

  function handleEdit() {
    setSelected((prevValue) => !prevValue);
  }

  function handleChange(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  return (
    <tr className={styles.table_rows}>
      {" "}
      {isSelected ? (
        <>
          <td className={styles.idColumn}>{id}</td>
          <td className={styles.englishColumn}>
            <input
              type="text"
              value={value.english}
              name={"english"}
              onChange={handleChange}
            />
          </td>
          <td className={styles.transcriptionColumn}>
            <input
              type="text"
              value={value.transcription}
              name={"transcription"}
              onChange={handleChange}
            />
          </td>
          <td className={styles.russianColumn}>
            <input
              type="text"
              value={value.russian}
              name="russian"
              onChange={handleChange}
            />
          </td>
          <td className={styles.actionsColumn}>
            <button className={styles.saveButton} onClick={handleSave}>
              Save
            </button>
            <button className={styles.closeButton} onClick={handleClose}>
              Close
            </button>
          </td>
        </>
      ) : (
        <>
          <td className={styles.idColumn}>{id}</td>
          <td className={styles.englishColumn}>{value.english}</td>
          <td className={styles.transcriptionColumn}>{value.transcription}</td>
          <td className={styles.russianColumn}>{value.russian}</td>
          <td>
            <td className={styles.actionsColumn}>
              <button className={styles.editButton} onClick={handleEdit}>
                Edit
              </button>
              <button className={styles.deleteButton}>Delete</button>
            </td>
          </td>
        </>
      )}
    </tr>
  );
}

export default TableRow;
