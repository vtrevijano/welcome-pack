import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
   width: 100px;
    height: 100px;
    background-color: #d3d3d3;
    margin: 5px;
    transition: all .2s;
    border-radius: 0%;
    clip-path: polygon(36% 0, 0 0, 0 29%, 0 57%, 0 100%, 30% 100%, 73% 100%, 100% 100%, 100% 59%, 100% 31%, 100% 0, 74% 0);
`

const SquareValues = styled.h2`
    color: #472980;
    font-size: 2rem;
`

const Squares = ({value, onClick}) => {

  return(
      <>
      <SquareButton onClick={onClick}>
          <SquareValues>{value}</SquareValues>
      </SquareButton>
      </>
  )
};

export default Squares;
