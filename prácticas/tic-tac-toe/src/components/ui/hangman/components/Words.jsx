import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 0 60px;
  margin: 0 auto;
`;
const Letter = styled.span`
  border-bottom: 3px solid #de533c;
  display: inline-block;
  font-size: 30px;
  margin: 0 3px;
  height: 50px;
  width: 20px;
`;

const Words = ({ chosenWord, correctLetters }) => {
  return (
    <Container>
      {chosenWord.split("").map((letterChosen, i) => {
        return (
          <Letter key={i}>
            {correctLetters.includes(letterChosen) ? letterChosen : ""}
          </Letter>
        );
      })}
    </Container>
  );
};

export default Words;
