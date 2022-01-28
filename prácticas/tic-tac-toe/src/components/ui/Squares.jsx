import React from 'react';
import styled from 'styled-components';

const SquareButton = styled.button`
   width: 100px;
    height: 100px;
    background-color: #848484;
    margin: 5px;
    transition: all .2s;
    border-radius: 0%;
    clip-path: polygon(36% 0, 0 0, 0 29%, 0 57%, 0 100%, 30% 100%, 73% 100%, 100% 100%, 100% 59%, 100% 31%, 100% 0, 74% 0);
`

const Squares = ({value, onClick}) => {

  return(
      <>
      <SquareButton onClick={onClick}>
          {value}
      </SquareButton>
      </>
  )
};

export default Squares;
