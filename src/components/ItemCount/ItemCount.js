import './ItemCount.css'
import React, {useState, useEffect} from 'react'

export const ItemCount = ({initial, stock, onAdd}) => {
    const[count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial] )


  return (
    <div className='counter'>
        <button onClick={decrease} disabled={count === 0}>-</button>
        <span>{count}</span>
        <button onClick={increase} disabled={count>= stock}>+</button>
        <div>
            <button onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount