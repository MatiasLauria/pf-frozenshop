import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const products = [
    { id:1, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/798/products/arandanoscongelados21-5c711bf51e6c47f17b16442735288087-640-0.jpg", category:"frutas", title: "arandano", price: 500},
    {id:2, image:"https://d2r9epyceweg5n.cloudfront.net/stores/641/402/products/mixcortadogde_530x2x1-0dc35585bb5300beaa16380427755954-1024-1024.jpg", category:"frutas", title:"frutos rojos", price: 600},
    {id:3, image: "https://www.pollococido.com.ar/wp-content/uploads/2019/10/3001-frambuesa-congeladas-IQF-gradoA-10x1kg-c-min.jpg", category:"frutas", title:"frambuesa", price: 700},
    {id:4, image: "https://www.hoyverdurascongeladas.com/wp-content/uploads/2018/06/espinacas-ampl.jpg", category: "verduras", title:"espinaca", price: 800},
    {id:5, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/419/553/products/espinaca-hojas1-67cd654e3bcec19f9715809309929568-1024-1024.jpg", category: "verduras", title:"acelga", price: 900},
    {id:6, image: "https://detodocomoenbotica.com.uy/wp-content/uploads/2020/08/cebolla-congelada-1kg.jpg", category: "verduras", title:"cebolla", price: 1000}
]



const ItemListContainer = () => {
    const [data, setData] = useState([])

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(products)
            }, 2000)
        })

        if(categoriaId){
            getData.then(res => setData( res.filter(prod => prod.category === categoriaId)))    
        } else{
            getData.then(res => setData(res))
        }

        

    },[categoriaId])
    

    

  return (
    <>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer