import React from "react"
import {Routes, Route} from "react-router-dom"
import "./styles.css"
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"

import "./server"


function App() {
return( 
  <>
  <Header/>
  <Routes>
    <Route exact path="/" Component={Home} />
    <Route path="/about" Component={About}/>
    <Route path="/vans" Component={Vans}/>
    <Route path="/vans/:id" Component={VanDetail}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App;
