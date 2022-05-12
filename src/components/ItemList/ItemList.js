import Item from '../Item/Item'

export default function ItemList ({products}) {

    return(
        <div className='itemList'>
            {products.map((product, i) =>(
                <Item product={product} key={i}/>
            ))}
        </div>
    )
}