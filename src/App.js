import React from "react"
import {Routes, Route} from "react-router-dom"
import "./styles.css"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
return( 
  <>
  <Routes>
    <Route exact path="/" Component={Home} />
    <Route path="/about" Component={About}/>
  </Routes>
  </>
  )
}

export default App;
