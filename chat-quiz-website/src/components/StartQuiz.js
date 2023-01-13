import React from "react";
import { useDispatch } from 'react-redux';
import { startQuiz } from "../store/quizSlice";
import firebase from "firebase/app";
import { QuizStartContainer, QuizStartText, QuizStartButton} from "../styled-components/quizStyle";


function StartQuiz() {

  const dispatch = useDispatch();


  return (
    <QuizStartContainer>
      <QuizStartText>
        START if you are ready to start Quiz
      </QuizStartText>
      <QuizStartButton onClick={()=> dispatch(startQuiz({user: firebase.auth().currentUser.uid}))}>
        START
      </QuizStartButton>
    </QuizStartContainer>
  )
}

export default StartQuiz