import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"
import style from './App.module.css'
import * as React from "react";

//imports do mapa
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { Menu } from './components/Menu'

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
    <Menu/>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
         
        </>
      }
     {show === "api" &&
        <>
         
       </>
      }
     {show === "map" &&
        <>
     
        </>
      }
    </div>
    </>
  )
}

export default App
