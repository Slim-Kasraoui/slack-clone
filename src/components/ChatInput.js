import React, {useState} from 'react'
import styled from "styled-components"
import { Button } from '@material-ui/core'
import { db } from '../firebase'
import firebase from "firebase"

function ChatInput({channelName, channelId}) {
  const [input, setInput] = useState("")
  
  const sendMessage = (e)=> {
    e.preventDefault()
    console.log(channelId);
    
    if(!channelId) {
      return false
    }
    https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpub%2Fdir%2FMohamed%2FKasraoui&psig=AOvVaw1iShkPdu9YLQJ8KvYEieBC&ust=1615420015367000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDS49eypO8CFQAAAAAdAAAAABAJ
    db.collection("rooms").doc(channelId).collection("messages").add({
      user: 'Slim Kasraoui',
      userImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpub%2Fdir%2FMohamed%2FKasraoui&psig=AOvVaw1iShkPdu9YLQJ8KvYEieBC&ust=1615420015367000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDS49eypO8CFQAAAAAdAAAAABAJ',
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("")
  }

  return (
    <ChatInputContainer>
      <form>
        <input value={input} 
        onChange={(e)=> setInput(e.target.value)}
        placeholder={`Messages #Room`} />
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
