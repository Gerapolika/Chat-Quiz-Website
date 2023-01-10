import React from "react";
import Quiz from "../components/Quiz";
import Chat from "../components/Chat";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

function Main() {

    return (
            <Container>
                <Quiz />
                <Chat />
            </Container>
    )
}

export  {Main}