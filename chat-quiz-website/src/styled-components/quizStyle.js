import styled from 'styled-components';

export const QuizStartContainer = styled.div`
  width: 26%;
  margin: auto;
  height: 21%;
  border-radius: 5px;
  @media (max-width: 820px) {
    width: 50%;
  }
`

export const QuizStartText = styled.h3`
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

const Button = styled.button`
width: 31%;
margin: 3% 0 0 34%;
height: 1.9em;
transform: scaleX(110%);
border: 2px solid #56bab7;
border-radius: 2px;
font-family: Roboto;
font-weight: 300;
@media (max-width: 820px) {
  font-size: 0.9em;
};
@media (max-width: 430px) {
  font-size: 0.7em;
}
`

export const QuizStartButton = styled(Button)`
background: none;
color: #56bab7;
`

export const QuizContainer = styled.div`
  width: 23%;
  margin: 0 auto 0 auto;
  height: 68vh;
  @media (max-width: 820px) {
    width: 40%;
  };  
`

export const QuizCancelButton = styled(Button)`
  background: #56bab7;
  color: #fff;
`

export const QuizQuestionsContainer = styled.div`
  height: 68vh;
  border: 1px solid #56bab7;
  border-radius: 5px;
  background-color: #232327;
`

export const QuizText = styled.div`
  width: 80%;
  margin: auto;
  height: 30vh;
  color: #fff;
  padding: 70px 0 0 0;
  font-family: Roboto;
  font-weight: 300;
  @media (max-height: 680px) {
    font-size: 0.8em;
    padding: 20px 0 0 0;
  };
`

export const QuizAnswerContainer = styled.div`
  width: 90%;
  margin: auto;
  height: 38vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const QuizAnswer = styled.button`
  background: none;
  min-height: 4vh;
  border: 2px solid #56bab7;
  border-radius: 2px;
  text-align: center;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 300; 
  @media (max-height: 680px) {
    font-size: 0.8em;
  };
`

export const ResultIcons = styled.div`
  display: flex;
  margin: 20px auto 50px auto;
  width: 23%;
  height: 30px;
  @media (max-height: 680px) {
    margin: 10px auto 10px auto;
  };
`

export const QuizIcons = styled.img`
-webkit-background-size: 30px 30px;
background-size: 30px 30px;
margin-right: 5px;
-webkit-border-radius: 50%;
border-radius: 50%;
display: block;
position: relative;
height: 25px;
width: 25x;
z-index: 0;
`