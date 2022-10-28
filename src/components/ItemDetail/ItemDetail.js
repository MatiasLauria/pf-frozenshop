import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {

  const [goToCart, serGoToCart] = useState(false)

  const onAdd = (quantity) =>{

    serGoToCart(true)

}

  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail__image' src={data.image} alt=""/>
            <div className='content'>
                <h1>{data.title}</h1>
                {
                  goToCart ? <Link to='/cart'>Terminar compra</Link> : <ItemCount initial ={0} stock={25} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail