import styles from "../Cards/CardElement.module.css";

function CardElement({ english, transcription, russian }) {
  return (
    <div className={styles.cardElement_container}>
      <p>{english}</p>
      <p>{transcription}</p>
      <p>{russian}</p>
    </div>
  );
}

export default CardElement;
