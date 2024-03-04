import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "../src/pages/home"
import Shop from "../src/pages/shop"
import Whyus from "../src/pages/whyus"
import Login from './pages/login'
import Testimoni from './pages/testimoni'
import ContactUs from './pages/ContactUs'
import Invoice from './pages/Invoice'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {CartProvider} from "./components/store/CartStore"
import { ContextProvider } from './components/store/ContextProvider'
import Payment from './pages/payment'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/shop",
    element:<Shop/>
  },
  {
    path:"/whyus",
    element:<Whyus/>
  },
  {
    path:"/testimoni",
    element:<Testimoni/>
  },
  {
    path:"/contactus",
    element:<ContactUs/>
  },
  {
    path:"/loginpage",
    element:<Login/>
  },
  {
    path:"/paymentdetail",
    element:<Payment/>
  },

  {
    path:"/invoice",
    element:<Invoice/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
    </ContextProvider>
  </React.StrictMode>,
)
