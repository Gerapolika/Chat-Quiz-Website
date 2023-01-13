import React from "react";
import { useDispatch } from "react-redux";
import { cancelStartQuiz } from "../store/quizSlice";
import { QuizStartContainer, QuizStartText, QuizCancelButton} from "../styled-components/quizStyle";
import firebase from "firebase/app";


function ReadyForQuiz() {

    const dispatch = useDispatch();

    return(
    <QuizStartContainer>
      <QuizStartText>
        Ready to start The Quiz
      </QuizStartText>
      <QuizCancelButton onClick={()=> dispatch(cancelStartQuiz({user: firebase.auth().currentUser.uid}))}>
        CANCEL
      </QuizCancelButton>
    </QuizStartContainer>
    )
}

export default ReadyForQuiz