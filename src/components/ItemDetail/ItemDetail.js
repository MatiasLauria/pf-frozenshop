import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({data}) => {

  const [goToCart, serGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) =>{

    serGoToCart(true)
    addProduct(data, quantity)

}

  return (
    <div className='detailContainer'>
        <div className='detail'>
            <img className='detail__image' src={data.image} alt=""/>
            <div className='content'>
                <h1>{data.title}</h1>
                {
                  goToCart ? <button><Link to='/cart'>Terminar compra</Link></button> : <ItemCount initial ={0} stock={25} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail