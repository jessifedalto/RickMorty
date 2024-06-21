import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Graph } from './Graph.jsx';
import  Products  from './Products.jsx';
import { Api } from './Api.jsx';
import { Map } from './Map.jsx';
import style from './App.module.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/api",
    element: <Api/>
  },
  {
    path: "/map",
    element: <Map/>
  },
  {
    path: "/graph",
    element: <Graph/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

