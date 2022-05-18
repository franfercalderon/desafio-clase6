import { useState } from 'react';

export default function ItemDetail ({item}) {

    const closeLogo = '/images/close.png'

    // console.log(item)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return(

        <div className='modal-back'>
            <div className='item-detail-container'>
                <img src={item.picture} alt={item.title} className='item-photo'/>
                <div className='item-info-container'>
                    <div className='item-info-title-container'>
                        <h1>{item.title}</h1>
                        <p>{item.category}</p>
                    </div>
                    <p>{item.description}</p>
                    <p>Precio ${item.price}</p>
                </div>
                <div className='close-button-container'>
                    <img src={closeLogo} alt='Cerrar' className='close-button' onClick={handleClose}/>
                </div>
            </div>
        </div>
    )
    
}