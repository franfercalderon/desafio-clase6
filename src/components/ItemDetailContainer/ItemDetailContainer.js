import { useState, useEffect} from "react"
import { products } from "../../data/products"
import ItemDetail from "../ItemDetail/ItemDetail"
 

export default function ItemDetailContainer ({index}) {

    const[item,setItem] = useState({})

    useEffect(()=> {
        const getItem = new Promise ((resolve, reject) =>{
            setTimeout(() => {
                resolve (products[index])
            }, 2000);
        })
        getItem.then((res) =>{
            setItem(res)
            // console.log(item)
        })
    },[])

    return(
        <ItemDetail item={item} />
    )
}