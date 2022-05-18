import ItemList from "../ItemList/ItemList"
import { products } from "../../data/products"
import { useEffect, useState } from "react";

export default function ItemsListContainer (props) {
    
    const [array, setArray] = useState([])
    
    useEffect(()=>{
        setTimeout(() => {
            setArray(products)
          }, 2000);
    },[])

    
    return(
        <>
            <div className='titleContainer'>
                <h1 className='mainTitle'>{props.greetings}</h1>
            </div>

            <ItemList products={array} />
            {/* <ItemDetailContainer item={item}/> */}
        </>
    )
}