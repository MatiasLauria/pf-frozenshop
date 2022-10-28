import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {

  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0){
    return(
      <>
      <p>No hay productos en el carrito</p>
      <Link to='/'>Volver a comprar</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>
          total: {totalPrice()}
      </p>
    </>
  )
}

export default Cart