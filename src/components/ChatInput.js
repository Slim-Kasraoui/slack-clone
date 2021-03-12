import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { auth, db } from "../firebase"
import firebase from "firebase"
import { useAuthState } from "react-firebase-hooks/auth"

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("")
  const [user] = useAuthState(auth)

  const sendMessage = (e) => {
    e.preventDefault()
    console.log(channelId)

    if (!channelId) {
      return false
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      user: user.displayName,
      userImage: user.photoURL ,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    chatRef.current.scrollIntoView({
      behavior: "smooth"
    })
    setInput("")
  }

  return (
    <div>
      <ChatInputContainer>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Messages #${channelName}`}
          />
          <Button type="submit" onClick={sendMessage}>
            SEND
          </Button>
        </form>
      </ChatInputContainer>
    </div>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 73%;
    border: 1px solid gray;
    border-radius: 3px;
    height: 100px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`
