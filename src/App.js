import React from "react"
import {Routes, Route} from "react-router-dom"
import "./styles.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

import "./server"


function App() {
return( 
  <>
  <Routes>
    <Route exact path="/" Component={Home} />
    <Route path="/about" Component={About}/>
    <Route path="/vans" Component={Vans}/>
  </Routes>
  </>
  )
}

export default App;
