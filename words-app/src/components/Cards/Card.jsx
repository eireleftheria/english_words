import styles from "./Card.module.css";
import myWords from "../../wordsData";
import CardElement from "./CardElement";

function Card() {
  return (
    <div className={styles.card_container}>
      {myWords.map((card) => {
        return <CardElement key={card.id} {...card} />;
      })}
    </div>
  );
}

export default Card;
