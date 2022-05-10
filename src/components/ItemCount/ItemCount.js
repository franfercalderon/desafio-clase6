import React from "react"
export default function ItemCount ({stock, initial}) {

    const [count, setCount] = React.useState(initial)
    
    const handleRest = () => {
        if(count > 0){
            setCount(count-1)
        }
    }

    const handleAddition = () => {
        if(count < stock){
            setCount(count+1)
        }
        else{
            alert("Has alcanzado el máximo numero de ítems para este producto")
        }
    }

    const addToChart = () => {
        if(count>0){
            alert(`${count} productos han sido agregados al carrito`)
        }
    }

    return(

        <div className="addToCartContainer">
            <div className="itemCountContainer">
                <input type="button" value="-" onClick={handleRest}></input>
                <p className="countShow">{count}</p>
                <input type="button" value="+" onClick={handleAddition}></input>
            </div>
            <input type="button" value="Agregar al carrito" onClick={addToChart}></input>
        </div>
        
    )
}