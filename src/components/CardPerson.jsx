import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const CardPerson = ({name, status, especies, type, gender, image}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <p>{especies}</p>
          <p>{type}</p>
          <p>{gender}</p>
          {status == "Alive" ? 
            <div className={style.wrapStatus}>
              <div className={style.statusAlive}></div>  
              <p>{status}</p> 
            </div>: 
            status == "Dead" ? 
              <div className={style.wrapStatus}>
                <div className={style.statusDead}></div>  
                  <p>{status}</p> 
              </div>: 
              <div className={style.wrapStatus}>
                <div className={style.statusUnknown}></div>
                <p>{status}</p> 
                </div>
  }

              
         
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}