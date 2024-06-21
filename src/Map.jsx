import {MapContainer, TileLayer, useMap, Popup, Marker} from 'react-leaflet'
import { Menu } from './components/Menu'
import { useState, useEffect } from 'react'
import style from './App.module.css'
import { api } from "./api/rmApi"


export const Map = () => {
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [showError, setShowError] = useState(false);

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
        //fragment, div 'vazia'
        <>
          <Menu/>
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
    )
}