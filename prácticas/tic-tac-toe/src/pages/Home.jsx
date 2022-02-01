import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const desktopStartWidth = 768;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


const H1 = styled.h1`
  color: whitesmoke;
  font-size: 1.7rem;
  font-weight: bold;
  display: block;
  text-align: center;
`

const P = styled.p`
  color: whitesmoke;
  font-size: 1.2rem;
  font-weight: 400;
  display: block;
  margin: 40px auto;
  text-align: center;
  width: 70%;
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  ${mobile} {
        flex-direction: column;
        align-items: center;
    }
`

const Li = styled.li`
  list-style-type: none;
text-align: center;
`

const Img = styled.img`
  width: 300px;
`

const H2 = styled.h2`
  color: #de533c;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.3rem;

`

const Home = () => {
  return (
    <>
    <H1>Bienvenid@ al GAMEHUB</H1>
    <P>Aquí debajo tendrás una imagen de los juegos que están disponibles actualmente. Nuestra web está en constante revisión y crecimiento, por lo que te animamos a que visites a menudo la página si quieres descubrir nuevos juegos.</P>
    <Ul>
      <Li>
        <H2>Tic tac toe</H2>
        <Link to="/tictactoe">
          <Img src="https://i.imgur.com/uM0lRlk.png" alt="tictactoe" />
        </Link>
      </Li>
      <Li>
      <H2>Hangman / Juego del ahorcado</H2>
        <Link to="/hangman">
          <Img src="https://i.imgur.com/CtIkVmB.png" alt="hangman" />
        </Link>
      </Li>
      <Li>
      <H2>Sudoku</H2>
        <Link to="/sudoku">
          <Img src="https://i.imgur.com/nevnBIw.png" alt="sudoku" />
        </Link>
      </Li>
    </Ul>
    </>
    
  );
};

export default Home;
