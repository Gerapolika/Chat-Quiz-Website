import React from "react";
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 26%;
  margin: auto;
  height: 21%;
  border-radius: 5px;
  @media (max-width: 820px) {
    width: 50%;
  }
`

const QuizStartText = styled.h3`
  background: none;
  padding: 9% 0 0 1%;
  color: #fff;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.4em;
  transform: scaleX(110%);
  width: 90%;
  margin: auto;
  text-align: center;
  @media (max-width: 820px) {
    font-size: 1em;
  }
`

const QuizStartButton = styled.button`
  background: none;
  width: 31%;
  margin: 3% 0 0 34%;
  height: 1.9em;
  transform: scaleX(110%);
  border: 2px solid #56bab7;
  border-radius: 2px;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 400;
  @media (max-width: 820px) {
    font-size: 0.9em;
  };
  @media (max-width: 430px) {
    font-size: 0.7em;
  }
`


function Quiz() {

  return (
    <QuizContainer>
      <QuizStartText>
        START if you are ready to start Quiz
      </QuizStartText>
      <QuizStartButton>
        START
      </QuizStartButton>
    </QuizContainer>
  )
}

export default Quiz