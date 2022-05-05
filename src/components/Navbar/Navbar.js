import CartWidget from '../CartWidget/CartWidget'

export default function Navbar () {
    return(
        <header className='header'>
            <nav className='nav'>
                <li>MOCHILAS</li>
                <li>BILLETERAS</li>
                <li>RIÑONERAS</li>
            </nav>
            <CartWidget />
        </header>
    )
}