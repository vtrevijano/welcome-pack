import React, { useState, useEffect } from "react";
import sudoku from "sudoku";
import styled from "styled-components";
import Solution from "./Solution";

const Board = styled.div`
  li:nth-child(n):nth-child(-n + 9) {
    border-top-width: 4px;
  }
  li:nth-child(n + 73):nth-child(-n + 81) {
    border-bottom-width: 4px;
  }
  li:nth-child(3n) {
    border-right-width: 4px;
  }
  li:nth-child(9n + 1) {
    border-left-width: 4px;
  }
  li:nth-child(n + 19):nth-child(-n + 27) {
    border-bottom-width: 4px;
  }
  li:nth-child(n + 46):nth-child(-n + 54) {
    border-bottom-width: 4px;
  }
`;

const ContainerButtons = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0 50px;
`;

const Li = styled.li`
  margin: 0;
  padding: 0;
  text-align: center;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Ul = styled.ul`
  padding: 30px 0;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: repeat(9, 8vw);
  grid-template-rows: repeat(9, 8vw);
  justify-content: center;
  align-content: center;
  grid-gap: 0rem;
  list-style: none;
  margin: 0 0 2vw;
`;

const Input = styled.input`
  width: 30px;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: calc(2vw);
`;

const ResumeButton = styled.button`
  display: ${(props) => (props.resume === true ? "inline-block" : "none")};
  margin-right: 20px;
  background-color: #58a4eb;
  color: #fff;
  padding: 0.5em 1em;
  font-family: inherit;
  font-size: 100%;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #999;
  border: transparent;
  border-radius: 2px;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    opacity: 0.7;
  }
`;
const SolutionButton = styled.button`
  display: ${(props) =>
    props.showSolution === false ? "inline-block" : "none"};
  margin-right: 20px;
  background-color: #58a4eb;
  color: #fff;
  padding: 0.5em 1em;
  font-family: inherit;
  font-size: 100%;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #999;
  border: transparent;
  border-radius: 2px;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    opacity: 0.7;
  }
`;

const ResetButton = styled.button`
  margin-right: 20px;
  display: inline-block;
  background-color: #58a4eb;
  color: #fff;
  padding: 0.5em 1em;
  font-family: inherit;
  font-size: 100%;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #999;
  border: transparent;
  border-radius: 2px;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    opacity: 0.7;
  }
`;

const SudokuGame = () => {
  //todos los estados y variables globales iniciales
  let values = [];
  const [sudokuBoard, setSudokuBoard] = useState([null]);
  const [readyToPlay, setReadyToPlay] = useState(true);
  const [showSolution, setShowSolution] = useState(false);
  const [resume, setResume] = useState(true);
  const newBoard = sudoku.makepuzzle();

  //el useEffect pintará un nuevo tablero siempre que el estado readytoplay cambie a true
  useEffect(() => {
    setSudokuBoard(newBoard);
  }, [readyToPlay]);

  //las variables que almacenan el resultado de resolver el tablero.
  const solved = sudoku.solvepuzzle(sudokuBoard);
  const solvedString = JSON.stringify(solved);

  //función que almacena los valores introducidos por el jugador y saca una u otra alerta dependiendo del resultado.
  const checkResults = () => {
    const input = document.querySelectorAll(".inputValue");
    input.forEach((number) => {
      values.push(number.value);
    });
    const valuesString = JSON.stringify(values);
    if (valuesString == solvedString) {
      window.alert("ENHORABUENA, HAS RESUELTO EL SUDOKU");
    } else {
      window.alert("VAAAYA, HAY ALGÚN ERROR EN EL SUDOKU!");
    }
    values = [];
  };

  //función para empezar una nueva partida
  const resetPlay = () => {
    setResume(true);
    setShowSolution(false);
    setSudokuBoard([null]);
    if (readyToPlay === true) {
      setReadyToPlay(false);
    } else {
      setReadyToPlay(true);
    }
  };

  //función para mostrar la solución al sudoku propuesto.
  const handleSolution = () => {
    if (resume === true) {
      setResume(false);
    } else {
      setResume(true);
    }

    if (showSolution === false) {
      setShowSolution(true);
    } else {
      setShowSolution(false);
    }
  };

  return (
    <>
      <ContainerButtons>
        <ResumeButton resume={resume} onClick={checkResults}>
          Enviar resultados
        </ResumeButton>

        <SolutionButton showSolution={showSolution} onClick={handleSolution}>
          Mostrar solución
        </SolutionButton>
        <ResetButton onClick={resetPlay}>Nueva partida</ResetButton>
      </ContainerButtons>

      <Board>
        {sudokuBoard.length > 0}
        <Ul>
          {sudokuBoard.map((number, i) => (
            <Li key={i}>
              <Input
                className="inputValue"
                type="number"
                defaultValue={number}
              />
            </Li>
          ))}
        </Ul>

        <Solution solution={solved} showSolution={showSolution}></Solution>
      </Board>
    </>
  );
};

export default SudokuGame;
