import { Button } from '@material-ui/core'
import React from 'react'
import styled from "styled-components"

function ChatInput({channelName, channelId}) {
  const sendMessage = (e)=> {
    e.preventDefault()
  }

  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Messages #Room`} />
        <Button type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`

> form {
  position: relative;
  display: flex;
  justify-content: center
}

>form > input{
  position: fixed;
  bottom: 30px;
  width: 73%;
  border: 1px solid gray;
  border-radius: 3px;
  height: 100px;
  padding: 20px;
  outline: none;
}

>form >button {
  display: none
}
`
