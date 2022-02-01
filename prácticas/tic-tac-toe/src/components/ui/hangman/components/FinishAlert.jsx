import React, { useEffect } from "react";
import { checkResults } from "../functions/functions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styled from "styled-components";

const Button = styled.button`
  padding: 20px 35px;
  background-color: #de533c;
  color: whitesmoke;
  border: 1px solid #243d7c;
  border-radius: 8px;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  :hover{
    opacity: 0.7;
  }
`;

const FinishAlert = ({
  correctLetters,
  incorrectLetters,
  chosenWord,
  setIsReadyToPlay,
  resetGame,
}) => {
  const MySwal = withReactContent(Swal);

  let finalMessage = "";
  let wordSelected = "";
  let readyToPlay = true;
  let icon = "";

  const alert = () => {
    MySwal.fire({
      title: finalMessage,
      html: <i>{wordSelected}</i>,
      icon: icon,
      confirmButtonColor: "#16254a",
      confirmButtonText: "De acuerdo",
      timer: 4000,
      timerProgressBar: true,
      background: "#243d7c",
      color: "whitesmoke",
    });
  };
  //se ejecuta la función que comprueba los resultados y ejecuta una u otra alerta dependiendo de lo que haya sido.
  if (checkResults(correctLetters, incorrectLetters, chosenWord) === "winner") {
    finalMessage = "ENHORABUENA, HAS ACERTADO LA PALABRA";
    wordSelected = `LA PALABRA ACERTADA: ${chosenWord}`;
    readyToPlay = false;
    icon = "success";
    alert();
  } else if (
    checkResults(correctLetters, incorrectLetters, chosenWord) === "loser"
  ) {
    finalMessage = "VAYA, PARECE QUE HAS PERDIDO...";
    wordSelected = `PARA QUE LO SEPAS, LA PALABRA ERA: ${chosenWord}`;
    readyToPlay = false;
    icon = "error";
    alert();
  }
  //Al saltar las alertas haremos que no se pueda seguir jugando hasta darle al botón de reiniciar juego.
  useEffect(() => {
    setIsReadyToPlay(readyToPlay);
  });

  return <Button onClick={resetGame}>Reiniciar</Button>;
};

export default FinishAlert;
