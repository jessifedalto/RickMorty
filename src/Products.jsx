import { useState, useEffect } from 'react'
import { Card } from "./components/Card"
import produtos from './constants/produtos.json'
import { Menu } from './components/Menu'
import style from './App.module.css'
import { api } from "./api/rmApi"

export default function Products () {
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
          <h2>Showroom de produtos</h2>
            <div className={style.cards}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} categoria={item.categoria}/>
              )
             })}
            </div>
        </>
    )
}