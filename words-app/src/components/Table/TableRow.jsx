import React, { useState } from "react";
import styles from "./TableRow.module.css";
import Button from "../Button/Button";

function TableRow({ id, english, transcription, russian }) {
  const [isSelected, setSelected] = useState(false);
  const [valueEnglish, setValueEnglish] = useState(english);
  const [valueTranscription, setValueTranscription] = useState(transcription);
  const [valueRussian, setValueRussian] = useState(russian);

  function handleEnglishChange(event) {
    setValueEnglish(event.target.value);
  }

  function handleTranscriptionChange(event) {
    setValueTranscription(event.target.value);
  }

  function handleRussianChange(event) {
    setValueRussian(event.target.value);
  }

  return (
    <tr className={styles.table_rows}>
      <td>{id}</td>

      <td>
        {isSelected ? (
          <input
            type="text"
            onChange={handleEnglishChange}
            value={valueEnglish}
            onBlur={() => setSelected(false)}
          />
        ) : (
          <td onClick={() => setSelected(true)}>{valueEnglish}</td>
        )}
      </td>

      <td>
        {isSelected ? (
          <input
            type="text"
            onChange={handleTranscriptionChange}
            value={valueTranscription}
            onBlur={() => setSelected(false)}
          />
        ) : (
          <td onClick={() => setSelected(true)}>{valueTranscription}</td>
        )}
      </td>

      <td>
        {isSelected ? (
          <input
            type="text"
            onChange={handleRussianChange}
            value={valueRussian}
            onBlur={() => setSelected(false)}
          />
        ) : (
          <td onClick={() => setSelected(true)}>{valueRussian}</td>
        )}
      </td>

      <td>
        <Button text="Edit" colorVar="edit"></Button>
        <Button text="Delete" colorVar="delete"></Button>
      </td>
    </tr>
  );
}

export default TableRow;
