import React, { createContext, useState, useEffect } from "react";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };

  //получение слова по id
  const getWordById = async (wordId) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${wordId}`
      );
      if (!response.ok) {
        throw new Error("Не удалось получить слово");
      }
      const data = await response.json();
      addWord(data);
    } catch (error) {
      console.log("Ошибка при получении слова: ", error);
    }
  };
  //удаление слова
  const handleDeleteWord = async (wordId) => {
    try {
      const response = await fetch(
        ` http://itgirlschool.justmakeit.ru/api/words[/${wordId}/delete`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Ошибка при удалении слова");
      }
      setWords(words.filter((word) => word.id !== wordId));
    } catch (error) {
      console.log("Ошибка при удалении слова: ", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      if (!response.ok) {
        throw new Error("Проблема с получением слов");
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.log("Возникла ошибка: ", error);
    }
  };
  return (
    <WordsContext.Provider
      value={{ words, addWord, setWords, getWordById, handleDeleteWord }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export { WordsProvider, WordsContext };
