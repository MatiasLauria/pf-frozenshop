import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({info}) => {



  return (
    <div className='container'>
      
       <div className='cardContainer'> <img src={info.image} alt=''/>
        <p>{info.title}</p>
        <p>${info.price}</p>
        <button><Link to={`/detalle/${info.id}`} className='product'>detalle</Link></button>
        </div>
    </div>
    
    
  )
}

export default Item