import React from 'react'
import styled from "styled-components"

import { db } from '../firebase'

function SidebarOption({Icon, title, addChannelOption, id}) {


  const addChannel = () => {
    const channelName = prompt('Please enter the channel name')

    if(channelName) {
      db.collection('rooms').add({
        name: channelName
      })
    }
  }
  const selectChannel = () => {}
  return (
    <SidebarOptionContainer 
    onClick={addChannelOption? addChannel : selectChannel} >
      {Icon && <Icon fontSize="inherit" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ): (
        <SidebarOptionChannel>
          <span>#</span>{title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    background-color: #340e36
  };

  > h3 {
    font-weight: 500;
  };
  >h3 > span {
    padding: 15px;
  }
;  > .MuiSvgIcon-root {font-size: 35px}
`

const SidebarOptionChannel = styled.h3`
margin: 8px 10px;
font-weight: 300;
`