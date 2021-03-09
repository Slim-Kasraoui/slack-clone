import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Header from "./components/Header.js"
import Sidebar from "./components/Sidebar.js"

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />

          <AppBody>
            <Sidebar />
          <Switch>
            <Route path="/" exact></Route>
            {/* Chat */}
          </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  )
}

export default App

const AppBody = styled.div`
  display: flex;
  height: 100vh
`

