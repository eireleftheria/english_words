import styles from "../Carousel/CardWrapper.module.css";

function CardWrapper({
  children,
  onShowPrevious,
  onShowNext,
  position,
  myWords,
  myWordsLength,
  studiedCount,
}) {
  console.log(myWords);
  return (
    <>
      <div className={styles.cardWrapper_container}>
        <button className={styles.prevButton} onClick={onShowPrevious}>
          🢠 Назад
        </button>
        {children}
        <button className={styles.nextButton} onClick={onShowNext}>
          Вперед 🢡
        </button>
      </div>
      <p>
        {position + 1}/{myWordsLength}
      </p>
      <p>Слов изучено: {studiedCount}</p>
    </>
  );
}

export default CardWrapper;
