import React from "react";
import styled from 'styled-components';
import chatBack from "../images/chat-back.jpg"

const ChatBack = styled.div`
  background-image: url(${chatBack});
  width: 35%;
  height: 90vh;
  border-left: 1px solid #fff;
  border-top: none;
  border-bottom: none;
  border-radius: 8px;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ChatMessages = styled.div`
  width: 98%;
  margin-left: 1%;
  height: 37em;
`

const SendMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

const ChatInput = styled.textarea`
  width: 74%;
  height: 4.5em;
  background: rgba(255,255,255, 0.2);
  border: none;
  color: #fff;
  border-radius: 5px;
  margin: 0 0 1.4em 0.3em; 
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.68em;
    padding: 0.8em 0 0 0.7em;
  }
`

const SendButton = styled.button`
  background: none;
  width: 20%;
  height: 2em;
  margin-left: 4%;
  border: 1px solid #56bab7;
  border-radius: 5px;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.9em;
`


function Chat() {

  return (
    <ChatBack>
      <ChatMessages />
      <SendMessageContainer>
        <ChatInput placeholder="Send a message..." />
        <SendButton>SEND</SendButton>
      </SendMessageContainer>
    </ChatBack>
  )
}

export default Chat