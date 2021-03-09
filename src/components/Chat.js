import React from "react"
import styled from "styled-components"
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons"
import { useSelector } from "react-redux"

import ChatInput from "./ChatInput.js"

import { selectRoomId } from "../features/appSlice"

function Chat() {
  const roomId = useSelector(selectRoomId)

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <InfoOutlined />
            <p>Details</p>
          </HeaderRight>
        </Header>

        <ChatMessages></ChatMessages>

        <ChatInput 
        channelId={roomId}
        />
      </>
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
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
const ChatMessages = styled.div`

`
