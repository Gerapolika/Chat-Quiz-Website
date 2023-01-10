import React, { useEffect } from "react";
import Quiz from "../components/Quiz";
import Chat from "../components/Chat";
import styled from 'styled-components';
import firebase from "firebase/app";
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

function Main() {

  const navigate = useNavigate(); 

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
      <Quiz />
      <Chat />
    </Container>
  )
}

export { Main }