import React from 'react'
import './Item.css'

const Item = ({info}) => {
  return (
    <a href='' className='product'>
        <img src={info.image} alt='arandano'/>
        <p>{info.title}</p>
    </a>
  )
}

export default Item