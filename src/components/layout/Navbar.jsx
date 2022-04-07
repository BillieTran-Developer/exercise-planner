import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {

    return(
        <nav>
            <ul className='navbar'>
                <li><NavLink to='/' className={({isActive}) => isActive ?  'active-link' : 'non-active-link'}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive}) => isActive ?  'active-link' : 'non-active-link'}>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar