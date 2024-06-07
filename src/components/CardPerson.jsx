import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const CardPerson = ({name, status, especies, type, gender, image}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <p>{especies}</p>
          <p>{type}</p>
          <p>{gender}</p>
          {status == "Alive" ? <div className={style.statusAlive}>{status}-{}</div>: status == "Dead" ? <div className={style.statusDead}></div> : <div className={style.statusUnknown}></div>}
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}