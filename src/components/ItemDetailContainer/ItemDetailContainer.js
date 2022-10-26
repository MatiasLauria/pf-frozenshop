import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const product = { id:1, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/798/products/arandanoscongelados21-5c711bf51e6c47f17b16442735288087-640-0.jpg", title: "arandano"}


const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(product)
            }, 2000)
        })

        getData.then(res => setData(res))

    },[])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer