import React, { useEffect, useState } from "react";
import styles from "./TableRow.module.css";
import useValidation from "../../hooks/useValidation";

function TableRow({ id, english, transcription, russian }) {
  //для валидации
  const {
    inputErrorText,
    isInputError,
    isDisabled,
    setIsDisabled,
    validateField,
  } = useValidation();

  const [isSelected, setSelected] = useState(false);
  const [value, setValue] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
  });

  useEffect(() => {
    if (
      isInputError.english ||
      isInputError.transcription ||
      isInputError.russian
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isInputError, setIsDisabled]);

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
    const name = event.target.name;
    const value = event.target.value;
    validateField(name, value);
    setValue((prevValue) => {
      return { ...prevValue, [name]: value };
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
              className={
                isInputError.english ? styles.inputError : styles.inputField
              }
            />
            {inputErrorText.english && isInputError.english && (
              <span className={styles.errorText}>{inputErrorText.english}</span>
            )}
          </td>
          <td className={styles.transcriptionColumn}>
            <input
              type="text"
              value={value.transcription}
              name={"transcription"}
              onChange={handleChange}
              className={
                isInputError.transcription
                  ? styles.inputError
                  : styles.inputField
              }
            />
            {inputErrorText.transcription && isInputError.transcription && (
              <span className={styles.errorText}>
                {inputErrorText.transcription}
              </span>
            )}
          </td>
          <td className={styles.russianColumn}>
            <input
              type="text"
              value={value.russian}
              name="russian"
              onChange={handleChange}
              className={
                isInputError.russian ? styles.inputError : styles.inputField
              }
            />
            {inputErrorText.russian && isInputError.russian && (
              <span className={styles.errorText}>{inputErrorText.russian}</span>
            )}
          </td>
          <td className={styles.actionsColumn}>
            <button
              className={
                isDisabled ? styles.saveButtonDisabled : styles.saveButton
              }
              onClick={handleSave}
              disabled={isDisabled}
            >
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
