import styles from "../Cards/CardElement.module.css";
import React, { useState } from "react";

function CardElement({ english, transcription, russian }) {
  const [isSelected, setSelected] = useState(true);

  return (
    <div className={styles.cardElement_container}>
      <p>{english}</p>
      <p>{transcription}</p>
      {isSelected ? (
        <button
          className={styles.checkButton}
          onClick={() => setSelected(false)}
        >
          Проверить
        </button>
      ) : (
        <button
          className={styles.translatedWord}
          onClick={() => setSelected(true)}
        >
          {russian}
        </button>
      )}
    </div>
  );
}

export default CardElement;
