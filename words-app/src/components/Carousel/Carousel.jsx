import React, { useState } from "react";
import CardElement from "../Cards/CardElement";
import CardWrapper from "./CardWrapper";
import styles from "../Carousel/Carousel.module.css";

function Carousel({ myWords }) {
  const [position, setPosition] = useState(0);
  const [studiedCount, setStudiedCount] = useState(0);

  function showPrevious() {
    if (position === 0) {
      setPosition(myWords.length - 1);
    } else {
      setPosition(position - 1);
    }
  }

  function showNext() {
    if (position === myWords.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }

  const handleWordStudied = () => {
    setStudiedCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.carousel_container}>
      <CardWrapper
        onShowPrevious={showPrevious}
        onShowNext={showNext}
        position={position}
        myWords={myWords}
        myWordsLength={myWords.length}
        studiedCount={studiedCount}
      >
        <CardElement
          english={myWords[position].english}
          transcription={myWords[position].transcription}
          russian={myWords[position].russian}
          position={position}
          onWordStudied={handleWordStudied}
        ></CardElement>
      </CardWrapper>
    </div>
  );
}

export default Carousel;
