import React, {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const products = [
    { id:1, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/798/products/arandanoscongelados21-5c711bf51e6c47f17b16442735288087-640-0.jpg", title: "arandano"},
    {id:2, image:"https://d2r9epyceweg5n.cloudfront.net/stores/641/402/products/mixcortadogde_530x2x1-0dc35585bb5300beaa16380427755954-1024-1024.jpg",title:"frutos rojos",},
    {id:3, image: "https://www.pollococido.com.ar/wp-content/uploads/2019/10/3001-frambuesa-congeladas-IQF-gradoA-10x1kg-c-min.jpg", title:"frambuesa"}
]


const ItemListContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(products)
            }, 2000)
        })

        getData.then(res => setData(res))

    },[])
    

    const onAdd = (quantity) =>{

        console.log(`Compraste ${quantity} unidades`)

    }

  return (
    <>
    <ItemCount initial ={0} stock={25} onAdd={onAdd}/>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer