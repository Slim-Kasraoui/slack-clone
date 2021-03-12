import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons"
import { useSelector } from "react-redux"

import ChatInput from "./ChatInput.js"
import Message from "./Message.js"

import { selectRoomId } from "../features/appSlice"
import { useDocument, useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase.js"

function Chat() {
  const chatRef = useRef(null)

  const roomId = useSelector(selectRoomId)

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId),
  )

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc"),
  )

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [roomId, loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <InfoOutlined />
            <p>Details</p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {roomMessages?.docs.map((msg) => {
            const { message, timestamp, user, userImage } = msg.data()

            return (
              <Message
                key={msg.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            )
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>

        <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
      </>
      )}
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  overflow-y: scroll;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    text-transform: lowercase;
  }
  > h4 .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-left: 10px;
  }
  > p .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`
const ChatMessages = styled.div``

const ChatBottom = styled.div`
  margin-top: 20px;
  padding-bottom: 200px;
`
