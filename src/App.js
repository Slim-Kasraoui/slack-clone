import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Login from "./components/Login.js"
import Header from "./components/Header.js"
import Sidebar from "./components/Sidebar.js"
import Chat from "./components/Chat.js"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"

import Spinner from "react-spinkit"

function App() {
  const [user, loading] = useAuthState(auth)
  
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src="http://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    )
  }

    return (
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <AppBody>
                <Sidebar />
                <Switch>
                  <Route path="/" exact component={Chat} />
                </Switch>
              </AppBody>
            </>
          )}
        </Router>
      </div>
    )
}

export default App

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width: 100%;
`
const AppLoadingContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding-bottom: 100px;

>img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
}
`