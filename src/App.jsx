import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { CardPerson } from './components/CardPerson'
import { Search } from './components/Alert'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";

//imports do mapa
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import {MapContainer, TileLayer, useMap, Popup, Marker} from 'react-leaflet'

const router = createBrowserRouter([
  {
    path: "/graph",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [showError, setShowError] = useState(false);

//toda vez que o page ou o name mudarem o useEffect é chamado
  useEffect(() => {
    setShowError(false);
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Esta pagina nao contem este personagem")
        setShowError(true);
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
      <button onClick={() => setShow("graph")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.cards}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} categoria={item.categoria}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
              <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
              <input type="text" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)}/>
              {showError && <Search/>}
            </div>
            <div className={style.cards}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <CardPerson name={item.name} status={item.status} especies={item.especies} type={item.type} gender={item.gender} image={item.image} />
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div className='maps'>
            <MapContainer center={[-25.4248946, -49.2762967,17.25]} zoom={13} scrollWheelZoom={false} style={{width: "600px", height:"515px"}}>
              <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-25.4248946, -49.2762967,17.25]}>
                <Popup>
                  <a href='https://maps.app.goo.gl/tZDuExJVJuzEzKWW7'>Abrir no google maps</a>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
         </>
      }
      {show === "graph" && 
        <>
          <h2>Gráfico</h2> 
          <div>
              <Root></Root>
          </div>
        </>
      }
    </div>
    </>
  )
}

export default App
