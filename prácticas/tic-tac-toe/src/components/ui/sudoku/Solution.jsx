import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: ${(props) => (props.showSolution === true ? "grid" : "none")};
  padding: 30px 0;
  background-color: whitesmoke;
  grid-template-columns: repeat(9, 8vw);
  grid-template-rows: repeat(9, 8vw);
  justify-content: center;
  align-content: center;
  grid-gap: 0rem;
  list-style: none;
  margin: 0 0 2vw;
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

const H2 = styled.h2`
  width: 30px;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: calc(2vw);
`;

const Solution = ({ showSolution, solution }) => {
  let listItems = [];

  if (showSolution === true) {
    listItems = solution.map((number, i) => (
      <Li key={i}>
        <H2 >{number}</H2>
      </Li>
    ));
  }

  return (
    <>
      <Ul showSolution={showSolution}>{listItems}</Ul>
    </>
  );
};

export default Solution;
