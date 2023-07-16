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
import VanDetail, {loader as vanDetailLoader} from "./pages/VanDetail"
import Dashboard from "./pages/host-pages/Dashboard"
import Income from "./pages/host-pages/Income"
import Reviews from "./pages/host-pages/Reviews"
import HostLayout from "./common/HostLayout"
import HostVan, {loader as hostVanLoader} from "./pages/host-pages/HostVan"
import HostVanInfo, {loader as HostVanInfoLoader} from "./pages/host-pages/HostVanInfo"
import HostVanDetail from "./pages/host-pages/HostVanDetail"
import HostVanPhotos from "./pages/host-pages/HostVanPhotos"
import HostVanPricing from "./pages/host-pages/HostVanPricing"
import Login from "./pages/login"
import NotFound from "./common/NotFound"
import Error from "./common/Error"
//import { authRequired } from "./common/utils"
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
      <Route path="login" element={<Login />} />
      <Route 
      path="vans/:id" 
      element={<VanDetail />}
      loader={vanDetailLoader}  
      />

      <Route path="host" element={<HostLayout />}>

      <Route 
      index 
      element={<Dashboard />}
      // loader={async () => await authRequired()}
      />
      
      <Route 
      path="income" 
      element={<Income />}
      // loader={async () => await authRequired()}
      />
      
      <Route 
      path="vans" 
      element={<HostVan />}
      loader={hostVanLoader}
      />
      
      <Route 
      path="reviews" 
      element={<Reviews />}
      // loader={async () => await authRequired()}
      />

            <Route 
            path="vans/:id" 
            element={<HostVanInfo />}
            loader={HostVanInfoLoader}
            >
              <Route 
              index 
              element={<HostVanDetail />}
              // loader={async () => await authRequired()}

              />
              <Route 
              path="pricing" 
              element={<HostVanPricing />}
              // loader={async () => await authRequired()}

              />
              <Route 
              path="photos" 
              element={<HostVanPhotos />}
              // loader={async () => await authRequired()}

              />
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
