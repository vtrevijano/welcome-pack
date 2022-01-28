import React from "react";
import styled from "styled-components";
import { Link, Routes, Route, HashRouter } from "react-router-dom";
import Tictactoe from "../pages/Tictactoe"
import Hangman from "../pages/Hangman"
import Sudoku from "../pages/Sudoku"
import Home from "../pages/Home"

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Nav = styled.nav`
  padding: 20px 0px;
  background-color: #243d7c;
`;

const Navul = styled.ul`
  list-style: none;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-inline-start: 0px;
  padding: 120px 0 40px;
  margin: 0;
  background-color: #243d7c;
  ${mobile} {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
  }
`;

const Navli = styled.li`
  text-align: center;
  text-transform: capitalize;
  ${mobile} {
    padding: 10px;
    border: whitesmoke;
    margin-bottom: 20px;
  }
`;

const NavItem = styled.span`
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  text-transform: uppercase;
  font-weight: bolder;
  color: white;
  background-color: #de533c;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  border: 3px solid #de533c;
  &&:hover {
    transition: 0.5s;
    background-color: white;
    color: #de533c;
  }
  ${mobile} {
    padding: 20px;
    border: whitesmoke;
    background-color: transparent;
    font-size: 1.2rem;
    &&:hover {
      transition: 0.5s;
      background-color: transparent;
      color: #de533c;
    }
  }
`;


const Navigation = () => {
  return (
    <HashRouter>
    <Nav>
      <Navul>
        <Navli>
          <Link style={{ "text-decoration": "none" }} to="/">
            <NavItem>Home</NavItem>
          </Link>
        </Navli>
       
        <Navli>
          <Link style={{ "text-decoration": "none" }} to="/tictactoe">
            <NavItem>TIC TAC TOE</NavItem>
          </Link>
        </Navli>
        
        <Navli>
          <Link style={{ "text-decoration": "none" }} to="/hangman">
            <NavItem>HANGMAN</NavItem>
          </Link>
        </Navli>
        <Navli>
          <Link style={{ "text-decoration": "none" }} to="/sudoku">
            <NavItem>Sudoku</NavItem>
          </Link>
        </Navli>
      </Navul>
    </Nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/tictactoe" element={<Tictactoe />} />
      <Route exact path="/hangman" element={<Hangman />} />
      <Route path="/sudoku" element={<Sudoku />} />
    </Routes>
    </HashRouter>
  )
};

export default Navigation;
