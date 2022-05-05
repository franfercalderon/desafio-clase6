import basket from '../../assets/basket.png'

export default function Navbar () {
    return(
        
        <div className='iconContainer'>
            <img src={basket} alt={basket} className='basketIcon'></img>
        </div>
        
    )
}