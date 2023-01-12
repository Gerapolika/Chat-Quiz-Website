import React, { useEffect } from "react";
import Quiz from "../components/Quiz";
import Chat from "../components/Chat";
import styled from 'styled-components';
import firebase from "firebase/app";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReadyForQuiz from "../components/ReadyForQuiz";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

function Main() {

  const navigate = useNavigate(); 

  const user = useSelector(state => state.quiz.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigate("/")
      } 
    });
  }, [firebase.auth()])


  return (
    <Container>
       {!firebase.auth().currentUser && <Navigate to="/" />}
       {console.log(user)}
       {user.userReadiness  === true ? <ReadyForQuiz /> : <Quiz />}
      <Chat />
    </Container>
  )
}

export { Main }