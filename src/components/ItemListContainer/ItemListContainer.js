import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {

    const onAdd = (quantity) =>{

        console.log(`Compraste ${quantity} unidades`)

    }

  return (
    <div><ItemCount initial ={0} stock={25} onAdd={onAdd}/></div>
  )
}

export default ItemListContainer