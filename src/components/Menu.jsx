import style from './Card.module.css'

export const Menu = () => {
    return ( 
        <div className={style.wrapBtns}>
            <a href={`/products`}><button>Produtos</button></a>
            <a href={`/api`}><button>API</button></a>
            <a href={`/map`}><button>Mapa</button></a>
            <a href={`/graph`}><button>Gráfico</button></a>
        </div>
    )
}