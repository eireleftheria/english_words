import styles from "../Cards/CardElement.module.css";
import React, { useState, useEffect, useRef } from "react";

function CardElement({
  english,
  transcription,
  russian,
  position,
  onWordStudied,
}) {
  const [isSelected, setSelected] = useState(true);
  const focusButtonRef = useRef(null);

  const handleCheck = () => {
    setSelected(false);
    onWordStudied();
  };

  useEffect(() => {
    setSelected(true);
    if (focusButtonRef.current) {
      focusButtonRef.current.focus();
    }
  }, [position]);

  return (
    <div className={styles.cardElement_container}>
      <p>{english}</p>
      <p>{transcription}</p>
      {isSelected ? (
        <button
          className={styles.checkButton}
          onClick={handleCheck}
          ref={focusButtonRef}
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
