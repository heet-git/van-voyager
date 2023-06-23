import React from "react"
import {Routes, Route} from "react-router-dom"
import "./styles.css"
import Layout from "./common/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Dashboard from "./pages/host-pages/Dashboard"
import Income from "./pages/host-pages/Income"
import Reviews from "./pages/host-pages/Reviews"
import HostLayout from "./common/HostLayout"
import "./server"


function App() {
return( 
  <>
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="vans" element={<Vans/>}/>
      <Route path="vans/:id" element={<VanDetail/>}/>

      <Route path="host" element={<HostLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
    </Route>
  </Routes>
  </>
  )
}

export default App;
