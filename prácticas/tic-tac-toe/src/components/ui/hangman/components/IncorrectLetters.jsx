import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  text-align: center;
`;

const IncorrectLettersContainer = styled.div`
  margin: 0 auto;
`;
const Title = styled.h2`
  color: whitesmoke;
  display: block;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 5px 0;
`;
const Span = styled.span`
  color: whitesmoke;
  font-size: 1rem;
  text-align: center;
`;

const IncorrectLetters = ({ incorrectLetters }) => {
  return (
    <Container>
      <IncorrectLettersContainer>
        {incorrectLetters.length > 0 && <Title>Letras incorrectas:</Title>}
        {incorrectLetters.map((incorrectLetter, i) => (
          <Span key={i}>{incorrectLetter}, </Span>
        ))}
      </IncorrectLettersContainer>
    </Container>
  );
};
//daniel quintero nuñez
export default IncorrectLetters;
