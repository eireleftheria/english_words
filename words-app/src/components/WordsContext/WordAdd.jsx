import React, { useContext, useState } from "react";
import { WordsContext } from "./WordsContext";

const WordAdd = () => {
  const { addWord } = useContext(WordsContext);
  const [newEnglishWord, setNewEnglishWord] = useState("");
  const [newTranscription, setNewTranscription] = useState("");
  const [newRussian, setNewRussian] = useState("");

  const handleWordTask = (e) => {
    e.preventDefault();
    if (newEnglishWord.trim() === "") return; //проверка на пустую строку
    addWord({
      id: Math.random(),
      endlish: newEnglishWord,
      transcription: newTranscription,
      russian: newRussian,
    });
    setNewEnglishWord("");
    setNewTranscription("");
    setNewRussian("");
  };

  return (
    <div className="word-add">
      <form onSubmit={handleWordTask}>
        <input
          type="text"
          placeholder="Введите слово"
          value={newEnglishWord}
          onChange={(e) => setNewEnglishWord(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите транскрипцию"
          value={newTranscription}
          onChange={(e) => setNewTranscription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите перевод"
          value={newRussian}
          onChange={(e) => setNewRussian(e.target.value)}
        />
        <button type="submit">Добавить слово</button>
      </form>
    </div>
  );
};

export default WordAdd;
