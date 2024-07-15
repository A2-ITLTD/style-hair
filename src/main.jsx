import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import Home from './Components/Home.jsx';
import Root from './Root.jsx';
import Policy from './Components/Policy.jsx';
import Details from './Components/Details.jsx';
import Products from './Components/Products.jsx';
import SubProducts from './Components/SubProducts.jsx';
import ContactUs from './Components/ContactUs.jsx';
 
 
const router = createBrowserRouter([ 
 { 
 path: "/", 
 element: <Root></Root>,
 children: [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/policy",
    element: <Policy></Policy>,
  },
  {
    path: '/wigs/:id',
    element: <Details></Details>,
    loader : () => fetch('/wigs.json'),
  },
  {
    path: '/wigs',
    element: <Products></Products>
  },
  {
    path: '/subwigs/:category',
    element: <SubProducts></SubProducts>,
    loader : () => fetch('/wigs.json'),
  },
  {
    path: '/contactus',
    element: <ContactUs></ContactUs>
  },
] 
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 

