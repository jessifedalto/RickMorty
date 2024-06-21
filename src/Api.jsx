import { CardPerson } from "./components/CardPerson"
import { Menu } from './components/Menu'
import { useState, useEffect } from 'react'
import style from './App.module.css'
import { api } from "./api/rmApi"

export const Api = () => {
    const [data, setData] = useState([])
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
          <h2>Rick and Morty API</h2>
            <div>
              <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
              <input type="text" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)}/>
              {showError && <p>Deu ruim!</p>}
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
    )
}