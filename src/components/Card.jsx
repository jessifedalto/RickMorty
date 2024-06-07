import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, status, categoria}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <h2>{categoria}</h2>
          <p>{value}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          {status ? <div className={style.statusVenda}></div> : <div className={style.statusMostruario}></div>}
      </div>
  )
}