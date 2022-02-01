import { React, useState } from "react";
import styled from "styled-components";
import Squares from "./Squares";
import { calculateWinner } from "./Winner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #243d7c;
`;
const Row = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const Title = styled.h1`
  color: whitesmoke;
  font-size: 2.3rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 20px;
  border-radius: 8px;
  background-color: #de533c;
  color: whitesmoke;
  font-size: 1.8rem;
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`

const Table = () => {
  //se crean los estados iniciales

  const [squaresState, setSquare] = useState([Array(9).fill(null)]);
  const [turnX, setTurnX] = useState(true);
  const [isStarted, setIsStarted] = useState(true);

  //función que, al hacer click en un botón almacena los resultados
  // y actualiza los turnos || victoria

  const handleClick = (i) => {
    const squaresSliced = squaresState.slice();
    if (calculateWinner(squaresSliced) || squaresSliced[i]) {
      return;
    }
    squaresSliced[i] = turnX ? "X" : "O";
    setSquare(squaresSliced);
    setTurnX(!turnX);
  };

  //Función para terminar/empezar partida nueva. Lo que hace es reestablecer los valores por defecto de los estados.

  const handleFinishClick = () => {
    setSquare([Array(9).fill(null)]);
    setTurnX(true);
    setIsStarted(isStarted === false ? true : false);
  };

  //función para pintar los squares

  const paintSquares = (i) => {
    return <Squares value={squaresState[i]} onClick={() => handleClick(i)} />;
  };

  //lo que se mostrará si gana algún jugador o continúa el juego

  const winner = calculateWinner(squaresState);

  return (
    <>
        <Container>
          {isStarted ? (
            <Button onClick={handleFinishClick}>Empezar</Button>
          ) : (
            <>
            <Button onClick={handleFinishClick}>Terminar juego</Button>
            {winner ? (
              <Title>Ha ganado el jugador {winner}</Title>
            ) : (
              <>
                <Title>Turno del jugador {turnX ? "X" : "O"}</Title>
                <Row>
                  {paintSquares(1)}
                  {paintSquares(2)}
                  {paintSquares(3)}
                </Row>
                <Row>
                  {paintSquares(4)}
                  {paintSquares(5)}
                  {paintSquares(6)}
                </Row>
                <Row>
                  {paintSquares(7)}
                  {paintSquares(8)}
                  {paintSquares(9)}
                </Row>
              </>
            )}
            </>
          )}
         
        </Container>
      </>
  );
};

export default Table;
