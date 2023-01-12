import React from "react";
import { useDispatch } from 'react-redux';
import { startQuiz } from "../store/quizSlice";
import firebase from "firebase/app";
import { QuizContainer, QuizStartText, QuizStartButton} from "../styled-components/quizStyle";


function Quiz() {

  const dispatch = useDispatch();


  return (
    <QuizContainer>
      <QuizStartText>
        START if you are ready to start Quiz
      </QuizStartText>
      <QuizStartButton onClick={()=> dispatch(startQuiz({user: firebase.auth().currentUser.uid}))}>
        START
      </QuizStartButton>
    </QuizContainer>
  )
}

export default Quiz