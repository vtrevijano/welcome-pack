import React, { useState, useEffect } from "react";
import Body from "./Body";
import IncorrecLetters from "./IncorrectLetters";
import Words from "./Words";
import FinishAlert from "./FinishAlert";
import "../../../../App.css";
import styled from "styled-components";


const Container = styled.div`
   background-color: #243d7c;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const myWordsList = [
  "interfaz",
  "minsait",
  "indra",
  "programacion",
  "react",
  "javascript",
  "hangman",
  "ahorcado",
];
//elige una palabra random de la lista
let chosenWord = myWordsList[Math.floor(Math.random() * myWordsList.length)];

const Hangman = () => {
  const [isReadyToPlay, setIsReadyToPlay] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = (e) => {
      const { key, keyCode } = e;
      //por destructuring le sacamos al evento esas dos props. Entre 65 y 90 están todas las letras del abecedario en los códigos.
      if (isReadyToPlay && keyCode <= 90 && keyCode >= 65  ) {
        const letterPressed = key.toLowerCase();
        if (chosenWord.includes(letterPressed)) {
          if (!correctLetters.includes(letterPressed)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letterPressed]);
          }
        } else {
          if (!incorrectLetters.includes(letterPressed)) {
            setIncorrectLetters((currentLetters) => [
              ...currentLetters,
              letterPressed,
            ]);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, incorrectLetters, isReadyToPlay]);

  const resetGame = () => {
    //para resetear, como hicimos en el tic tac toe, devolvemos el valor inicial a los estados y elegimos una nueva palabra.
    setIsReadyToPlay(true);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    const random = Math.floor(Math.random() * myWordsList.length);
    chosenWord = myWordsList[random];
  };
const props = {incorrectLetters, chosenWord, correctLetters, setIsReadyToPlay, resetGame}
  return (
    <>
      <Container>
        <Body incorrectLetters={incorrectLetters} />
        <IncorrecLetters incorrectLetters={incorrectLetters} />
        <Words chosenWord={chosenWord} correctLetters={correctLetters} />
      </Container>
      <FinishAlert
        {...props}
      />
    </>
  );
};
export default Hangman;
