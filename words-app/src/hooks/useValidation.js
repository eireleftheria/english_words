import { useState } from "react";

const useValidation = () => {
  const [inputErrorText, setInputErrorText] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  const [isInputError, setIsInputError] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  const [isDisabled, setIsDisabled] = useState(false);

  function validateField(nameField, valueField) {
    //проверка на пустую строку
    if (valueField.trim() === "") {
      setIsInputError({ ...isInputError, [nameField]: true });
      setInputErrorText({ ...inputErrorText, [nameField]: "Пустая строка" });
    } else {
      switch (nameField) {
        //english
        case "english":
          if (!valueField.match(/^[a-zA-Z\s]+$/)) {
            setIsInputError({ ...isInputError, [nameField]: true });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "Используйте только латинницу",
            });
          } else {
            setIsInputError({ ...isInputError, [nameField]: false });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "",
            });
          }
          break;

        //transcription
        case "transcription":
          if (!valueField.match(/^[\p{L}\s\S]+$/u)) {
            setIsInputError({ ...isInputError, [nameField]: true });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "Используйте латинницу и фонетические символы",
            });
          } else {
            setIsInputError({ ...isInputError, [nameField]: false });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "",
            });
          }
          break;

        //russian
        case "russian":
          if (!valueField.match(/^[а-яА-ЯёЁ\s]+$/)) {
            setIsInputError({ ...isInputError, [nameField]: true });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "Используйте только кириллицу",
            });
          } else {
            setIsInputError({ ...isInputError, [nameField]: false });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "",
            });
          }
          break;

        //default
        default:
          setIsInputError({ ...isInputError, [nameField]: false });
          setInputErrorText({ ...inputErrorText, [nameField]: "" });
          break;
      }
    }
  }

  return {
    inputErrorText,
    isInputError,
    isDisabled,
    setIsDisabled,
    validateField,
  };
};

export default useValidation;
