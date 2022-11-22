import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import { addDoc,collection, getFirestore } from 'firebase/firestore'
import './Cart.css'





const Cart = () => {

  const { cart, totalPrice,} = useCartContext();



  const order = {
    buyer: '',
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }
  
  

  const valorInicial ={
    nombre:'',
    apellido:'',
    email:''
}

  const [user, setUser] = useState(valorInicial)

  const capturarImputs = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name] : value})
  }

  const guardarDatos = async(e) =>{
    e.preventDefault();
    setUser({...valorInicial})
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

        
        
      
      </div>


      <div style={{ textAlign: 'center' }}>
      <form onSubmit={guardarDatos}>
          <input type='text' name='nombre' placeholder='Nombre' 
          onChange={capturarImputs} value={user.nombre}/>
         
         <input type='text' name='apellido' placeholder='Apellido'
          onChange={capturarImputs} value={user.apellido}/>
         
          <input type='text' name='email' placeholder='Email'
          onChange={capturarImputs} value={user.email}/> 

          <button className='checkOut'><Link to='/' onClick={handleClick}> Finalizar compra</Link></button>

                   
      </form>
      </div>
      </>
      
)
 



}







export default Cart