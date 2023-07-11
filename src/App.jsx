import React from "react"
import {
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements, 
  Route
} from "react-router-dom"
import "./styles.css"
import Layout from "./common/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, {loader as vansLoader} from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Dashboard from "./pages/host-pages/Dashboard"
import Income from "./pages/host-pages/Income"
import Reviews from "./pages/host-pages/Reviews"
import HostLayout from "./common/HostLayout"
import HostVan from "./pages/host-pages/HostVan"
import HostVanInfo from "./pages/host-pages/HostVanInfo"
import HostVanDetail from "./pages/host-pages/HostVanDetail"
import HostVanPhotos from "./pages/host-pages/HostVanPhotos"
import HostVanPricing from "./pages/host-pages/HostVanPricing"
import Login from "./pages/login"
import NotFound from "./common/NotFound"
import Error from "./common/Error"
import "./server"

const allRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route 
      path="vans" 
      element={<Vans />}
      loader={vansLoader} 
      />
      <Route
        path="login"
        element={<Login />}
      />
      <Route path="vans/:id" element={<VanDetail />}/>

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />}/>
        <Route path="income" element={<Income />}/>
        <Route path="vans" element={<HostVan />}/>
        <Route path="reviews" element={<Reviews />}/>

            <Route path="vans/:id" element={<HostVanInfo />}>
              <Route index element={<HostVanDetail />}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
))

function App() {
return( 
    <RouterProvider router={allRoutes} />
  )
}

export default App;
