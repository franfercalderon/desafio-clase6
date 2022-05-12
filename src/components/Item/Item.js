import {Card, Button} from 'react-bootstrap'

export default function Item ({product}) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.picture} style={{ width: '90%' }}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>$ {product.price}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}