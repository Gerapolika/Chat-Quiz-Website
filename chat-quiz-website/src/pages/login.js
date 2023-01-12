import React, { useEffect } from "react";
import styled from 'styled-components';
import googleLogo from "../images/google-logo.png"
import firebase from "firebase/app";
import { signIn } from "../firebase";
import { useNavigate } from "react-router-dom";


const Log = styled.div`
  background-color: #232327;
  width: 29%;
  margin: auto;
  position: absolute;
  top: 47%;
  left: 35%;
  height: 21%;
  border-radius: 5px;
  @media (max-width: 980px) {
    width: 50%;
    left: 25%;
  }
  @media (max-width: 640px) {
    width: 70%;
    left: 15%;
  }
  @media (max-width: 450px) {
    width: 90%;
    left: 5%;
  }

`

const LogButton = styled.button`
  display: flex;
  background: none;
  width: 85%;
  margin: auto;
  position: absolute;
  top: 40%;
  left: 8%;
  height: 2em;
  border: 2px solid #fcf131;
  border-radius: 2px;
  color: #fff;
`

const Google = styled.img`
  height: 1.1em;
  margin-top: 0.2em
`

const Text = styled.div`
  margin-left: 30%;
  font-family: Open Sans;
  font-weight: 400
`;

function Login() {
  
  const handleClick = () => {
    signIn();
  }

  const navigate = useNavigate();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate("/main")
      } else {
        console.log("user is signed out")
      }
    });
  }, [firebase.auth()])

  return (
    <Log>
      <LogButton placeholder="Login with Google" 
      onClick={handleClick}>
        <Google src={googleLogo} alt="googleLogo" />
        <Text>Login with Google</Text>
      </LogButton>
    </Log>
  )
}

export { Login }