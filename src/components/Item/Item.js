import { useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
export default function Item ({product}) {

    const [detalle, setDetalle] = useState(false)

    const handleClick = () =>{
        setDetalle(true)
    }

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.picture} style={{ width: '90%' }}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>$ {product.price}</Card.Text>
                    <Button variant="primary" onClick={handleClick}>Ver detalle</Button>
                    {/* <Button variant="primary">Agregar al carrito</Button> */}
                </Card.Body>
            </Card>
            {
                detalle && <ItemDetailContainer index={product.id}/> 
            }
        </>
    )
}