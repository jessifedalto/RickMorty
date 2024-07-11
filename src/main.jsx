import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Graph } from './Graph.jsx';
import  Products  from './Products.jsx';
import { Api } from './Api.jsx';
import { Map } from './Map.jsx';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
  <>
    <SpeedInsights/>
    <Analytics/>
    <RouterProvider router={router} />
  </>,
)

