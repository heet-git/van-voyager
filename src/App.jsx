import React from "react"
import {Routes, Route} from "react-router-dom"
import "./styles.css"
import Layout from "./common/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import "./server"


function App() {
return( 
  <>
  <Routes>
    <Route element={<Layout />}>
      <Route exact path="/" Component={Home} />
      <Route path="/about" Component={About}/>
      <Route path="/vans" Component={Vans}/>
      <Route path="/vans/:id" Component={VanDetail}/>
    </Route>
  </Routes>
  </>
  )
}

export default App;
