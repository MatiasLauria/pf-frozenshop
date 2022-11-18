import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import { addDoc,collection, getFirestore } from 'firebase/firestore'
import './Cart.css'




const Cart = () => {

  const { cart, totalPrice,} = useCartContext();

  const order = {
    buyer: {
      name: 'Matias',
      email: 'matias@gmail.com',
      phone: '1029384756',
      address: 'barcelona'
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, order)
    .then(alert('Su orden se realizo con exito'))
}

   

  if (cart.length === 0){
    return(
      <>
      <div style={{ textAlign: 'center' }}>
      <p>No hay productos en el carrito</p>
      <button className='returnHome'><Link to='/'>Volver a comprar</Link></button>
      </div>
      </>
    )
  }

      

  return (
  

    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }

      

      <div style={{ textAlign: 'center' }}>
      <p>
          TOTAL: {totalPrice()}
      </p>

      <button className='checkOut'><Link to='/' onClick={handleClick}> Finalizar compra</Link></button>

      
      </div>
                
      
      </>

)
 



}







export default Cart