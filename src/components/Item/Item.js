import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className='product'>
        <img src={info.image} alt='arandano'/>
        <p>{info.title}</p>
    </Link>
  )
}

export default Item